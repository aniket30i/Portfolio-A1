import mrjister from "@/assets/images/mrjister-summarizer.png";
import coindom from "@/assets/images/coindom.png";
import astrix from "@/assets/images/astrix.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "MrJister",
    year: "2024",
    title: "Chatgpt API Summarizer",
    results: [
      { title: "Summarize websites and articles" },
      { title: "Navigate through previous results" },
      { title: "Summarized by latest gpt model" },
    ],
    link: "https://mrjister.vercel.app/",
    image: mrjister,
  },
  {
    company: "Coin-DOM",
    year: "2024",
    title: "Top 100 Crytocurrency Dashboard",
    results: [
      { title: "Track the major market holding coins" },
      { title: "See price trends over upto 5 years" },
      { title: "Compare your target crytos" },
    ],
    link: "https://coin-dom-two.vercel.app/",
    image: coindom,
  },
  {
    company: "Astrix Events",
    year: "2024",
    title: "Event Promotional and Booking Page",
    results: [
      { title: "Multi-dimensional design" },
      { title: "Subtle animation with Information" },
      { title: "Placeholding for booking form" },
    ],
    link: "https://astrix-aniketsaha.netlify.app/",
    image: astrix,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text  text-center">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 md:pt-12 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${index * 60}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2 tracking-widest text-sm font-bold uppercase">
                    <span>{project.company}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 hover:bg-white/90">
                      Visit Live Site
                      <ArrowUpRight className="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
