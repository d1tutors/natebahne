"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SectionTwo() {
  const ref = useRef<HTMLDivElement>(null);
  // Start almost when entering viewport; finish quickly
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 95%", "end 60%"] });
  // Animated overlay height from full cover to smaller persistent strip
  const cover = useTransform(scrollYProgress, [0, 0.3, 1], [40, 12, 12]);
  const coverHeight = useTransform(cover, (v: number) => `${v}%`);
  // Keep overlay visible for entire duration of this section only
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="min-h-[120vh] text-[#F5F1E6] relative overflow-hidden">
      {/* Content */}
      <div className="relative z-0 mx-auto max-w-[95vw] px-4 md:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-5xl md:text-6xl font-extrabold">Board Games</h2>
            <p className="text-lg leading-relaxed max-w-prose opacity-90">
              Together with my brother, I’ve helped bring five different games to life — from
              Trademarked, our first board game, to Grid, a fully 3D-printed strategy game. Turning
              creative ideas into reality has always been one of my biggest passions.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-96">
            <Image src="/placeholder.svg" alt="Placeholder" fill className="object-cover rounded-lg opacity-90" />
          </div>
        </div>
        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-5xl md:text-6xl font-extrabold">2x Regional Champion</h2>
            <p className="text-lg leading-relaxed max-w-prose opacity-90">
              I've competed in multiple MESA competitions, earning first place at regionals in the MESA
              Machine event in both 2023 and 2024, and second place in the Moon Base competition in 2024.
            </p>
          </div>
          <div className="relative w-full h-72 md:h-96">
            <Image src="/placeholder.svg" alt="Placeholder" fill className="object-cover rounded-lg opacity-90" />
          </div>
        </div>

        {/* In the works */}
        <div className="mt-40 mb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-5xl md:text-6xl font-extrabold">In the works</h2>
            <p className="text-lg leading-relaxed max-w-prose opacity-90">
              Whoscanned is a passion project my brother and I have been developing, inspired by a unique
              technology we discovered while experimenting with QR codes. Its goal is simple — to provide
              insights and statistics that answer the question: who scanned?
            </p>
          </div>
          <div className="relative w-full h-72 md:h-96">
            <Image src="/placeholder.svg" alt="Placeholder" fill className="object-cover rounded-lg opacity-90" />
          </div>
        </div>
      </div>

      {/* Overlay removed; handled by Hero's stationary gradient mask */}
    </div>
  );
}
