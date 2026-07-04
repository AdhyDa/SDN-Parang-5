import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

const secretKey = process.env.MASTER_PASSWORD || 'default-master-key-sdnparang5'

// Klien Sanity tanpa CDN untuk menjamin password segar/terbaru
const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

/**
 * Menghasilkan token tanda tangan HMAC-SHA256
 */
async function generateToken(timestamp: string): Promise<string> {
  const encoder = new TextEncoder()
  const keyData = encoder.encode(secretKey)
  const key = await crypto.subtle.importKey(
    'raw',
    keyData,
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const signature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(timestamp)
  )
  const hexSignature = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
  return `${timestamp}.${hexSignature}`
}

export async function POST(request: Request) {
  try {
    const { password, returnUrl } = await request.json()

    if (!password) {
      return NextResponse.json(
        { success: false, message: 'Kata sandi tidak boleh kosong!' },
        { status: 400 }
      )
    }

    // 1. Tarik Kata Sandi Dinamis dari Sanity CMS
    let sanityPassword = 'Parang5Maju' // Fallback awal
    try {
      const dynamicPass = await sanityClient.fetch(
        `*[_type == "accessSettings"][0].adminPassword`
      )
      if (dynamicPass) {
        sanityPassword = dynamicPass
      }
    } catch (err) {
      console.error('Gagal memuat password dari Sanity CMS:', err)
    }

    // 2. Tarik Kata Sandi Master dari Environment Variable
    const masterPassword = process.env.MASTER_PASSWORD

    // 3. Logika Pencocokan Ganda (The Master-Key Logic)
    const isMatchedDynamic = password === sanityPassword
    const isMatchedMaster = masterPassword && password === masterPassword

    if (isMatchedDynamic || isMatchedMaster) {
      const timestamp = Date.now().toString()
      const token = await generateToken(timestamp)

      // Set cookie HttpOnly
      const cookieStore = await cookies()
      cookieStore.set({
        name: 'studio_session',
        value: token,
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // Sesi berlaku 24 jam
      })

      return NextResponse.json({
        success: true,
        redirect: returnUrl || '/studio',
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Kata sandi salah!' },
        { status: 401 }
      )
    }
  } catch (err) {
    console.error('Error saat autentikasi studio:', err)
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan sistem internal.' },
      { status: 500 }
    )
  }
}
