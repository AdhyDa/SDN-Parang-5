"use client"

import React, { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

function LoginForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const returnUrl = searchParams.get('returnUrl') || '/studio'

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) {
      setError('Silakan masukkan kata sandi!')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/studio-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, returnUrl }),
      })

      const data = await res.json()
      if (data.success) {
        // Akses diterima, alihkan ke returnUrl atau studio
        router.push(data.redirect)
      } else {
        setError(data.message || 'Kata sandi salah!')
      }
    } catch (err) {
      setError('Gagal terhubung ke server. Coba beberapa saat lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      {error && (
        <div className="bg-red-50 text-red-600 border border-red-100 rounded-xl p-3 text-xs md:text-sm font-semibold flex items-center gap-2 animate-pulse">
          ⚠️ {error}
        </div>
      )}

      {/* Input Group */}
      <div className="flex flex-col gap-1.5 relative">
        <label
          htmlFor="password"
          className="font-heading font-bold text-xs text-navy uppercase tracking-wider"
        >
          Kata Sandi Akses
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan kata sandi..."
            className="w-full font-body text-sm px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-all duration-300 pr-12 text-gray-800"
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy focus:outline-none transition-colors p-1"
            title={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showPassword ? (
              <span className="text-lg">👁️</span>
            ) : (
              <span className="text-lg">🙈</span>
            )}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber hover:bg-amber-dark text-gray-900 font-heading font-bold text-sm py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="animate-spin inline-block w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full" />
            Memverifikasi...
          </>
        ) : (
          <>🔐 Masuk ke Studio</>
        )}
      </button>
    </form>
  )
}

export default function StudioLoginPage() {
  return (
    <main className="min-h-screen hero-gradient flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl translate-x-20 translate-y-20" />

      {/* Floating Login Card */}
      <div className="relative w-full max-w-[420px] bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 z-10 flex flex-col items-center gap-6">
        {/* Branding Logo */}
        <Link href="/" className="flex flex-col items-center gap-2 group">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-navy to-sky flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform duration-300">
            P5
          </div>
          <div className="flex flex-col text-center">
            <span className="font-heading font-extrabold text-navy text-lg leading-none">
              SDN Parang 5
            </span>
            <span className="text-[10px] text-gray-500 font-body font-medium mt-1 tracking-wider uppercase">
              Admin Gateway
            </span>
          </div>
        </Link>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100" />

        {/* Header Text */}
        <div className="text-center flex flex-col gap-1.5">
          <h1 className="font-heading font-extrabold text-navy text-lg md:text-xl">
            Kata Sandi Dibutuhkan
          </h1>
          <p className="text-xs text-gray-400 font-body leading-relaxed max-w-[280px] mx-auto">
            Halaman ini dilindungi oleh Gerbang Keamanan. Silakan masukkan kata sandi akses panel admin Anda.
          </p>
        </div>

        {/* Login Form wrapped in Suspense for safe searchParams usage */}
        <Suspense
          fallback={
            <div className="w-full flex justify-center py-6">
              <span className="animate-spin inline-block w-6 h-6 border-2 border-navy border-t-transparent rounded-full" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        {/* Footer Link */}
        <Link
          href="/"
          className="text-xs text-sky hover:text-navy transition-colors font-body mt-2 flex items-center gap-1.5"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  )
}
