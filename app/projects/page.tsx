import Header from "@/components/projects/header";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const labeledGroups = [
  {
    label: "Websites",
    projects: [
      {
        title: "Portfolio Redesign",
        image: "/placeholder-actual.png",
        tech: ["Next.js", "Tailwind", "Vercel"],
        description: "A personal portfolio showcasing design and dev skills.",
        live: "#",
        github: "#",
      },
      {
        title: "Blog Platform",
        image: "/placeholder-actual.png",
        tech: ["Astro", "Markdown", "Tailwind"],
        description: "A fast, content-first blog system with MDX support.",
        live: "#",
        github: "#",
      },
      {
        title: "Landing Page Kit",
        image: "/placeholder-3.png",
        tech: ["HTML", "CSS", "GSAP"],
        description: "A motion-rich landing page starter for product launches.",
        live: "#",
        github: "#",
      },
    ],
  },
  {
    label: "Mobile Apps",
    projects: [
      {
        title: "Task Manager App",
        image: "/placeholder-2.png",
        tech: ["React Native", "Firebase", "Framer Motion"],
        description: "A sleek task manager with real-time sync and animations.",
        live: "#",
        github: "#",
      },
      {
        title: "Freelance CRM",
        image: "/placeholder-2.png",
        tech: ["Expo", "Firebase", "Chart.js"],
        description:
          "Lightweight CRM for managing freelance clients and leads.",
        live: "#",
        github: "#",
      },
      {
        title: "Workout Tracker",
        image: "/placeholder-3.png",
        tech: ["Flutter", "SQLite", "Provider"],
        description: "A minimalist app for tracking workouts and progress.",
        live: "#",
        github: "#",
      },
    ],
  },
  {
    label: "AI Models",
    projects: [
      {
        title: "AI Assistant UI",
        image: "/placeholder-actual.png",
        tech: ["React", "OpenAI API", "Tailwind"],
        description: "Conversational UI for multi-agent SaaS prototypes.",
        live: "#",
        github: "#",
      },
      {
        title: "Image Classifier",
        image: "/placeholder-2.png",
        tech: ["Python", "TensorFlow", "Streamlit"],
        description: "A web-based tool for classifying uploaded images.",
        live: "#",
        github: "#",
      },
      {
        title: "Chatbot Template",
        image: "/placeholder-3.png",
        tech: ["Next.js", "LangChain", "Vercel"],
        description: "A starter kit for building custom AI chatbots.",
        live: "#",
        github: "#",
      },
    ],
  },
];

const articles = [
  {
    title: "Designing Emotionally Resonant Interfaces",
    image: "/placeholder-actual.png",
    excerpt:
      "Exploring how micro-interactions and semantic structure shape user emotion and clarity.",
    link: "#",
    date: "Sep 2025",
    tags: ["UX", "Design Systems"],
  },
  {
    title: "Scaling SaaS MVPs with Semantic HTML",
    image: "/placeholder-actual.png",
    excerpt:
      "A practical guide to building accessible, scalable MVPs using semantic markup and Tailwind.",
    link: "#",
    date: "Aug 2025",
    tags: ["Frontend", "Accessibility"],
  },
  {
    title: "Teaching Code with Empathy",
    image: "/placeholder-actual.png",
    excerpt:
      "Lessons from building bootcamp templates that prioritize clarity, warmth, and beginner trust.",
    link: "#",
    date: "Jul 2025",
    tags: ["Education", "Templates"],
  },
];

const Work = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-[70px] w-full flex items-center justify-center py-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-300 italic leading-tight text-center">
          Selected <br className="hidden md:block" /> Works
        </h1>
      </div>

      {/* Projects Section */}
      {labeledGroups.map((group, index) => (
        <section key={index} className="w-full px-4 py-8 space-y-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm uppercase tracking-wide text-gray-400 font-medium">
              {group.label}
            </span>
            <div className="flex-grow h-px bg-gray-600" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {group.projects.map((project, idx) => (
              <div key={idx} className="flex flex-col text-gray-300 space-y-4">
                <div className="relative group w-full h-[250px] overflow-hidden rounded-md shadow-md">
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex space-x-4 h-[150px]">
                    <div className="flex items-end gap-2">
                      <Link
                        href={project.live}
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} live site`}
                        className="text-sm px-4 py-2 bg-black/70 text-white border border-white/30 rounded hover:bg-black/90 transition flex items-center gap-2"
                      >
                        <FaArrowUpRightFromSquare />
                        <span>Live</span>
                      </Link>
                      <Link
                        href={project.github}
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} GitHub repository`}
                        className="text-sm px-4 py-2 bg-black/70 text-white border border-white/30 rounded hover:bg-black/90 transition flex items-center gap-2"
                      >
                        <FaGithub />
                        <span>Github</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="text-left space-y-2 px-1">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-400">
                    {project.tech.join(" • ")}
                  </p>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
      <hr className="border-t border-gray-700 my-8" />
      <div className="w-full px-4 py-16 flex items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-300 italic text-center">
          Articles & Writing
        </h2>
      </div>
      {/* Articles Section */}
      <section className="w-full px-4 py-12 space-y-12">
        <div className="flex items-center space-x-4">
          <span className="text-sm uppercase tracking-wide text-gray-400 font-medium">
            Articles & Writing
          </span>
          <div className="flex-grow h-px bg-gray-600" />
        </div>

        {articles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start gap-6 text-gray-300 border-b border-[#333] pb-10"
          >
            <div className="w-full md:w-[40%] h-[160px] overflow-hidden rounded-md shadow-sm">
              <Image
                src={article.image}
                alt={`Cover for ${article.title}`}
                width={500}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="flex flex-col space-y-2 w-full md:w-[60%]">
              <Link href={article.link} className="group">
                <h2 className="text-lg font-semibold group-hover:text-white transition-colors duration-200">
                  {article.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-400">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>{article.date}</span>
                <span>{article.tags.join(" • ")}</span>
              </div>
              <Link
                href={article.link}
                className="text-sm text-blue-400 hover:underline mt-1"
              >
                Read full article →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Work;
