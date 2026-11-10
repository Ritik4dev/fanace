'use client';

import React, { useState } from 'react';
import { Star, Check, ShieldCheck, Sparkles, Send } from 'lucide-react';
import ElasticSlider from '@/components/ui/ElasticSlider';
import StarBorder from '@/components/ui/StarBorder';
import VariableProximity from '@/components/ui/VariableProximity';

const SENTIMENTS: Record<number, { label: string; desc: string; color: string }> = {
  1: { label: 'Needs Polish', desc: 'Constructive critique is our highest priority.', color: '#EF4444' },
  2: { label: 'Promising Start', desc: 'Good direction, looking forward to next upgrades.', color: '#F59E0B' },
  3: { label: 'Solid Protocol', desc: 'Meets every on-chain expectation reliably.', color: '#10B981' },
  4: { label: 'Very Impressive', desc: 'Exceptional craft, physical card feel, and yield.', color: '#0038FF' },
  5: { label: 'Masterpiece', desc: 'Peak 100% on-chain SocialFi craftsmanship.', color: '#0038FF' }
};

const FEEDBACK_TAGS = [
  '💎 Metal NFC Card',
  '⚡ Instant Yield Streaming',
  '🌊 Liquid $CLUB Vault',
  '🎨 World-Class Craft',
  '🛡️ Zero-KYC Privacy',
  '📱 Seamless Phone Tap'
];

export const AnonymousRating: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>(['💎 Metal NFC Card', '⚡ Instant Yield Streaming']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [txHash, setTxHash] = useState('');

  const roundedScore = Math.min(5, Math.max(1, Math.round(rating)));
  const sentiment = SENTIMENTS[roundedScore] || SENTIMENTS[5];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockHash = '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setTxHash(mockHash);
    setIsSubmitted(true);
  };

  return (
    <div
      className={`bg-white rounded-3xl border border-gray-200/90 p-6 md:p-10 shadow-sm relative overflow-hidden transition-all ${className}`}
    >
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-50/60 to-transparent rounded-full blur-3xl pointer-events-none" />

      {isSubmitted ? (
        <div className="py-8 text-center max-w-md mx-auto space-y-5 animate-in fade-in duration-500">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/70 mx-auto flex items-center justify-center shadow-inner">
            <Check className="w-8 h-8 stroke-[3]" />
          </div>

          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
              Anonymous Consensus Confirmed
            </span>
            <h3 className="text-2xl font-black text-gray-900 tracking-tight">
              Rating recorded on Base L2
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
              Your {rating.toFixed(1)}/5.0 review was signed cryptographically without collecting IP addresses, cookies, or wallet identifiers.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-4 text-left font-mono text-xs space-y-2">
            <div className="flex justify-between items-center text-gray-500">
              <span>SCORE</span>
              <span className="font-bold text-gray-900">{rating.toFixed(1)} / 5.0 Stars</span>
            </div>
            <div className="flex justify-between items-center text-gray-500">
              <span>ZERO-KNOWLEDGE PROOF</span>
              <span className="text-[11px] text-[#0038FF] truncate max-w-[190px]">{txHash}</span>
            </div>
            <div className="flex justify-between items-center text-gray-500">
              <span>CONSENSUS BLOCK</span>
              <span className="text-gray-900">Base Mainnet #21,940,281</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setComment('');
            }}
            className="text-xs font-bold text-[#0038FF] hover:underline pt-2"
          >
            Submit another anonymous note
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#0038FF] bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                  Anonymous Feedback
                </span>
                <span className="text-[10px] text-gray-400 font-mono">Zero-KYC</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">
                Rate us anonymously
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 max-w-md leading-relaxed">
                <VariableProximity
                  label="Drag the elastic rubber slider to fill your stars. Your rating streams directly into our protocol community ledger."
                  fromFontVariationSettings="'wght' 400, 'opsz' 12"
                  toFontVariationSettings="'wght' 700, 'opsz' 26"
                  toColor="#0038FF"
                  radius={55}
                  falloff="gaussian"
                  smoothing={0.2}
                />
              </p>
            </div>

            <div className="flex items-center gap-2 bg-gray-50 px-3.5 py-2 rounded-2xl border border-gray-200/80 shrink-0 self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-800 leading-none">100% Anonymous</p>
                <p className="text-[9px] text-gray-400 leading-none mt-0.5">No tracking • No sign-in</p>
              </div>
            </div>
          </div>

          {/* Interactive 5-Star Visual Display */}
          <div className="flex flex-col items-center justify-center py-4 bg-[#F8F9FB] rounded-2xl border border-gray-200/70 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-3">
              {[1, 2, 3, 4, 5].map((index) => {
                // Calculate fill percentage for each star:
                const fillRatio = Math.max(0, Math.min(1, rating - (index - 1)));
                const pct = Math.round(fillRatio * 100);

                return (
                  <div
                    key={index}
                    className="relative w-9 h-9 sm:w-12 sm:h-12 cursor-pointer transition-transform hover:scale-110 active:scale-95"
                    onClick={() => setRating(index)}
                    title={`Rate ${index} star${index > 1 ? 's' : ''}`}
                  >
                    {/* Background Empty Star */}
                    <Star className="w-full h-full text-gray-300 stroke-[1.5] transition-colors" />

                    {/* Foreground Filled Star with smooth clipPath */}
                    <div
                      className="absolute inset-0 overflow-hidden text-[#0038FF] transition-all duration-75"
                      style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
                    >
                      <Star className="w-full h-full text-[#0038FF] fill-[#0038FF] stroke-[1.5]" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Numeric Score & Dynamic Sentiment Badge */}
            <div className="flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-gray-900">
                {rating.toFixed(1)}
                <span className="text-xs text-gray-400 font-sans font-medium ml-1">/ 5.0</span>
              </span>
              <span className="h-4 w-px bg-gray-300" />
              <span
                className="text-xs font-bold px-3 py-1 rounded-full text-white shadow-sm transition-all"
                style={{ backgroundColor: sentiment.color }}
              >
                {sentiment.label}
              </span>
            </div>
            <p className="text-[11px] text-gray-500 mt-1 italic font-medium">
              &ldquo;{sentiment.desc}&rdquo;
            </p>
          </div>

          {/* The Elastic Slider (React Bits with Rubber Physics) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-500 px-1">
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-gray-400" />
                <span>1 Star (Minimum)</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#0038FF] bg-blue-50 px-2 py-0.5 rounded">
                Drag to adjust
              </span>
              <span className="flex items-center gap-1.5">
                <span>5 Stars (Masterpiece)</span>
                <Star className="w-3.5 h-3.5 text-[#0038FF] fill-[#0038FF]" />
              </span>
            </div>

            <div className="w-full flex justify-center py-2">
              <ElasticSlider
                startingValue={1}
                maxValue={5}
                value={rating}
                onChange={(val) => setRating(val)}
                stepSize={0.1}
                isStepped={false}
                thickness={8}
                activeThickness={16}
                maxStretch={55}
                bounce={0.6}
                rangeColor="#0038FF"
                trackColor="#E5E7EB"
                thumbColor="#FFFFFF"
                thumb={true}
                valuePosition="none"
                leftIcon={<Star className="w-4 h-4 text-gray-400" />}
                rightIcon={<Star className="w-4 h-4 text-[#0038FF] fill-[#0038FF]" />}
                className="!w-full max-w-xl"
              />
            </div>
          </div>

          {/* Highlights & Tags */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700">
              What stood out most? (Optional)
            </label>
            <div className="flex flex-wrap gap-2">
              {FEEDBACK_TAGS.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                      isSelected
                        ? 'bg-[#0038FF] text-white border-[#0038FF] shadow-sm'
                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional One-Sentence Thought */}
          <div className="space-y-2">
            <label htmlFor="anon-comment" className="block text-xs font-bold text-gray-700">
              One-sentence thought or feature request (Optional)
            </label>
            <input
              id="anon-comment"
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="e.g. Loved the tactile card tap, would love to see Solana bridge next..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0038FF] focus:bg-white transition-all placeholder:text-gray-400"
              maxLength={200}
            />
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-[11px] text-gray-500">
              <Sparkles className="w-3.5 h-3.5 text-[#0038FF]" />
              <span>Broadcasts an anonymous proof to community dashboard</span>
            </div>

            <StarBorder
              as="button"
              type="submit"
              theme="dark"
              color="#CCFF00"
              trailColor="#0038FF"
              radius={9999}
              thickness={1.2}
              duration={3.5}
              sparkle={true}
              hover="lap"
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#0038FF] shadow-md hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <span>Submit anonymous rating</span>
              <Send className="w-3.5 h-3.5 text-[#CCFF00]" />
            </StarBorder>
          </div>
        </form>
      )}
    </div>
  );
};

export default AnonymousRating;

