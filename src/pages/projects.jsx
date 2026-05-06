import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  return (
    <div className="bg-background text-on-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
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
              <button className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                View All Projects
                <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
              </button>
              <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Case Studies
              </button>
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
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Featured Projects</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Discover how we've helped organizations transform their safety culture and achieve remarkable results.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  alt="Major Oil & Gas Facility Audit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/projects/white/izzy-on-white.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-tertiary-fixed text-tertiary-container px-2 py-1 rounded text-xs font-bold uppercase">Oil & Gas</span>
                    <span className="bg-primary/80 text-white px-2 py-1 rounded text-xs font-bold uppercase">2024</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Major Oil & Gas Facility Audit</h3>
                  <p className="text-slate-200 mb-4">Comprehensive HSE management system audit for a leading petroleum company, resulting in 40% improvement in compliance metrics.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <img src="/svg/location.svg" alt="location" className="w-4 h-4" />
                        Port Harcourt
                      </span>
                      <span className="flex items-center gap-1">
                        <img src="/svg/calendar.svg" alt="duration" className="w-4 h-4" />
                        3 Months
                      </span>
                    </div>
                    <button className="bg-tertiary-fixed text-tertiary-container px-4 py-2 rounded font-bold text-sm hover:bg-tertiary-fixed/90 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-video relative">
                <Image
                  alt="Construction Safety Management System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/projects/white/izzy-on-white2.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary text-white px-2 py-1 rounded text-xs font-bold uppercase">Construction</span>
                    <span className="bg-secondary/80 text-white px-2 py-1 rounded text-xs font-bold uppercase">2024</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Construction Safety Management System</h3>
                  <p className="text-slate-200 mb-4">Implementation of integrated safety management for a large-scale infrastructure project, achieving zero lost-time incidents.</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <img src="/svg/location.svg" alt="location" className="w-4 h-4" />
                        Lagos
                      </span>
                      <span className="flex items-center gap-1">
                        <img src="/svg/calendar.svg" alt="duration" className="w-4 h-4" />
                        6 Months
                      </span>
                    </div>
                    <button className="bg-tertiary-fixed text-tertiary-container px-4 py-2 rounded font-bold text-sm hover:bg-tertiary-fixed/90 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
              <p className="text-lg italic mb-6">"SafePlaceHSE transformed our safety culture. Their systematic approach reduced incidents by 75% in just 6 months."</p>
              <div>
                <div className="font-bold">Michael Okoro</div>
                <div className="text-sm text-on-primary-container">Operations Director, Energy Corp</div>
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
              <p className="text-lg italic mb-6">"The NIPEX audit support was exceptional. We achieved pre-qualification in record time."</p>
              <div>
                <div className="font-bold">Fatima Ahmed</div>
                <div className="text-sm text-on-primary-container">HSE Manager, PetroTech Ltd</div>
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
              <p className="text-lg italic mb-6">"Their training programs are practical and engaging. Our team's safety awareness has improved dramatically."</p>
              <div>
                <div className="font-bold">David Chen</div>
                <div className="text-sm text-on-primary-container">CEO, BuildRight Construction</div>
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
            <button className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Start a Project
              <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
            </button>
            <button className="border-2 border-primary text-primary px-10 py-5 rounded-md font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}