'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Ballpit, { BallpitMaterial } from '@/components/ui/Ballpit';
import { Sparkles, ArrowRight, Zap, Shield, RefreshCw } from 'lucide-react';
import Shuffle from '@/components/ui/Shuffle';

export const TokenChamber: React.FC = () => {
  const [material, setMaterial] = useState<BallpitMaterial>('satin');
  const [gravityMode, setGravityMode] = useState<'zero' | 'floor'>('zero');

  const tokenColors = [
    '#0038FF', // Base Electric Blue
    '#CCFF00', // Signature Neon Lime
    '#FFFFFF', // Ceramic Pure White
    '#18181B', // Carbon Obsidian
    '#8A7BE4', // Soft Lilac / Lavender
  ];

  return (
    <section className="relative w-full bg-[#0A0A0C] text-white py-16 md:py-24 overflow-hidden border-t border-white/10 select-none">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#0038FF]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header with Title and Narrative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#CCFF00] text-[11px] font-bold uppercase tracking-wider mb-3 backdrop-blur-md border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
              Kinetic Treasury Chamber • WebGL2 PBR Physics
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase font-sans">
              <Shuffle
                text="THE LIQUID $CLUB VAULT"
                tag="span"
                effect="slide"
                duration={0.35}
                shuffleTimes={1}
                className="block"
              />
            </h2>
            <p className="mt-2 text-xs md:text-sm text-white/60 max-w-xl leading-relaxed">
              At BaseClub, value isn’t an abstract number behind cold glass. It has kinetic weight and tactile momentum. Grab, flick, or blast tokens in our real-time 3D PBR liquid staking pool.
            </p>
          </div>

          {/* Interactive Dials (Material & Physics Mode) */}
          <div className="flex flex-wrap items-center gap-2.5 p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
            {/* Material selector */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl">
              <span className="text-[9px] font-bold uppercase text-white/40 px-2 tracking-wider">
                Finish:
              </span>
              {(['satin', 'metal', 'gloss', 'frosted'] as const).map((mat) => (
                <button
                  key={mat}
                  type="button"
                  onClick={() => setMaterial(mat)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                    material === mat
                      ? 'bg-[#CCFF00] text-black shadow-sm'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>

            {/* Gravity mode toggle */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl">
              <span className="text-[9px] font-bold uppercase text-white/40 px-2 tracking-wider">
                Gravity:
              </span>
              <button
                type="button"
                onClick={() => setGravityMode('zero')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                  gravityMode === 'zero'
                    ? 'bg-[#0038FF] text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Zero-G
              </button>
              <button
                type="button"
                onClick={() => setGravityMode('floor')}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                  gravityMode === 'floor'
                    ? 'bg-[#0038FF] text-white shadow-sm'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Vault Floor
              </button>
            </div>
          </div>
        </div>

        {/* The Physics Chamber Window */}
        <div className="relative w-full h-[440px] md:h-[540px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#111114] via-[#0D0D10] to-[#08080A] shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing group">
          
          {/* Top Window Bar HUD */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-5 py-3 bg-black/40 backdrop-blur-md border-b border-white/10 pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase ml-2">
                BASE-CHAMBER-01 // NTAG-424
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-0.5 rounded-md border border-[#CCFF00]/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                120 KINETIC TOKENS
              </span>
            </div>
          </div>

          {/* Interactive Ballpit WebGL2 Canvas */}
          <Ballpit
            count={120}
            colors={tokenColors}
            material={material}
            gravity={gravityMode === 'zero' ? 0 : 0.45}
            drift={gravityMode === 'zero' ? 0.35 : 0.05}
            minSize={0.65}
            maxSize={1.15}
            friction={0.997}
            wallBounce={0.94}
            bounce={0.88}
            depth={2.2}
            followCursor={true}
            cursorSize={1.1}
            grab={true}
            clickEffect="burst"
            lightColor="#FFFFFF"
            lightIntensity={1.4}
            exposure={1.1}
            shadows={0.55}
            intro={true}
            className="w-full h-full"
          />

          {/* Floating HUD Badges inside Chamber */}
          <div className="absolute bottom-4 left-4 md:left-6 z-20 pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-4 text-left shadow-lg max-w-xs">
              <div className="flex items-center justify-between text-white/40 text-[10px] uppercase font-bold tracking-wider mb-1">
                <span>Staking Pool Volume</span>
                <span className="text-[#CCFF00]">48.2% APY</span>
              </div>
              <p className="text-xl md:text-2xl font-black text-white tracking-tight font-mono">
                2,842,910 <span className="text-xs font-semibold text-white/60">$CLUB</span>
              </p>
              <p className="text-[10px] text-white/50 mt-1 flex items-center gap-1">
                <Zap className="w-3 h-3 text-[#CCFF00]" />
                Auto-compounds every single second on Base L2
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 md:right-6 z-20 pointer-events-none hidden sm:block">
            <div className="bg-black/60 backdrop-blur-md border border-white/15 rounded-2xl p-3.5 text-right shadow-lg">
              <div className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                Interactive Instructions
              </div>
              <p className="text-[11px] text-white/80 font-medium mt-0.5">
                • Click an empty area to trigger a <strong>burst blast</strong>
              </p>
              <p className="text-[11px] text-white/80 font-medium">
                • Click & drag any token to <strong>flick & toss</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Chamber Strip */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4 text-[#CCFF00]" />
            <span>Audited Base L2 Smart Contracts • Zero Slippage Token Drops</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/pricing"
              className="px-4 py-2 rounded-full bg-[#0038FF] text-white font-bold text-xs hover:bg-[#002dd1] transition-all flex items-center gap-1.5 shadow-sm"
            >
              Order metal card <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/book"
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/15"
            >
              Book treasury concierge
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenChamber;

