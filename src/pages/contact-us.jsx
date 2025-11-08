import Image from 'next/image'

import { BlogHelper, CertificateHelper, CourseHelper, iconSvgPath, ImageContainer, LoadButton, ProjectHelper, SectionUnderlineHelper } from '@/components'
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

    const subscribeQue= async()=>{    
        // const sheethttps://docs.google.com/spreadsheets/d/1n1F44RrxXW4OY-FEoQMwjkLQzGcRB1-Bi8eZin_mqeA/edit?gid=0#gid=0
        return await postDataWithoutBaseUrl({path:API_ENDPOINTS?.GOOGLE_SHEET_LINK,body:formData})
      }
    
    const {mutate:subscribeFunc, isPending:isLoading}=useMutation({
    mutationFn: ()=>subscribeQue(),
        onError:(error)=>{
            return NotifyError(error?.error?.message || 'Something went wrong. Please try again later')
        },
        onSuccess:({data})=>{
            return NotifySuccess('Sent! We will be in touch.')
        }
    })
    
    return (
     <div
      className={`py-24 tablet:pt-14 pb-5`}
    >
         <section 
            className='bg-[url("/images/services.png")] py-[100px] tablet:px-[10px] bg-cover bg-center flex flex-col justify-center px-[100px] tablet:px-5 tablet:h-fit text-white tablet:py-14'> 
            <div className='bg-black bg-opacity-25 py-7 px-[75px] tablet:px-5 text-center rounded-md'>
                <h1 className='text-5xl tablet:text-4xl mb-3'>Contact Us</h1>
                <p className='text-lg tablet:text-base'>{'Looking for how to reach out to me? Look no more! fill out the form or message me on my contact line and you are just a step closer to my doorstep.'}</p>                
            </div>
            
        </section>
      
        <div className='justify-between grid items-center tablet:grid-cols-1 grid-cols-[1fr,0.75fr] gap-[100px] py-[100px] px-20 tablet:px-5 tablet:py-6'>
            <div>
                <p className='text-[#20C905] text-4xl tablet:text-3xl font-semibold mb-4'>Get in Touch</p>
                <div className='mb-7 w-full grid grid-cols-2 tablet:grid-cols-1 gap-8'>
                    {form_inputs_list.map(({label, type='text'},ind)=>
                        <div key={ind} className='w-full tablet:w-full'>
                            <p className='mb-2'>{'Your '+label}</p>
                            {type==='textarea'?
                                <textarea className='text-sm bg-blue-50 border rounded-lg py-3 px-5 w-full' onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} value={formData[label.toLowerCase()] || ''}/>:
                                <input className='text-sm bg-blue-50 border rounded-lg py-3 px-5 w-full' type={type} onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} value={formData[label.toLowerCase()] || ''}/>
                            }
                        </div>
                    )}
                </div>
                <div className='flex justify-between items-center tablet:flex-col tablet:gap-y-10 tablet:justify-center'>
                    
                     <div className='flex gap-x-8 tablet:gap-x-8 tablet:flex-col tablet:w-full'>
                        {[{label:"Send Message", link:"", primary:true},
                        {label:"Chat on Whatsapp Instead", link:"#", primary:false}].map(({label, link, primary},ind)=>
                        <Fragment key={ind}>
                        {
                        link?
                        <Link key={ind} href={link}
                            className={`mt-8 tablet:mt-6 text-center tablet:w-full tablet:text-sm inline-block ${primary?'bg-green text-white':'border border-green text-green'} font-medium px-8 py-2 tablet:py-3 rounded-full hover:opacity-90`}> 
                            {label}
                        </Link>:
                        
                        <LoadButton onClick={()=>subscribeFunc()} 
                            isLoading={isLoading}
                            disabled={isNotEmail(formData.email) || !formData.name || !formData.subject || !formData.message}
                            className={`mt-8 tablet:mt-6 text-center tablet:w-full tablet:text-sm inline-block ${primary?'bg-green text-white':'border border-green text-green'} font-medium px-8 py-2 tablet:py-3 rounded-full`}>
                            {label}
                        </LoadButton>
                        }
                        </Fragment>
                        )}
                    </div>
                </div>

            </div>
            <div className='flex items-center flex-col'>
                <ImageContainer src={iconSvgPath('izzyboss-hero.png', 'images')} 
                className={'w-[300px] h-[300px] tablet:w-full tablet:h-[300px]'} 
                imgClass='object-contain w-[390px] h-[390px]' alt='hero image'/>
                <div className='mt-5 space-y-3 flex flex-col items-center font-semibold'>
                    <div className='flex items-center gap-x-3'>
                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.2 17.5C1.595 17.5 1.07727 17.2921 0.6468 16.8763C0.216333 16.4605 0.000733333 15.9601 0 15.375V2.625C0 2.04062 0.2156 1.54054 0.6468 1.12475C1.078 0.708958 1.59573 0.500708 2.2 0.5H19.8C20.405 0.5 20.9231 0.70825 21.3543 1.12475C21.7855 1.54125 22.0007 2.04133 22 2.625V15.375C22 15.9594 21.7848 16.4598 21.3543 16.8763C20.9238 17.2928 20.4057 17.5007 19.8 17.5H2.2ZM11 10.0625L2.2 4.75V15.375H19.8V4.75L11 10.0625ZM11 7.9375L19.8 2.625H2.2L11 7.9375ZM2.2 4.75V2.625V15.375V4.75Z" fill="#484848"/>
                        </svg>
                        <p>hi@safeplacehse.com</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.33058 1C6.93978 1 9.37662 6.48288 9.37662 7.09209C9.37662 8.3105 7.54899 9.52892 6.93978 10.7473C6.33058 11.9658 7.54899 13.1842 8.76741 14.4026C9.24259 14.8778 11.2042 16.8394 12.4227 16.2302C13.6411 15.621 14.8595 13.7934 16.0779 13.7934C16.6871 13.7934 22.17 16.2302 22.17 16.8394C22.17 19.2763 20.3424 21.1039 18.5147 21.7131C16.6871 22.3223 15.4687 22.3223 13.0319 21.7131C10.595 21.1039 8.76741 20.4947 5.72137 17.4486C2.67532 14.4026 2.06612 12.575 1.45691 10.1381C0.847698 7.70129 0.847698 6.48288 1.45691 4.65525C2.06612 2.82763 3.89374 1 6.33058 1Z" stroke="#484848" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>+234 8138948489</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}