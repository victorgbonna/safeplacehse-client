import { PAGE_ROUTES } from '@/configs';
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'


export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "/images/photovoltaics.jpg",
    "/images/projects/white/izzy-on-white.jpg",
    "/images/izzy-vr.jpg",
    "/images/projects/white/izzy-on-white12.jpg",
    "/images/projects/white/izzy-on-white10.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="bg-background text-on-background scroll-smooth">
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="HSE Professionals"
            className="w-full h-full object-cover"
            src="/images/hero-freepik.jpg"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
          <div className="absolute inset-0 bg-slate-900/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30 text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
              </span>
              Industry Leading HSE Standards
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              Excellence in <span className="text-tertiary-fixed">HSE Consulting</span> & Strategic Safety Management.
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light">
              Delivering high-impact audit, specialized training, and compliance solutions that protect your personnel and optimize industrial performance globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href={PAGE_ROUTES.CONTACT} className="bg-tertiary-fixed text-black px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Start a Project
                <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
              </Link>
              <Link href={PAGE_ROUTES.SERVICES} className="text-center backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Our Services
              </Link>
            </div>
            <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8 max-w-md">
              <div className="flex -space-x-4">
                <Image
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  src="/images/client.png"
                  width={40}
                  height={40}
                />
                <Image
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  src="/images/client.png"
                  width={40}
                  height={40}
                />
                <Image
                  alt="Client"
                  className="w-10 h-10 rounded-full border-2 border-primary"
                  src="/images/client.png"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="flex text-tertiary-fixed">
                  <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                  <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                  <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                  <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                  <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                </div>
                <p className="text-white text-sm font-semibold">Trusted by 250+ Global Enterprises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Metrics */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-tertiary-fixed shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">15+</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-tertiary-fixed shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">250+</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Clients Served</div>
            </div>
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-tertiary-fixed shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">48</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Certifications</div>
            </div>
            <div className="text-center p-6 bg-surface-container-lowest rounded-xl border-b-4 border-tertiary-fixed shadow-sm">
              <div className="text-4xl font-extrabold text-primary mb-2">99%</div>
              <div className="text-sm font-semibold text-on-surface-variant uppercase tracking-widest">Compliance Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are / Retainership Support */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative group">
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    alt={`SafePlaceHSE Team ${index + 1}`}
                    className="w-full h-full object-cover rounded-xl transition-all duration-700"
                    src={image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-4 h-4 rounded-full border transition-colors ${
                    index === currentImageIndex ? 'bg-gray-800' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary-container p-8 rounded-xl shadow-2xl hidden md:block">
              <img src="/svg/verified_user.svg" alt="verified user" className="text-tertiary-fixed mb-2 w-10 h-10" />
              <p className="text-surface font-bold text-lg">ISO 45001 Certified Advisory</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold text-on-tertiary-fixed-variant uppercase tracking-[0.2em] mb-4">Strategic Partnership</h2>
            <h3 className="text-4xl font-extrabold text-primary leading-tight mb-8">Comprehensive Retainership & NIPEX Support</h3>
            <div className="space-y-6">
              <div className="p-6 bg-surface-container-low rounded-lg">
                <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                  <img src="/svg/policy.svg" alt="policy" className="text-on-tertiary-container w-6 h-6" />
                  HSE Advisory & Retainership
                </h4>
                <p className="text-on-surface-variant text-sm">Long-term partnerships that integrate safety leadership directly into your corporate DNA, ensuring constant readiness.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-lg">
                <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                  <img src="/svg/approval.svg" alt="approval" className="text-on-tertiary-container w-6 h-6" />
                  NIPEX & Tendering Support
                </h4>
                <p className="text-on-surface-variant text-sm">Expert documentation and pre-qualification support for NIPEX audits and high-stakes contract bidding processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-4">Core Consulting Services</h2>
              <p className="text-on-surface-variant">We move beyond check-box compliance to create operational value.</p>
            </div>
            <Link className="text-primary font-bold border-b-2 border-tertiary-fixed pb-1 hover:text-on-tertiary-container transition-colors" href={PAGE_ROUTES.SERVICES}>View All Services</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            {/* Major Card */}
            <div className="md:col-span-2 md:row-span-2 bg-primary-container rounded-xl p-10 flex flex-col justify-between text-white relative overflow-hidden group">
              <Image
                alt="Auditing"
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700"
                src="/images/services.png"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="relative z-10">
                <span className="bg-tertiary-fixed text-tertiary-container px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mb-4 inline-block">Bespoke Auditing</span>
                <h4 className="text-3xl font-bold mb-4">Integrated HSE Audits</h4>
                <p className="text-surface-container-low max-w-md">Systematic, independent, and documented evidence evaluation for your safety management systems.</p>
              </div>
              <div className="relative z-10">
                <Link href={PAGE_ROUTES.SERVICES} className="flex items-center gap-2 text-tertiary-fixed font-bold">
                  Learn More 
                  {/* <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" /> */}
                </Link>
              </div>
            </div>
            {/* Small Card 1 */}
            <div className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow border-t-2 border-transparent hover:border-tertiary-fixed">
              <div>
                <img src="/svg/analytics.svg" alt="analytics" className="text-on-tertiary-container mb-4 w-10 h-10" />
                <h4 className="text-xl font-bold text-primary mb-2">Risk Assessment</h4>
                <p className="text-on-surface-variant text-sm">JHA, HEMP, and HAZID studies tailored to complex operations.</p>
              </div>
              <Link className="text-primary font-bold text-sm mt-4" href={PAGE_ROUTES.SERVICES}>Details</Link>
            </div>
            {/* Small Card 2 */}
            <div className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-between hover:shadow-lg transition-shadow border-t-2 border-transparent hover:border-tertiary-fixed">
              <div>
                <img src="/svg/engineering.svg" alt="engineering" className="text-on-tertiary-container mb-4 w-10 h-10" />
                <h4 className="text-xl font-bold text-primary mb-2">Compliance Support</h4>
                <p className="text-on-surface-variant text-sm">Navigating DPR, Federal, and State regulatory environments.</p>
              </div>
              <Link className="text-primary font-bold text-sm mt-4" href={PAGE_ROUTES.SERVICES}>Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* VR Safety Training */}
      <section id="vr-training" className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30 text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
              </span>
              Cutting-Edge Training
            </div>
            <h2 className="text-4xl font-extrabold text-primary mb-4">VR Safety Training Programs</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
              Experience immersive safety training like never before. Our Virtual Reality programs provide realistic scenarios for comprehensive safety education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fire Safety VR */}
            <div className="bg-surface-container-low rounded-xl p-8 hover:shadow-lg transition-all border-l-4 border-tertiary-fixed">
              <div className="bg-tertiary-fixed/10 p-3 rounded-lg w-fit mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Fire Safety VR</h3>
              <p className="text-on-surface-variant text-sm mb-4">Experience realistic fire scenarios and learn proper evacuation procedures in a safe, controlled virtual environment.</p>
              <ul className="text-sm text-on-surface-variant space-y-2">
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Fire extinguisher training</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Emergency evacuation drills</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Fire prevention techniques</li>
              </ul>
            </div>
            
            {/* First Aid VR */}
            <div className="bg-surface-container-low rounded-xl p-8 hover:shadow-lg transition-all border-l-4 border-primary">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 1.5L8.5 3.5L10.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.5 1.5L15.5 3.5L13.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">First Aid VR</h3>
              <p className="text-on-surface-variant text-sm mb-4">Practice critical first aid procedures through interactive medical emergency simulations.</p>
              <ul className="text-sm text-on-surface-variant space-y-2">
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> CPR training scenarios</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Wound care simulation</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Emergency response protocols</li>
              </ul>
            </div>
            
            {/* Confined Spaces VR */}
            <div className="bg-surface-container-low rounded-xl p-8 hover:shadow-lg transition-all border-l-4 border-secondary">
              <div className="bg-secondary/10 p-3 rounded-lg w-fit mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Confined Spaces VR</h3>
              <p className="text-on-surface-variant text-sm mb-4">Master confined space entry procedures and safety protocols in realistic virtual environments.</p>
              <ul className="text-sm text-on-surface-variant space-y-2">
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Entry/exit procedures</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Atmospheric monitoring</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Rescue operation training</li>
              </ul>
            </div>
            
            {/* Gas Testing VR */}
            <div className="bg-surface-container-low rounded-xl p-8 hover:shadow-lg transition-all border-l-4 border-tertiary">
              <div className="bg-tertiary/10 p-3 rounded-lg w-fit mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Authorized Gas Tester VR</h3>
              <p className="text-on-surface-variant text-sm mb-4">Learn gas testing procedures and safety protocols through immersive virtual scenarios.</p>
              <ul className="text-sm text-on-surface-variant space-y-2">
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Gas detection techniques</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Equipment calibration</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Hazard identification</li>
              </ul>
            </div>
            
            {/* LOTO VR */}
            <div className="bg-surface-container-low rounded-xl p-8 hover:shadow-lg transition-all border-l-4 border-on-tertiary-fixed-variant">
              <div className="bg-on-tertiary-fixed-variant/10 p-3 rounded-lg w-fit mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V3M12 15l-3-3m3 3l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 21h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">LOTO (Lockout/Tagout) VR</h3>
              <p className="text-on-surface-variant text-sm mb-4">Master energy isolation procedures through interactive virtual equipment scenarios.</p>
              <ul className="text-sm text-on-surface-variant space-y-2">
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Lockout procedures</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Tagout protocols</li>
                <li className="flex items-center gap-2"><span className="text-tertiary-fixed">✓</span> Energy isolation verification</li>
              </ul>
            </div>
            
            {/* Benefits Card */}
            <div className="bg-primary-container rounded-xl p-8 text-white lg:col-span-3">
              <h3 className="text-2xl font-bold mb-4">Why Choose VR Safety Training?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-tertiary-fixed">Realistic Scenarios</h4>
                  <p className="text-sm text-on-primary-container">Experience hazardous situations in a completely safe, controlled environment without real-world risks.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-tertiary-fixed">Enhanced Retention</h4>
                  <p className="text-sm text-on-primary-container">Immersive learning leads to 75% better knowledge retention compared to traditional training methods.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-tertiary-fixed">Cost-Effective</h4>
                  <p className="text-sm text-on-primary-container">Reduce training costs by eliminating travel expenses and minimizing equipment requirements.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href={PAGE_ROUTES.COURSES} className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              Explore VR Training Programs
              <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section id="courses" className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-extrabold text-primary mb-12 text-center">Upcoming Certification Courses</h2>
          <div className="grid grid-cols-2 tablet:grid-cols-1 gap-8">
            {/* Course 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <Image
                alt="NEBOSH Course"
                className="w-full h-48 object-cover"
                src="/images/certifications/nebosh.png"
                width={400}
                height={192}
              />
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-tertiary px-2 py-1 bg-tertiary-fixed rounded">Popular</span>
                  <span className="text-sm font-semibold text-on-surface-variant">4 Weeks</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">NEBOSH International General Cert</h4>
                <p className="text-on-surface-variant text-sm mb-6">The gold standard for health and safety professionals worldwide.</p>
                <Link href={PAGE_ROUTES.COURSES} className="w-full py-3 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">Enroll Now</Link>
              </div>
            </div>
            {/* Course 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <Image
                alt="IOSH Course"
                className="w-full h-48 object-cover"
                src="/images/certifications/iosh.jpg"
                width={400}
                height={192}
              />
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-secondary px-2 py-1 bg-secondary-container rounded">Essential</span>
                  <span className="text-sm font-semibold text-on-surface-variant">3 Days</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">IOSH Managing Safely</h4>
                <p className="text-on-surface-variant text-sm mb-6">Essential knowledge for every manager and supervisor in high-risk zones.</p>
                <Link href={PAGE_ROUTES.COURSES} className="w-full py-3 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">Enroll Now</Link>
              </div>
            </div>
            {/* Course 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <Image
                alt="Environmental Mgmt"
                className="w-full h-48 object-cover"
                src="/images/certifications/iso.png"
                width={400}
                height={192}
              />
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-on-secondary-fixed-variant px-2 py-1 bg-primary-fixed rounded">Advanced</span>
                  <span className="text-sm font-semibold text-on-surface-variant">5 Days</span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">ISO 14001 Implementation</h4>
                <p className="text-on-surface-variant text-sm mb-6">Expert-led training on building effective Environmental Management Systems.</p>
                <Link href={PAGE_ROUTES.COURSES} className="w-full py-3 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">Enroll Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      {/* <section className="py-16 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-xs font-bold text-outline uppercase tracking-widest mb-10">Trusted by Global Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-50  transition-all">
            <span className="text-2xl font-black text-primary">ENI</span>
            <span className="text-2xl font-black text-primary">CHEVRON</span>
            <span className="text-2xl font-black text-primary">TOTAL</span>
            <span className="text-2xl font-black text-primary">SHELL</span>
            <span className="text-2xl font-black text-primary">DPR</span>
            <span className="text-2xl font-black text-primary">NIPEX</span>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-extrabold mb-6 leading-tight">What Our Partners Say</h2>
              <p className="text-on-primary-container text-lg leading-relaxed">Join 250+ companies that have transformed their safety culture with SafePlaceHSE.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-primary-container rounded-xl border-l-4 border-tertiary-fixed">
                <p className="text-lg italic mb-6">&quot;Their NIPEX audit support was unparalleled. We achieved pre-qualification in record time thanks to their systematic approach.&quot;</p>
                <div>
                  <div className="font-bold">Emeka Nwosu</div>
                  <div className="text-sm text-on-primary-container">Operations Director</div>
                </div>
              </div>
              <div className="p-8 bg-primary-container rounded-xl border-l-4 border-tertiary-fixed">
                <p className="text-lg italic mb-6">&quot;The training programs provided are not just lectures; they are practical sessions that actually stick with our field staff.&quot;</p>
                <div>
                  <div className="font-bold">Sarah Jenkins</div>
                  <div className="text-sm text-on-primary-container">HSE Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Gallery */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-extrabold text-primary mb-12">Project Impact Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 h-64 overflow-hidden rounded-xl relative group">
              <Image
                alt="Project 1"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/white/izzy-on-white.jpg"
                width={600}
                height={256}
              />
              <div className="absolute inset-0 bg-primary/40 flex items-end p-6">
                <p className="text-white font-bold">Facility Audit - Port Harcourt</p>
              </div>
            </div>
            <div className="h-64 overflow-hidden rounded-xl relative group">
              <Image
                alt="Project 2"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/white/izzy-on-white2.jpg"
                width={300}
                height={256}
              />
              <div className="absolute inset-0 bg-primary/40 flex items-end p-6">
                <p className="text-white font-bold">Risk Map</p>
              </div>
            </div>
            <div className="h-64 overflow-hidden rounded-xl relative group">
              <Image
                alt="Project 3"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/images/projects/white/izzy-on-white3.jpg"
                width={300}
                height={256}
              />
              <div className="absolute inset-0 bg-primary/40 flex items-end p-6">
                <p className="text-white font-bold">Strategy Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}