import { AutoSlider, iconSvgPath, ImageContainer } from "@/components";
import { API_ENDPOINTS, PAGE_ROUTES } from "@/configs";
import Link from "next/link";
import { useState } from "react";

export default function BlogHelper({blog_id, showHeader=true}){
    const [teamCurr, setTeamCurr]= useState(0)
    return(
        <div className='mb-10 py-14 px-20 tablet:px-0 tablet:py-10 tablet:mb-0'>
        {showHeader?<p className="text-black text-base font-semibold mb-10 px-10 tablet:text-xl tablet:px-5 tablet:text-center">{'READ OUR ARTICLES'}</p>:null}
        <div className='flex gap-x-10 tablet:gap-x-0 tablet:px-3'>
          <div id="newsscroll" 
            style={{transform: `translateX(-${teamCurr * 100}%)`} }
            className='max-w-[1440px] grid-cols-3 grid tablet:grid-cols-1 px-10 tablet:px-5 pb-4 overflow-x-hidden gap-10'>
            {API_ENDPOINTS.BLOGS.filter(({id})=>id!==blog_id).map(({title, text,src,link,date},ind)=>
              <div key={ind} 

                className="rounded-md bg-white w-full pb-4 tablet:min-w-[100%]"
                style={{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}  
                
                
                >
              <div>
                  <ImageContainer 
                    src={
                      iconSvgPath('blog.png', 'images')
                    }  
                    className={'w-full h-[200px] rounded-t-md'}
                     
                    imgClass="object-center object-cover"
                    alt={title}
                  />
                  </div>
              <div id='' 
                className="px-5">
                  
                  <p className=" text-xs mt-2 p-2 rounded-sm w-fit font-[600]" style={{
                    background:"rgba(240, 244, 246, 1)"
                  }}>{date}</p>
                  <p className='mt-5 mb-3 text-md font-semibold min-h-10'>{title}</p>
                  <div>
                    <p className=" text-graySubHd text-[13px]">{text.slice(0, 120)+'...' || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore vel voluptatum voluptate totam? Rep'} </p>
                  </div>
                  {link?<div className="flex justify-end">
                    <Link href={PAGE_ROUTES.A_BLOG('fire-safety-awareness')}
                      className='w-fit mt-5 flex items-center gap-x-2'>
                      <p className='text-sm text-green'>Read Article</p>
                      <img src={iconSvgPath('caret-green-right')} alt="" />

                    </Link>
                  </div>:null}

              </div>
              </div>
            )}       
          </div>
          
        </div>
        {/* <AutoSlider teamCurr={teamCurr} team={API_ENDPOINTS.BLOGS.filter(({id})=>id!==blog_id)} setTeamCurr={setTeamCurr}>
        {API_ENDPOINTS.BLOGS.filter(({id})=>id!==blog_id).map(({title, text,link:to,date,src:img},ind)=>
            <div key={ind} id="news"
              className="rounded-md border bg-white w-full pb-4 tablet:min-w-[100%]"
              // style={{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"}}
              style={{transform: `translateX(-${teamCurr * 100}%)`} } 
              >
            <div>
                <ImageContainer 
                  src={
                    iconSvgPath(img || 'gray_back.png', 'images')
                  }  
                  className={'w-full h-[200px] rounded-t-md'}
                  // type={'images'}  
                  imgClass="object-center object-cover"
                  alt={title}
                />
                </div>
              <div id='' 
                className="px-5 tablet:px-3">
                  
                  <p className=" text-xs mt-2 p-2 rounded-sm w-fit font-[600]" style={{
                    background:"rgba(240, 244, 246, 1)"
                  }}>{date}</p>
                  <p className='mt-5 mb-3 text-md font-semibold min-h-10'>{title}</p>
                  <div>
                    <p className=" text-graySubHd text-[13px]">{text || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dolore vel voluptatum voluptate totam? Rep'} </p>
                  </div>
                  {to?<div className="flex justify-left">
                    <Link href={to || '/'}
                      className='w-fit mt-5 flex items-center gap-x-2'>
                      <p className='text-sm text-[#1877F2]'>Read Article</p>
                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.4451 13.0133C1.22467 13.0137 1.01104 12.9439 0.8413 12.8161C0.745768 12.7441 0.6668 12.6557 0.608918 12.556C0.551036 12.4562 0.515377 12.3471 0.503985 12.2348C0.492592 12.1225 0.505689 12.0092 0.542525 11.9016C0.579361 11.7939 0.639212 11.6938 0.718652 11.6072L4.94528 7.01162L0.869604 2.40747C0.791236 2.31977 0.732712 2.21886 0.697398 2.11054C0.662083 2.00221 0.650673 1.88862 0.663824 1.77628C0.676975 1.66393 0.714426 1.55506 0.774027 1.45592C0.833628 1.35677 0.914203 1.26931 1.01112 1.19856C1.10873 1.1205 1.22305 1.06163 1.34689 1.02563C1.47072 0.989626 1.60142 0.977277 1.73075 0.989353C1.86009 1.00143 1.98529 1.03767 2.09849 1.0958C2.21168 1.15393 2.31044 1.2327 2.38855 1.32716L6.94538 6.47147C7.08414 6.62488 7.16 6.81732 7.16 7.01591C7.16 7.2145 7.08414 7.40693 6.94538 7.56035L2.22816 12.7047C2.13352 12.8084 2.01329 12.8904 1.87724 12.9441C1.74118 12.9977 1.59314 13.0214 1.4451 13.0133Z" fill="#1877F2"/>
                      </svg>

                    </Link>
                  </div>:null}

              </div>
            </div>
          )}         
        </AutoSlider> */}
      </div>
    )
}