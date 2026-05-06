import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { isNotEmail } from '@/configs/inputValidation'
import { useMutation } from '@tanstack/react-query'
import { useHttpServices, useToast } from '@/hooks'
import { API_ENDPOINTS } from '@/configs'

export default function ContactUs() {
    const [formData, setFormData]= useState({})
    const form_inputs_list=[
        {label:'Name', },
        {label:'Email', type:'email'},
        {label:'Subject'},
        {label:'Message' , type:'textarea'}
    ] 
    const {NotifySuccess, NotifyError}= useToast()
    const {postDataWithoutBaseUrl}= useHttpServices()
    const [isLoading, setLoading]= useState(false)

    const subscribeQue= async()=>{    
        return await postDataWithoutBaseUrl({path:API_ENDPOINTS?.GOOGLE_SHEET_LINK,body:formData})
      }
    
    const {mutate:subscribeFunc, isPending:isLading}=useMutation({
    mutationFn: ()=>subscribeQue(),
        onError:(error)=>{
            return NotifyError(error?.error?.message || 'Something went wrong. Please try again later')
        },
        onSuccess:({data})=>{
            return NotifySuccess('Sent! We will be in touch.')
        }
    })
    function subscribeFund(e){
        setLoading(true)
        e?.preventDefault();
        fetch(API_ENDPOINTS.GOOGLE_SHEET_LINK, {
        method: 'POST',
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message:formData.message
        })
        })
        .then(res =>{
            NotifySuccess('Sent! We will be in touch.')
            setLoading(false)
        } )
        .catch(err => {
            setLoading(false)
        });
    }

    return (
    <div className="bg-background text-on-background scroll-smooth">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Contact SafePlaceHSE"
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
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Let&apos;s Build a Safer Future Together
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              Looking for how to reach out to us? Fill out the form or message us on our contact line and you&apos;re just a step closer to transforming your safety culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-tertiary-fixed text-tertiary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                Start Conversation
                <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
              </button>
              <button className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-white/20 transition-all duration-300">
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-extrabold text-primary mb-4">Send Us a Message</h2>
                <p className="text-on-surface-variant text-lg">
                  Have questions about our services? Need a consultation? Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              
              <form id='contactForm' className="space-y-6">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {form_inputs_list.map(({label, type='text'},ind)=>
                    <div key={ind} className='w-full'>
                      <label className='block text-sm font-medium text-on-surface-variant mb-2'>{'Your '+label}</label>
                      {type==='textarea'?
                        <textarea 
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-surface-container-lowest' 
                          rows={4}
                          onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} 
                          value={formData[label.toLowerCase()] || ''}
                          placeholder={`Enter your ${label.toLowerCase()}`}
                        />:
                        <input 
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm bg-surface-container-lowest' 
                          type={type} 
                          onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} 
                          value={formData[label.toLowerCase()] || ''}
                          placeholder={`Enter your ${label.toLowerCase()}`}
                        />
                      }
                    </div>
                  )}
                </div>
                
                <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                  <LoadButton 
                    onClick={()=>subscribeFund()} 
                    isLoading={isLoading}
                    disabled={!!isNotEmail(formData.email) || !formData.name || !formData.subject || !formData.message}
                    className='bg-tertiary-fixed text-tertiary-container px-8 py-4 rounded-md font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2'>
                    Send Message
                    <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
                  </LoadButton>
                  
                  <Link 
                    href="https://wa.me/+971592295379"
                    target="_blank"
                    className='border-2 border-primary text-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-center'>
                    Chat on WhatsApp
                    <img src="/svg/arrow-right.svg" alt="arrow forward" className="inline align-middle w-6 h-6" />
                  </Link>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-extrabold text-primary mb-4">Contact Information</h2>
                <p className="text-on-surface-variant text-lg">
                  Prefer to talk directly? Here are all the ways you can reach us.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-surface-container-low rounded-xl border-l-4 border-tertiary-fixed">
                  <div className="bg-tertiary-fixed/10 p-3 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Email</h3>
                    <p className="text-on-surface-variant">info@safeplacehse.com</p>
                    <p className="text-sm text-on-surface-variant/70">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-surface-container-low rounded-xl border-l-4 border-primary">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 12a8.997 8.997 0 011.672-5.157L3 5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Phone</h3>
                    <p className="text-on-surface-variant">+234 8138948489</p>
                    <p className="text-sm text-on-surface-variant/70">Mon-Fri 9AM-6PM WAT</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-6 bg-surface-container-low rounded-xl border-l-4 border-secondary">
                  <div className="bg-secondary/10 p-3 rounded-lg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">Office Location</h3>
                    <p className="text-on-surface-variant">Nigeria</p>
                    <p className="text-sm text-on-surface-variant/70">Available for on-site consultations</p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="mt-12 relative group">
                <Image
                  alt="Contact SafePlaceHSE"
                  className="rounded-xl shadow-xl w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  src="/images/safety-hse-israel.jpg"
                  width={600}
                  height={300}
                />
                <div className="absolute -bottom-8 -right-8 bg-tertiary-container p-8 rounded-xl shadow-2xl hidden md:block">
                  <img src="/svg/verified_user.svg" alt="verified" className="text-tertiary-fixed mb-2 w-10 h-10" />
                  <p className="text-surface font-bold text-lg">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
