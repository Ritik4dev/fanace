"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";

export interface Skiper19Props {
  title?: React.ReactNode;
  subtitle?: string;
  brandName?: string;
  badge?: string;
  strokeColor?: string;
  bgColor?: string;
  textColor?: string;
  climaxBg?: string;
  climaxTextColor?: string;
  className?: string;
  containerHeight?: string;
  hideTitle?: boolean;
  locationText?: React.ReactNode;
  dateText?: React.ReactNode;
  tierLeft?: React.ReactNode;
  tierRight?: React.ReactNode;
  underlayChildren?: React.ReactNode;
  overlayChildren?: React.ReactNode;
}

const Skiper19: React.FC<Skiper19Props> = ({
  title,
  subtitle = "Scroll down to see the effect",
  brandName = "skiperui.com",
  badge,
  strokeColor = "#0038FF",
  bgColor = "bg-white",
  textColor = "text-[#111111]",
  climaxBg = "bg-[#0F0F0F]",
  climaxTextColor = "text-white",
  className = "",
  containerHeight = "h-[350vh]",
  hideTitle = false,
  locationText,
  dateText,
  tierLeft,
  tierRight,
  underlayChildren,
  overlayChildren,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={ref}
      className={`mx-auto flex ${containerHeight} w-full max-w-full flex-col items-center overflow-hidden ${bgColor} px-4 ${textColor} relative ${className}`}
    >
      {/* Optional Creative Underlay Content (Behind the SVG stroke) */}
      {underlayChildren && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {underlayChildren}
        </div>
      )}

      {/* Hero Intro Section or Direct Continuous Stroke */}
      {!hideTitle ? (
        <div className="mt-28 md:mt-40 relative flex w-fit flex-col items-center justify-center gap-5 text-center">
          {badge && (
            <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase text-black/70 bg-black/5 px-3.5 py-1 rounded-full border border-black/10">
              {badge}
            </span>
          )}

          <h1 className="font-jakarta-sans relative z-10 text-5xl sm:text-7xl font-black tracking-[-0.06em] lg:text-9xl leading-[0.95]">
            {title || (
              <>
                The Stroke <br /> That follows the <br /> Scroll Progress
              </>
            )}
          </h1>

          <p className="font-jakarta-sans relative z-10 max-w-2xl text-base sm:text-xl font-medium text-black/70">
            {subtitle}
          </p>

          {/* The Animated SVG Follow Scroll Line */}
          <LinePath
            className="absolute -right-[40%] sm:-right-[25%] lg:-right-[35%] top-0 z-0 pointer-events-none select-none max-w-none opacity-90"
            scrollYProgress={scrollYProgress}
            strokeColor={strokeColor}
          />
        </div>
      ) : (
        <div className="w-full relative min-h-[30vh] flex flex-col items-center justify-start pt-2">
          {/* Direct continuous line continuing seamlessly from the video above */}
          <LinePath
            className="absolute -right-[40%] sm:-right-[25%] lg:-right-[35%] -top-16 sm:-top-24 z-0 pointer-events-none select-none max-w-none opacity-90"
            scrollYProgress={scrollYProgress}
            strokeColor={strokeColor}
          />
        </div>
      )}

      {/* Optional Creative Overlay Content (Between Hero and Climax) */}
      {overlayChildren && (
        <div className="relative z-20 w-full max-w-5xl mx-auto my-auto pointer-events-auto">
          {overlayChildren}
        </div>
      )}

      {/* Climax Section Emerging From Below */}
      <div className={`rounded-3xl sm:rounded-4xl font-jakarta-sans w-full max-w-7xl mx-auto translate-y-[150vh] sm:translate-y-[180vh] md:translate-y-[200vh] ${climaxBg} p-6 sm:p-10 pb-12 ${climaxTextColor} shadow-2xl relative z-20`}>
        <h2 className="mt-6 sm:mt-10 text-center text-[12vw] sm:text-[15.5vw] font-black leading-[0.88] tracking-tighter lg:text-[16.6vw] select-none">
          {brandName}
        </h2>

        <div className="mt-24 sm:mt-40 md:mt-60 lg:mt-24 flex w-full flex-col items-start gap-6 px-2 font-medium lg:flex-row lg:justify-between border-t border-white/10 pt-6">
          <div className="flex w-full items-center justify-between gap-12 uppercase text-xs sm:text-sm lg:w-fit lg:justify-center">
            <div className="w-fit">
              {locationText || (
                <>
                  punjab, india <br />
                  and online
                </>
              )}
            </div>
            <div className="w-fit text-right lg:text-left">
              {dateText || (
                <>
                  sep 1, 2025 <br />
                  the Moosa pind
                </>
              )}
            </div>
          </div>

          <div className="flex w-full flex-wrap items-center justify-between gap-12 uppercase text-xs sm:text-sm lg:w-fit lg:justify-center">
            <div className="w-fit">
              {tierLeft || (
                <>
                  online <br />
                  free
                </>
              )}
            </div>
            <div className="w-fit text-right lg:text-left">
              {tierRight || (
                <>
                  in person tickets <br />
                  $600
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Skiper19 };
export default Skiper19;

const LinePath = ({
  className,
  scrollYProgress,
  strokeColor = "#C2F84F",
}: {
  className: string;
  scrollYProgress: MotionValue<number> | any;
  strokeColor?: string;
}) => {
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <svg
      width="1278"
      height="2319"
      viewBox="0 0 1278 2319"
      fill="none"
      overflow="visible"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        d="M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
        stroke={strokeColor}
        strokeWidth="20"
        strokeLinecap="round"
        style={{
          pathLength,
          strokeDashoffset: useTransform(pathLength, (value: number) => 1 - value),
        }}
      />
    </svg>
  );
};

