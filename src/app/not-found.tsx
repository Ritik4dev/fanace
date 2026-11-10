'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Sparkles, Compass } from 'lucide-react';
import FuzzyText from '@/components/ui/FuzzyText';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-white flex flex-col justify-between selection:bg-[#CCFF00] selection:text-black relative overflow-hidden font-sans">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      {/* Top minimal bar */}
      <header className="relative z-20 max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5 select-none group">
          <div className="bg-white text-black font-black tracking-tight text-xs px-3 py-1.5 rounded-2xl rounded-bl-sm relative shadow-sm group-hover:scale-105 transition-transform">
            BASE
            <div
              className="absolute -bottom-1.5 left-0 w-3 h-3 bg-white"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />
          </div>
          <div className="bg-[#CCFF00] text-black font-black text-xs px-3 py-1.5 rounded-full border-[1.5px] border-white/20 shadow-sm group-hover:scale-105 transition-transform">
            CLUB
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping" />
          <span className="text-[11px] font-mono tracking-wider uppercase text-white/50">
            Error 404 • Missing Block
          </span>
        </div>
      </header>

      {/* Main 404 Body */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12 max-w-3xl mx-auto my-auto">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-[11px] font-bold tracking-wider uppercase mb-2 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          Quantum Signal Interrupted
        </div>

        {/* The React Bits <FuzzyText /> Component */}
        <div className="relative my-2 select-none flex justify-center items-center">
          <FuzzyText
            color="#FFFFFF"
            fontSize="clamp(6rem, 20vw, 14rem)"
            fontWeight={900}
            fontFamily='"Arial Black", Impact, sans-serif'
            colorSplit={0.4}
            trigger="hover"
            direction="both"
            baseIntensity={0.2}
            hoverIntensity={0.65}
            fuzzRange={32}
            sliceSize={1}
            fps={60}
            transitionDuration={6}
            intro={true}
            introDuration={1400}
            letterSpacing={4}
            enableHover={true}
            clickEffect={true}
            glitchMode={true}
            glitchInterval={3500}
            glitchDuration={220}
            className="cursor-crosshair drop-shadow-[0_0_35px_rgba(0,56,255,0.4)]"
          >
            404
          </FuzzyText>
        </div>

        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest -mt-2 mb-6">
          • Hover or tap the 404 to shift quantum static •
        </p>

        {/* Headline & Narrative */}
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 uppercase">
          Card not found on-chain
        </h1>

        <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto leading-relaxed mb-8 font-normal">
          The route, smart contract, or card profile you are looking for has either moved to another block, been burned, or never existed on Base L2.
        </p>

        {/* Navigation Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0038FF] hover:bg-[#002dd1] text-white font-bold text-xs px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-blue-500/20"
          >
            <Home className="w-4 h-4" /> Return to Home
          </Link>

          <Link
            href="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold text-xs px-5 py-3 rounded-full transition-all border border-white/10"
          >
            <Compass className="w-4 h-4" /> Product Features
          </Link>

          <Link
            href="/pricing"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#CCFF00] hover:bg-[#b8e600] text-black font-black text-xs px-5 py-3 rounded-full transition-all shadow-md"
          >
            Card Pricing
          </Link>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="relative z-20 max-w-6xl mx-auto w-full px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 border-t border-white/5 gap-2">
        <span>BaseClub Protocol • Continuous SocialFi Streaming</span>
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/reviews" className="hover:text-white transition-colors">
            Reviews
          </Link>
          <Link href="/features" className="hover:text-white transition-colors">
            Features
          </Link>
        </div>
      </footer>
    </div>
  );
}
