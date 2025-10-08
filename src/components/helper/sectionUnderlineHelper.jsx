export default function SectionUnderlineHelper({label}){
    return(
        <div className='w-fit flex flex-col justify-center items-center mb-10'>
            <h4 className='text-3xl mb-2 px-3 font-semibold'>{label}</h4>
            <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
    )
}