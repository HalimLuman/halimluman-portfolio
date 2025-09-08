"use client";

import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  return (
    <div
      className="relative w-full py-20 flex items-center px-6 lg:px-20 justify-center gap-10"
    >
      {/* Vertical ABOUT label */}
      <div className="hidden sm:flex justify-center items-center relative w-1/7">
        <span className="font-extrabold text-5xl rotate-[-90deg] tracking-wider text-black">
          ABOUT
        </span>
      </div>

      {/* Right Text Content */}
      <div className="flex-1 ml-8 flex flex-col justify-center gap-6  w-6/7">
        <p
          className="text-2xl font-semibold leading-relaxed text-black"
        >
          I’m Halim Luman, a web developer and software tester. I craft
          intuitive, clean digital experiences where every interaction feels
          intentional. I focus on precision and clarity, blending design,
          development, and testing to create seamless solutions that are easy
          to use and understand.
        </p>

        <p
          className="text-2xl font-semibold leading-relaxed text-black"
        >
          Each project I work on is a story of simplicity and functionality —
          technology made human.
        </p>

        {/* Link */}
        <div className="mt-4 text-black">
          <Link
            href="#projects"
            className="font-medium relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 hover:after:w-[100px]"
          >
            See my work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
