import Image from 'next/image'

import { BlogHelper, CourseHelper, iconSvgPath, ImageContainer, ProjectHelper, SectionUnderlineHelper } from '@/components'
import Link from 'next/link'
import { useState } from 'react'


export default function Home() {
  return (
    <div
      className={`py-24`}
    >
      <HeroSection />
      <WhoWeAre/>
      <Services/>
      <Certificates/>
      <ProjectHelper/>
      <Testimonials/>
      <CourseHelper/>
      <BlogHelper/>
      
    </div>
  )
}

function HeroSection() {
  return (
    <div className="h-fit px-24 tablet:h-fit py-[50px] flex tablet:flex-col items-center justify-between">      
      <div className=''>
        <div >
          <h1 className="text-5xl tablet:text-4xl font-bold tablet:text-left">  
            <span className="text-green">SafePlaceHSE</span> Consulting
          </h1>
          <p className='text-[#2A2A2A] text-lg font-semibold mt-[3px]'>HSE Consultant | Safety, Compliance & Environmental Solutions</p>
        </div>
        <div>
          <p className="mt-2 text-sm text-[#2A2A2A] mt-6 mb-5 tablet:text-left max-w-2xl">
            At SafeplaceHSE, we believe that safety is more than a regulatory requirement,<br/> it is a responsibility, a culture, and a commitment to preserving life, health, and the environment
          </p>
          <div className='flex gap-x-10 tablet:gap-x-6 tablet:justify-start'>
            {[{numbers:"5yrs+", label:"Experience"},
              {numbers:"1k+", label:"Certificates"}].map(({numbers, label},ind)=>
              <div key={ind} className="text-lg tablet:text-left max-w-2xl">
                <p className='font-semibold text-3xl mb-[6px]'>{numbers}</p>
                <p className='light-g text-sm'>{label}</p>
              </div>
            )}
          </div>
        </div>
        <div className='flex gap-x-8 tablet:gap-x-8 tablet:justify-start'>
            {[{label:"Chat with Us", link:"#", primary:true},
              {label:"Learn More", link:"#", primary:false}].map(({label, link, primary},ind)=>
              <Link href={link} key={ind} className={`mt-8 inline-block ${primary?'bg-green text-white':'border border-green text-green'} font-medium px-8 py-2 rounded-full hover:opacity-90`}> 
                {label}
              </Link>
            )}
        </div>
      </div>
      <ImageContainer src={iconSvgPath('izzyboss-hero.png', 'images')} 
        className={'w-[400px] h-[400px] tablet:w-full tablet:h-[400px]'} 
        imgClass='object-contain w-[390px] h-[390px]' alt='hero image'/>
    </div>
  )
}  

function WhoWeAre() {
  return (
    <section className='px-24  py-[50px] flex flex-col justify-center'>
      <div className='flex justify-center mb-5 tablet:px-6'>
        <div className='w-fit flex flex-col items-center'>
          <h4 className='text-3xl mb-2 px-3 font-semibold'>WHO WE ARE</h4>
          <span className='w-[70%] border-green h-[1px] border'></span>
        </div>
       
      </div>
      {/* <div className="h-fit gap-x-[150px] tablet:h-fit  justify-center flex-col flex tablet:flex-col items-center">       */}
        <div className='flex justify-center'>
          <div className='w-[900px]'>
            <p className='text-base light-g text-center'>{"HEPHZ-RON CONSULTING, registered with corporate affairs commission (CAC), provides Health, Safety and Environment (HSE) consulting services to oil and gas and non-oil and gas sectors of Nigerian Economy. We also offer HSE Retainership, Nigeria Petroleum Exchange (NIPEX) registration Consultancy and HSE Training across all sectors of Nigeria’s economy."}</p>
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <ImageContainer src={iconSvgPath('izzyboss-hero.png', 'images')} 
            className={'w-[400px] h-[400px] tablet:w-full tablet:h-[300px]'} 
            imgClass='object-contain w-[390px] h-[390px]' alt='hero image'/>
        </div>
        <div className=' flex justify-center'>
          <button className='mt-10 flex justify-center items-center gap-x-2 bg-green text-white font-medium px-8 py-2 rounded-full hover:opacity-90'>
            <p>Read Our Story</p>
            <img src={iconSvgPath('caret-right')} alt="caret-right" />
          </button>
        </div>
      {/* </div> */}
    </section>
  )
}  

function Services(){
  const services=[
    {img:"/audit", label:"Audits", desc:"We deliver thorough HSE audits to identify risks, ensure compliance, and drive continuous improvement."},
    {img:"/train", label:"Training", desc:"We provide practical HSE training to equip teams with the knowledge and skills for a safer workplace."},
    {img:"/compliance", label:"Compliance Support", desc:"We offer tailored compliance support to help organizations meet regulatory standards with ease."}
  ]

  return (
    <section className='bg-[url("/images/services.png")] h-screen bg-cover bg-center flex flex-col justify-center px-[100px] text-white'> 
      <div className='flex justify-between items-center'>
        <p className='text-2xl font-semibold'>OUR SERVICES</p>
        <div className='w-[700px] tablet:w-full border-l-2 pl-2 border-white'>
          <p>{"Izzyboss consultancy is committed to quality management to ensure excellent delivery of all our services.  We foster a culture of continuous improvement to deliver our services to specifications and requirements."}</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-x-[70px] mt-16'>
        {services.map(({img, label, desc},ind)=>
          <div key={ind} className='rounded-md p-7 shadow-xl border border-white flex flex-col items-center'>
            <img src={iconSvgPath(img+".png", 'images')}/>
            <p className='font-semibold text-lg my-4'>{label}</p>
            <p className='text-center text-sm'>{desc}</p>
          </div>
        )}
      </div>
      <div className='flex mt-14 justify-center gap-x-4 items-center'>
        {[{label:"Check our Projects", href:"/", classNames:'shadow-xl border rounded-full py-2.5 px-4'},
        {label:"Explore Courses", href:"/", classNames:"shadow-xl bg-white text-green font-semibold rounded-full py-2.5 px-4"}]
          .map(({label, href, classNames},ind)=>
          <Link href={href} key={ind} className={classNames}>
            {label}
          </Link>
        )}
      </div>
    </section>
  )
}

function Certificates(){
  const certs = [
  {
    img: "cert.png",
    label: "ISO 45001",
    desc: "Occupational Health and Safety Management System certification"
  },
  {
    img: "cert.png",
    label: "ISO 14001",
    desc: "Environmental Management System (EMS)"
  },
  {
    img: "cert.png",
    label: "ISO/TS 29001",
    desc: "Quality Management System for Oil and Gas Industry"
  },
  {
    img: "cert.png",
    label: "ISO 22000",
    desc: "Food Safety Management Systems"
  },
  {
    img: "cert.png",
    label: "ISO 9001",
    desc: "Quality Management System (QMS) certification"
  }
];

  return(
    <div>
      <div className='flex justify-center mb-5 tablet:px-6 py-20 flex-col items-center '>
        <div className='w-fit flex flex-col items-center mb-20'>
          <h4 className='text-3xl mb-2 px-3 font-semibold'>OUR CERTIFICATES</h4>
          <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
        <div className='grid grid-cols-3 gap-x-[70px] gap-y-10 tablet:grid-cols-1 w-[1000px] tablet:w-full'>
          {certs.map(({img, label, desc},ind)=>
            <div key={ind} className='rounded-md p-7 flex flex-col items-center'>
              <img src={iconSvgPath(img, 'images')}/>
              <p className='font-semibold text-lg my-4'>{label}</p>
              <p className='text-center text-sm'>{desc}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


function Testimonials(){
  const testimonials = [
  {
    img: "client.png",
    name: "John Smith",
    title: "HSE Manager", 
    company:"Total Energies",
    feedback:
      "Working with SC Training has been a great experience. Their HSE courses are practical, engaging, and easy to implement within our team."
  },
  {
    img: "client.png",
    name: "Amaka Johnson",
    title: "Project Supervisor", 
    company:"Shell Nigeria",
    feedback:
      "The training was incredibly detailed and aligned with our compliance goals. We’ve seen measurable improvement in our team’s safety awareness."
  },
  {
    img: "client.png",
    name: "David Thompson",
    title: "Operations Lead",
    company: "Chevron",
    feedback:
      "Their courses make complex safety and compliance concepts simple to understand. Highly recommended for organizations aiming for international standards."
  }
];
const [activeIndex, setActiveIndex] = useState(0);
  return(
    <section className='flex flex-col items-center w-screen h-fit px-[100px] py-[100px]'>
      <SectionUnderlineHelper label={'HEAR FROM OUR CLIENTS'}/>
      <div className='flex gap-x-3 items-center tablet:flex-col tablet:gap-y-4'>
        <button className='w-9 h-9 flex items-center justify-center border border-[#4BCB48] rounded-full'>
          <img src={'/svg/caret-left.svg'} alt="caret" />
        </button>
        <div className='flex items-center gap-x-[70px] gap-y-10 tablet:grid-cols-1 w-[1000px] tablet:w-full'>
          {testimonials.slice(0,1).map(({img, name, title, company, feedback},ind)=>
            <div key={ind} className='bg-[#4BCB48] text-white rounded-md p-7 flex tablet:flex-col items-center border  shadow-xl'>
              <div className='tablet:w-full text-left'>
                  <p className='text-xl mb-5'>{`" ${feedback} "`}</p>
                  <p className='font-semibold text-base mb-2'>{name +' | '+ title}</p>
                  <p className='text-sm italic'>{company}</p>
              </div>           
              <img src={iconSvgPath(img, 'images')}/>
            </div>
          )}
        </div>
        <button className='w-9 h-9 flex items-center justify-center border border-green rounded-full'>
          <img src={'/svg/caret-green-right.svg'} alt="caret" />
        </button>  
      </div>
      <div className='flex justify-center gap-x-2.5 items-center mt-10'>
        {[1,2,3,4].map((_,ind)=>
            <div 
            className="cursor-pointer w-[10px] h-[10px] rounded-full transition-200" key={ind}
            // style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            onClick={()=>setActiveIndex(ind)}
            style={
            activeIndex===ind?
            {background:'#4BCB48'}:
            {background:'transparent', border:'1px solid #4BCB48'}
            }> 
            </div>
        )}
      </div>
      <div className='mt-20 text-center'>
        <Link href={'/'} className='bg-[#4BCB48] rounded-full text-white py-3 px-5'>Contact Us</Link>
      </div>
    </section>
  )
}