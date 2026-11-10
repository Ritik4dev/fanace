'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Star, CheckCircle, Sparkles, ArrowRight, Quote } from 'lucide-react';
import SiteHeader from '@/components/ui/SiteHeader';
import SiteFooter from '@/components/ui/SiteFooter';
import Shuffle from '@/components/ui/Shuffle';
import VariableProximity from '@/components/ui/VariableProximity';
import AnimatedContent from '@/components/ui/AnimatedContent';
import AnonymousRating from '@/components/ui/AnonymousRating';

interface Review {
  id: string;
  name: string;
  handle: string;
  role: string;
  category: 'creators' | 'collectors' | 'stakers';
  avatar: string;
  rating: number;
  highlight: string;
  body: string;
  metric: string;
  metricLabel: string;
}

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'creators' | 'collectors' | 'stakers'>('all');

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Elena Rostova',
      handle: 'elena.base',
      role: 'Generative 3D Artist',
      category: 'creators',
      avatar: '/card1-vertical.png',
      rating: 5,
      highlight: 'Replaced traditional patron subscriptions in 3 weeks.',
      body: 'I was tired of web2 platforms taking 20-30% of my revenue and holding my payouts for 30 days. With BaseClub, my subscribers stream $CLUB directly to my card every second. Tapping the metal card at Art Basel to prove provenance was pure magic.',
      metric: '+$4,820',
      metricLabel: 'Monthly on-chain stream',
    },
    {
      id: '2',
      name: 'Alexander Chen',
      handle: 'alex.eth',
      role: 'Audio Producer & DJ',
      category: 'creators',
      avatar: '/card2-vertical.png',
      rating: 5,
      highlight: 'Continuous streaming value changed how I release music.',
      body: 'Instead of waiting for Spotify pennies that take 6 months, my listeners unlock private stem packs and sound experiments on Base. The physical matte black card is gorgeous—people literally gasp when they tap it on their phone.',
      metric: '3.4x',
      metricLabel: 'Higher yield than Web2',
    },
    {
      id: '3',
      name: 'Sophia Laurent',
      handle: 'sophia.art',
      role: 'Independent Curator',
      category: 'collectors',
      avatar: '/card1-vertical.png',
      rating: 5,
      highlight: 'Staking into cards gives me direct alignment with artists.',
      body: 'I hold and stake into 8 different creator cards. I am not donating—I am financially backing creators I believe in. The 48.2% protocol APY compounded back into my wallet makes it a no-brainer.',
      metric: '+1,240 $CLUB',
      metricLabel: 'Compounded weekly',
    },
    {
      id: '4',
      name: 'Marcus Vance',
      handle: 'vance.base',
      role: 'DeFi Researcher & Writer',
      category: 'creators',
      avatar: '/card2-vertical.png',
      rating: 5,
      highlight: 'Zero friction, zero platform lock-in.',
      body: 'Everything runs on Base L2, so transactions cost less than a cent. My readers subscribe to my research directly. When I travel, my BaseClub metal card sits in my front wallet pocket as my universal badge.',
      metric: '1,420+',
      metricLabel: 'Active subscribers',
    },
    {
      id: '5',
      name: 'Kai Takahashi',
      handle: 'kai.lens',
      role: 'DAO Treasury Contributor',
      category: 'stakers',
      avatar: '/card1-vertical.png',
      rating: 5,
      highlight: 'The Syndicate tier unlocked seamless multi-sig routing.',
      body: 'Our collective wanted to sponsor independent crypto developers without administrative paperwork. BaseClub continuous streaming smart contracts solved it instantly. Transparent, auditable, and automated.',
      metric: '$68,000+',
      metricLabel: 'Treasury streamed',
    },
    {
      id: '6',
      name: 'Maya Lindqvist',
      handle: 'maya.eth',
      role: 'Digital Fashion Designer',
      category: 'collectors',
      avatar: '/card2-vertical.png',
      rating: 5,
      highlight: 'The NFC hardware chip makes crypto feel tangible.',
      body: 'Most crypto products feel like numbers in a browser extension. Holding an aerospace metal card that actually belongs to you and taps to show your on-chain gallery bridges the physical and digital worlds beautifully.',
      metric: '98 Card Taps',
      metricLabel: 'Verified in Paris & Berlin',
    },
  ];

  const filtered = activeTab === 'all' ? reviews : reviews.filter((r) => r.category === activeTab);

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-[#111111] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black">
      <SiteHeader theme="light" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-14 md:pt-18 md:pb-20 px-6 md:px-12 border-b border-gray-200/80 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0038FF]/10 text-[#0038FF] text-[11px] font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Creator Testimonials
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] leading-[1.08] mb-4">
            <Shuffle
              text="Loved by 98,400+ creators."
              tag="span"
              effect="slide"
              duration={0.35}
              shuffleTimes={1}
              className="block"
            />
          </h1>

          <p className="text-base md:text-lg text-[#787774] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            <VariableProximity
              label="See how artists, musicians, writers, and collectors use BaseClub physical cards and continuous on-chain streaming to take back ownership."
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 700, 'opsz' 30"
              toColor="#0038FF"
              radius={65}
              falloff="gaussian"
              smoothing={0.2}
            />
          </p>

          {/* Protocol Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto p-4 rounded-2xl bg-[#F8F9FA] border border-gray-200">
            <div className="text-center p-2">
              <p className="text-2xl md:text-3xl font-black text-[#0038FF]">$4.82M+</p>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">Streamed to creators</p>
            </div>
            <div className="text-center p-2">
              <p className="text-2xl md:text-3xl font-black text-[#111111]">98,400+</p>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">Physical cards active</p>
            </div>
            <div className="text-center p-2">
              <p className="text-2xl md:text-3xl font-black text-[#0038FF]">4.94 / 5</p>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">Satisfaction score</p>
            </div>
            <div className="text-center p-2">
              <p className="text-2xl md:text-3xl font-black text-[#10B981]">0%</p>
              <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">Platform cut taken</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-10 pb-4 px-6 md:px-12 max-w-6xl mx-auto w-full">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
          {(
            [
              { id: 'all', label: 'All Reviews' },
              { id: 'creators', label: 'Creators' },
              { id: 'collectors', label: 'Collectors' },
              { id: 'stakers', label: 'Stakers & DAOs' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0038FF] text-white shadow-sm'
                  : 'bg-white border border-gray-200 text-gray-600 hover:text-black hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-8 pb-18 px-6 md:px-12 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((r) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header: Avatar, Name, Handle, Verified */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-100 relative overflow-hidden border border-gray-200 shrink-0">
                      <Image
                        src={r.avatar}
                        alt={r.name}
                        fill
                        className="object-contain"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-[#111111]">{r.name}</h4>
                        <CheckCircle className="w-3.5 h-3.5 text-[#0038FF] shrink-0" />
                      </div>
                      <p className="text-[11px] font-mono text-[#0038FF]">{r.handle}</p>
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#CCFF00] text-black/20" />
                  ))}
                  <span className="text-[10px] font-semibold text-gray-400 ml-1.5">{r.role}</span>
                </div>

                {/* Highlight Quote */}
                <h5 className="text-sm font-bold text-[#111111] leading-snug mb-2.5">
                  &ldquo;{r.highlight}&rdquo;
                </h5>

                {/* Body Text */}
                <p className="text-xs text-[#787774] leading-relaxed mb-6 font-normal">
                  {r.body}
                </p>
              </div>

              {/* Verified Metric Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                    {r.metricLabel}
                  </span>
                  <span className="text-sm font-black text-[#111111]">{r.metric}</span>
                </div>
                <span className="text-[9px] bg-gray-100 text-gray-600 px-2 py-1 rounded font-mono">
                  Base L2 Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Anonymous 5-Star Elastic Rating Section (React Bits ElasticSlider) */}
      <section className="py-10 md:py-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <AnonymousRating />
      </section>

      {/* "Cards in the Wild" Visual Gallery Highlight (Gently loaded with AnimatedContent) */}
      <AnimatedContent
        distance={32}
        direction="vertical"
        duration={0.8}
        ease="power2.out"
        threshold={0.15}
        initialOpacity={0}
        animateOpacity={true}
      >
        <section className="py-14 md:py-20 px-6 md:px-12 bg-white border-y border-gray-200/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0038FF] mb-2 block">
                Physical Hardware in Action
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#111111] tracking-tight mb-2">
                Cards in the wild
              </h2>
              <p className="text-xs md:text-sm text-[#787774] max-w-lg mx-auto">
                Members tap their metal cards at design studios, creator meetups, and galleries around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  city: 'Art Basel, Miami',
                  tag: 'NFC Gallery Provenance',
                  desc: 'Artists tap cards against iPads to instantly verify physical artwork ownership.',
                  card: '/card1-vertical.png',
                },
                {
                  city: 'ETH Tokyo, Shibuya',
                  tag: 'SocialFi Meetup Pass',
                  desc: 'Over 300 builders unlocked token-gated sound sessions by tapping the matte card.',
                  card: '/card2-vertical.png',
                },
                {
                  city: 'Design Studio, London',
                  tag: 'Continuous Creator Stream',
                  desc: 'Designers display their real-time earnings ledger directly on their studio desktop.',
                  card: '/card1-vertical.png',
                },
              ].map((spot) => (
                <div
                  key={spot.city}
                  className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#111111]">{spot.city}</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#0038FF] bg-[#0038FF]/10 px-2 py-0.5 rounded">
                        {spot.tag}
                      </span>
                    </div>
                    <div className="w-full flex justify-center py-4 my-2">
                      <div className="relative w-20 h-28 aspect-[511/661] drop-shadow-md">
                        <Image
                          src={spot.card}
                          alt={spot.city}
                          fill
                          className="object-contain"
                          sizes="80px"
                        />
                      </div>
                    </div>
                    <p className="text-xs text-[#787774] leading-relaxed mt-2">{spot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Bottom CTA Banner */}
      <section className="py-12 px-6 md:px-12 bg-[#0038FF] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Join thousands of creators earning every second.
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
            Order your card or start with a free digital pass to explore the streaming creator economy.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-black text-xs md:text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              View card pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-full transition-all"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
