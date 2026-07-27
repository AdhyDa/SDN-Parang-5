"use client"

import React, { useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  IconEye,
  IconEyeOff,
  IconLock,
  IconAlertTriangle,
  IconArrowLeft,
  IconShieldCheck,
} from '../components/Icons'

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
        <div className="bg-red-50 text-red-600 border border-red-200/80 rounded-xl p-3.5 text-xs md:text-sm font-semibold flex items-center gap-2.5 shadow-2xs">
          <IconAlertTriangle size={18} className="flex-shrink-0 text-red-500" />
          <span>{error}</span>
        </div>
      )}

      {/* Input Group */}
      <div className="flex flex-col gap-1.5 relative">
        <label
          htmlFor="password"
          className="font-heading font-bold text-xs text-slate-700 uppercase tracking-wider"
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
            className="w-full font-body text-sm px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all duration-200 pr-11 text-slate-800"
            disabled={loading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 focus:outline-none transition-colors p-1"
            title={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showPassword ? (
              <IconEyeOff size={18} />
            ) : (
              <IconEye size={18} />
            )}
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn-amber w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            <span>Memverifikasi...</span>
          </>
        ) : (
          <>
            <IconLock size={16} />
            <span>Masuk ke Studio</span>
          </>
        )}
      </button>
    </form>
  )
}

export default function StudioLoginPage() {
  return (
    <main className="min-h-screen bg-slate-900 py-12 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects & dot grid */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      {/* Floating Login Card */}
      <div className="relative w-full max-w-[420px] bg-white rounded-3xl p-4 md:p-6 z-10 flex flex-col items-center gap-6">
        {/* Branding Logo */}
        <Link href="/" className="flex flex-col items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Logo SDN Parang 5 Kediri"
            width={500}
            height={500}
            className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col text-center">
            <span className="font-heading font-extrabold text-slate-900 text-lg leading-tight group-hover:text-amber-600 transition-colors">
              SDN Parang 5
            </span>
            <span className="text-[10px] text-slate-500 font-body font-semibold tracking-wider uppercase">
              Admin Gateway
            </span>
          </div>
        </Link>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100" />

        {/* Header Text */}
        <div className="text-center flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold font-heading uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200/80">
            <IconShieldCheck size={14} className="text-amber-600" />
            <span>Gerbang Keamanan</span>
          </div>
          <h1 className="font-heading font-extrabold text-slate-900 text-xl tracking-tight">
            Kata Sandi Dibutuhkan
          </h1>
          <p className="text-xs text-slate-500 font-body leading-relaxed max-w-[280px] mx-auto">
            Silakan masukkan kata sandi akses untuk membuka panel admin Sanity Studio.
          </p>
        </div>

        {/* Login Form */}
        <Suspense
          fallback={
            <div className="w-full flex justify-center py-6">
              <span className="animate-spin inline-block w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full" />
            </div>
          }
        >
          <LoginForm />
        </Suspense>

        {/* Footer Link */}
        <Link
          href="/"
          className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-body mt-1 flex items-center gap-1.5 font-semibold"
        >
          <IconArrowLeft size={14} />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    </main>
  )
}
