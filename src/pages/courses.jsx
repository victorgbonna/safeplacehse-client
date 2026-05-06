import Image from 'next/image'
import Link from 'next/link'

export default function Courses() {
  return (
    <div className="bg-background text-on-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="HSE Training"
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
              Transform Your Career
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              Learn <span className="text-tertiary-fixed">Safety</span> That Saves Lives
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light">
              Have you ever wondered what it takes to become a safety leader who truly makes a difference? At SafePlaceHSE, we don't just teach courses—we build confidence, competence, and careers that protect lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Explore Courses
                <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
              </button>
              <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Why Learn With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold text-on-tertiary-fixed-variant uppercase tracking-[0.2em] mb-4">Our Approach</h2>
              <h3 className="text-4xl font-extrabold text-primary leading-tight mb-8">Why Choose SafePlaceHSE for Your Learning Journey?</h3>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-tertiary-fixed">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <img src="/svg/people.svg" alt="expert instructors" className="w-6 h-6 text-tertiary-fixed" />
                    Learn from Industry Veterans
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our instructors aren't just academics—they're seasoned HSE professionals who've managed safety for multinational corporations. They bring real-world scenarios, not just textbook theories.
                  </p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <img src="/svg/engineering.svg" alt="practical skills" className="w-6 h-6 text-primary" />
                    Practical, Hands-On Learning
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    We believe safety skills are built through practice. Our courses include site visits, mock audits, and real case studies that prepare you for actual workplace challenges.
                  </p>
                </div>
                <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-secondary">
                  <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <img src="/svg/verified_user.svg" alt="globally recognized" className="w-6 h-6 text-secondary" />
                    Globally Recognized Certifications
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our NEBOSH, IOSH, and ISO certifications open doors worldwide. Join thousands of our alumni working in leading oil & gas, construction, and manufacturing companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Image
                alt="Training Session"
                className="rounded-xl w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="/images/certifications/nebosh2.png"
                width={600}
                height={450}
              />
              <div className="absolute -bottom-8 -right-8 bg-tertiary-container p-8 rounded-xl hidden md:block">
                <img src="/svg/school.svg" alt="education" className="text-tertiary-fixed mb-2 w-10 h-10" />
                <p className="text-surface font-bold text-lg">5000+ Graduates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VR Safety Training - Featured */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-primary rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-white text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Coming Soon
                </div>
                <h2 className="text-4xl font-extrabold mb-6">Experience Safety Like Never Before</h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Imagine practicing emergency responses in a virtual oil rig, or conducting safety audits in a simulated chemical plant—without any real-world risk. That is the power of our upcoming VR Safety Training program.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <img src="/svg/check_circle.svg" alt="check" className="w-6 h-6 text-white" />
                    <span>VR Fire Safety Training with realistic emergency scenarios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/svg/check_circle.svg" alt="check" className="w-6 h-6 text-white" />
                    <span>Virtual First Aid simulations for immediate response training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/svg/check_circle.svg" alt="check" className="w-6 h-6 text-white" />
                    <span>Confined Space entry training in immersive environments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/svg/check_circle.svg" alt="check" className="w-6 h-6 text-white" />
                    <span>Authorized Gas Testing with virtual gas detection scenarios</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/svg/check_circle.svg" alt="check" className="w-6 h-6 text-white" />
                    <span>LOTO (Lockout/Tagout) procedures in industrial settings</span>
                  </div>
                </div>
                <button className="bg-white text-gray-800 px-8 py-4 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Get Early Access
                  <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
                </button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                  <img src="/svg/vr.svg" alt="VR Headset" className="w-24 h-24 mx-auto mb-6 text-white" />
                  <h3 className="text-2xl font-bold mb-4 text-center">Revolutionary Learning Experience</h3>
                  <p className="text-center leading-relaxed">
                    Our VR training combines cutting-edge technology with proven safety methodologies to create an unforgettable learning experience that sticks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Our Most Popular Courses</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Join thousands of professionals who've transformed their careers with our industry-recognized certification programs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative">
                <Image
                  alt="NEBOSH Course"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/certifications/nebosh.png"
                  width={400}
                  height={192}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-tertiary-fixed text-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase">Bestseller</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-on-surface-variant flex items-center gap-1">
                    <img src="/svg/calendar.svg" alt="duration" className="w-4 h-4" />
                    4 Weeks
                  </span>
                  <span className="text-sm font-semibold text-on-surface-variant flex items-center gap-1">
                    <img src="/svg/people.svg" alt="students" className="w-4 h-4" />
                    2000+ Graduates
                  </span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">NEBOSH International General Certificate</h4>
                <p className="text-on-surface-variant text-sm mb-6">The gold standard for health and safety professionals worldwide. Perfect for those serious about a career in HSE.</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-tertiary-fixed">
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                    </div>
                    <span className="text-sm text-on-surface-variant">(4.9/5 from 500+ reviews)</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-tertiary-fixed text-tertiary-container font-bold rounded hover:bg-tertiary-fixed/90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Course 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative">
                <Image
                  alt="IOSH Course"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/certifications/iosh.jpg"
                  width={400}
                  height={192}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Essential</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-on-surface-variant flex items-center gap-1">
                    <img src="/svg/calendar.svg" alt="duration" className="w-4 h-4" />
                    3 Days
                  </span>
                  <span className="text-sm font-semibold text-on-surface-variant flex items-center gap-1">
                    <img src="/svg/people.svg" alt="students" className="w-4 h-4" />
                    1500+ Graduates
                  </span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">IOSH Managing Safely</h4>
                <p className="text-on-surface-variant text-sm mb-6">Essential knowledge for every manager and supervisor. Learn practical safety management that you can apply immediately.</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-tertiary-fixed">
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                    </div>
                    <span className="text-sm text-on-surface-variant">(4.8/5 from 350+ reviews)</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-tertiary-fixed text-tertiary-container font-bold rounded hover:bg-tertiary-fixed/90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Course 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative">
                <Image
                  alt="Environmental Management"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/certifications/iso.png"
                  width={400}
                  height={192}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Advanced</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-on-surface-variant flex items-center gap-1">
                    <img src="/svg/calendar.svg" alt="duration" className="w-4 h-4" />
                    5 Days
                  </span>
                  <span className="text-sm font-semibold text-on-surface-variant flex items-center gap-1">
                    <img src="/svg/people.svg" alt="students" className="w-4 h-4" />
                    800+ Graduates
                  </span>
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">ISO 14001 Environmental Management</h4>
                <p className="text-on-surface-variant text-sm mb-6">Master environmental management systems and lead your organization to sustainable excellence.</p>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-tertiary-fixed">
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                      <img src="/svg/star.svg" alt="star" className="inline align-middle w-4 h-4" />
                    </div>
                    <span className="text-sm text-on-surface-variant">(4.7/5 from 200+ reviews)</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-tertiary-fixed text-tertiary-container font-bold rounded hover:bg-tertiary-fixed/90 transition-all">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">What You'll Achieve</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our graduates don't just get certificates—they get results. Here's what makes our training different:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-surface-container-low rounded-xl hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-tertiary-fixed/10 rounded-full flex items-center justify-center">
                <img src="/svg/trending_up.svg" alt="career growth" className="w-8 h-8 text-tertiary-fixed" />
              </div>
              <h4 className="font-bold text-primary mb-2">Career Advancement</h4>
              <p className="text-on-surface-variant text-sm">85% of our graduates report promotions or salary increases within 6 months</p>
            </div>
            <div className="text-center p-8 bg-surface-container-low rounded-xl hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <img src="/svg/business.svg" alt="industry recognition" className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Industry Recognition</h4>
              <p className="text-on-surface-variant text-sm">Our certifications are respected by leading employers across Africa and beyond</p>
            </div>
            <div className="text-center p-8 bg-surface-container-low rounded-xl hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                <img src="/svg/psychology.svg" alt="practical skills" className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Practical Skills</h4>
              <p className="text-on-surface-variant text-sm">Hands-on training that prepares you for real workplace challenges</p>
            </div>
            <div className="text-center p-8 bg-surface-container-low rounded-xl hover:shadow-lg transition-all">
              <div className="w-16 h-16 mx-auto mb-4 bg-tertiary/10 rounded-full flex items-center justify-center">
                <img src="/svg/support.svg" alt="ongoing support" className="w-8 h-8 text-tertiary" />
              </div>
              <h4 className="font-bold text-primary mb-2">Lifelong Support</h4>
              <p className="text-on-surface-variant text-sm">Join our alumni network and get career support throughout your professional journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've chosen SafePlaceHSE for their HSE certification journey. Your future in safety starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Start Learning Today
              <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
            </button>
            <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
              Download Course Catalog
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}
