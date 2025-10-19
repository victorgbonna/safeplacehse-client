import Image from 'next/image'

import { BlogHelper, CertificateHelper, CourseHelper, iconSvgPath, ImageContainer, ProjectHelper, SectionUnderlineHelper } from '@/components'
import Link from 'next/link'
import { useState } from 'react'


export default function AboutUs() {
  return (
    <div
      className={`py-24 tablet:py-14`}
    >
        <section 
            className='bg-[url("/images/services.png")] py-[100px] tablet:px-[10px] bg-cover bg-center flex flex-col justify-center px-[100px] tablet:px-5 tablet:h-fit text-white tablet:py-14'> 
            <div className='bg-black bg-opacity-25 py-7 px-[75px] tablet:px-5 text-center rounded-md'>
                <h1 className='text-5xl tablet:text-4xl mb-3'>About Us</h1>
                <p className='text-lg tablet:text-base'>HSE Consultant | Safety, Compliance & Environmental Solutions</p>                
            </div>
        </section>
        <div className='p-20 text-center w-full tablet:px-5 tablet:py-10'>
            <SectionUnderlineHelper style={{width:'100%'}} label={'Our Mission and Vision'}/>
            
            <p>{"At SafeplaceHSE, our mission is to help organizations build safer, healthier, and more sustainable workplaces. We believe safety is more than compliance, it is a responsibility, a culture, and a commitment to preserving life, health, and the environment. Every worker deserves to return home safe and healthy at the end of the day, and every organization has a duty to create the conditions that make this possible."}</p>
            <br />
<           p>{"Our vision is to create a world where safety is embedded in every process and decision. We aspire to see organizations move beyond minimum standards to adopt safety as a core value that drives trust, productivity, and resilience. By empowering businesses to take ownership of their safety systems, we aim to build a future where people, performance, and sustainability thrive together."}</p>
        </div>
 
        <section className=' tablet:text-center tablet:items-center tablet:justify-center grid-cols-[0.75fr,1fr] grid py-[60px] px-24 tablet:py-10 tablet:grid-cols-1 tablet:item-center tablet:px-5 tablet:flex-col items-center justify-center gap-x-8 gap-y-10'>
            <div className='tablet:order-2'>
                <p className='text-3xl mb-8 font-semibold tablet:text-center'>Our Principles and Values</p>
                {/* <SectionUnderlineHelper label={'OUR PHILOSOPHY'}/> */}
                <p>{"Our work is guided by a deep respect for human life and a commitment to doing what is right, not just what is required. We believe that safety should be proactive, not reactive, and that integrity, responsibility, and continuous improvement must shape every action we take. At SafeplaceHSE, we see safety as an investment that strengthens people and organizations alike. Our principles are grounded in empathy, professionalism, and excellence—ensuring that every engagement reflects our belief that when people are protected, businesses grow stronger, and communities become more sustainable."}</p>
                <button className='flex items-center tablet:justify-center tablet:w-full tablet:mt-12 tablet:py-3 text-white mt-4 px-4 py-2 gap-x-3 rounded-md bg-[#057003]'>
                    <p>Book a Consultation</p>
                    <img src="/svg/socials/whatsapp.svg" alt="whatsapp" />
                </button>
            </div>
            <div className='w-full h-[550px] space-y-[2%] tablet:h-[400px]'>
                <div className='flex items-center h-[59%] w-full gap-x-4'>
                    <ImageContainer className={'h-[90%] w-full'} src={'/images/gallery1.png'} imgClass='object-top object-cover tablet:object-center rounded-md soft-bd-shadow p-2 bg-white'/>
                    <ImageContainer className={'h-full w-[90%]'} src={'/images/gallery2.png'} imgClass='object-top object-cover tablet:object-center rounded-md soft-bd-shadow p-2 bg-white'/>
                </div>
                <div className='flex items-center h-[39%] w-full gap-x-4'>
                    <ImageContainer className={'h-full w-[90%]'} src={'/images/gallery3.png'} imgClass='object-top object-cover rounded-md soft-bd-shadow p-2 bg-white'/>
                    <ImageContainer className={'h-[90%] w-full'} src={'/images/gallery2.png'} imgClass='object-top object-cover rounded-md soft-bd-shadow p-2 bg-white'/>
                </div>
            </div>
        </section>
        <AreaExpertise/>
        <ProjectHelper/>
        <Gallery/>
        <CertificateHelper/>
    </div>
  )
}

function AreaExpertise(){
  const services=[
    {img:"/oil", label:"Oil & Gas", desc:"We deliver thorough HSE audits to identify risks, ensure compliance, and drive continuous improvement."},
    {img:"/construction", label:"Construction", desc:"We provide practical HSE training to equip teams with the knowledge and skills for a safer workplace."},
    {img:"/manufacturing", label:"Manufacturing", desc:"We offer tailored compliance support to help organizations meet regulatory standards with ease."},
    {img:"/realestate", label:"Real Estate", desc:"We offer tailored compliance support to help organizations meet regulatory standards with ease."}

  ]

  return (
    <section className='mt-20 mb-[100px] tablet:my-0  flex flex-col justify-center px-[100px] tablet:px-5 tablet:h-fit tablet:py-14 '> 
      <SectionUnderlineHelper style={{width:'100%'}} label={'OUR AREA OF EXPERTSE'}/>
      <div className='grid grid-cols-4 tablet:grid-cols-2 tablet:gap-x-4 tablet:gap-y-4 gap-x-[70px] mt-16 tablet:mt-0 border-[]'>
        {services.map(({img, label, desc},ind)=>
          <div key={ind} className='rounded-md tablet:w-full tablet:border-2 p-7 shadow-xl border border-white flex flex-col items-center border-[#057003]'>
            <img src={iconSvgPath('industries'+img)}/>
            <p className='font-semibold text-lg mt-4 tablet:text-sm'>{label}</p>
            
          </div>
        )}
      </div>
    </section>
  )
}


function Gallery(){
    const images=[1,2,3,4,5,6,7,7,8,9,9,9]
    return(
        <div className='grid items-center gap-[60px] justify-between grid-cols-4'>
            {images.map((_,ind)=>
                <div key={ind}>
                    <ImageContainer/>
                </div>
            )}
        </div>
    )
}