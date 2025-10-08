import { usePagination } from "@/hooks";
import React from "react";


export default function Paginator({onPageClick,pages,currentPage}) {
    
    const paginationRange = usePagination({
        currentPag:+currentPage,
        totalPageCount:+pages
    });
    // console.log({currentPage})
    if(+pages<=1) return null
    return (
        <div className='flex items-center justify-center gap-x-5 mt-10'>
            <button className="border-2 gap-x-5 border-primary1 border-2 flex items-center px-3 py-2 rounded-md"
                onClick={()=>onPageClick(+currentPage-1)} 
                style={(+currentPage===1)?{visibility:"hidden"}:{}}>
                <img src={'/svg/caretleft.svg'}/>

            </button>
            <div className='flex items-center justify-center gap-x-2'>
            {paginationRange?.map((pInd,ind)=>
                <React.Fragment key={ind}>
                {(pInd === 'skip')?
                    <p style={{color:"#4A3353", letterSpacing: '2px'}}>...</p>:
                    <button style={{cursor:"pointer"}} onClick={+pInd===+currentPage?null:()=>onPageClick(pInd)}
                        className={+pInd===+currentPage?
                            'border-2 px-3 py-2 font-semibold border-none rounded-full bg-[#0085FF] text-sm text-white':
                            'text-sm font-semibold px-3 py-2 rounded-full border text-[#00855FF]border-[#0085FF]'}>{pInd}
                    </button>                        
                }
                </React.Fragment>
            )}
            </div>
            <button
                onClick={()=>onPageClick(parseInt(currentPage)+1)} 
                style={+currentPage===+pages?{visibility:"hidden"}:null} 
                className="border-2 gap-x-3 bd-orange-custom bg-orange-custom flex items-center px-3 py-2 rounded">
                <img src={'/svg/caretright.svg'}/>
            </button>
        </div>       
    )
}

