import Image from 'next/image'

import { BlogHelper, CourseHelper, ProjectHelper } from '@/components'
import Link from 'next/link'
import { useState } from 'react'


export default function Project() {
  return (
    <div
      className={`py-24 tablet:py-14`}
    >
        <section 
            className='bg-[url("/images/services.png")] py-[100px] tablet:px-[10px] bg-cover bg-center flex flex-col justify-center px-[100px] tablet:px-5 tablet:h-fit text-white tablet:py-14'> 
            <div className='bg-black bg-opacity-25 py-7 px-[75px] tablet:px-5 text-center rounded-md'>
                <h1 className='text-5xl tablet:text-4xl mb-3'>Projects</h1>
                <p className='text-lg tablet:text-base'>{'A showcase of our practical contributions to workplace safety and environmental management. Each project reflects our dedication to building safe, compliant, and efficient work environments through strategic planning, continuous monitoring, and the effective implementation of HSE standards.'}</p>                
            </div>
        </section>
        <div className='mt-20'>
            <ProjectHelper showButtons={false}/>
            {/* <BlogHelper btnLabel={'View Projects'} whatsnew={"WHAT'S NEW"} className={'text-center'}/> */}
        </div>
    </div>
  )
}