import { BlogHelper, CourseHelper } from '@/components'

export default function Blog() {
  return (
    <div
      className={`py-24 tablet:py-14`}
    >
        <section 
            className='bg-[url("/images/services.png")] py-[100px] tablet:px-[10px] bg-cover bg-center flex flex-col justify-center px-[100px] tablet:px-5 tablet:h-fit text-white tablet:py-14'> 
            <div className='bg-black bg-opacity-25 py-7 px-[75px] tablet:px-5 text-center rounded-md'>
                <h1 className='text-5xl tablet:text-4xl mb-3'>Blogs</h1>
                <p className='text-lg tablet:text-base'>{'Go through our collection of health and safety articles to help you gain insight on HSE.'}</p>                
            </div>
        </section>
        <div className='mt-20'>
            <BlogHelper showHeader={false} btnLabel={'View Projects'}/>
        </div>
    </div>
  )
}