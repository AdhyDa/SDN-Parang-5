import React from "react";
import { client } from "@/sanity/lib/client";
import {
  pageHomeQuery,
  latestAchievementsQuery,
  latestNewsQuery,
  schoolContactQuery,
  galleryPreviewQuery,
} from "@/sanity/lib/queries";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import WelcomeSection from "./components/home/WelcomeSection";
import StatsSection from "./components/home/StatsSection";
import ProgramsSection from "./components/home/ProgramsSection";
import AchievementsPreview from "./components/home/AchievementsPreview";
import NewsGalleryPreview from "./components/home/NewsGalleryPreview";
import ContactMapSection from "./components/home/ContactMapSection";

// Next.js ISR (Incremental Static Regeneration) — revalidate page every 60 seconds
export const revalidate = 60;

export default async function HomePage() {
  let homeData = null;
  let achievements = [];
  let news = [];
  let contact = null;
  let gallery = [];

  try {
    // Fetch all required data concurrently
    const [homeRes, achievementsRes, newsRes, contactRes, galleryRes] = await Promise.all([
      client.fetch(pageHomeQuery),
      client.fetch(latestAchievementsQuery),
      client.fetch(latestNewsQuery),
      client.fetch(schoolContactQuery),
      client.fetch(galleryPreviewQuery),
    ]);

    homeData = homeRes;
    achievements = achievementsRes || [];
    news = newsRes || [];
    contact = contactRes;
    gallery = galleryRes || [];
  } catch (error) {
    console.error("Error fetching homepage data from Sanity CMS:", error);
    // Continue with fallbacks
  }

  return (
    <>
      {/* Header Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        <HeroSection data={homeData} />
        
        <WelcomeSection data={homeData} />
        
        <StatsSection data={homeData} />
        
        <ProgramsSection />
        
        <AchievementsPreview achievements={achievements} />
        
        <NewsGalleryPreview news={news} gallery={gallery} />
        
        <ContactMapSection contact={contact} />
      </main>

      {/* Footer Details */}
      <Footer />
    </>
  );
}
