"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    // Load the Lottie animation JSON file
    fetch("/animations/about-animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => {
        console.error("Error loading animation:", err);
        // Fallback: set to null if file doesn't exist
        setAnimationData(null);
      });
  }, []);

  return (
    <section
      id="about"
      className="py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 block">
              About
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-700 mb-4">
              Crafting Solutions
              <br />
              <span className="gradient-text animate-gradient">
                That Scale
              </span>
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lottie Animation */}
          <AnimatedSection direction="left" delay={100}>
            <div className="w-full h-full flex items-center justify-center">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full max-w-md"
                />
              ) : (
                <div className="w-full max-w-md h-96 bg-slate-100 rounded-lg flex items-center justify-center">
                  <p className="text-slate-600 text-sm">Animation will appear here</p>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <AnimatedSection direction="up" delay={200}>
              <p className="text-xl text-slate-700 font-medium">
                I'm a <span className="text-slate-600 font-semibold animate-swipe">Senior Software Engineer</span> with 7 years of experience working
                across the full stack in healthcare, fintech, and ecommerce. I enjoy
                taking complex problems and turning them into simple, reliable
                solutions that feel good to use.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={300}>
              <p className="text-slate-700">
                Whether I'm working on backend services, frontend features, or cloud infrastructure, I focus on <span className="text-slate-600 font-semibold animate-slide-text">clean,
                maintainable code</span> and products that scale smoothly.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={400}>
              <p className="text-slate-700">
                Across three companies, I've helped ship new features, improve
                performance, and modernize legacy systems. I've built APIs,
                optimized databases, created user-facing interfaces, and worked
                on cloud deployments. I like collaborating with product, design, and
                other engineers to move projects forward, and I enjoy mentoring
                teammates when they need support or a second set of eyes.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={500}>
              <p className="text-slate-700 italic">
                I'm drawn to teams that value honest communication, solid
                engineering practices, and building things that actually help people.
                I'm motivated by real-world problems, opportunities to improve both
                the product and the workflow behind it, and environments where
                engineers are trusted to make thoughtful decisions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

