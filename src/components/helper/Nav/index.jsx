import React, { useContext, useEffect, useState } from 'react';
import ImageContainer from './../ImageContainer';
import Link from 'next/link';
import { API_ENDPOINTS, PAGE_ROUTES } from '@/configs';
import iconSvgPath from '../iconSvgPath';
import { useRouter } from 'next/navigation'

export default function Nav({scrolledPast,scrolledPastMobile, activeNav}) {

    const nav_list= [
        {
            type:"menu",
            label:"Home",
            to:PAGE_ROUTES.HOME,
        }
        ,{
            type:"menu",
            label:"About Us",
            to:PAGE_ROUTES.ABOUT,
        }
        ,{
            type:"menu",
            label:"Services",
            to:PAGE_ROUTES.SERVICES,
        },
        {
            type:"menu",
            label:"Projects",
            to:PAGE_ROUTES.PROJECTS,
        },
        {
            type:"menu",
            label:"Courses",
            to:PAGE_ROUTES.COURSES,
        },
       {
            type:"menu",
            label:"Blogs",
            to:PAGE_ROUTES.BLOGS,
        },
        {
            type:"menu",
            label:"Contact Us",
            to:PAGE_ROUTES.CONTACT,
        }
        
    ]
    const router = useRouter()


    return (    
        <nav className='phone:fixed phone:top-0 phone:left-0 phone:right-0 phone:w-full z-[70]'>
            <PcNav activeNav={activeNav} nav_list={nav_list} scrolledPast={scrolledPast}/>
            <PhoneNav activeNav={activeNav} nav_list={nav_list} scrolledPast={scrolledPast}/>
        </nav>
    )
}
function PhoneNav({nav_list, scrolledPast, activeNav}){
    const [showNav, setShowNav]= useState(false)
    return(
        <div className='pc:hidden bigpic:hidden tablet:hidden phone:block' 
            style={scrolledPast?{background:"#F4FFF4"}:{background:"transparent"}}
        >
        <div className='flex justify-between items-center px-6 py-3'>
            <div>
                <Link href={'/'} className='flex items-center gap-x-2'>
                    <ImageContainer 
                        src={'/images/safeplacehse_logo.png'} className={'w-[40px] h-[40px]'} alt='safeplace logo'/>
                    {/* <p className="text-xl font-semibold">SafePlaceHSE</p> */}
                </Link>
                
            </div>
            <button onClick={()=>setShowNav(!showNav)}>
                <img src="/svg/barcode.svg" alt="barcode" className='w-8 h-8'/>
            </button>
        </div>
        {showNav && 
        <div className='navboi z-[10] bg-lightgreen border-b absolute min-h-fit py-7 px-6 top-full w-full space-y-6'>
            {nav_list.filter(({type})=>type!=="contact").map(({label,to},ind)=>
                <Link className="hover_class_green flex items-center gap-x-2" style={activeNav===to?{color:"05C202"}:{}} href={to || '/'} onClick={()=>setShowNav(false)}
                    key={ind}>
                    {/* <img className="w-[19px] h-[19px]" src={iconSvgPath('nav/'+label.split(' ')[0])} alt={label} /> */}
                    <p className='font-medium tablet:text-[15px]'>
                        {label}
                    </p>
                </Link >
            )}
        </div>}
        </div>
    )
}
function PcNav({nav_list, scrolledPast, activeNav}){
    const [showNav, setShowNav]= useState(false)
    
    return(
        <div style={scrolledPast?{backgroundColor:"#F4FFF4",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        
        }:{}} className="phone:hidden z-[90] py-7 fixed top-0 left-0 right-0 w-full flex justify-between px-[90px] items-center">
            <Link href={'/'} className='flex items-center gap-x-2'>
                <ImageContainer 
                    src={'/images/safeplacehse_logo.png'} className={'w-[50px] h-[70px]'} imgClass='' alt='safeplace logo'/>
                {/* <p className="text-xl font-semibold">SafePlaceHSE</p> */}
            </Link >
            <ul className='flex gap-x-7 gap-y-4 items-center'>
                <>
                {nav_list.filter(({type,label})=>type==="menu")
                //  && label!=="Contact Us")
                    .map(({label, to},ind)=>
                    // <React.Fragment key={ind}>
                        <li key={ind} 
                        style={scrolledPast?{}:{}}
                            className='font-medium text-black text-[16px] tablet:text-[15px]'>
                            <Link  className="hover_class_green" href={to || '/'} >
                                {label}
                            </Link >
                        </li>
                    // </React.Fragment>
                )}
                
                </>
            </ul>
        </div>

    )
}