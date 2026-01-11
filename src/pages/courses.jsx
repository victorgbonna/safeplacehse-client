import Image from 'next/image'
import { ContactForm, CourseHelper } from '@/components'
import Link from 'next/link'
import { useState } from 'react'

export default function Courses() {
  return (
    <div className="py-24 tablet:py-14">
      <section
        className="bg-[url('/images/services.png')] py-[100px] tablet:px-[10px] bg-cover bg-center flex flex-col justify-center px-[100px] tablet:px-5 tablet:h-fit text-white tablet:py-14"
      >
        <div className="bg-black bg-opacity-25 py-7 px-[75px] tablet:px-5 text-center rounded-md">
          <h1 className="text-5xl tablet:text-4xl mb-3">Courses</h1>
          <p className="text-lg tablet:text-base">
            {`We’ve listed the best online HSE courses with certificates for you to check out. These courses will teach your learners how to put health and safety at the forefront of everything.`}
          </p>
        </div>
      </section>

      <div className="mt-20">
        <CourseHelper btnLabel="View Projects" />
      </div>

      <div className="mt-20 flex flex-col justify-center tablet:px-5 px-20">
        <ContactForm
          sheetName="Course Request"
          text="Want some trainings/courses not provided here?"
          showSubject={false}
          options={['Training', 'Courses']}
        />
      </div>
    </div>
  )
}
