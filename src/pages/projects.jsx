import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { PAGE_ROUTES } from '@/configs'
import { ImageContainer } from '@/components';

export default function Projects() {
  const projects = [
    {
      img: "/images/projects/white/izzy-on-white7.jpg",
      title: "EHS Officer — EPPCO Terminal 4 CCTV Installation",
      desc: "Served as the EHS Officer during the CCTV installation at EPPCO Terminal 4. Responsible for pre-work risk assessments, issuing and validating permits-to-work, enforcing PPE and safe work procedures, conducting site inductions and toolbox talks, coordinating safe access for technicians, and overseeing final handover to operations. Ensured compliance with local regulations and client-specific HSE requirements, and documented all safety observations and corrective actions.",
      slides: [
        { img: "/images/projects/white/izzy-on-white7.jpg", caption: "CCTV Installation Site Overview" },
        { img: "/images/projects/white/izzy-on-white2.jpg", caption: "Safety Assessment and Planning Phase" },
        { img: "/images/projects/white/izzy-on-white10.jpg", caption: "Installation Progress and Monitoring" }
      ],
      date: "12th March 2024",
      location: "EPPCO Terminal 4",
      category: "Oil & Gas"
    },
    {
      img: "/images/projects/new-folder/final-work.jpeg",
      title: "Safety Inspector — FPSO Rosebank (petrol jar)",
      desc: "Performed safety inspections on FPSO Rosebank related to the petrol jar operations. Tasks included routine inspections, hazard identification, monitoring confined-space and fuel handling controls, verifying isolation and permit-to-work systems, and raising non-conformance reports where required. Worked closely with operations and contractors to implement corrective actions and improve procedural compliance.",
      slides: [
        { img: "/images/projects/new-folder/night-shift.jpeg", caption: "Night Shift Vessel Inspection" },
        { img: "/images/projects/new-folder/rope-access-material.jpeg", caption: "Rope Access Material Inspection" },
        { img: "/images/projects/new-folder/lifting-gear.jpeg", caption: "Lifting Gear Inspection and Verification" },
        { img: "/images/projects/new-folder/final-work.jpeg", caption: "Completion" }
      ],
      date: "20th June 2024",
      location: "FPSO Rosebank",
      category: "Marine"
    },
    {
      img: "/images/projects/white/izzy-on-white10.jpg",
      title: "EHS Lead — Almarai Kizad Plant Roof Modification",
      desc: "Led EHS activities for the roof modification project at Almarai Kizad plant. Responsibilities covered fall-protection planning, scaffold and edge protection oversight, crane lift coordination, hot-work management and fire-watch arrangements, contractor safety management, and daily safety briefings. Focused on minimizing disruptions to plant operations while maintaining strict adherence to safety standards and ensuring timely incident reporting and mitigation.",
      slides: [
        { img: "/images/projects/new-folder/roof-modification-project.jpeg", caption: "Brief Tool Box Talk" },
        { img: "/images/projects/new-folder/roof-modification2.jpeg", caption: "Tool Box Talk 2" },
        { img: "/images/projects/new-folder/mobile-crane.jpeg", caption: "Crane Operations and Safety Coordination" },
        { img: "/images/projects/new-folder/scissors-lift.jpeg", caption: "Scissors Lift Inspection" }
      ],
      date: "5th September 2024",
      location: "Almarai Kizad Plant",
      category: "Industrial"
    }
  ];

  // Carousel component for project slides
  const ProjectCarousel = ({ slides, title }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };
    
    return (
      <div className="relative w-full h-full">
        <div className="relative w-full h-full tablet:h-[400px] overflow-hidden rounded-t-xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full h-full flex-shrink-0"
              >
                <img
                  src={slide.img}
                  alt={slide.caption}
                  className="object-cover tablet:h-[800px] w-full"
                />
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Carousel indicators */}
          <div className="absolute z-10 bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 relative z-10 rounded-full border transition-colors ${
                  index === currentSlide ? 'bg-gray-800' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel navigation buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 tablet:top-[80%] transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 tablet:top-[80%] transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>
        
        {/* Slide caption */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm">{slides[currentSlide].caption}</p>
        </div> */}
      </div>
    );
  };

  return (
    <div className="bg-background text-on-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] tablet:h-fit flex  pt-20 tablet:pt-0 toverflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Our Projects"
            className="w-full h-full object-cover"
            src="/images/services.png"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="tablet:pt-20 pb-10 relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30 text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
              </span>
              Proven Impact
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              <span className="text-tertiary-fixed">Success Stories</span> in HSE Excellence
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light">
              A showcase of our practical contributions to workplace safety and environmental management. Each project reflects our dedication to building safe, compliant, and efficient work environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href={PAGE_ROUTES.PROJECTS} id='projects' className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                View All Projects
                <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
              </Link>
              {/* <Link href={PAGE_ROUTES.CONTACT} className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Case Studies
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-tertiary-fixed shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">500+</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-primary shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">15+</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Industries Served</div>
            </div>
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-secondary shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">98%</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-tertiary shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">24/7</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id='projects' className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Featured Projects</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Discover how we&apos;ve helped organizations transform their safety culture and achieve remarkable results.
            </p>
          </div>
          <div className="grid grid-cols-2 tablet:items-center tablet:justify-center tablet:grid-cols-1 xl:grid-cols-3 gap-8 tablet:gap-y-[100px]">
            {projects.map((project, index) => (
              <div key={index} className=" relative rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-video tablet:aspect-square relative  rounded-t-xl">
                  <ProjectCarousel slides={project.slides} title={project.title} />
                  <div className="absolute tablet:top-0 bg-black/25 h-full bottom-0 left-0 right-0 p-8 text-white px-14 tablet:px-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-tertiary-fixed text-tertiary-container px-2 py-1 rounded text-xs font-bold uppercase">
                        {project.category}
                      </span>
                      <span className="flex gap-x-2 items-center bg-primary/80 text-white px-2 py-1 rounded text-xs font-bold uppercase">
                        <img src="/svg/calendar.svg" alt="date" className="w-4 h-4" />
                        <p>{project.date}</p>
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-200 mb-4 line-clamp-3">{project.desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <img src="/svg/location.svg" alt="location" className="w-4 h-4" />
                          {project.location}
                        </span>
                        {/* <span className="flex items-center gap-1">
                          <img src="/svg/calendar.svg" alt="date" className="w-4 h-4" />
                          {project.date}
                        </span> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Project Gallery</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              A visual journey through our impact across various industries and projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-80 overflow-hidden rounded-xl relative group">
              <Image
                alt="Risk Assessment Workshop"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/white/izzy-on-white3.jpg"
                width={800}
                height={320}
              />
              <div className="absolute inset-0 bg-primary/60 flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-bold text-xl mb-1">Risk Assessment Workshop</h4>
                  <p className="text-sm opacity-90">Interactive training session for management team</p>
                </div>
              </div>
            </div>
            <div className="h-80 overflow-hidden rounded-xl relative group">
              <Image
                alt="Environmental Compliance Audit"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/white/izzy-on-white.jpg"
                width={400}
                height={320}
              />
              <div className="absolute inset-0 bg-primary/60 flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-bold text-xl mb-1">Environmental Compliance</h4>
                  <p className="text-sm opacity-90">ISO 14001 implementation support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-6">Client Success Stories</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Hear from our partners about the transformative impact of our HSE solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-container p-8 rounded-xl">
              <div className="flex text-tertiary-fixed mb-4">
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
              </div>
              <p className="text-lg italic mb-6">&quot;SafePlaceHSE transformed our safety culture. Their systematic approach reduced incidents by 75% in just 6 months.&quot;</p>
              <div>
                <div className="font-bold">Michael Okoro</div>
                <div className="text-sm text-on-primary-container">Operations Director</div>
              </div>
            </div>
            <div className="bg-primary-container p-8 rounded-xl">
              <div className="flex text-tertiary-fixed mb-4">
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
              </div>
              <p className="text-lg italic mb-6">&quot;The NIPEX audit support was exceptional. We achieved pre-qualification in record time.&quot;</p>
              <div>
                <div className="font-bold">Fatima Ahmed</div>
                <div className="text-sm text-on-primary-container">HSE Manager</div>
              </div>
            </div>
            <div className="bg-primary-container p-8 rounded-xl">
              <div className="flex text-tertiary-fixed mb-4">
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
                <img src="/svg/star.svg" alt="star" className="inline align-middle w-5 h-5" />
              </div>
              <p className="text-lg italic mb-6">&quot;Their training programs are practical and engaging. Our team&apos;s safety awareness has improved dramatically.&quot;</p>
              <div>
                <div className="font-bold">David Chen</div>
                <div className="text-sm text-on-primary-container">Construction Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold text-primary mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Let us help you achieve your HSE goals with our proven expertise and customized solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href={PAGE_ROUTES.CONTACT} className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Contact Us
              <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
            </Link>
            {/* <Link href={PAGE_ROUTES.PROJECTS} className="border-2 border-primary text-primary px-10 py-5 rounded-md font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
              
            </Link> */}
          </div>
        </div>
      </section>

    </div>
  )
}
