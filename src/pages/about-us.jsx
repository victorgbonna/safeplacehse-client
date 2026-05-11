import Image from 'next/image'
import Link from 'next/link'
import { PAGE_ROUTES } from '@/configs'

export default function AboutUs() {
  return (
    <div className="bg-background text-on-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex pt-20 overflow-hidden tablet:pt-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="About SafePlaceHSE"
            className="w-full h-full object-cover"
            src="/images/services.png"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl tablet:pt-20 pb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30 text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
              </span>
              15+ Years of Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              Building <span className="text-tertiary-fixed">Safer Futures</span> Through Expert HSE Leadership
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light">
              We believe every worker deserves to return home safely. Our mission is to transform safety from compliance into culture, protecting lives while driving operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              {/* <button className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Meet Our Team
                <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
              </button> */}
              {/* <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Our Values
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <Image
                alt="Our Mission"
                className="rounded-xl shadow-xl w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="/images/projects/new-folder/roof-modification-project.jpeg"
                width={600}
                height={450}
              />
              <div className="absolute -bottom-8 -left-8 bg-tertiary-container p-8 rounded-xl shadow-2xl hidden md:block">
                <img src="/svg/verified_user.svg" alt="verified user" className="text-tertiary-fixed mb-2 w-10 h-10" />
                <p className="text-surface font-bold text-lg">ISO 45001 Certified</p>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-on-tertiary-fixed-variant uppercase tracking-[0.2em] mb-4">Our Purpose</h2>
              <h3 className="text-4xl font-extrabold text-primary leading-tight mb-8">Mission & Vision</h3>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-tertiary-fixed">
                  <h4 className="font-bold text-primary mb-3">Our Mission</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    To help organizations build safer, healthier, and more sustainable workplaces. We believe safety is more than compliance—it&apos;s a responsibility, a culture, and a commitment to preserving life, health, and the environment.
                  </p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-primary mb-3">Our Vision</h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    A world where safety is embedded in every process and decision. We empower businesses to adopt safety as a core value that drives trust, productivity, and resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Our Guiding Principles</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our work is guided by deep respect for human life and unwavering commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border-t-4 border-tertiary-fixed">
              <img src="/svg/integrity.svg" alt="integrity" className="w-12 h-12 mx-auto mb-4 text-tertiary-fixed" />
              <h4 className="font-bold text-primary mb-2">Integrity</h4>
              <p className="text-on-surface-variant text-sm">Doing what&apos;s right, not just what&apos;s required</p>
            </div>
            <div className="text-center p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border-t-4 border-primary">
              <img src="/svg/engineering.svg" alt="excellence" className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h4 className="font-bold text-primary mb-2">Excellence</h4>
              <p className="text-on-surface-variant text-sm">Continuous improvement in all we do</p>
            </div>
            <div className="text-center p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border-t-4 border-secondary">
              <img src="/svg/empathy.svg" alt="empathy" className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h4 className="font-bold text-primary mb-2">Empathy</h4>
              <p className="text-on-surface-variant text-sm">Understanding human impact in every decision</p>
            </div>
            <div className="text-center p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border-t-4 border-tertiary">
              <img src="/svg/policy.svg" alt="responsibility" className="w-12 h-12 mx-auto mb-4 text-tertiary" />
              <h4 className="font-bold text-primary mb-2">Responsibility</h4>
              <p className="text-on-surface-variant text-sm">Accountability for safety outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Area of Expertise */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Industry Expertise</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              {"Specialized HSE solutions tailored to your industry's unique challenges"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 bg-tertiary-fixed/10 rounded-full flex items-center justify-center group-hover:bg-tertiary-fixed/20 transition-colors">
                <img src="/svg/industries/oil.svg" alt="oil & gas" className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-primary mb-2">Oil & Gas</h4>
              <p className="text-on-surface-variant text-sm">Comprehensive HSE solutions for upstream and downstream operations</p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <img src="/svg/industries/construction.svg" alt="construction" className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-primary mb-2">Construction</h4>
              <p className="text-on-surface-variant text-sm">Site safety management and risk mitigation for construction projects</p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <img src="/svg/industries/manufacturing.svg" alt="manufacturing" className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-primary mb-2">Manufacturing</h4>
              <p className="text-on-surface-variant text-sm">Process safety and occupational health for industrial facilities</p>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-16 h-16 mx-auto mb-4 bg-tertiary/10 rounded-full flex items-center justify-center group-hover:bg-tertiary/20 transition-colors">
                <img src="/svg/industries/realestate.svg" alt="real estate" className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-primary mb-2">Real Estate</h4>
              <p className="text-on-surface-variant text-sm">Building safety compliance and environmental management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Our Team in Action</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Meet the dedicated professionals who make safety their mission every day
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 h-64 overflow-hidden rounded-xl relative group">
              <Image
                alt="Team 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/new-folder/rope-access-material.jpeg"
                width={600}
                height={256}
              />
              <div className="absolute inset-0 bg-primary/40 flex items-end p-6">
                <p className="text-white font-bold">Training Session</p>
              </div>
            </div>
            <div className="h-64 overflow-hidden rounded-xl relative group">
              <Image
                alt="Team 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/new-folder/mobile-crane.jpeg"
                width={300}
                height={256}
              />
              <div className="absolute inset-0 bg-primary/40 flex items-end p-6">
                <p className="text-white font-bold">Site Audit</p>
              </div>
            </div>
            <div className="h-64 overflow-hidden rounded-xl relative group">
              <Image
                alt="Team 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/new-folder/lifting-gear.jpeg"
                width={300}
                height={256}
              />
              <div className="absolute inset-0 bg-primary/40 flex items-end p-6">
                <p className="text-white font-bold">Consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Transform Your Safety Culture?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 250+ companies that have partnered with us to build safer, more productive workplaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href={PAGE_ROUTES.CONTACT} className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Book a Consultation
              <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
            </Link>
            <Link href={PAGE_ROUTES.PROJECTS} className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}