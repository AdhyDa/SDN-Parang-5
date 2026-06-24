import React from "react";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface BlockChild {
  _key: string;
  _type: string;
  text: string;
  marks?: string[];
}

interface Block {
  _key: string;
  _type: string;
  style?: string;
  children?: BlockChild[];
  listItem?: string;
  level?: number;
  asset?: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface BlockContentProps {
  blocks?: Block[];
}

export default function BlockContent({ blocks }: BlockContentProps) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
    return null;
  }

  // Helper to render inline marks (bold, italic, etc.)
  const renderChildren = (children?: BlockChild[]) => {
    if (!children) return "";
    return children.map((child) => {
      let element: React.ReactNode = child.text;

      if (child.marks && child.marks.length > 0) {
        child.marks.forEach((mark) => {
          if (mark === "strong") {
            element = <strong key={child._key} className="font-bold text-navy">{element}</strong>;
          } else if (mark === "em") {
            element = <em key={child._key} className="italic">{element}</em>;
          }
        });
      }

      return <span key={child._key}>{element}</span>;
    });
  };

  const renderedBlocks: React.ReactNode[] = [];
  let currentList: { type: "bullet" | "number"; items: React.ReactNode[] } | null = null;

  blocks.forEach((block, index) => {
    // If it's a list item
    if (block.listItem) {
      const listType = block.listItem === "number" ? "number" : "bullet";
      const listItemContent = (
        <li key={block._key || index} className="mb-2 text-gray-700 leading-relaxed font-body">
          {renderChildren(block.children)}
        </li>
      );

      if (currentList && currentList.type === listType) {
        currentList.items.push(listItemContent);
      } else {
        // Render previous list if exists
        if (currentList) {
          renderedBlocks.push(renderList(currentList, renderedBlocks.length));
        }
        currentList = {
          type: listType,
          items: [listItemContent],
        };
      }
    } else {
      // Not a list item. If we were building a list, output it now.
      if (currentList) {
        renderedBlocks.push(renderList(currentList, renderedBlocks.length));
        currentList = null;
      }

      // Render standard block types
      if (block._type === "block") {
        const style = block.style || "normal";
        const content = renderChildren(block.children);

        switch (style) {
          case "h1":
            renderedBlocks.push(
              <h1 key={block._key || index} className="text-3xl font-bold font-heading text-navy mt-6 mb-4">
                {content}
              </h1>
            );
            break;
          case "h2":
            renderedBlocks.push(
              <h2 key={block._key || index} className="text-2xl font-bold font-heading text-navy mt-6 mb-3">
                {content}
              </h2>
            );
            break;
          case "h3":
            renderedBlocks.push(
              <h3 key={block._key || index} className="text-xl font-bold font-heading text-navy mt-5 mb-2">
                {content}
              </h3>
            );
            break;
          case "h4":
            renderedBlocks.push(
              <h4 key={block._key || index} className="text-lg font-bold font-heading text-navy mt-4 mb-2">
                {content}
              </h4>
            );
            break;
          case "blockquote":
            renderedBlocks.push(
              <blockquote
                key={block._key || index}
                className="border-l-4 border-amber bg-light pl-4 py-2 my-4 italic text-gray-600 font-body rounded-r-md"
              >
                {content}
              </blockquote>
            );
            break;
          default:
            renderedBlocks.push(
              <p key={block._key || index} className="mb-4 text-gray-700 leading-relaxed font-body">
                {content}
              </p>
            );
        }
      } else if (block._type === "image" && block.asset) {
        // Image rendering
        try {
          const imageUrl = urlFor(block).width(800).url();
          renderedBlocks.push(
            <div key={block._key || index} className="relative w-full aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-sm my-6 bg-gray-50">
              <Image
                src={imageUrl}
                alt={block.alt || "Dokumentasi SDN Parang 5"}
                fill
                className="object-cover"
                sizes="(max-w-768px) 100vw, 800px"
              />
              {block.alt && (
                <p className="text-xs text-center text-gray-500 mt-2 italic font-body">
                  {block.alt}
                </p>
              )}
            </div>
          );
        } catch (err) {
          console.error("Error rendering image in block content:", err);
        }
      }
    }
  });

  // Render any remaining list
  if (currentList) {
    renderedBlocks.push(renderList(currentList, renderedBlocks.length));
  }

  return <div className="prose max-w-none">{renderedBlocks}</div>;
}

// Helper to render lists
function renderList(list: { type: "bullet" | "number"; items: React.ReactNode[] }, index: number) {
  if (list.type === "number") {
    return (
      <ol key={`list-${index}`} className="list-decimal pl-6 mb-4 text-gray-700 font-body">
        {list.items}
      </ol>
    );
  }
  return (
    <ul key={`list-${index}`} className="list-disc pl-6 mb-4 text-gray-700 font-body">
      {list.items}
    </ul>
  );
}
