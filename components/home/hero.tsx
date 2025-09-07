"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement[]>([]);

  // Spotlight effect following cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate content with GSAP
  useEffect(() => {
    if (nameRef.current && titleRef.current && subtitleRef.current) {
      gsap.from(nameRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      });
    }

    // Animate orbs
    orbsRef.current.forEach((orb, i) => {
      gsap.to(orb, {
        y: -40,
        opacity: 0.15,
        scale: 1.1,
        duration: 12 + Math.random() * 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: Math.random() * 2,
      });
    });
  }, []);

  return (
    <div className="relative flex w-full min-h-screen items-center overflow-hidden bg-black">
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
      </div>

      {/* Spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(251,191,36,0.04), transparent 15%)",
        }}
      />

      {/* Glassmorphic floating orbs */}
      <div className="absolute inset-0 z-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) orbsRef.current[i] = el;
            }}
            className="absolute w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500/10 to-white/5 backdrop-blur-md"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* Background image with subtle glow */}
      <div className="absolute right-0 bottom-0 opacity-15 w-[520px] h-[520px] z-50">
        <Image
          src="/side-headshot-removebg-preview.png"
          alt="Silhouette of Halim"
          className="w-full h-full object-contain mix-blend-soft-light"
          width={420}
          height={420}
          priority
        />
        <div className="absolute inset-0 rounded-full bg-amber-600 opacity-20 blur-3xl"></div>
      </div>

      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-black via-zinc-900/90 to-black" />

      {/* Content */}
      <div className="relative z-20 flex flex-col w-full mx-auto bottom-6 mt-20 gap-10 px-6 lg:px-8 text-center lg:text-left">
        {/* Name */}
        <div ref={nameRef}>
          <span className="text-xl font-semibold tracking-[0.35em] text-amber-500">
            HALIM LUMAN
          </span>
          <div className="h-0.25 w-36 mx-auto lg:mx-0 bg-gradient-to-r from-amber-500 to-transparent mt-2"></div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-snug mx-auto lg:mx-0"
        >
          Web Developer <span className="text-amber-500 font-light">/</span>{" "}
          Software Tester
        </h1>

        {/* Subtitle + Link */}
        <div
          ref={subtitleRef}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-5xl"
        >
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Crafting digital experiences with precision and warmth — merging
            design, development, and testing into interfaces that feel
            timeless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
