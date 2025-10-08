import { usePagination } from "hooks/usePagination";
import React from "react";


export default function AltePagination({onPageClick,pages,currentPage}) {
    if(pages<=1) return null
    return (
        <div className='flex items-center gap-x-4 tablet:gap-x-2'>
            <button className="border-2 bd-orange-custom flex items-center px-3 border-2 border-solid 
             py-2 rounded"
                onClick={()=>onPageClick(parseInt(currentPage)-1)} 
                style={!(currentPage-1)?{visibility:"hidden"}:null}>
                <p className="text-base tablet:text-sm text-primary1 tracking-widest">Previous</p>
            </button>
            <button
                onClick={()=>onPageClick(parseInt(currentPage)+1)} 
                style={currentPage===pages?{visibility:"hidden"}:null} 
                className="border-2 gap-x-3 bd-orange-custom flex items-center px-3 py-2 rounded border-2 border-solid 
                text-primary1">
                <p className="text-base tablet:text-sm text-primary1 tracking-widest">Next</p>
            </button>
        </div>       
    )
}

