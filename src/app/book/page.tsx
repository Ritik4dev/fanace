'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/ui/SiteHeader';
import { SiteFooter } from '@/components/ui/SiteFooter';
import Stepper, { Step } from '@/components/ui/Stepper';
import VariableProximity from '@/components/ui/VariableProximity';
import StarBorder from '@/components/ui/StarBorder';
import {
  Calendar,
  Clock,
  ShieldCheck,
  Sparkles,
  Check,
  ArrowRight,
  User,
  MessageSquare,
  CreditCard,
  Building2,
  Layers,
  Compass
} from 'lucide-react';

interface BookingFormData {
  objective: string;
  ensOrName: string;
  contactHandle: string;
  volumeTier: string;
  notes: string;
  selectedDate: string;
  selectedTime: string;
}

const OBJECTIVES = [
  {
    id: 'creator-launch',
    title: 'Creator Launch & Streaming Vault',
    description: 'Set up real-time stream rates, ERC-6551 accounts, and fan subscription perks.',
    tag: 'Creators & Artists',
    icon: Sparkles,
  },
  {
    id: 'syndicate-treasury',
    title: 'Syndicate & Whale Treasury',
    description: 'Multi-sig Safe wallet routing, high-yield liquidity pools, and custom revenue splits.',
    tag: 'DAOs & Guilds',
    icon: Building2,
  },
  {
    id: 'custom-hardware',
    title: 'Custom Titanium & NFC Cards',
    description: 'Bespoke laser-engraved hardware cards with embedded cryptographically paired chips.',
    tag: 'Hardware & VIP',
    icon: CreditCard,
  },
  {
    id: 'protocol-partnership',
    title: 'Protocol & Ecosystem Integration',
    description: 'Explore Base L2 co-marketing, liquidity incentives, or developer SDK integrations.',
    tag: 'Partnerships',
    icon: Layers,
  },
];

const AVAILABLE_DATES = [
  { label: 'Tomorrow', date: 'Tue, Nov 11', value: '2026-11-11' },
  { label: 'Midweek', date: 'Wed, Nov 12', value: '2026-11-12' },
  { label: 'Thursday', date: 'Thu, Nov 13', value: '2026-11-13' },
  { label: 'Friday', date: 'Fri, Nov 14', value: '2026-11-14' },
  { label: 'Next Week', date: 'Mon, Nov 17', value: '2026-11-17' },
];

const TIME_SLOTS = [
  { time: '10:00 AM UTC', tag: 'Morning' },
  { time: '01:30 PM UTC', tag: 'Afternoon' },
  { time: '04:00 PM UTC', tag: 'Europe / Americas' },
  { time: '07:30 PM UTC', tag: 'US Evening' },
];

export default function BookPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    objective: 'creator-launch',
    ensOrName: '',
    contactHandle: '',
    volumeTier: '$10k – $50k/mo',
    notes: '',
    selectedDate: '2026-11-11',
    selectedTime: '01:30 PM UTC',
  });

  const selectedObjectiveObj = OBJECTIVES.find(o => o.id === formData.objective) || OBJECTIVES[0];
  const selectedDateObj = AVAILABLE_DATES.find(d => d.value === formData.selectedDate) || AVAILABLE_DATES[0];

  const handleUpdate = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#111111] flex flex-col font-sans selection:bg-[#0038FF] selection:text-white">
      {/* Global Navigation */}
      <SiteHeader theme="light" />

      {/* Hero Header */}
      <section className="pt-12 pb-8 px-6 md:px-12 border-b border-gray-200/70 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0038FF]/10 text-[#0038FF] text-[11px] font-bold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0038FF] animate-pulse" />
            Direct Founder Access • 30-Min Strategy
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-[#111111]">
                Book a protocol & card concierge session
              </h1>
              <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed">
                <VariableProximity
                  label="Meet 1-on-1 with the BaseClub core protocol engineers to architect your real-time creator stream, configure custom titanium NFC cards, or integrate syndicate treasuries on Base."
                  fromFontVariationSettings="'wght' 400, 'opsz' 14"
                  toFontVariationSettings="'wght' 700, 'opsz' 30"
                  toColor="#0038FF"
                  radius={65}
                  falloff="gaussian"
                  smoothing={0.2}
                />
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500 font-medium pb-1 shrink-0">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Encrypted session</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#0038FF]" />
                <span>30-min duration</span>
              </div>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>3 slots open today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Section */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Context & Trust Rail */}
          <div className="lg:col-span-4 space-y-6">
            {/* Host Card */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3.5 mb-5 pb-5 border-b border-gray-100">
                <div className="w-12 h-12 rounded-full bg-[#0038FF] text-white flex items-center justify-center font-black text-sm tracking-tight shadow-md">
                  BC
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900">BaseClub Founding Desk</h2>
                  <p className="text-xs text-gray-500">Core Engineering & Protocol Team</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  What we cover in 30 minutes
                </p>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0038FF] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Custom Yield Multiplier</h3>
                    <p className="text-[11px] text-gray-500 leading-normal mt-0.5">
                      Calculate your community’s stream volume and optimal reward split curves.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Hardware & NFC Specs</h3>
                    <p className="text-[11px] text-gray-500 leading-normal mt-0.5">
                      Review custom titanium or matte black card finishes and chip programming.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">Instant Testnet Deployment</h3>
                    <p className="text-[11px] text-gray-500 leading-normal mt-0.5">
                      Deploy your test channel on Base Sepolia before committing mainnet capital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote snippet */}
              <div className="mt-6 pt-5 border-t border-gray-100 bg-gray-50/70 -mx-6 -mb-6 p-6 rounded-b-2xl">
                <p className="text-xs italic text-gray-600 leading-relaxed">
                  &ldquo;The 30-minute founder call got our DAO&apos;s streaming treasury live on Base in less than 48 hours. Best onboarding in SocialFi.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#111111] text-white text-[9px] font-bold flex items-center justify-center">
                    0x
                  </div>
                  <span className="text-[11px] font-bold text-gray-800">0xKaito • Zenith Syndicate</span>
                </div>
              </div>
            </div>

            {/* Live Status indicator */}
            <div className="bg-white border border-gray-200/80 rounded-2xl p-4 flex items-center justify-between text-xs text-gray-600 shadow-sm">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-semibold text-gray-800">Desk Status: Active</span>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">Response &lt; 2 hrs</span>
            </div>
          </div>

          {/* Right: The Stepper Component Container */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-gray-200/90 rounded-3xl p-4 md:p-8 shadow-sm">
              <Stepper
                initialStep={1}
                width="100%"
                theme="light"
                accentColor="#0038FF"
                frame={false}
                backButtonText="Back"
                nextButtonText="Continue"
                completeButtonText="Confirm booking"
                completedContent={
                  <div className="py-8 px-4 text-center max-w-md mx-auto space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        Booking Confirmed
                      </span>
                      <h2 className="text-2xl font-black text-gray-900 tracking-tight">
                        You&apos;re on the calendar!
                      </h2>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We reserved your 30-minute private strategy session with the BaseClub core team. A calendar invite and encrypted meeting link have been queued.
                      </p>
                    </div>

                    {/* Receipt Ticket */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 text-left space-y-3 font-mono text-xs">
                      <div className="flex justify-between items-center text-gray-500 pb-2 border-b border-gray-200">
                        <span>REFERENCE</span>
                        <span className="font-bold text-gray-900">#BC-9482</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-600">
                        <span className="text-gray-400">SESSION</span>
                        <span className="font-semibold text-gray-900">{selectedObjectiveObj.title}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-600">
                        <span className="text-gray-400">DATE & TIME</span>
                        <span className="font-semibold text-gray-900">{selectedDateObj.date} @ {formData.selectedTime}</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-600">
                        <span className="text-gray-400">HANDLE</span>
                        <span className="font-semibold text-gray-900">{formData.ensOrName || 'Founder'} ({formData.contactHandle || 'Telegram'})</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <StarBorder
                        as="a"
                        href="https://calendar.google.com"
                        target="_blank"
                        rel="noreferrer"
                        theme="light"
                        color="#0038FF"
                        trailColor="#0038FF"
                        radius={9999}
                        thickness={1.2}
                        duration={3.5}
                        sparkle={true}
                        hover="brighten"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#0038FF] text-white text-xs font-bold shadow-sm text-center transition-transform hover:scale-105"
                      >
                        Add to Google Calendar
                      </StarBorder>
                      <Link
                        href="/"
                        className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-gray-100 text-gray-800 text-xs font-bold hover:bg-gray-200 transition-all text-center"
                      >
                        Return to overview
                      </Link>
                    </div>
                  </div>
                }
              >
                {/* STEP 1: Objective */}
                <Step
                  title="Objective"
                  description="Choose session focus"
                  icon={<Compass className="w-4 h-4" />}
                >
                  <div className="space-y-5 py-2">
                    <div className="space-y-1">
                      <h2 className="text-lg font-black text-gray-900">
                        What would you like to build or discuss?
                      </h2>
                      <p className="text-xs text-gray-500">
                        Select the primary focus of your 30-minute founder consultation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {OBJECTIVES.map((item) => {
                        const Icon = item.icon;
                        const isSelected = formData.objective === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleUpdate('objective', item.id)}
                            className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between min-h-[140px] ${
                              isSelected
                                ? 'border-[#0038FF] bg-blue-50/40 shadow-sm ring-1 ring-[#0038FF]'
                                : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50/50'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                                  isSelected ? 'bg-[#0038FF] text-white' : 'bg-gray-100 text-gray-700'
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                  isSelected
                                    ? 'bg-[#0038FF]/10 text-[#0038FF]'
                                    : 'bg-gray-100 text-gray-500'
                                }`}
                              >
                                {item.tag}
                              </span>
                            </div>

                            <div className="mt-3">
                              <h3 className="text-xs font-bold text-gray-900 leading-snug">
                                {item.title}
                              </h3>
                              <p className="text-[11px] text-gray-500 leading-normal mt-1">
                                {item.description}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </Step>

                {/* STEP 2: Identity & Details */}
                <Step
                  title="Identity"
                  description="Your handle & volume"
                  icon={<User className="w-4 h-4" />}
                >
                  <div className="space-y-5 py-2">
                    <div className="space-y-1">
                      <h2 className="text-lg font-black text-gray-900">
                        Tell us about you & your community
                      </h2>
                      <p className="text-xs text-gray-500">
                        This helps our engineering team prepare tailored contracts and hardware mockups.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* Name or ENS */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          Your name or ENS handle <span className="text-[#0038FF]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.ensOrName}
                          onChange={(e) => handleUpdate('ensOrName', e.target.value)}
                          placeholder="e.g. vitalik.eth or Elena Vance"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0038FF]/20 focus:border-[#0038FF] transition-all bg-white"
                        />
                      </div>

                      {/* Contact Channel */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          Preferred channel (Telegram handle or Email) <span className="text-[#0038FF]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.contactHandle}
                          onChange={(e) => handleUpdate('contactHandle', e.target.value)}
                          placeholder="e.g. @telegram_handle or elena@baseclub.xyz"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0038FF]/20 focus:border-[#0038FF] transition-all bg-white"
                        />
                      </div>

                      {/* Estimated monthly stream volume */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2">
                          Estimated monthly volume or audience size
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {['< $10k/mo', '$10k – $50k/mo', '$50k – $200k/mo', '$200k+/mo'].map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => handleUpdate('volumeTier', tier)}
                              className={`py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
                                formData.volumeTier === tier
                                  ? 'border-[#0038FF] bg-[#0038FF] text-white shadow-sm'
                                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Optional Notes */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          Specific topics or questions (optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => handleUpdate('notes', e.target.value)}
                          placeholder="e.g. We have 1,200 members in our collector club and want 100 titanium NFC cards."
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0038FF]/20 focus:border-[#0038FF] transition-all bg-white resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </Step>

                {/* STEP 3: Schedule */}
                <Step
                  title="Schedule"
                  description="Pick date & time"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  <div className="space-y-5 py-2">
                    <div className="space-y-1">
                      <h2 className="text-lg font-black text-gray-900">
                        Select a date & time slot
                      </h2>
                      <p className="text-xs text-gray-500">
                        All sessions run 30 minutes over Google Meet or private Telegram voice.
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {/* Date selector */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2">
                          Available Dates
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                          {AVAILABLE_DATES.map((d) => {
                            const isSelected = formData.selectedDate === d.value;
                            return (
                              <button
                                key={d.value}
                                type="button"
                                onClick={() => handleUpdate('selectedDate', d.value)}
                                className={`p-3 rounded-2xl border text-center transition-all ${
                                  isSelected
                                    ? 'border-[#0038FF] bg-[#0038FF] text-white shadow-sm'
                                    : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                                }`}
                              >
                                <div className={`text-[10px] uppercase font-bold ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                                  {d.label}
                                </div>
                                <div className="text-xs font-extrabold mt-0.5">
                                  {d.date}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Time slot picker */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-2">
                          Available 30-min Slots
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {TIME_SLOTS.map((slot) => {
                            const isSelected = formData.selectedTime === slot.time;
                            return (
                              <button
                                key={slot.time}
                                type="button"
                                onClick={() => handleUpdate('selectedTime', slot.time)}
                                className={`p-3 rounded-xl border flex items-center justify-between text-left transition-all ${
                                  isSelected
                                    ? 'border-[#0038FF] bg-blue-50/50 text-[#0038FF] ring-1 ring-[#0038FF]'
                                    : 'border-gray-200 bg-white text-gray-800 hover:border-gray-300'
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-[#0038FF]' : 'text-gray-400'}`} />
                                  <span className="text-xs font-bold">{slot.time}</span>
                                </div>
                                <span className="text-[10px] font-semibold text-gray-400">
                                  {slot.tag}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Timezone pill */}
                      <div className="bg-gray-50 rounded-xl p-3 border border-gray-200/80 flex items-center justify-between text-[11px] text-gray-600">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>Detected Timezone: <strong>UTC (Universal Coordinated Time)</strong></span>
                        </div>
                        <span className="text-gray-400 font-mono">1-on-1 private link</span>
                      </div>
                    </div>
                  </div>
                </Step>

                {/* STEP 4: Review & Confirm */}
                <Step
                  title="Review"
                  description="Confirm booking"
                  icon={<ShieldCheck className="w-4 h-4" />}
                >
                  <div className="space-y-5 py-2">
                    <div className="space-y-1">
                      <h2 className="text-lg font-black text-gray-900">
                        Review your session details
                      </h2>
                      <p className="text-xs text-gray-500">
                        Check the summary below before locking in your consultation slot.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-gray-200/80">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Topic / Objective
                          </p>
                          <p className="text-xs font-bold text-gray-900">
                            {selectedObjectiveObj.title}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {selectedObjectiveObj.tag}
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Scheduled Date & Time
                          </p>
                          <p className="text-xs font-bold text-gray-900">
                            {selectedDateObj.date}
                          </p>
                          <p className="text-[11px] text-[#0038FF] font-semibold mt-0.5">
                            {formData.selectedTime} (30 mins)
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-gray-200/80">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Identity / Name
                          </p>
                          <p className="text-xs font-bold text-gray-900">
                            {formData.ensOrName || 'Founder (Unspecified)'}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            Estimated volume: {formData.volumeTier}
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Contact Handle
                          </p>
                          <p className="text-xs font-bold text-gray-900">
                            {formData.contactHandle || 'Will be contacted on Telegram'}
                          </p>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            Google Meet / Telegram link provided
                          </p>
                        </div>
                      </div>

                      {formData.notes && (
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                            Special focus notes
                          </p>
                          <p className="text-xs text-gray-700 italic bg-white p-3 rounded-xl border border-gray-200">
                            &ldquo;{formData.notes}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-gray-500 bg-blue-50/50 p-3 rounded-xl border border-blue-100">
                      <ShieldCheck className="w-4 h-4 text-[#0038FF] shrink-0" />
                      <span>
                        Zero wallet connection or seed phrases required. We will never ask for private keys.
                      </span>
                    </div>
                  </div>
                </Step>
              </Stepper>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

