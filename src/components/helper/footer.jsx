import Link from "next/link"
// import { useHttpServices, useToast } from '@/hooks';
import { PAGE_ROUTES, consolelog,API_ENDPOINTS } from '@/configs'
import { Fragment, useContext, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import { iconSvgPath, ImageContainer } from "..";


export default function Footer() {    
    const soc_links=[
        // {icon:"youtube", link:API_ENDPOINTS?.CONTACT?.YOUTUBE_LINK},
        {icon:"insta", link:API_ENDPOINTS?.CONTACT?.INSTA_LINK},
        {icon:"fb", link:API_ENDPOINTS?.CONTACT?.FACEBOOK_LINK},
        {icon:"whatsapp", link:API_ENDPOINTS?.CONTACT?.WHATSAPP_LINK},
        {icon:"linkedin", link:API_ENDPOINTS?.CONTACT?.LINKEDIN_LINK},
        // {icon:"linkedin", link:}
    ]
    // const {postData}= useHttpServices()
    
const [email, setEmail]= useState('')
    
    const {NotifySuccess, NotifyError}= {}

    const subscribeQue= async()=>{    
        const body={email}
        console.log(body)
        return await postData({path:API_ENDPOINTS?.SUBSCRIBE_TO_NEWSLETTER,body})
      }
    
      const {mutate:subscribeFunc, isPending:pendLoading}=useMutation({
        mutationFn: ()=>subscribeQue(),
          onError:(error)=>{
              consolelog({error})
              return NotifyError(error?.error?.message || 'Could not get data')
          },
          onSuccess:({data})=>{
            console.log({data})
              return NotifySuccess('Sent! We will be in touch.')
          }
        })
    
    return (    
        <footer className="px-[70px] tablet:px-10 tablet:py-10 tablet:mt-10 mt-[80px] py-[40px] ta text-white pb-10 bg-[url('/images/services.png')] bg-cover bg-no-repeat bg-bottom">     
            <div className="gap-x-[150px] tablet:gap-x-10 flex tablet:flex-col tablet:gap-y-10">
                <div className="max-w-[350px]">
                    {/* <h2 className="text-xl text-green font-semibold">Gogota Farm</h2> */}
                    <div className="flex items-end gap-x-2">
                        <ImageContainer src={'/images/safeplacehse_logo.png'} style={{filter: 'brightness(0) invert(1)'}} className={'w-[40px] h-[45px]'} alt='safeplace logo'/>
                        {/* <p className="text-lg">Safeplace HSE</p> */}
                    </div>

                    {/* <div className="flex items-center gap-6 mt-4">
                        {soc_links.map(({icon, link},ind)=>
                            <Link target="_blank" href={link || '/'} key={ind}>
                                <div>
                                    <ImageContainer src={iconSvgPath('socials/'+icon)} alt={icon} className="w-6 h-6"/>
                                </div>
                            </Link>
                        )
                        }
                    </div> */}
                </div>
                <div className="flex gap-x-10 tablet:flex-col tablet:gap-y-6">                    
                    <div>
                        
                        <p className="text-lg font-[500] mb-4 text-[#F5F5F5]">Contact</p>
                        <div className="max-w-[300px] text-base space-y-2">
                            <p className="">Phone: <span className="font-medium">{API_ENDPOINTS?.CONTACT?.PHONE ?? '+971592295379'}</span></p>
                            {/* <p className="text-sm  font-semibold">Facebook: <span className="font-medium">+234 9728330023</span></p> */}
                            <p className="">Email: <span className="font-medium">{API_ENDPOINTS?.CONTACT?.GMAIL ?? 'info.safeplacehse.com'}</span></p>
                            {/* <p className="text-sm  font-semibold">: <span className="font-medium">43 lorem ipsum Niger, Niger State</span></p> */}
                        </div>
                    </div>                    
                </div>
                <div>
                    <p className="text-lg font-[500] mb-4 text-[#F5F5F5]">Quick Links</p>
                    <div className="text-base flex flex-col gap-y-2">
                        <Link href={PAGE_ROUTES?.ABOUT_US ?? '/'}><p className="">About Us</p></Link>
                        <Link href={PAGE_ROUTES?.PROPERTIES ?? '/'}><p className="">Properties</p></Link>
                        <Link href={PAGE_ROUTES?.CONTACT ?? '/'}><p className="">Contact Us</p></Link>
                    </div>
                </div>
                
            </div>
            
            <hr className="mt-20"/>
            <p className="text-center font-[600] text-sm pt-10">
            &copy; Copyright {new Date().getFullYear()} SafePlaceHSE. All rights reserved.
            </p>
        </footer>

    )
}