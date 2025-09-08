"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web Development",
    description:
      "I build scalable, responsive, and modern websites with a strong focus on performance, usability, and clean architecture. From frontend to backend, I ensure seamless digital experiences.",
    features: [
      "Responsive design for all devices",
      "SEO-friendly architecture",
      "Optimized performance & accessibility",
    ],
    image: "/placeholder-actual.png",
    tech: ["Next.js", "React", "Tailwind CSS", "Node.js", "MySQL"],
  },
  {
    title: "Software Testing",
    description:
      "Ensuring software quality through thorough manual and automated testing. I design effective test cases, perform detailed execution, and leverage automation frameworks for reliability and faster delivery.",
    features: [
      "Comprehensive manual test cases",
      "Automation with Selenium & Cypress",
      "Detailed reporting & defect tracking",
    ],
    image: "/placeholder-2.png",
    tech: ["Manual Testing", "Automation", "Selenium", "JUnit", "Cypress"],
  },
  {
    title: "API Development",
    description:
      "I create robust and secure APIs that power applications with seamless communication, scalability, and clean architecture for long-term maintainability.",
    features: [
      "REST & GraphQL APIs",
      "Secure authentication & authorization",
      "Scalable and well-documented endpoints",
    ],
    image: "/placeholder-3.png",
    tech: ["REST", "GraphQL", "Express.js", "Postman", "Swagger"],
  },
];

export default function ServiceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>(
      containerRef.current.querySelectorAll(".service-block")
    );

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center px-6 lg:px-20 bg-white text-black overflow-hidden">
  {/* Section Separator */}
  <div className="w-full max-w-7xl mb-12 flex items-center gap-4">
    <span className="text-md font-semibold text-gray-500 uppercase tracking-wide">
      My Services
    </span>
    <div className="flex-1 h-px bg-gray-300" />
  </div>

  {/* Decorative background grid */}
  <div className="absolute top-10 inset-0 pointer-events-none">
    <div className="w-full h-full opacity-[0.04] bg-[linear-gradient(to_right,#000000,transparent_1px),linear-gradient(to_bottom,#000000,transparent_1px)] bg-[size:40px_40px]" />
  </div>

  <div
    ref={containerRef}
    className="relative max-w-7xl mx-auto flex flex-col gap-40 z-10"
  >
    {services.map((service, idx) => (
      <div
        key={service.title}
        className={`service-block opacity-0 grid md:grid-cols-2 gap-16 items-center min-h-screen py-20 ${
          idx % 2 === 1 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-wide text-sm font-medium text-gray-500 mb-2">
            What I Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
            {service.title}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-lg">
            {service.description}
          </p>

          {/* Feature list */}
          <ul className="list-disc list-inside text-gray-500 mb-6 space-y-1">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {/* Minimalist tech stack with hover */}
          <div className="flex flex-wrap gap-3 mb-6">
            {service.tech.map((tech) => (
              <span
                key={tech}
                className="text-gray-700 text-sm font-medium border border-gray-300 px-2 py-0.5 rounded-md cursor-default hover:border-amber-600 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Minimal yet visible CTA */}
          <Link
            href="#"
            className="inline-block w-max px-4 py-1 text-sm font-medium text-amber-600 border border-amber-600 rounded hover:bg-amber-50 transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div className="relative group w-[480px] h-[400px] md:w-[480px] md:h-[400px]">
            <Image
              fill
              src={service.image}
              alt={service.title}
              className="rounded-xl shadow-2xl w-full object-fill"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-xl ring-2 ring-black/10 group-hover:ring-black/20 transition-all duration-300" />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  );
}
