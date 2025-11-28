import Image from "next/image";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  url?: string;
  logo?: string;
  description?: string[];
  type: "work" | "education";
}

const experiences: ExperienceItem[] = [
  {
    company: "TATEEDA | GLOBAL",
    role: "Senior Software Engineer",
    period: "September 2022 - Present (3 years 3 months)",
    location: "San Diego, California, United States",
    url: "https://tateeda.com/",
    logo: "/tateeda-logo.png",
    description: [
      "Built and maintained scalable full-stack applications for healthcare clients, improving performance and reliability.",
      "Developed APIs, integrated third-party services, and optimized backend workflows.",
      "Created responsive front-end features using modern frameworks, enhancing user experience.",
      "Collaborated closely with product and design teams to deliver high-impact features on time.",
      "Mentored junior engineers, promoting best practices and improving team productivity.",
    ],
    type: "work",
  },
  {
    company: "WorkFusion",
    role: "Full Stack Engineer",
    period: "October 2019 - August 2022 (2 years 11 months)",
    location: "New York, New York, United States",
    url: "https://www.workfusion.com/",
    logo: "/workfusion-logo.png",
    description: [
      "Developed full stack solutions for fintech applications, focusing on security and scalability.",
      "Improved system performance and optimized backend workflows to handle higher transaction loads.",
      "Built and maintained user-facing features that improved customer experience and engagement.",
      "Worked cross-functionally with designers and product managers to ensure smooth feature delivery.",
    ],
    type: "work",
  },
  {
    company: "Infurm Technologies LLC.",
    role: "Software Developer",
    period: "June 2018 - September 2019 (1 year 4 months)",
    location: "Las Vegas, Nevada, United States",
    url: "http://www.infurm.com",
    logo: "/infurm-logo.png",
    description: [
      "Built and maintained ecommerce platforms with a focus on responsive frontend and robust backend.",
      "Optimized database queries and API endpoints for faster performance.",
      "Collaborated with team members to design and implement new features efficiently.",
    ],
    type: "work",
  },
  {
    company: "University of Melbourne",
    role: "Bachelor's degree, Computer Science",
    period: "August 2014 - May 2018",
    type: "education",
    description: [
      "Gained comprehensive training in core computer science principles, including data structures, systems architecture, and software design patterns.",
      "Collaborated with cross-functional student teams to deliver end-to-end software projects, developing strong problem-solving, communication, and technical execution skills.",
    ],
  },
];

import AnimatedSection from "./AnimatedSection";
import TypewriterText from "./TypewriterText";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-4 sm:px-6 lg:px-8 relative bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedSection direction="up" delay={0}>
          <div className="mb-16 text-center">
            <span className="text-sm font-medium text-slate-600 uppercase tracking-wider mb-4 block">
              Career
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-700 mb-4">
              Experience & Education
            </h2>
          </div>
        </AnimatedSection>
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Left side */}
          <div className="absolute left-[35%] md:left-[30%] top-0 bottom-0 w-0.5 bg-slate-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const periodParts = exp.period.split(" - ");
              const startDate = periodParts[0];
              const endDate = periodParts[1]?.split(" (")[0] || "Current";
              
              return (
                <AnimatedSection key={index} direction="up" delay={index * 100}>
                  <div className="relative flex items-start gap-6 md:gap-12">
                    {/* Left Side - Company Name and Dates */}
                    <div className="w-full md:w-[30%] md:pr-12 text-right">
                      {/* Timeline Dot */}
                      <div className="absolute left-[35%] md:left-[30%] transform -translate-x-1/2 -translate-y-1 z-10">
                        <div className="w-3 h-3 rounded-full bg-slate-500 border-2 border-white"></div>
                      </div>

                      {/* Company/Institution Name */}
                      {exp.url ? (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-lg md:text-xl font-bold text-slate-700 hover:text-slate-800 transition-colors mb-1 whitespace-nowrap"
                        >
                          <TypewriterText 
                            text={exp.company} 
                            delay={80}
                            className="animate-swipe-right"
                          />
                        </a>
                      ) : (
                        <div className="inline-block text-lg md:text-xl font-bold text-slate-700 mb-1 whitespace-nowrap">
                          <TypewriterText 
                            text={exp.company} 
                            delay={80}
                            className="animate-swipe-right"
                          />
                        </div>
                      )}
                      
                      {/* Dates */}
                      <div className="text-sm text-slate-700 font-semibold animate-swipe-right" style={{ animationDelay: `${index * 200 + 100}ms` }}>
                        <TypewriterText 
                          text={`${startDate} - ${endDate}`} 
                          delay={60}
                        />
                      </div>
                    </div>

                    {/* Right Side - Role and Description */}
                    <div className="w-full md:w-[calc(70%-20px)] md:pl-12 text-slate-700">
                      {/* Job Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-slate-700 mb-4 animate-swipe-left" style={{ animationDelay: `${index * 200 + 200}ms` }}>
                        <TypewriterText 
                          text={exp.role} 
                          delay={70}
                        />
                      </h3>
                      
                      {/* Responsibilities - Bulleted List */}
                      {exp.description && exp.description.length > 0 && (
                        <ul className="space-y-2">
                          {exp.description.map((item, itemIndex) => (
                            <li 
                              key={itemIndex} 
                              className="flex items-start gap-3 text-slate-700 text-sm md:text-base leading-relaxed animate-swipe-left"
                              style={{ animationDelay: `${index * 200 + 300 + itemIndex * 100}ms` }}
                            >
                              <span className="text-slate-500 mt-1.5 flex-shrink-0 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

