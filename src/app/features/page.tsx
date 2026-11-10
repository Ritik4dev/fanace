'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Play, Pause, RotateCcw, Heart, Layers, Radio, Shield, Clock } from 'lucide-react';
import SiteHeader from '@/components/ui/SiteHeader';
import SiteFooter from '@/components/ui/SiteFooter';
import Shuffle from '@/components/ui/Shuffle';
import RotatingText from '@/components/ui/RotatingText';
import VariableProximity from '@/components/ui/VariableProximity';
import AnimatedContent from '@/components/ui/AnimatedContent';

export default function FeaturesPage() {
  // Live Streaming Simulator State
  const [isStreaming, setIsStreaming] = useState(true);
  const [seconds, setSeconds] = useState(42);
  const ratePerSecond = 0.0042;

  useEffect(() => {
    if (!isStreaming) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isStreaming]);

  const earnedClub = (seconds * ratePerSecond).toFixed(4);

  const stories = [
    {
      num: '01',
      title: 'A card you can actually hold',
      tagline: 'Bridging digital ownership with tactile reality',
      narrative:
        'Most modern digital creations feel abstract—strings of hexadecimal numbers trapped behind glass screens. We wanted something you could slide into your wallet, feel the weight of aerospace-grade metal, and hand to a friend across a coffee table.',
      details: [
        'Each card contains a secure, battery-free NFC cryptographic microchip.',
        'Tap against any smartphone to instantly open your verified creator page.',
        'Zero apps required for the other person to view and verify.',
      ],
      image: '/card1-vertical.png',
      icon: Radio,
    },
    {
      num: '02',
      title: 'Money that streams like water',
      tagline: 'Why wait 30 days for what you earned today?',
      narrative:
        'Traditional platforms batch your earnings and hold them for weeks, deducting 20% to 30% for processing. BaseClub treats value as continuous. As someone reads your essay or listens to your song, micro-cents flow directly to your address every single second.',
      details: [
        'Continuous smart contract streaming on Base L2.',
        '100% transparent on-chain accounting with zero delays.',
        'Withdraw or spend your streamed tokens at any moment.',
      ],
      image: '/card2-vertical.png',
      icon: Clock,
    },
    {
      num: '03',
      title: 'Staking as mutual belief',
      tagline: 'Supporting someone should benefit both of you',
      narrative:
        'When you stake $CLUB into a creator’s card, you aren’t giving away a donation. You are depositing belief into their shared pool. The protocol automatically routes protocol yield to both the creator and their backers, compounding silently in the background.',
      details: [
        '48.2% baseline APY distributed proportionally on-chain.',
        'Creators unlock higher visibility and community perks.',
        'Backers maintain complete self-custody and can unstake anytime.',
      ],
      image: '/card1-vertical.png',
      icon: Heart,
    },
    {
      num: '04',
      title: 'Invisible technology',
      tagline: 'Ethereum security without the friction',
      narrative:
        'You never need to worry about complex gas fees or sluggish confirmations. Built on Base, Ethereum’s premier Layer 2 network, transactions execute in 400 milliseconds and cost less than a fraction of a cent. The technology recedes into the background so your craft stays front and center.',
      details: [
        'Sub-cent transaction fees sponsored or minimal.',
        'Non-custodial smart contracts audited for safety.',
        'Instant off-ramp to local currency whenever you choose.',
      ],
      image: '/card2-vertical.png',
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#111111] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black">
      <SiteHeader theme="light" />

      {/* Gentle Hero Introduction */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 px-6 md:px-12 border-b border-gray-200/60 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0038FF]/10 text-[#0038FF] text-[11px] font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            A Gentle Introduction
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] leading-[1.08]">
            <Shuffle
              text="How BaseClub works, gently explained."
              tag="span"
              effect="slide"
              duration={0.35}
              shuffleTimes={1}
              className="block"
            />
          </h1>

          <p className="text-base md:text-lg text-[#666562] max-w-2xl mx-auto leading-relaxed font-normal">
            <VariableProximity
              label="No jargon. No speculative noise. Just a simple, beautiful way for creators to receive continuous value and carry their work in their pocket."
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 700, 'opsz' 32"
              toColor="#0038FF"
              radius={70}
              falloff="gaussian"
              smoothing={0.2}
              idleWave={true}
            />
          </p>
        </div>
      </section>

      {/* Interactive Gentle Stream Simulator */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#0038FF] uppercase mb-1 block">
                Interactive Concept
              </span>
              <h3 className="text-xl font-black text-[#111111] tracking-tight">
                Watch value flow in real time
              </h3>
              <p className="text-xs text-[#787774] mt-0.5 max-w-md">
                In BaseClub, money doesn&apos;t arrive once a month—it flows every second as people engage.
              </p>
            </div>

            {/* Stream Player Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsStreaming(!isStreaming)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm ${
                  isStreaming
                    ? 'bg-[#111111] text-white hover:bg-black'
                    : 'bg-[#0038FF] text-white hover:bg-[#002dd1]'
                }`}
              >
                {isStreaming ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-current" /> Pause stream
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" /> Resume stream
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setSeconds(0)}
                className="p-2 rounded-full border border-gray-200 text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                title="Reset counter"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Live Streaming Counter Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
            <div className="p-4 bg-[#F9F9F8] rounded-2xl border border-gray-100">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                Time Streaming
              </span>
              <span className="text-2xl md:text-3xl font-mono font-bold text-[#111111]">
                {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                {String(seconds % 60).padStart(2, '0')}
              </span>
            </div>

            <div className="p-4 bg-[#F9F9F8] rounded-2xl border border-gray-100">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                Streamed to Card
              </span>
              <div className="flex items-center justify-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-2xl md:text-3xl font-mono font-black text-[#0038FF]">
                  +{earnedClub}
                </span>
                <span className="text-xs font-bold text-gray-500">$CLUB</span>
              </div>
            </div>

            <div className="p-4 bg-[#111111] rounded-2xl text-white">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#CCFF00] block mb-1">
                Protocol Settlement
              </span>
              <span className="text-sm font-bold text-white block mt-2">
                Instant • Zero fees
              </span>
              <span className="text-[10px] text-white/50">Base L2 Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visual Scroll Banner Link */}
      <section className="px-6 md:px-12 max-w-5xl mx-auto w-full pt-8 pb-4">
        <Link
          href="/story"
          className="group block bg-[#FAFDEE] rounded-3xl p-6 sm:p-8 border border-[#1F3A4B]/15 hover:border-[#0038FF] shadow-sm hover:shadow-md transition-all relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#0038FF] bg-[#0038FF]/10 px-2.5 py-0.5 rounded-full inline-block">
                Interactive Scroll Experience
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1F3A4B] tracking-tight">
                Follow the continuous protocol stroke
              </h3>
              <p className="text-xs text-[#1F3A4B]/70 max-w-lg leading-relaxed">
                Experience the 350vh scroll effect tracing the journey from physical NFC chips to Layer 2 streaming ledger.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-black text-[#0038FF] bg-white px-4 py-2 rounded-full border border-[#0038FF]/20 shadow-sm shrink-0 self-start sm:self-auto group-hover:scale-105 transition-transform">
              <span>Launch scroll story</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </Link>
      </section>

      {/* 4 Gentle Stories / Chapters */}
      <section className="py-10 md:py-16 px-6 md:px-12 max-w-5xl mx-auto w-full space-y-16 md:space-y-24">
        {stories.map((story, idx) => {
          const isEven = idx % 2 === 1;
          const Icon = story.icon;

          return (
            <motion.div
              key={story.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                isEven ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center gap-10 md:gap-16`}
            >
              {/* Text Side */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black tracking-widest text-[#0038FF] font-mono">
                    {story.num}
                  </span>
                  <div className="h-px w-8 bg-gray-200" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-gray-400">
                    {story.tagline}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight leading-snug">
                  {story.title}
                </h2>

                <p className="text-sm md:text-base text-[#666562] leading-relaxed font-normal">
                  {story.narrative}
                </p>

                <div className="space-y-2 pt-2">
                  {story.details.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-[#222222] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0038FF] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {idx === 0 && (
                  <div className="mt-4 p-3.5 rounded-2xl bg-gray-50 border border-gray-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-gray-700 font-semibold">Physical clearance:</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-500">Tap for</span>
                      <RotatingText
                        texts={[
                          'Smart Attendance',
                          'Hardware Security',
                          'IRL Event Check-In',
                          'VIP Lounge Access',
                          'Tamper-Proof Proof'
                        ]}
                        effect="slide"
                        direction="up"
                        highlight={true}
                        highlightColor="#0038FF"
                        staggerDuration={0.02}
                        rotationInterval={2200}
                        splitLevelClassName="overflow-hidden pb-0.5"
                        mainClassName="font-mono text-xs font-bold px-2 py-0.5 rounded-md inline-flex text-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Visual Card Side */}
              <div className="flex-1 w-full flex justify-center">
                <div className="relative w-full max-w-xs aspect-[4/5] bg-gradient-to-b from-[#F4F4F3] to-[#EAE9E6] rounded-3xl p-6 flex flex-col items-center justify-between border border-gray-200/70 shadow-sm overflow-hidden group">
                  <div className="w-full flex items-center justify-between">
                    <div className="p-2 rounded-xl bg-white shadow-sm">
                      <Icon className="w-4 h-4 text-[#0038FF]" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      BaseClub 3D
                    </span>
                  </div>

                  {/* 3D Vertical Card Image */}
                  <div className="relative w-36 h-48 aspect-[511/661] drop-shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-contain"
                      sizes="144px"
                    />
                  </div>

                  <div className="w-full text-center">
                    <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">
                      Physical NFC Hardware
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* A Day in the Life With BaseClub (Animated Content Reveal) */}
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0038FF] mb-2 block">
                Daily Rhythm
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#111111] tracking-tight mb-2">
                A gentle day with BaseClub
              </h2>
              <p className="text-xs md:text-sm text-[#787774] max-w-md mx-auto">
                How creative work feels when the platform steps out of the way.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                {
                  time: '09:00 AM',
                  title: 'You share your work',
                  desc: 'Drop a new track, article, or design file directly to your subscribers.',
                },
                {
                  time: '09:01 AM',
                  title: 'Streaming starts',
                  desc: 'Your card balance begins incrementing second by second automatically.',
                },
                {
                  time: '03:30 PM',
                  title: 'Physical tap',
                  desc: 'Tap your metal card to a collaborator’s phone to share credentials and token access.',
                },
                {
                  time: '08:00 PM',
                  title: 'Instant freedom',
                  desc: 'No payout threshold, no 30-day waiting period. Spend or keep on your terms.',
                },
              ].map((step, i) => (
                <div
                  key={step.time}
                  className="bg-[#F8F9FA] rounded-2xl p-5 border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-[#0038FF] mb-2 block">
                      {step.time}
                    </span>
                    <h4 className="text-sm font-bold text-[#111111] mb-1.5">{step.title}</h4>
                    <p className="text-xs text-[#787774] leading-relaxed">{step.desc}</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-4">
                    Step 0{i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Gentle Bottom CTA */}
      <section className="py-16 px-6 md:px-12 bg-[#F9F9F8]">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#111111]">
            Ready when you are.
          </h3>
          <p className="text-xs md:text-sm text-[#666562] max-w-md mx-auto leading-relaxed">
            There is no pressure to buy anything today. You can start with a free digital membership or explore the community.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 bg-[#0038FF] text-white hover:bg-[#002dd1] font-bold text-xs md:text-sm px-6 py-3 rounded-full transition-all shadow-md"
            >
              Explore plans &amp; cards <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-black hover:bg-gray-50 font-bold text-xs md:text-sm px-6 py-3 rounded-full transition-all"
            >
              Read creator stories
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
