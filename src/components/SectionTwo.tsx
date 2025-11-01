"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
    <div ref={ref} className="relative overflow-hidden" style={{ color: 'var(--tan)' }}>
      {/* Content */}
      <div className="relative z-0 mx-auto max-w-[96vw] px-4 md:px-6 lg:px-8 py-24 md:py-36">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="space-y-5 order-2 md:order-1 md:flex-1 md:pr-4">
            <h2 className="text-5xl md:text-6xl font-extrabold">Board Games</h2>
            <p className="text-lg leading-relaxed max-w-prose opacity-90">
              Together with my brother, I’ve helped bring five different games to life — from
              Trademarked, our first board game, to Grid, a fully 3D-printed strategy game. Turning
              creative ideas into reality has always been one of my biggest passions.
            </p>
          </div>
          <Link href="/boardgames" className="relative w-full h-72 md:h-96 order-1 md:order-2 md:flex-1 block" data-cursor-view aria-label="View Board Games">
            <Image src="/placeholder.svg" alt="Board Games" fill className="object-cover rounded-lg opacity-90" />
          </Link>
        </div>
        {/* Section 2 */}
        <div className="mt-40 flex flex-col md:flex-row gap-12 items-center">
          <div className="space-y-5 order-2 md:order-1 md:flex-1 md:pr-4">
            <h2 className="text-5xl md:text-6xl font-extrabold">2x Regional Champion</h2>
            <p className="text-lg leading-relaxed max-w-prose opacity-90">
              I've competed in multiple MESA competitions, earning first place at regionals in the MESA
              Machine event in both 2023 and 2024, and second place in the Moon Base competition in 2024.
            </p>
          </div>
          <Link href="/mesa" className="relative w-full h-72 md:h-96 order-1 md:order-2 md:flex-1 block" data-cursor-view aria-label="View MESA achievements">
            <Image src="/placeholder.svg" alt="2x Regional Champion" fill className="object-cover rounded-lg opacity-90" />
          </Link>
        </div>

        {/* In the works */}
        <div className="mt-40 mb-40 flex flex-col md:flex-row gap-12 items-center">
          <div className="space-y-5 order-2 md:order-1 md:flex-1 md:pr-4">
            <h2 className="text-5xl md:text-6xl font-extrabold">In the works</h2>
            <p className="text-lg leading-relaxed max-w-prose opacity-90">
              Whoscanned is a passion project my brother and I have been developing, inspired by a unique
              technology we discovered while experimenting with QR codes. Its goal is simple — to provide
              insights and statistics that answer the question: who scanned?
            </p>
          </div>
          <Link href="/whoscanned" className="relative w-full h-72 md:h-96 order-1 md:order-2 md:flex-1 block" data-cursor-view aria-label="View Whoscanned project">
            <Image src="/placeholder.svg" alt="In the works - Whoscanned" fill className="object-cover rounded-lg opacity-90" />
          </Link>
        </div>
      </div>

      {/* Overlay removed; handled by Hero's stationary gradient mask */}
    </div>
  );
}
