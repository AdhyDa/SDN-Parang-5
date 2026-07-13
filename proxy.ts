import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_NAME = 'studio_session'
const secretKey = process.env.MASTER_PASSWORD || 'default-master-key-sdnparang5'

/**
 * Memverifikasi validitas token sesi menggunakan Web Crypto API.
 * Token berisi format: timestamp.hex_signature
 */
async function verifyToken(token: string): Promise<boolean> {
  try {
    const parts = token.split('.')
    if (parts.length !== 2) return false
    const [timestampStr, hexSignature] = parts

    // Batasi durasi token sesi selama 24 jam
    const timestamp = parseInt(timestampStr, 10)
    const now = Date.now()
    if (isNaN(timestamp) || now - timestamp > 24 * 60 * 60 * 1000 || now - timestamp < -5000) {
      return false
    }

    const encoder = new TextEncoder()
    const keyData = encoder.encode(secretKey)
    const key = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    )

    // Parse signature hex string kembali ke bytes
    const match = hexSignature.match(/.{1,2}/g)
    if (!match) return false
    const sigBytes = new Uint8Array(match.map((byte) => parseInt(byte, 16)))

    const isValid = await crypto.subtle.verify(
      'HMAC',
      key,
      sigBytes,
      encoder.encode(timestampStr)
    )

    return isValid
  } catch (e) {
    console.error('Gagal memverifikasi token sesi di proxy:', e)
    return false
  }
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  
  const token = request.cookies.get(COOKIE_NAME)?.value

  let authenticated = false
  if (token) {
    authenticated = await verifyToken(token)
  }

  if (!authenticated) {
    const loginUrl = new URL('/studio-login', request.url)
    const returnUrl = pathname + search
    loginUrl.searchParams.set('returnUrl', returnUrl)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/studio/:path*'],
}
