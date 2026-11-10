'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import StarBorder from '@/components/ui/StarBorder';

interface SiteHeaderProps {
  theme?: 'light' | 'dark' | 'transparent';
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ theme = 'light' }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '/features' },
    { label: 'Story', href: '/story' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Book a call', href: '/book' },
  ];

  const isLight = theme === 'light';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        isLight
          ? 'bg-white/85 backdrop-blur-md border-b border-gray-100 text-[#111111]'
          : 'bg-[#0038FF]/90 backdrop-blur-md border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group select-none">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm bg-white p-0.5 border border-black/10 group-hover:scale-105 transition-transform">
            <Image
              src="/site-logo.jpeg"
              alt="BaseClub Logo"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
          <div className="flex items-center gap-1">
            <div
              className={`font-black tracking-tight text-xs md:text-sm px-2.5 py-1 rounded-xl shadow-sm ${
                isLight ? 'bg-[#0038FF] text-white' : 'bg-white text-black'
              }`}
            >
              BASE
            </div>
            <div className="bg-[#CCFF00] text-black font-black text-xs md:text-sm px-2.5 py-1 rounded-full border-[1.5px] border-black/10 shadow-sm">
              CLUB
            </div>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center space-x-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  isActive
                    ? isLight
                      ? 'bg-gray-100 text-[#0038FF]'
                      : 'bg-white/20 text-[#CCFF00]'
                    : isLight
                    ? 'text-gray-600 hover:text-black hover:bg-gray-50'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <StarBorder
            as={Link}
            href="/book"
            theme={isLight ? 'light' : 'dark'}
            color={isLight ? '#0038FF' : '#CCFF00'}
            trailColor={isLight ? '#0038FF' : '#FFFFFF'}
            radius={9999}
            thickness={1.2}
            duration={4}
            sparkle={true}
            hover="brighten"
            className={`text-xs font-bold px-4 py-2 transition-transform hover:scale-[1.02] ${
              isLight ? 'bg-white text-black' : 'bg-black/40 text-white'
            }`}
          >
            Book a call
          </StarBorder>
          <Link
            href="/pricing"
            className="flex items-center gap-1 bg-[#0038FF] text-white hover:bg-[#002dd1] text-xs font-bold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
          >
            Get Card <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            isLight ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-2 border-b ${
            isLight ? 'bg-white border-gray-100' : 'bg-[#002dd1] border-white/10'
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                pathname === link.href
                  ? isLight
                    ? 'bg-gray-100 text-[#0038FF]'
                    : 'bg-white/20 text-[#CCFF00]'
                  : isLight
                  ? 'text-gray-700 hover:bg-gray-50'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#0038FF] text-white text-xs font-bold py-2.5 rounded-xl"
            >
              Get $CLUB Card
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
