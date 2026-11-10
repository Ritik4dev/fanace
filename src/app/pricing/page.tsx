'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import SiteHeader from '@/components/ui/SiteHeader';
import SiteFooter from '@/components/ui/SiteFooter';
import Shuffle from '@/components/ui/Shuffle';
import VariableProximity from '@/components/ui/VariableProximity';
import AnimatedContent from '@/components/ui/AnimatedContent';
import StarBorder from '@/components/ui/StarBorder';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [stakeAmount, setStakeAmount] = useState<number>(5000);

  // Yield calculation
  const multiplier = 3.4;
  const baseApy = 0.482; // 48.2% APY
  const estimatedMonthlyClub = Math.round((stakeAmount * baseApy * (billingCycle === 'yearly' ? 1.2 : 1.0)) / 12);
  const estimatedYearlyClub = Math.round(stakeAmount * baseApy * (billingCycle === 'yearly' ? 1.2 : 1.0));

  const plans = [
    {
      id: 'member',
      name: 'Member',
      badge: 'Starter',
      description: 'Ideal for patrons and collectors discovering on-chain creators.',
      priceMonthly: 0,
      priceYearly: 0,
      priceLabel: 'Free forever',
      highlight: false,
      cardImage: '/card1-vertical.png',
      features: [
        'Virtual $CLUB smart card (ERC-6551)',
        '1.0x Base streaming yield',
        'Stream to up to 3 creators',
        'Weekly on-chain distribution claims',
        'Standard community chat access',
        'Base L2 gas-optimized transactions',
      ],
      cta: 'Get free card',
      ctaHref: '/',
    },
    {
      id: 'pro',
      name: 'Pro Creator & Collector',
      badge: 'Most popular',
      description: 'For creators building audiences and collectors maximizing on-chain yields.',
      priceMonthly: 24,
      priceYearly: 19,
      priceLabel: billingCycle === 'yearly' ? '$19 / month' : '$24 / month',
      highlight: true,
      cardImage: '/card2-vertical.png',
      features: [
        'Physical Matte Black Metal Card with NFC tap chip',
        '3.4x Streaming yield multiplier',
        'Unlimited creator channels & subscriptions',
        '0% platform cut on creator tips & streams',
        'Instant second-by-second auto-compound',
        'Custom baseclub.eth ENS subdomain',
        'Worldwide tracked physical card shipping',
      ],
      cta: 'Order Pro metal card',
      ctaHref: '/',
    },
    {
      id: 'syndicate',
      name: 'Syndicate & Whale',
      badge: 'Institutional',
      description: 'For DAOs, agencies, and high-volume treasury stakers.',
      priceMonthly: 149,
      priceYearly: 119,
      priceLabel: billingCycle === 'yearly' ? '$119 / month' : '$149 / month',
      highlight: false,
      cardImage: '/card2-vertical.png',
      features: [
        'Laser-engraved custom Titanium card',
        '5.0x Maximum yield multiplier',
        'Custom revenue splitter smart contracts',
        'Multi-sig treasury integration (Safe)',
        'Dedicated liquidity pool priority routing',
        '1-on-1 concierge on Telegram with founders',
        'Early access to all protocol governance votes',
      ],
      cta: 'Book concierge session',
      ctaHref: '/book',
    },
  ];

  const faqs = [
    {
      q: 'Do I need cryptocurrency to order a physical card?',
      a: 'No. You can pay with standard credit card or debit card via Stripe, or choose to pay using ETH/USDC directly on Base L2.',
    },
    {
      q: 'How does the NFC contactless tap work on the physical card?',
      a: 'Each physical metal card has a secure NTAG 424 cryptographic chip. When tapped against any modern iPhone or Android, it instantly verifies your on-chain membership and displays your live $CLUB streaming status without requiring an app install.',
    },
    {
      q: 'Can I cancel or unstake at any time?',
      a: 'Yes. You maintain 100% self-custody of your cards and staked tokens. There are no lockup penalties or hidden exit fees.',
    },
    {
      q: 'How does continuous streaming work?',
      a: 'Unlike traditional platforms that settle once a month, BaseClub uses continuous money-streaming smart contracts on Base. Your token balances tick up literally every second.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-[#111111] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black">
      <SiteHeader theme="light" />

      {/* Hero Section */}
      <section className="relative pt-12 pb-14 md:pt-18 md:pb-20 px-6 md:px-12 border-b border-gray-200/80 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0038FF]/10 text-[#0038FF] text-[11px] font-bold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent On-Chain Pricing
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111111] leading-[1.08] mb-4">
            <Shuffle
              text="Simple plans. 100% creator owned."
              tag="span"
              effect="slide"
              duration={0.35}
              shuffleTimes={1}
              className="block"
            />
          </h1>

          <p className="text-base md:text-lg text-[#787774] max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            <VariableProximity
              label="Choose a digital pass or get a physical aerospace-grade metal card with contactless NFC tap. No hidden platform cuts."
              fromFontVariationSettings="'wght' 400, 'opsz' 14"
              toFontVariationSettings="'wght' 700, 'opsz' 30"
              toColor="#0038FF"
              radius={65}
              falloff="gaussian"
              smoothing={0.2}
            />
          </p>

          {/* Billing Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-gray-100 border border-gray-200 shadow-inner">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-black shadow-sm'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-[#0038FF] text-white shadow-sm'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              <span>Yearly billing</span>
              <span className="text-[10px] bg-[#CCFF00] text-black px-2 py-0.5 rounded-full font-black">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-14 md:py-20 px-6 md:px-12 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isHigh = plan.highlight;
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`rounded-3xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                  isHigh
                    ? 'bg-white border-2 border-[#0038FF] shadow-[0_12px_40px_rgba(0,56,255,0.12)] ring-4 ring-[#0038FF]/5'
                    : 'bg-white border border-gray-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Pill */}
                {isHigh && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0038FF] text-[#CCFF00] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" /> {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-black text-[#111111]">{plan.name}</h3>
                    {!isHigh && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#787774] leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-gray-100 flex items-baseline gap-1.5">
                    {price === 0 ? (
                      <span className="text-4xl font-black tracking-tight text-[#111111]">$0</span>
                    ) : (
                      <>
                        <span className="text-4xl font-black tracking-tight text-[#111111]">${price}</span>
                        <span className="text-xs text-gray-500 font-medium">/ month</span>
                      </>
                    )}
                    {billingCycle === 'yearly' && price > 0 && (
                      <span className="text-[10px] font-semibold text-[#0038FF] ml-auto">
                        Billed annually (${price * 12}/yr)
                      </span>
                    )}
                  </div>

                  {/* Card mini preview */}
                  <div className="w-full flex items-center justify-center py-2 mb-6 bg-[#F8F9FA] rounded-2xl border border-gray-100 relative overflow-hidden h-28">
                    <div className="relative w-16 h-22 aspect-[511/661] drop-shadow-md">
                      <Image
                        src={plan.cardImage}
                        alt={`${plan.name} Card`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Included with plan
                    </p>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-[#222222] font-medium">
                        <Check className="w-4 h-4 text-[#0038FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={plan.ctaHref}
                  className={`w-full py-3 px-5 rounded-full text-xs font-bold text-center transition-all flex items-center justify-center gap-1.5 ${
                    isHigh
                      ? 'bg-[#0038FF] text-white hover:bg-[#002dd1] shadow-md hover:shadow-lg'
                      : 'bg-gray-100 text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Yield Estimator (Gently loaded with AnimatedContent) */}
      <AnimatedContent
        distance={32}
        direction="vertical"
        duration={0.8}
        ease="power2.out"
        threshold={0.12}
        initialOpacity={0}
        animateOpacity={true}
      >
        <section className="py-14 md:py-20 px-6 md:px-12 bg-white border-y border-gray-200/80">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#0038FF] mb-2 block">
                Yield Simulator
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-[#111111] tracking-tight mb-2">
                Estimate your monthly streaming earnings
              </h2>
              <p className="text-xs md:text-sm text-[#787774] max-w-lg mx-auto">
                Simulate continuous yield distributions based on your staked $CLUB tokens on Base L2.
              </p>
            </div>

            <div className="bg-[#F8F9FA] rounded-3xl p-8 border border-gray-200">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="stakeSlider" className="text-xs font-bold uppercase tracking-wider text-gray-600">
                    Staked $CLUB tokens
                  </label>
                  <span className="text-lg font-black text-[#0038FF]">
                    {stakeAmount.toLocaleString()} <span className="text-xs text-black/60">$CLUB</span>
                  </span>
                </div>
                <input
                  id="stakeSlider"
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0038FF]"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-1">
                  <span>500 $CLUB</span>
                  <span>25,000 $CLUB</span>
                  <span>50,000 $CLUB</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Base Protocol APY
                  </p>
                  <p className="text-2xl font-black text-[#111111]">48.2%</p>
                  <span className="text-[10px] text-gray-500">Compounded monthly</span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Est. Monthly Stream
                  </p>
                  <p className="text-2xl font-black text-[#0038FF]">
                    +{estimatedMonthlyClub.toLocaleString()}{' '}
                    <span className="text-xs text-black/60">$CLUB</span>
                  </p>
                  <span className="text-[10px] text-[#10B981] font-semibold">Streams every second</span>
                </div>

                <div className="bg-[#111111] p-5 rounded-2xl shadow-sm text-center text-white">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#CCFF00] mb-1">
                    Est. Annual Reward
                  </p>
                  <p className="text-2xl font-black text-white">
                    +{estimatedYearlyClub.toLocaleString()}{' '}
                    <span className="text-xs text-white/60">$CLUB</span>
                  </p>
                  <span className="text-[10px] text-white/50">With {multiplier}x Pro multiplier</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* Frequently Asked Questions */}
      <AnimatedContent
        distance={28}
        direction="vertical"
        duration={0.75}
        ease="power2.out"
        threshold={0.12}
        initialOpacity={0}
        animateOpacity={true}
      >
        <section className="py-14 md:py-20 px-6 md:px-12 max-w-4xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-[#111111] tracking-tight mb-2">
              Frequently asked questions
            </h2>
            <p className="text-xs md:text-sm text-[#787774]">
              Everything you need to know about BaseClub plans, physical cards, and staking.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm"
              >
                <h4 className="text-sm md:text-base font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0038FF] shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-xs md:text-sm text-[#787774] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </AnimatedContent>

      {/* Bottom CTA Banner */}
      <section className="py-12 px-6 md:px-12 bg-[#0038FF] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight">
            Ready to hold your on-chain identity in your hand?
          </h3>
          <p className="text-xs md:text-sm text-white/80 max-w-md mx-auto leading-relaxed">
            Order your BaseClub physical metal NFC card today. Worldwide shipping and instant digital activation.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#CCFF00] text-black font-black text-xs md:text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
            >
              Claim your $CLUB card now
            </Link>
            <StarBorder
              as={Link}
              href="/book"
              theme="dark"
              color="#CCFF00"
              trailColor="#FFFFFF"
              radius={9999}
              thickness={1.2}
              duration={4}
              sparkle={true}
              hover="lap"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs md:text-sm px-6 py-3 rounded-full transition-transform hover:scale-105"
            >
              Book a founder session
            </StarBorder>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
