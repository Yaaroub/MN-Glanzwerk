// src/components/ServiceCard.jsx
"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import {
  Home,
  Building2,
  SprayCan,
  Sofa,
  Hotel,
  Stethoscope,
  School,
  Sparkles as SparklesIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  home: Home,
  office: Building2,
  moving: SprayCan,
  sofa: Sofa,
  hotel: Hotel,
  hospital: Stethoscope,
  school: School,
  sparkle: SparklesIcon,
};

export default function ServiceCard({ animation, iconKey, title, desc }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (!animation) return;

    fetch(animation)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => {
        console.error("Lottie load error:", err);
      });
  }, [animation]);

  const Icon = iconMap[iconKey] ?? SparklesIcon;

  return (
    <motion.div
      className="group rounded-2xl bg-white/80 backdrop-blur border border-slate-100 shadow-sm hover:shadow-md transition-all p-5 flex flex-col gap-3"
      whileHover={{
        y: -4,
        boxShadow: "0 18px 40px rgba(15, 118, 178, 0.18)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="relative h-14 w-14 flex items-center justify-center">
        {/* Pulsierender Lottie-Hintergrund */}
        {animationData && (
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="h-14 w-14"
          />
        )}

        {/* Weißes Icon in der Mitte */}
        <Icon
          className="absolute h-6 w-6 text-white drop-shadow-sm"
          strokeWidth={1.8}
        />

        {/* Glanz-Stern, erscheint beim Hover */}
        <SparklesIcon
          className="absolute -bottom-1 -right-1 h-4 w-4 text-brand-soft opacity-0 scale-75 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
          strokeWidth={1.8}
        />
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-slate-900 group-hover:text-brand">
          {title}
        </h3>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </motion.div>
  );
}
