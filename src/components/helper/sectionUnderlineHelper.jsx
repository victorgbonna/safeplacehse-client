export default function SectionUnderlineHelper({label, style={}}){
    return(
        <div style={style} className='text-center w-fit flex flex-col justify-center items-center mb-10'>
            <h4 className='text-3xl mb-2 px-3 font-semibold tablet:text-2xl'>{label}</h4>
            <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
    )
}