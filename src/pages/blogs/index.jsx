import Image from 'next/image'
import Link from 'next/link'
import { PAGE_ROUTES, API_ENDPOINTS } from '@/configs'

export default function Blog() {
  const blogs = API_ENDPOINTS.BLOGS

  return (
    <div className="bg-background text-on-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex  pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="HSE Insights"
            className="w-full h-full object-cover"
            src="/images/services.png"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative tablet:pt-20 pb-10 z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-3xl ">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed/20 border border-tertiary-fixed/30 text-tertiary-fixed text-xs font-bold uppercase tracking-widest mb-8">

              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary-fixed"></span>
              </span>
              Expert Insights
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tighter">
              <span className=" text-tertiary-fixed">HSE Knowledge</span> That Protects & Empowers
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl leading-relaxed font-light">
              Dive into our collection of expert articles on health, safety,
              and environmental management. Gain practical insights that could
              save lives and transform your workplace safety culture.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href={'#main'}
                className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explore Articles
                <img
                  src="/svg/arrow-right.svg"
                  alt="arrow forward"
                  className="inline align-middle w-6 h-6"
                />
              </Link>

              {/* <Link
                href={PAGE_ROUTES.BLOGS}
                className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Categories
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 id="main" className="text-sm font-bold text-on-tertiary-fixed-variant uppercase tracking-[0.2em] mb-4">
                Featured
              </h2>

              <h3 className="text-4xl font-extrabold text-primary leading-tight mb-8">
                Latest Safety Insights
              </h3>

              {blogs.length > 0 ? (
                <div className="space-y-6">
                  {blogs.slice(0, 3).map((blog) => (
                    <div
                      key={blog.id}
                      className="p-6 bg-surface-container-low rounded-lg border-l-4 border-tertiary-fixed hover:shadow-lg transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-tertiary-fixed/10 text-gray-800 px-2 py-1 rounded text-xs font-bold uppercase">
                          {blog.category?.[0] || 'HSE'}
                        </span>

                        <span className="text-sm text-on-surface-variant">
                          {blog.readingTime || '5 min read'}
                        </span>
                      </div>

                      <h4 className="font-bold text-primary mb-2 text-lg">
                        {blog.title}
                      </h4>

                      <p className="text-on-surface-variant text-sm mb-3">
                        {blog.text?.substring(0, 150) ||
                          'Expert insights on workplace safety and health management.'}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-on-surface-variant">
                          By {blog.author || 'Safety Team'}
                        </span>

                        <Link
                          href={PAGE_ROUTES.A_BLOG(blog.link)}
                          className="text-gray-800 font-bold text-sm hover:text-gray-800/80 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-on-surface-variant">
                    No blog articles available at the moment. Check back soon
                    for expert HSE insights!
                  </p>
                </div>
              )}
            </div>

            <div className="order-1 lg:order-2 relative group">
              <div className='flex tablet:flex-col tablet:rounded-none items-center shadow-xl tablet:shadow-none rounded-xl'>
                <Image
                  alt="Cyber Security Conference"
                  className="rounded-l-xl tablet:rounded-none object-top object-cover w-full h-[450px] grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/images/conference/izzy-cyber-conference4.jpeg"
                  width={600}
                  height={450}
                />
                <Image
                  alt="Cyber Security Conference"
                  className="rounded-r-xl tabet:rounded-none object-top object-cover w-full h-[450px] grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/images/projects/white/izzy-on-white5.jpg"
                  width={600}
                  height={450}
                />
              </div>
              
              

              <div className="absolute -bottom-8 -left-8 bg-tertiary-container p-8 rounded-xl shadow-2xl hidden md:block">
                <img
                  src="/svg/article.svg"
                  alt="articles"
                  className="text-gray-800 mb-2 w-10 h-10"
                />

                <p className="text-surface font-bold text-lg">
                  50+ Expert Articles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-primary mb-4">
              Explore by Category
            </h2>

            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Find exactly what you&apos;re looking for with our expertly curated
              safety topics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-tertiary-fixed/10 rounded-full flex items-center justify-center group-hover:bg-tertiary-fixed/20 transition-colors">
                <img
                  src="/svg/local_fire_department.svg"
                  alt="fire safety"
                  className="w-8 h-8 text-gray-800"
                />
              </div>

              <h4 className="font-bold text-primary mb-2">Fire Safety</h4>

              <p className="text-on-surface-variant text-sm mb-4">
                Prevention, detection, and emergency response strategies
              </p>

              <span className="text-gray-800 font-bold text-sm">
                12 Articles
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <img
                  src="/svg/medical_services.svg"
                  alt="first aid"
                  className="w-8 h-8 text-primary"
                />
              </div>

              <h4 className="font-bold text-primary mb-2">First Aid</h4>

              <p className="text-on-surface-variant text-sm mb-4">
                Emergency medical response and life-saving techniques
              </p>

              <span className="text-gray-800 font-bold text-sm">
                8 Articles
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                <img
                  src="/svg/warning.svg"
                  alt="risk management"
                  className="w-8 h-8 text-secondary"
                />
              </div>

              <h4 className="font-bold text-primary mb-2">
                Risk Management
              </h4>

              <p className="text-on-surface-variant text-sm mb-4">
                Hazard identification and control strategies
              </p>

              <span className="text-gray-800 font-bold text-sm">
                15 Articles
              </span>
            </div>

            <div className="bg-surface-container-lowest rounded-xl p-8 text-center hover:shadow-xl transition-all group cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 bg-tertiary/10 rounded-full flex items-center justify-center group-hover:bg-tertiary/20 transition-colors">
                <img
                  src="/svg/eco.svg"
                  alt="environmental"
                  className="w-8 h-8 text-tertiary"
                />
              </div>

              <h4 className="font-bold text-primary mb-2">
                Environmental
              </h4>

              <p className="text-on-surface-variant text-sm mb-4">
                Sustainability and environmental protection
              </p>

              <span className="text-gray-800 font-bold text-sm">
                10 Articles
              </span>
            </div>
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      {/* <section className="py-24 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Stay Updated with Safety Insights
          </h2>

          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get our latest HSE articles, expert tips, and industry updates
            delivered straight to your inbox.
          </p>

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-on-surface bg-white/10 backdrop-blur-md border border-white/20 placeholder-white/60 focus:outline-none focus:border-white/40"
            />

            <button className="bg-tertiary-fixed text-tertiary-container px-8 py-4 rounded-lg font-bold hover:bg-tertiary-fixed/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section> */}
    </div>
  )
}