'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#0F0F0F] text-white border-t border-white/10 pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 select-none w-fit">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden shadow-sm bg-white p-0.5 border border-white/20">
                <Image
                  src="/site-logo.jpeg"
                  alt="BaseClub Logo"
                  fill
                  sizes="32px"
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="flex items-center gap-1">
                <div className="bg-white text-black font-black tracking-tight text-xs px-2.5 py-1 rounded-xl shadow-sm">
                  BASE
                </div>
                <div className="bg-[#CCFF00] text-black font-black text-xs px-2.5 py-1 rounded-full border-[1.5px] border-white/20 shadow-sm">
                  CLUB
                </div>
              </div>
            </Link>

            <p className="text-xs text-white/60 max-w-sm leading-relaxed">
              BaseClub is the streaming SocialFi protocol on Base. Continuous real-time creator earnings paired with tactile NFC physical cards.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_6px_#CCFF00]" />
              <span className="text-[11px] font-semibold text-white/70 tracking-wider uppercase">
                Base L2 Mainnet • Block #21,804,920
              </span>
            </div>
          </div>

          {/* Links Column 1: Platform */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40">Product</p>
            <ul className="space-y-2 text-xs text-white/70 font-medium">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Product features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Card pricing
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  Creator reviews
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors">
                  Book a call
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Live stream preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Ecosystem */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40">Ecosystem</p>
            <ul className="space-y-2 text-xs text-white/70 font-medium">
              <li>
                <span className="text-white/50 cursor-not-allowed">$CLUB tokenomics</span>
              </li>
              <li>
                <span className="text-white/50 cursor-not-allowed">Staking contracts</span>
              </li>
              <li>
                <span className="text-white/50 cursor-not-allowed">Base bridge</span>
              </li>
              <li>
                <span className="text-white/50 cursor-not-allowed">Documentation</span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Trust & Network */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40">Network</p>
            <div className="space-y-2 text-xs text-white/70">
              <p className="font-semibold text-white">Audited by OpenZeppelin</p>
              <p className="text-[11px] text-white/50">Zero custodial risk. Smart contracts non-upgradable with timelock.</p>
              <div className="pt-2">
                <span className="text-[10px] bg-white/10 text-white/80 px-2 py-1 rounded-md font-mono">
                  ERC-6551 / ERC-20
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <p>© 2026 BaseClub Protocol. 100% on-chain creator economy.</p>
          <div className="flex items-center gap-6">
            <Link href="/features" className="hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/reviews" className="hover:text-white transition-colors">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
