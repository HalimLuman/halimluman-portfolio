import Navbar from "@/components/home/navbar";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <>
    <Navbar />
    <main className="bg-black text-gray-300 min-h-screen font-sans">
      {/* Hero */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center px-4">
  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
    Halim Luman
  </h1>
  <p className="text-lg md:text-xl text-gray-400 max-w-xl">
    I build digital experiences that feel intentional, human, and quietly powerful.
  </p>
  <p className="text-sm text-gray-500 mt-2 max-w-md">
    QA engineer by discipline, fullstack developer by craft, systems thinker by nature.
  </p>
  <div className="mt-6 flex gap-4">
    <Link href="#contact" className="text-sm px-4 py-2 border border-gray-600 rounded hover:border-white transition">
      Get in Touch
    </Link>
    <Link href="#projects" className="text-sm px-4 py-2 border border-gray-600 rounded hover:border-white transition">
      View Work
    </Link>
  </div>
</section>


      {/* About */}
      <section id="about" className="px-4 py-20 max-w-3xl mx-auto space-y-6">
  <h2 className="text-2xl font-semibold text-white">About Me</h2>
  <p className="text-gray-400 text-sm leading-relaxed">
    I believe software should feel like a conversation — clear, kind, and purposeful. My work blends QA precision with emotionally resonant design, helping teams ship with confidence and users feel seen.
  </p>
  <p className="text-gray-400 text-sm leading-relaxed">
    Whether I'm refining a hover state or architecting a scalable MVP, I approach each decision with empathy and systems thinking. I care deeply about accessibility, semantic structure, and the quiet details that make interfaces feel alive.
  </p>
</section>


      {/* Experience */}
      <section id="experience" className="px-4 py-20 max-w-3xl mx-auto">
  <h2 className="text-2xl font-semibold text-white mb-12 text-center">Experience</h2>

  <div className="relative border-l border-gray-700 pl-6 space-y-12">
    {/* Entry 1 */}
    <div className="relative">
      <div className="absolute -left-3 top-1 w-2 h-2 bg-white rounded-full" />
      <h3 className="text-lg font-medium text-white">Remote QA Engineer</h3>
      <span className="text-xs text-gray-500">2023 – Present</span>
      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        At a fast-moving SaaS startup, I lead quality efforts across accessibility, edge-case testing, and release readiness. My work ensures that every shipped feature feels stable, inclusive, and intentional.
      </p>
    </div>

    {/* Entry 2 */}
    <div className="relative">
      <div className="absolute -left-3 top-1 w-2 h-2 bg-white rounded-full" />
      <h3 className="text-lg font-medium text-white">Freelance Fullstack Developer</h3>
      <span className="text-xs text-gray-500">2021 – Present</span>
      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        I’ve built MVPs, bootcamp templates, and emotionally resonant interfaces for founders, educators, and indie teams. My focus is always the same: clarity, speed, and user delight.
      </p>
    </div>

    {/* Entry 3 */}
    <div className="relative">
      <div className="absolute -left-3 top-1 w-2 h-2 bg-white rounded-full" />
      <h3 className="text-lg font-medium text-white">Design Mentor & QA Consultant</h3>
      <span className="text-xs text-gray-500">2019 – 2021</span>
      <p className="text-sm text-gray-400 mt-2 leading-relaxed">
        I collaborated with early-stage teams to refine their design systems, improve accessibility, and build QA workflows that scale. I also mentored junior devs on semantic HTML and emotionally intelligent UX.
      </p>
    </div>
  </div>
</section>



      {/* Tech Stack */}
      <section id="tech" className="px-4 py-20 max-w-4xl mx-auto space-y-6">
  <h2 className="text-2xl font-semibold text-white">Tech Stack</h2>
  <p className="text-sm text-gray-400">
    These are the tools I reach for — not just because they’re powerful, but because they help me build with clarity, speed, and care.
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-400 mt-4">
    <span className="border border-gray-600 rounded px-3 py-2 text-center">Next.js</span>
    <span className="border border-gray-600 rounded px-3 py-2 text-center">Tailwind CSS</span>
    <span className="border border-gray-600 rounded px-3 py-2 text-center">React</span>
    <span className="border border-gray-600 rounded px-3 py-2 text-center">TypeScript</span>
    <span className="border border-gray-600 rounded px-3 py-2 text-center">Firebase</span>
    <span className="border border-gray-600 rounded px-3 py-2 text-center">Python</span>
    <span className="border border-gray-600 rounded px-3 py-2 text-center">Framer Motion</span>
    <span className="border border-gray-600 rounded px-3 py-2 text-center">Accessibility</span>
  </div>
</section>


      {/* Projects */}
      <section id="projects" className="px-4 py-20 max-w-6xl mx-auto space-y-12">
  <h2 className="text-2xl font-semibold text-white">Selected Works</h2>
  <p className="text-sm text-gray-400">
    A collection of experiments in clarity, motion, and emotional resonance. Each project is a study in how design and code can feel intentional.
  </p>
  {/* Insert your <Work /> component or grid here */}
</section>


      {/* Contact */}
     <section id="contact" className="px-4 py-20 max-w-3xl mx-auto space-y-6 text-center">
  <h2 className="text-2xl font-semibold text-white">Let’s Connect</h2>
  <p className="text-sm text-gray-400">
    I love thoughtful conversations — whether you're building something meaningful, teaching others, or exploring new ideas. Reach out anytime.
  </p>
  <div className="flex justify-center gap-6 mt-4 text-gray-400">
    <Link href="mailto:halim@example.com" aria-label="Email">
      <FaEnvelope className="hover:text-white transition" />
    </Link>
    <Link href="https://github.com/halimluman" target="_blank" aria-label="GitHub">
      <FaGithub className="hover:text-white transition" />
    </Link>
    <Link href="https://linkedin.com/in/halimluman" target="_blank" aria-label="LinkedIn">
      <FaLinkedin className="hover:text-white transition" />
    </Link>
  </div>
</section>

    </main>
    </>
  );
};

export default Home;
