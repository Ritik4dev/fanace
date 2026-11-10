'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useSpring, useMotionValue, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import ElasticMesh from '@/components/ui/ElasticMesh';
import TextLoop from '@/components/ui/TextLoop';
import Shuffle from '@/components/ui/Shuffle';
import StickerPeel from '@/components/ui/StickerPeel';
import FluidGlass from '@/components/ui/FluidGlass';
import SiteFooter from '@/components/ui/SiteFooter';
import Ribbons from '@/components/ui/Ribbons';
import RotatingText from '@/components/ui/RotatingText';
import TokenChamber from '@/components/ui/TokenChamber';
import TextPressure from '@/components/ui/TextPressure';
import VariableProximity from '@/components/ui/VariableProximity';
import AnimatedContent from '@/components/ui/AnimatedContent';
import StarBorder from '@/components/ui/StarBorder';
import Skiper19 from '@/components/ui/svg-follow-scroll';
import Skiper39 from '@/components/ui/skiper39';
import { ShieldCheck } from 'lucide-react';

// --- Authentic Contactless NFC Symbol ---
const ContactlessWave = ({ className = 'w-5 h-5 text-current' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8.5 16.5a5 5 0 0 1 0-9" />
    <path d="M12 19.5a9 9 0 0 0 0-15" />
    <path d="M15.5 22.5a13 13 0 0 0 0-21" />
  </svg>
);

// --- 3D Interactive Floating Card (No Frame, Pure 3D Vertical Physical Card) ---
interface Interactive3DCardProps {
  imgSrc: string;
  alt: string;
  initialRotate?: number;
  floatAmplitude?: number;
  floatDuration?: number;
  delay?: number;
  glowColor?: string;
  verticalAngle?: number;
  tag?: string;
}

const Interactive3DCard: React.FC<Interactive3DCardProps> = ({
  imgSrc,
  alt,
  initialRotate = 0,
  floatAmplitude = 14,
  floatDuration = 5.5,
  delay = 0,
  glowColor = 'rgba(0, 0, 0, 0.45)',
  verticalAngle = 0,
  tag,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(mouseY, { stiffness: 280, damping: 22 });
  const rotateY = useSpring(mouseX, { stiffness: 280, damping: 22 });
  const scale = useSpring(1, { stiffness: 280, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const degX = -((y - centerY) / centerY) * 20;
    const degY = ((x - centerX) / centerX) * 20;

    mouseX.set(degY);
    mouseY.set(degX);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.08);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      animate={{
        y: [0, -floatAmplitude, 0],
        rotate: [initialRotate, initialRotate + 1.5, initialRotate],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
      className="pointer-events-auto select-none"
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          rotateZ: verticalAngle,
          transformStyle: 'preserve-3d',
        }}
        className="relative cursor-pointer transition-shadow duration-300"
      >
        {/* Pure vertical physical card without any frames or borders */}
        <div
          className="relative w-36 sm:w-44 md:w-52 lg:w-60 aspect-[511/661] transition-all duration-300"
          style={{
            filter: isHovered
              ? `drop-shadow(0 32px 50px ${glowColor}) drop-shadow(0 16px 26px rgba(0,0,0,0.5))`
              : `drop-shadow(0 22px 32px ${glowColor}) drop-shadow(0 8px 16px rgba(0,0,0,0.38))`,
          }}
        >
          <Image
            src={imgSrc}
            alt={alt}
            fill
            priority
            loading="eager"
            className="object-contain pointer-events-none select-none"
            sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
          />
        </div>

        {/* Micro status tag on hover */}
        {tag && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
            transition={{ duration: 0.2 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[10px] font-semibold text-[#CCFF00] tracking-wider pointer-events-none shadow-lg"
          >
            {tag}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

// --- SVG Path for the Fizzy Tangled Circular Knot: starts from the FULL RIGHT edge (x = 1350, 0 gap) and forms a compact tangled cluster on the right side of the video ---
const FIZZY_KNOT_PATH =
  "M1350 60 C1300 120 1270 250 1242.36 382.258" +
  "C1266.99 418.39 1273.65 443.108 1247.75 474.477" +
  "C1217.32 511.33 1149.4 511.259 1096.84 466.093" +
  "C1044.29 420.928 1029.14 380.576 1033.97 324.172" +
  "C1038.31 273.428 1069.55 228.986 1117.2 216.384" +
  "C1152.2 207.128 1188.29 213.629 1194.45 245.127" +
  "C1201.49 281.062 1132.22 280.104 1100.44 272.673" +
  "C1065.32 264.464 1044.22 234.837 1032.77 201.413" +
  "C1019.29 162.061 1029.71 131.126 1056.44 100.965" +
  "C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513" +
  "C1207.02 117.17 1186.81 143.379 1156.22 166.691" +
  "C1112.57 199.959 1052.57 186.238 999.784 155.164" +
  "C957.312 130.164 899.171 63.7054 931.284 26.3214" +
  "C952.068 2.12513 996.288 3.87363 1007.22 43.58" +
  "C1018.15 83.2749 1003.56 122.644 975.969 163.376" +
  "C948.377 204.107 907.272 255.122 913.558 321.045" +
  "C919.727 385.734 990.968 497.068 1063.84 503.35" +
  "C1111.46 507.456 1166.79 511.984 1175.68 464.527" +
  "C1191.52 379.956 1101.26 334.985 1030.29 377.017" +
  "C971.109 412.064 956.297 483.647 953.797 561.655" +
  "C876.605 394.131 788.982 335.917 691.836 416.303" +
  "C685.453 501.424 853.722 498.43 941.95 409.714" +
  "C1016.1 335.156 1008.64 186.907 906.167 142.846" +
  "C807.014 100.212 712.699 198.494 789.049 245.127" +
  "C889.053 306.207 986.062 116.979 840.548 43.3233" +
  "C743.932 -5.58141 678.027 57.1682 672.279 112.188" +
  "C666.53 167.208 712.538 172.943 736.353 163.088" +
  "C760.167 153.234 764.14 120.924 746.651 93.3868" +
  "C717.461 47.4252 638.894 77.8642 601.018 116.979" +
  "C568.164 150.908 557 201.079 576.467 246.924" +
  "C593.342 286.664 630.24 310.55 671.68 302.614" +
  "C756.114 286.446 729.747 206.546 681.86 186.442" +
  "C630.54 164.898 492 209.318 495.026 287.644" +
  "C496.837 334.494 518.402 366.466 582.455 367.287" +
  "C680.013 368.538 771.538 299.456 898.634 292.434" +
  "C953.797 520 953.797 561.655 953.797 561.655";

const CONTINUOUS_STORY_PATH =
  "M1540 20 C1460 50 1340 110 1242.36 382.258" +
  "C1266.99 418.39 1273.65 443.108 1247.75 474.477" +
  "C1217.32 511.33 1149.4 511.259 1096.84 466.093" +
  "C1044.29 420.928 1029.14 380.576 1033.97 324.172" +
  "C1038.31 273.428 1069.55 228.986 1117.2 216.384" +
  "C1152.2 207.128 1188.29 213.629 1194.45 245.127" +
  "C1201.49 281.062 1132.22 280.104 1100.44 272.673" +
  "C1065.32 264.464 1044.22 234.837 1032.77 201.413" +
  "C1019.29 162.061 1029.71 131.126 1056.44 100.965" +
  "C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513" +
  "C1207.02 117.17 1186.81 143.379 1156.22 166.691" +
  "C1112.57 199.959 1052.57 186.238 999.784 155.164" +
  "C957.312 130.164 899.171 63.7054 931.284 26.3214" +
  "C952.068 2.12513 996.288 3.87363 1007.22 43.58" +
  "C1018.15 83.2749 1003.56 122.644 975.969 163.376" +
  "C948.377 204.107 907.272 255.122 913.558 321.045" +
  "C919.727 385.734 990.968 497.068 1063.84 503.35" +
  "C1111.46 507.456 1166.79 511.984 1175.68 464.527" +
  "C1191.52 379.956 1101.26 334.985 1030.29 377.017" +
  "C971.109 412.064 956.297 483.647 953.797 561.655" +
  "C876.605 394.131 788.982 335.917 691.836 416.303" +
  "C685.453 501.424 853.722 498.43 941.95 409.714" +
  "C1016.1 335.156 1008.64 186.907 906.167 142.846" +
  "C807.014 100.212 712.699 198.494 789.049 245.127" +
  "C889.053 306.207 986.062 116.979 840.548 43.3233" +
  "C743.932 -5.58141 678.027 57.1682 672.279 112.188" +
  "C666.53 167.208 712.538 172.943 736.353 163.088" +
  "C760.167 153.234 764.14 120.924 746.651 93.3868" +
  "C717.461 47.4252 638.894 77.8642 601.018 116.979" +
  "C568.164 150.908 557 201.079 576.467 246.924" +
  "C593.342 286.664 630.24 310.55 671.68 302.614" +
  "C756.114 286.446 729.747 206.546 681.86 186.442" +
  "C630.54 164.898 492 209.318 495.026 287.644" +
  "C496.837 334.494 518.402 366.466 582.455 367.287" +
  "C680.013 368.538 771.538 299.456 898.634 292.434" +
  "C953.797 520 953.797 561.655 953.797 561.655" +
  "C947.587 755.413 1197.56 941.828 936.039 1140.66" +
  "C745.771 1285.32 321.926 950.737 134.536 1202.19" +
  "C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5";

// Preserved components stored for future use without deleting any code
const _PreservedVideoBadges = () => (
  <div style={{ display: 'none' }}>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.08] text-[10px] font-mono uppercase tracking-[0.2em] text-[#0038FF]">
      <span className="w-1.5 h-1.5 rounded-full bg-[#0038FF] animate-pulse" />
      <span>HARDWARE SOCIALFI // NTAG 424 DNA</span>
    </div>
    <StarBorder
      theme="light"
      color="#0038FF"
      trailColor="#CCFF00"
      radius={16}
      thickness={1.2}
      duration={4}
      sparkle={true}
      hover="lap"
    >
      <div className="text-[10px] font-black uppercase tracking-wider text-black">
        VERIFIED SILICON
      </div>
      <div className="text-[9px] font-mono text-[#0038FF] font-semibold">
        400MS Proof of Tap
      </div>
    </StarBorder>
  </div>
);

// --- Clean Video Section with Pure Seamless Layout & Integrated Product Header ---
interface RawVideoSectionProps {
  onVideoReady?: (videoEl: HTMLVideoElement | null) => void;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
}

const RawVideoSection: React.FC<RawVideoSectionProps> = ({ videoRef }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isFizzyForming, setIsFizzyForming] = useState(false);
  const [isFizzyComplete, setIsFizzyComplete] = useState(false);

  useEffect(() => {
    const video = videoRef?.current;
    if (!video) return;

    let animId: number | null = null;
    let isReversing = false;
    let lastTime = 0;

    const stepReverse = (now: number) => {
      if (!video || !isReversing) return;
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      const nextTime = video.currentTime - dt;
      if (nextTime <= 8.8) {
        video.currentTime = 8.8;
        isReversing = false;
        video.play().catch(() => {});
        return;
      }

      video.currentTime = nextTime;
      animId = requestAnimationFrame(stepReverse);
    };

    const handleTimeUpdate = () => {
      // Ping-pong yoyo playback: play forward to 9.8s, then smoothly reverse play to 8.8s and repeat!
      if (video.currentTime >= 9.8 && !isReversing) {
        isReversing = true;
        video.pause();
        lastTime = performance.now();
        animId = requestAnimationFrame(stepReverse);
      }

      // Objects start shrinking at t ~ 4.8s in the video, leaving the right side empty
      if (video.currentTime >= 4.8 && !isFizzyForming) {
        setIsFizzyForming(true);
        setTimeout(() => {
          setIsFizzyComplete(true);
        }, 3200);
      }
    };

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    const handleEnded = () => {
      if (!isReversing) {
        isReversing = true;
        video.pause();
        video.currentTime = Math.min(video.currentTime, 9.8);
        lastTime = performance.now();
        animId = requestAnimationFrame(stepReverse);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);

    if (video.readyState >= 2) {
      setIsVideoLoaded(true);
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
    };
  }, [videoRef, isFizzyForming]);

  return (
    <section
      ref={ref}
      id="product-video-section"
      className="w-full bg-white text-black rounded-t-[3rem] sm:rounded-t-[4rem] md:rounded-t-[5rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.12)] -mt-8 sm:-mt-12 md:-mt-16 pt-5 sm:pt-7 md:pt-9 pb-8 sm:pb-12 overflow-hidden"
    >
      {/* Continuous Wavy Ribbon Marquee (Interactive & Looping) */}
      <div className="w-full relative z-30 overflow-hidden -mt-4 sm:-mt-6 md:-mt-8 mb-4 sm:mb-6 pointer-events-auto">
        <TextLoop
          text="BASECLUB ✦ STREAMING SOCIALFI ON BASE ✦ EARN $CLUB EVERY SECOND ✦ 100% CREATOR OWNED ✦ REAL-TIME ON-CHAIN YIELD ✦ STAKE TO EARN"
          shape="wave"
          speed={48}
          direction="forward"
          curviness={22}
          fontSize={16}
          fontWeight={900}
          letterSpacing={2}
          uppercase
          ribbon
          ribbonColor="#0038FF"
          color="#CCFF00"
          ribbonWidth={42}
          edgeFade={0.2}
          draggable
          pauseOnHover
          viewBox="0 170 1200 180"
          className="cursor-grab active:cursor-grabbing select-none"
        />
      </div>

      {/* Editorial Header placed neatly ABOVE the video with dynamic text scaling */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-3 sm:mb-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.9, y: 0 }}
          animate={
            isFizzyForming
              ? {
                  scale: 1.14,
                  opacity: 1,
                  y: 8,
                  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
                }
              : isVideoLoaded || isInView
              ? {
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
                }
              : { scale: 0.9, opacity: 0.9, y: 0 }
          }
          style={{ transformOrigin: 'left bottom' }}
          className="max-w-3xl"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-[#111111] leading-[1.02]"
            style={{ fontFamily: '"Arial Black", Impact, sans-serif' }}
          >
            <Shuffle
              text="TOUCH REALITY."
              tag="span"
              effect="slide"
              duration={0.35}
              triggerOnHover={true}
              triggerOnce={false}
              accentColor="#0038FF"
              className="block cursor-pointer select-none"
            />
            <span className="text-[#0038FF]">
              <Shuffle
                text="STREAM ON BASE."
                tag="span"
                effect="slide"
                duration={0.35}
                triggerOnHover={true}
                triggerOnce={false}
                accentColor="#CCFF00"
                className="block cursor-pointer select-none"
              />
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Video & Fizzy Knot Section */}
      <div className="w-full relative bg-white overflow-hidden">
        {/* Pure, Unobstructed Video Player Canvas */}
        <motion.div
          animate={{
            y: isFizzyForming ? -65 : 0,
          }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative flex justify-center items-center bg-white"
        >
          <video
            ref={videoRef}
            src="/hero-card-video.mp4"
            playsInline
            muted
            loop={false}
            preload="auto"
            poster="/hero-video-poster.jpg"
            className="w-full h-auto block object-contain max-w-[1920px] mx-auto bg-white"
            style={{ mixBlendMode: 'multiply' }}
          />

          {/* Fizzy Knot - Small, strictly on the right side, starting from the full right with 0 gap, NOT overlaying video */}
          <div className="absolute right-0 top-[20%] sm:top-[18%] md:top-[15%] w-[180px] sm:w-[240px] md:w-[320px] lg:w-[380px] aspect-[870/590] pointer-events-none z-10">
            {/* Subtle Ambient Glow behind the knot */}
            <motion.div
              animate={{
                opacity: isFizzyForming ? [0.15, 0.28, 0.18] : 0,
                scale: isFizzyForming ? [0.92, 1.06, 0.96] : 0.8,
              }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 bg-[#0038FF]/20 blur-2xl rounded-full pointer-events-none"
            />

            <motion.svg
              viewBox="480 -20 870 590"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_8px_20px_rgba(0,56,255,0.25)]"
            >
              <motion.path
                d={FIZZY_KNOT_PATH}
                stroke="#0038FF"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  isFizzyForming
                    ? {
                        pathLength: 1,
                        opacity: 1,
                        transition: {
                          pathLength: {
                            duration: 3.2,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: { duration: 0.3 },
                        },
                      }
                    : { pathLength: 0, opacity: 0 }
                }
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================
// Main Hero & Page Component
// ============================================================
export const Component = () => {
  const [heroMaterial, setHeroMaterial] = useState<'balloon' | 'chrome' | 'jelly' | 'clay'>('balloon');
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Cinematic one-way purple card exit: once it swoops out on scroll, it never returns on up-scrolling
  const [cardExited, setCardExited] = useState(false);
  const cardExitedRef = useRef(false);
  const hasTriggeredVideo = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;

          // Scroll triggers card flight, and video plays only after the card dives down
          if (scrollY > 15) {
            if (!cardExitedRef.current) {
              cardExitedRef.current = true;
              setCardExited(true);

              // Delay video start until the card has completed its flight and plunges down off the screen (~950ms)
              if (videoRef.current && !hasTriggeredVideo.current) {
                hasTriggeredVideo.current = true;
                setTimeout(() => {
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                    const playPromise = videoRef.current.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(() => {});
                    }
                  }
                }, 950);
              }
            }
          }
          // Note: When scrollY <= 15, we do NOT reset cardExited: once exited, it stays exited.

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0038FF] flex flex-col font-sans selection:bg-[#CCFF00] selection:text-black relative w-full">

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="flex flex-col relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

        {/* Subtle Ambient Interactive Ribbons (React Bits) */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-55">
          <Ribbons
            colors={['#0024A3', '#1A4DFF', '#7094FF']}
            thickness={26}
            length={1.2}
            spread={14}
            stiffness={0.45}
            bounce={0.4}
            shape="lens"
            wave={0.12}
            softness={0.7}
            fade={true}
            opacity={0.5}
            backgroundColor="transparent"
          />
        </div>

        {/* Navbar */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-10 md:py-6 max-w-[1440px] mx-auto w-full">
          <Link href="/" className="flex items-center gap-2.5 group select-none">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-sm bg-white p-0.5 border border-white/20 group-hover:scale-105 transition-transform">
              <Image
                src="/site-logo.jpeg"
                alt="BaseClub Logo"
                fill
                sizes="36px"
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="flex items-center gap-1">
              <div className="bg-white text-black font-black tracking-tight text-xs md:text-sm px-2.5 py-1 rounded-xl shadow-sm">
                BASE
              </div>
              <div className="bg-[#CCFF00] text-black font-black text-xs md:text-sm px-2.5 py-1 rounded-full border-[1.5px] border-white shadow-sm">
                CLUB
              </div>
            </div>
          </Link>

          {/* Desktop Links + Material Switcher */}
          <div className="hidden md:flex items-center space-x-2">
            {/* Desktop Links + Book a Call with StarBorder */}
            {[
              { label: 'Features', href: '/features' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'Reviews', href: '/reviews' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}

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
              hover="brighten"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 transition-all hover:scale-[1.02]"
            >
              Book call
            </StarBorder>

            {/* Micro Material Switcher for ElasticMesh */}
            <div className="flex items-center gap-1 ml-3 px-2 py-1 bg-black/20 backdrop-blur-md rounded-full border border-white/15">
              {(['balloon', 'chrome', 'jelly', 'clay'] as const).map((mat) => (
                <button
                  key={mat}
                  onClick={() => setHeroMaterial(mat)}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all ${
                    heroMaterial === mat
                      ? 'bg-[#CCFF00] text-black shadow-sm'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Inflatable Connect Wallet Button */}
          <div className="relative w-36 sm:w-40 h-10 sm:h-11">
            <ElasticMesh
              text="CONNECT"
              material="chrome"
              color="#FFFFFF"
              inflate={0.9}
              stiffness={0.55}
              wobble={0.65}
              grabRadius={40}
              press={0.7}
              stretch={0.6}
              shadow={0.35}
              theme="dark"
              fontFamily='"Arial Black", Impact, sans-serif'
              fontWeight={900}
              className="cursor-pointer hover:scale-105 transition-transform"
            />
          </div>
        </nav>

        {/* Hero Body with generous, calibrated bottom spacing so hero elements are never cut off */}
        <main className="relative z-10 pt-2 pb-24 sm:pb-32 md:pb-40 lg:pb-48 px-4 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center z-10 my-1">

            {/* Text Stack */}
            <div className="w-full flex flex-col items-center relative z-10 space-y-0">
              
              {/* #CLUB — Powered by ElasticMesh (Interactive 3D Inflatable Tactile Text) */}
              <div className="w-full flex justify-start pl-[4%] sm:pl-[10%] md:pl-[18%] relative z-30">
                <div className="w-[300px] sm:w-[460px] md:w-[620px] lg:w-[720px] h-24 sm:h-32 md:h-40 lg:h-48 relative -mb-4 sm:-mb-6 md:-mb-8 select-none">
                  <ElasticMesh
                    text="#CLUB"
                    material={heroMaterial}
                    color="#CCFF00"
                    inflate={1.12}
                    stiffness={0.44}
                    wobble={0.72}
                    grabRadius={80}
                    stretch={0.68}
                    press={0.65}
                    shadow={0.48}
                    theme="dark"
                    fontFamily='"Arial Black", Impact, sans-serif'
                    fontWeight={900}
                    className="cursor-grab active:cursor-grabbing"
                  />
                  <span className="hidden sm:inline-block absolute -top-1 right-4 text-[9px] font-bold tracking-[0.16em] uppercase text-[#CCFF00]/60 pointer-events-none">
                    • Grab or poke to squish
                  </span>
                </div>
              </div>

              {/* SOCIALFI */}
              <div className="w-full flex justify-center relative z-20">
                <h1
                  className="text-[clamp(4.5rem,14vw,200px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase select-none"
                  style={{
                    fontFamily: '"Arial Black", Impact, sans-serif',
                    textShadow: '1px 1px 0 #001A99,2px 2px 0 #001A99,3px 3px 0 #001A99,4px 4px 0 #001A99,5px 5px 0 #001A99,6px 6px 0 #001A99,7px 7px 0 #001A99,8px 8px 0 #001A99,9px 9px 0 #001A99,10px 10px 0 #001A99,11px 11px 0 #001A99,12px 12px 0 #001A99',
                  }}
                >
                  SOCIALFI
                </h1>
              </div>

              {/* PEOPLE */}
              <div className="w-full flex justify-start pl-[12%] md:pl-[28%] relative z-10">
                <h1
                  className="text-[clamp(4rem,11vw,150px)] font-black leading-[0.85] tracking-tighter text-white m-0 p-0 uppercase select-none"
                  style={{
                    fontFamily: '"Arial Black", Impact, sans-serif',
                    textShadow: '1px 1px 0 #001A99,2px 2px 0 #001A99,3px 3px 0 #001A99,4px 4px 0 #001A99,5px 5px 0 #001A99,6px 6px 0 #001A99,7px 7px 0 #001A99,8px 8px 0 #001A99,9px 9px 0 #001A99,10px 10px 0 #001A99,11px 11px 0 #001A99,12px 12px 0 #001A99',
                  }}
                >
                  PEOPLE
                </h1>
              </div>
            </div>

            {/* Absolute Overlays with the Pure 3D Interactive Vertical Cards */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">

              {/* 3D Purple $CLUB Genesis Vertical Card — Traced Red Arrow Flight Path (Up to 'S', loop left, dive down) */}
              <motion.div
                className="absolute z-30 pointer-events-auto"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: -6 }}
                animate={
                  !cardExited
                    ? {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotate: -6,
                        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                      }
                    : {
                        // Exact trajectory traced with red arrows in user screenshot:
                        // 1. Ascends up and right towards 'S' of SOCIAL
                        // 2. Peaks and loops above 'S'
                        // 3. Banks sharply to the left
                        // 4. Plunges down and left off the screen into the video section
                        x: ['0px', '80px', '110px', '-30px', '-240px', '-700px'],
                        y: ['0px', '-130px', '-260px', '-230px', '50px', '520px'],
                        rotate: [-6, 8, 14, -10, -32, -54],
                        scale: [1, 1.08, 1.12, 1.06, 0.98, 0.90],
                        opacity: 1, // Completely solid, NO FADE!
                        transition: {
                          duration: 1.25,
                          times: [0, 0.22, 0.42, 0.64, 0.84, 1],
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      }
                }
                style={{
                  bottom: '8%',
                  left: '6%',
                }}
              >
                <Interactive3DCard
                  imgSrc="/card1-vertical.png"
                  alt="3D Purple Genesis Card"
                  initialRotate={-6}
                  verticalAngle={-4}
                  floatAmplitude={12}
                  floatDuration={5.2}
                  delay={0}
                  glowColor="rgba(138, 123, 228, 0.45)"
                  tag="✦ $CLUB Genesis • Base L2"
                />
              </motion.div>

              {/* 3D Matte Black Contactless Card — Right Side */}
              <div className="absolute top-[2%] right-[2%] md:right-[12%] z-30 pointer-events-auto">
                <Interactive3DCard
                  imgSrc="/card2-vertical.png"
                  alt="3D Matte Black Contactless Card"
                  initialRotate={8}
                  verticalAngle={5}
                  floatAmplitude={14}
                  floatDuration={6}
                  delay={0.8}
                  glowColor="rgba(0, 0, 0, 0.7)"
                  tag="✦ Contactless NFC • 23,422 pts"
                />
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* ── RAW VIDEO (Immediately after hero, clean white background, no frame, seamlessly looped last 1s, with continuous knot & sweep line across text space) ─── */}
      <RawVideoSection videoRef={videoRef} />

      {/* ── CROWD CANVAS (Skiper39 OpenPeeps Crowd Walking Animation - Placed below fizzy lines & text) ─── */}
      <section className="w-full h-[75vh] sm:h-[85vh] bg-white relative z-20 overflow-hidden border-b border-black/5">
        <Skiper39
          src="/openpeeps-sheet.png"
          rows={15}
          cols={7}
          badge="LIVE CROWD ON BASE"
          className="h-full"
        />
      </section>

      {/* ── CONTINUOUS SCROLL STORY SECTION (Svg Follow Scroll Line Path - Continues the animation across pages) ─── */}
      <Skiper19
        hideTitle={true}
        brandName="baseclub.eth"
        badge="02 // THE ON-CHAIN STORY"
        strokeColor="#0038FF"
        bgColor="bg-white"
        textColor="text-[#111111]"
        climaxBg="bg-[#0F0F0F]"
        climaxTextColor="text-white"
        className="-mt-2"
        containerHeight="h-[260vh]"
        locationText={
          <>
            Base L2 Mainnet <br />
            NTAG 424 DNA Active
          </>
        }
        dateText={
          <>
            Proof of Tap <br />
            Instant 400ms Handshake
          </>
        }
        tierLeft={
          <>
            Physical Contactless <br />
            Hardware Verification
          </>
        }
        tierRight={
          <>
            $CLUB Streaming <br />
            100% Creator Owned
          </>
        }
      />

      {/* Preserved static protocol cards kept in code without displaying, as requested */}
      <div style={{ display: 'none' }}>
        <section className="bg-white text-black px-6 py-6 md:px-10 md:py-8 relative z-20 w-full border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#0F0F0F] text-white rounded-2xl p-4 md:px-6 md:py-3.5 mb-6 flex flex-col md:flex-row items-center justify-between gap-3 border border-white/10 shadow-md">
              <div className="flex items-center gap-3.5 w-full md:w-auto">
                <div className="w-8 h-8 rounded-xl bg-[#CCFF00] text-black flex items-center justify-center font-black shrink-0 shadow-sm">
                  <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                      Smart Hardware Security
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                    <span className="text-[10px] text-white/50 font-mono">NTAG 424 DNA Active</span>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-white/90 flex items-center gap-1.5 flex-wrap mt-0.5">
                    <span>Contactless physical card for</span>
                    <RotatingText
                      texts={[
                        'Smart Attendance',
                        'Hardware-Level Security',
                        'VIP Lounge Access',
                        'Proof-of-Presence Check-In',
                        'Tamper-Proof Authentication'
                      ]}
                      effect="slide"
                      direction="up"
                      highlight={true}
                      highlightColor="#0038FF"
                      staggerDuration={0.025}
                      rotationInterval={2200}
                      splitLevelClassName="overflow-hidden pb-0.5"
                      mainClassName="font-mono text-xs md:text-sm font-bold px-2 py-0.5 rounded-md inline-flex text-white"
                    />
                  </div>
                </div>
              </div>

              <StarBorder
                as={Link}
                href="/book"
                theme="dark"
                color="#CCFF00"
                trailColor="#0038FF"
                radius={12}
                thickness={1.2}
                duration={3.5}
                sparkle={true}
                hover="lap"
                className="text-xs font-bold py-2 px-3.5 text-[#CCFF00] bg-white/5 border border-white/10 shrink-0 self-start md:self-auto flex items-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
                <span>Book founder demo →</span>
              </StarBorder>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              <div className="bg-[#F8F9FA] rounded-[1.75rem] p-5 md:p-6 flex flex-col items-center text-center relative h-56 border border-gray-100 hover:border-gray-200 transition-colors">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#0038FF] uppercase mb-1">01 / Streaming</span>
                <h3 className="text-base md:text-lg uppercase leading-tight mb-1.5 font-black text-[#111111]">
                  SUBSCRIBE<br />TO CREATORS
                </h3>
                <p className="text-[10px] md:text-xs text-black/60 font-semibold mb-auto">
                  <VariableProximity
                    label="Real-time on-chain yield streams every second"
                    fromFontVariationSettings="'wght' 500, 'opsz' 10"
                    toFontVariationSettings="'wght' 800, 'opsz' 28"
                    toColor="#0038FF"
                    radius={50}
                    falloff="gaussian"
                    smoothing={0.2}
                  />
                </p>
                <div className="relative w-full flex justify-center mt-3">
                  <div className="flex items-center bg-[#0038FF] rounded-xl p-2 pr-14 text-white shadow-md relative z-10">
                    <div className="w-7 h-7 rounded-lg mr-2.5 overflow-hidden flex-shrink-0 relative border border-white/20">
                      <Image src="/card1-vertical.png" alt="Card preview" fill className="object-contain" sizes="28px" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-bold leading-none">baseclub.eth</p>
                      <p className="text-[8px] text-white/70 leading-none mt-1">23,422 points</p>
                    </div>
                  </div>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#CCFF00] text-black font-black text-[9px] px-2.5 py-1.5 rounded-lg z-20 shadow-sm">
                    +20.24 $CLUB
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-[1.75rem] p-5 md:p-6 flex flex-col items-center text-center relative h-56 border border-gray-100 hover:border-gray-200 transition-colors">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#0038FF] uppercase mb-1">02 / High Yield</span>
                <h3 className="text-base md:text-lg uppercase leading-tight mb-1.5 font-black text-[#111111]">
                  CHOOSE HIGH<br />$CLUB REWARDS
                </h3>
                <p className="text-[10px] md:text-xs text-black/60 font-semibold mb-auto">
                  <VariableProximity
                    label="Dynamic tiered rewards with instant contactless claim"
                    fromFontVariationSettings="'wght' 500, 'opsz' 10"
                    toFontVariationSettings="'wght' 800, 'opsz' 28"
                    toColor="#0038FF"
                    radius={50}
                    falloff="gaussian"
                    smoothing={0.2}
                  />
                </p>
                <div className="relative w-full flex justify-center items-center mt-3 gap-2">
                  <div className="flex items-center bg-[#0038FF] rounded-full px-3.5 py-1.5 text-white shadow-md">
                    <span className="bg-white/20 text-white font-bold text-xs px-2.5 py-0.5 rounded-full mr-2">
                      20.4220
                    </span>
                    <span className="font-bold text-[11px]">$CLUB</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#111111] text-[#CCFF00] px-3 py-1.5 rounded-full shadow-md">
                    <ContactlessWave className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black tracking-wider uppercase">NFC Tap</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F8F9FA] rounded-[1.75rem] p-5 md:p-6 flex flex-col items-center text-center relative h-56 border border-gray-100 hover:border-gray-200 transition-colors">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#0038FF] uppercase mb-1">03 / Staking</span>
                <h3 className="text-base md:text-lg uppercase leading-tight mb-1.5 font-black text-[#111111]">
                  STAKE $CLUB<br />FOR CREATORS
                </h3>
                <p className="text-[10px] md:text-xs text-black/60 font-semibold mb-auto">
                  <VariableProximity
                    label="Compounded returns deposited monthly on Base L2"
                    fromFontVariationSettings="'wght' 500, 'opsz' 10"
                    toFontVariationSettings="'wght' 800, 'opsz' 28"
                    toColor="#0038FF"
                    radius={50}
                    falloff="gaussian"
                    smoothing={0.2}
                  />
                </p>
                <div className="flex flex-col items-center bg-[#CCFF00] rounded-2xl px-5 py-2.5 text-black shadow-md mt-3 w-full max-w-[210px]">
                  <div className="flex items-center justify-between w-full mb-0.5">
                    <span className="text-[8px] font-bold uppercase tracking-wider text-black/70">Est. Monthly</span>
                    <span className="text-[8px] font-black uppercase bg-black text-[#CCFF00] px-1.5 py-0.5 rounded">48.2% APY</span>
                  </div>
                  <p className="text-lg font-black tracking-tight leading-none text-[#111111]">188.34257 <span className="text-[11px] font-bold text-black/60">$CLUB</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ── THE LIQUID $CLUB CHAMBER (WebGL2 Physics Ballpit) ─── */}
      <AnimatedContent
        distance={36}
        direction="vertical"
        duration={0.8}
        ease="power2.out"
        threshold={0.12}
        initialOpacity={0}
        animateOpacity={true}
      >
        <TokenChamber />
      </AnimatedContent>

      {/* ── SITE FOOTER ────────────────────────────────────── */}
      <SiteFooter />
    </div>
  );
};
