import Image from 'next/image'

import { CourseHelper, iconSvgPath, ImageContainer, LoadButton, ProjectHelper, SectionUnderlineHelper, SelectOption } from '@/components'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { isNotEmail } from '@/configs/inputValidation'
import { useMutation } from '@tanstack/react-query'
import { useHttpServices, useToast } from '@/hooks'
import { API_ENDPOINTS, consolelog } from '@/configs'

export default function ContactUsForm({
    sheetName='Contact', showSubject=true, options, text
}) {
    const [formData, setFormData]= useState({})
    const form_inputs_list=showSubject?[
        {label:'Name'},
        {label:'Email', type:'email'},
        {label:'Subject'},
        {label:'Message' , type:'textarea'}
    
    ]:[
        {label:'Name'},
        {label:'Email', type:'email'},
        {label:'Category', type:'option', options, value:'subject'},
        {label:'Message' , type:'textarea'}
    ]

    const {NotifySuccess, NotifyError}= useToast()
    const {postDataWithoutBaseUrl}= useHttpServices()
    const [isLoading, setLoading]= useState(false)

    const subscribeQue= async()=>{    
        // const sheethttps://docs.google.com/spreadsheets/d/1n1F44RrxXW4OY-FEoQMwjkLQzGcRB1-Bi8eZin_mqeA/edit?gid=0#gid=0
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
    const contact_data=[
        {label:"Send Message", link:"", primary:true},
        ...(text?[]:[{label:"Chat on Whatsapp Instead", link:"#", primary:false}])
    ]
    function subscribeFund(e){
        let body={name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message:formData.message,
            // sheetName,
            // type:text?formData.subject:'Contact'
        }  
        consolelog({body})    
        setLoading(true)
        e?.preventDefault();
        fetch(API_ENDPOINTS.GOOGLE_SHEET_LINK, {
        method: 'POST',
        body: JSON.stringify({
            ...body
        })
        })
        .then(res => res.text())
        .then(res =>{
            NotifySuccess('Sent! We will be in touch.')
            setLoading(false)
        })
        .catch(err => {
            NotifyError('Something went wrong. Please try again later')
            setLoading(false)
        });
    }
    return(
    <form id='contactForm'>
        <p className='text-[#20C905] text-4xl tablet:text-3xl font-semibold mb-4'>{text?text:'Get in Touch'}</p>
        {text?<p className='mb-2 text-base text-gray-700'>Fill the form below and we will reach out to you.</p>:null}
        <div className='mb-7 w-full grid grid-cols-2 tablet:grid-cols-1 gap-8'>
            {form_inputs_list.map(({label, type='text', options, value},ind)=>
                <div key={ind} className='w-full tablet:w-full'>
                    <p className='mb-2'>{'Your '+label}</p>
                    {type==='textarea'?
                        <textarea className='text-sm bg-blue-50 border rounded-lg py-3 px-5 w-full' onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} value={formData[label.toLowerCase()] || ''}/>:
                        type==='option'?
                        <SelectOption containerClass='text-sm bg-blue-50 flex justify-between items-center cursor-pointer border rounded-lg py-3 px-5 w-full' options={options} label={label} 
                            onChange={(e)=>setFormData({...formData, [value]:e})} 
                            value={formData[value] || ''}
                        />:
                        <input className='text-sm bg-blue-50 border rounded-lg py-3 px-5 w-full' 
                            type={type} 
                            onChange={(e)=>setFormData({...formData, [label.toLowerCase()]:e.target.value})} 
                            value={formData[label.toLowerCase()] || ''}
                        />
                    }
                </div>
            )}
        </div>
        <div className='flex justify-between items-center tablet:flex-col tablet:gap-y-10 tablet:justify-center'>
            
                <div className='flex gap-x-8 tablet:gap-x-8 tablet:flex-col tablet:w-full'>
                {contact_data.map(({label, link, primary},ind)=>
                <Fragment key={ind}>
                {
                link?
                <Link key={ind} href={link}
                    className={`mt-8 tablet:mt-6 text-center tablet:w-full tablet:text-sm inline-block ${primary?'bg-green text-white':'border border-green text-green'} font-medium px-8 py-2 tablet:py-3 rounded-full hover:opacity-90`}> 
                    {label}
                </Link>:
                <>
                
                <LoadButton onClick={()=>subscribeFund()} 
                    isLoading={isLoading}
                    disabled={!!isNotEmail(formData.email) || !formData.name || (!formData.subject && !formData.category) || !formData.message}
                    className={`mt-8 tablet:mt-6 text-center tablet:w-full tablet:text-sm inline-block ${primary?'bg-green text-white':'border border-green text-green'} font-medium px-8 py-2 tablet:py-3 rounded-full`}>
                    {label}
                </LoadButton>
                </>
                }
                </Fragment>
                )}
            </div>
        </div>

    </form>
    )
}