import { iconSvgPath, ImageContainer } from "@/components";
import Link from "next/link";

export default function ProjectHelper({showButtons=true}){
    const projects = [
      {
        img: "training.png",
        title: "HIPAA Compliance Training",
        desc: `SC Training (formerly EdApp)'s HIPAA compliance training course gives your learners a detailed breakdown of everything they need to know about HIPAA compliance. It begins by describing HIPAA and why it was created. It then instructs learners on the most important facts, such as recommended practices in HIPAA compliance situations, risks and remedies, and privacy, breach, and security standards.
        It also includes knowledge assessments and sample situations for assessing and applying learning. A glossary of valuable resources is included at the conclusion of this course so your learners can easily reference back to the important keywords.`
          },
          {
            img: "training.png",
            title: "HIPAA Compliance Training",
            desc: `SC Training (formerly EdApp)'s HIPAA compliance training course gives your learners a detailed breakdown of everything they need to know about HIPAA compliance. It begins by describing HIPAA and why it was created. It then instructs learners on the most important facts, such as recommended practices in HIPAA compliance situations, risks and remedies, and privacy, breach, and security standards.
              It also includes knowledge assessments and sample situations for assessing and applying learning. A glossary of valuable resources is included at the conclusion of this course so your learners can easily reference back to the important keywords.`
          }
        ];
    
    return (
    <section className='bg-[url("/images/project-new52.png")] flex flex-col items-center w-screen h-fit bg-cover bg-top px-[100px] tablet:px-5 tablet:py-0'>
        <div className='w-fit flex flex-col justify-center items-center mb-10'>
            <h4 className='text-3xl mb-2 px-3 font-semibold tablet:text-2xl'>PROJECTS</h4>
            <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
        <div className="space-y-10 tablet:space-y-8">
            {projects.map(({img, title, desc},ind)=>
                <div key={ind} className={`bg-white border border-green relative shadow-xl tablet:pb-10 rounded-md p-7 flex gap-x-10 items-center tablet:flex-col`}>
                    <ImageContainer src={'/images/training.png'} className='w-[400px] h-[300px] object-cover tablet:w-full tablet:h-[200px]'/>
                    <div className='w-[500px] tablet:w-full'>
                        <p className='font-semibold text-2xl mb-4 tablet:text-xl tablet:mt-3'>{title}</p>
                        <p className='text-sm'>{desc.slice(0,300)+ '...'} 
                            <span>
                                <Link href={'/'} className='text-green underline ml-1 pc:hidden largepc:hidden tablet:inline'>Read More</Link>
                            </span>
                        </p>
                        <button className='mt-6 tablet:hidden tablet:mt-5 flex justify-center items-center gap-x-2 bg-green text-white font-medium px-8 py-2 rounded-full hover:opacity-90'>
                            <p>View Project</p>
                            <img src={iconSvgPath('caret-right')} alt="caret-right " />
                        </button>
                    </div>
                    <div className='absolute right-[20px] bottom-[10px]'>
                        <p className='text-sand-600 text-xs'>11th Sept 2024</p>
                    </div>
                </div>
            )}
        </div>
        <div className='flex mt-14 justify-center gap-x-4 items-center tablet:gap-x-3 tablet:text-sm'>
        {showButtons?[{label:"Check our Projects", href:"/", classNames:'shadow-xl border rounded-full py-2.5 px-4 text-green border-green'},
        {label:"Explore Courses", href:"/", classNames:"shadow-xl bg-green border border-[#FFFFFF] text-white font-semibold rounded-full py-2.5 px-4"}]
            .map(({label, href, classNames},ind)=>
            <Link href={href} key={ind} className={classNames}>
            {label}
            </Link>
        ):null}
        </div>
    </section>
    )
}