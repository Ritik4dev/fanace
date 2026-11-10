'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiteHeader } from '@/components/ui/SiteHeader';
import { SiteFooter } from '@/components/ui/SiteFooter';
import { Skiper19 } from '@/components/ui/svg-follow-scroll';
import StarBorder from '@/components/ui/StarBorder';
import { Radio, Clock, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#FAFDEE] text-[#1F3A4B] flex flex-col font-sans selection:bg-[#1F3A4B] selection:text-[#FAFDEE] overflow-x-hidden">
      {/* Global Header */}
      <SiteHeader theme="light" />

      {/* SVG Follow Scroll Component with Creative Underlay & Overlay */}
      <main className="flex-1 w-full relative">
        <Skiper19
          badge="Interactive Scroll Timeline"
          title={
            <>
              The Stroke <br /> That traces your <br /> Stream Progress
            </>
          }
          subtitle="Scroll down to witness real-time value tracing its path from physical titanium silicon to Ethereum Layer 2."
          brandName="baseclub.eth"
          strokeColor="#0038FF"
          containerHeight="h-[320vh]"
          locationText={
            <>
              Base L2 • Ethereum <br />
              Sub-second block times
            </>
          }
          dateText={
            <>
              Genesis Series <br />
              Aerospace Titanium
            </>
          }
          tierLeft={
            <>
              Gasless Tap <br />
              Zero App Installs
            </>
          }
          tierRight={
            <>
              Staking APY <br />
              48.2% Compounded
            </>
          }
          /* --- CREATIVE UNDERLAY: Layers behind the winding stroke --- */
          underlayChildren={
            <div className="w-full h-full relative overflow-hidden">
              {/* Subtle architectural background coordinate grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F3A4B0A_1px,transparent_1px),linear-gradient(to_bottom,#1F3A4B0A_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

              {/* Floating physical card 1 in underlay */}
              <div className="absolute top-[28vh] left-[6%] sm:left-[10%] opacity-40 hover:opacity-80 transition-opacity pointer-events-none">
                <div className="relative w-28 sm:w-40 h-40 sm:h-56 aspect-[511/661] drop-shadow-2xl rotate-[-8deg]">
                  <Image
                    src="/card1-vertical.png"
                    alt="Underlay Card 1"
                    fill
                    className="object-contain"
                    sizes="160px"
                  />
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#1F3A4B]/60 block text-center mt-2">
                  ✦ NTAG 424 DNA SILICON
                </span>
              </div>

              {/* Floating physical card 2 in underlay */}
              <div className="absolute top-[85vh] right-[5%] sm:right-[12%] opacity-35 hover:opacity-80 transition-opacity pointer-events-none">
                <div className="relative w-32 sm:w-44 h-44 sm:h-60 aspect-[511/661] drop-shadow-2xl rotate-[12deg]">
                  <Image
                    src="/card2-vertical.png"
                    alt="Underlay Card 2"
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
                <span className="text-[9px] font-mono tracking-widest uppercase text-[#1F3A4B]/60 block text-center mt-2">
                  ✦ MATTE BLACK FINISH
                </span>
              </div>

              {/* Giant typographic watermarks running vertically in underlay */}
              <div className="absolute top-[50vh] left-4 text-[12vw] font-black tracking-tighter text-[#1F3A4B]/[0.03] select-none pointer-events-none [writing-mode:vertical-lr] rotate-180">
                CONTINUOUS STREAM
              </div>
            </div>
          }
          /* --- CREATIVE OVERLAY: Interactive milestones layered above the winding stroke --- */
          overlayChildren={
            <div className="space-y-40 sm:space-y-64 pt-20 px-4">
              {/* Milestone 1: Physical Clearance */}
              <div className="max-w-md bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#1F3A4B]/15 shadow-xl ml-auto mr-4 sm:mr-12 hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-2 mb-2 text-[#0038FF]">
                  <Radio className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                    Stage 01 // Contactless Hardware
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#1F3A4B] tracking-tight mb-2">
                  Tap to verify identity anywhere
                </h3>
                <p className="text-xs text-[#1F3A4B]/70 leading-relaxed mb-4">
                  Each physical BaseClub card features a zero-battery cryptographic chip. Tap against any iOS or Android phone to verify credentials without requiring any app.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-mono bg-black/5 px-3 py-1.5 rounded-lg border border-black/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Instant NFC handshake in 140ms</span>
                </div>
              </div>

              {/* Milestone 2: Stream Mechanics */}
              <div className="max-w-md bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-[#1F3A4B]/15 shadow-xl mr-auto ml-4 sm:ml-12 hover:scale-[1.02] transition-transform">
                <div className="flex items-center gap-2 mb-2 text-[#0038FF]">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase">
                    Stage 02 // Fluid Value Streaming
                  </span>
                </div>
                <h3 className="text-xl font-black text-[#1F3A4B] tracking-tight mb-2">
                  Earnings delivered second by second
                </h3>
                <p className="text-xs text-[#1F3A4B]/70 leading-relaxed mb-4">
                  Why settle for 30-day payout cycles? Micro-cents stream continuously into your ERC-6551 token bound smart account while fans listen, read, and engage.
                </p>
                <div className="flex items-center justify-between text-xs font-mono bg-[#1F3A4B] text-[#FAFDEE] px-3.5 py-2 rounded-xl shadow-sm">
                  <span>Stream rate:</span>
                  <span className="text-[#CCFF00] font-bold">+0.0042 $CLUB / sec</span>
                </div>
              </div>

              {/* Milestone 3: On-Chain Staking & Action */}
              <div className="max-w-lg mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-7 border border-[#1F3A4B]/20 shadow-2xl text-center space-y-4">
                <div className="inline-flex items-center gap-2 text-[#0038FF] bg-blue-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 fill-[#0038FF]" />
                  <span>Stage 03 // Collective Alignment</span>
                </div>
                <h3 className="text-2xl font-black text-[#1F3A4B] tracking-tight">
                  Stake into creators you believe in
                </h3>
                <p className="text-xs text-[#1F3A4B]/70 max-w-sm mx-auto leading-relaxed">
                  Backers earn a 48.2% baseline APY while creators gain visibility and liquid treasury support. Complete self-custody with instant unstaking.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <StarBorder
                    as={Link}
                    href="/pricing"
                    theme="light"
                    color="#0038FF"
                    trailColor="#0038FF"
                    radius={9999}
                    thickness={1.2}
                    duration={3.5}
                    sparkle={true}
                    hover="brighten"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-black text-white bg-[#0038FF] shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Claim physical card</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </StarBorder>

                  <Link
                    href="/book"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-black/5 hover:bg-black/10 text-[#1F3A4B] text-xs font-bold transition-colors"
                  >
                    Book consultation
                  </Link>
                </div>
              </div>
            </div>
          }
        />
      </main>

      {/* Global Footer */}
      <SiteFooter />
    </div>
  );
}

