import { iconSvgPath, ImageContainer } from "@/components";
import { PAGE_ROUTES } from "@/configs";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function ProjectHelper({showButtons=true}){
        const ref = useIntersectionObserver();
        const projects = [
                {
                        img: "/images/projects/white/izzy-on-white7.jpg",
                        title: "EHS Officer — EPPCO Terminal 4 CCTV Installation",
                        desc: `Served as the EHS Officer during the CCTV installation at EPPCO Terminal 4. Responsible for pre-work risk assessments, issuing and validating permits-to-work, enforcing PPE and safe work procedures, conducting site inductions and toolbox talks, coordinating safe access for technicians, and overseeing final handover to operations. Ensured compliance with local regulations and client-specific HSE requirements, and documented all safety observations and corrective actions.`
                    },
                    {
                        img: "/images/projects/white/izzy-on-white2.jpg",
                        title: "Safety Inspector — FPSO Rosebank (petrol jar)",
                        desc: `Performed safety inspections on FPSO Rosebank related to the petrol jar operations. Tasks included routine inspections, hazard identification, monitoring confined-space and fuel handling controls, verifying isolation and permit-to-work systems, and raising non-conformance reports where required. Worked closely with operations and contractors to implement corrective actions and improve procedural compliance.`
                    },
                    {
                        img: "/images/projects/white/izzy-on-white10.jpg",
                        title: "EHS Lead — Almarai Kizad Plant Roof Modification",
                        desc: `Led EHS activities for the roof modification project at Almarai Kizad plant. Responsibilities covered fall-protection planning, scaffold and edge protection oversight, crane lift coordination, hot-work management and fire-watch arrangements, contractor safety management, and daily safety briefings. Focused on minimizing disruptions to plant operations while maintaining strict adherence to safety standards and ensuring timely incident reporting and mitigation.`
                    }
                ];
    
    return (
    <section ref={ref} className='bg-[url("/images/project-new52.png")] flex flex-col items-center w-screen h-fit bg-cover bg-top px-[100px] tablet:px-5 tablet:py-0 opacity-0'>
        <div className='w-fit flex flex-col justify-center items-center mb-10'>
            <h4 className='text-3xl mb-2 px-3 font-semibold tablet:text-2xl'>PROJECTS</h4>
            <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
        <div className="space-y-10 tablet:space-y-8">
            {projects.map(({img, title, desc},ind)=>
                <div key={ind} className={`bg-white border border-green relative shadow-xl tablet:pb-10 rounded-md p-7 flex gap-x-10 items-center tablet:flex-col`}>
                    <ImageContainer src={img} imgClass="object-center object-cover" className='w-[400px] h-[300px] object-cover tablet:w-full tablet:h-[200px]'/>
                    <div className='w-[500px] tablet:w-full'>
                        <p className='font-semibold text-2xl mb-4 tablet:text-xl tablet:mt-3'>{title}</p>
                        <p className='text-sm'>{desc.slice(0,300)+ '...'} 
                            <span>
                                <Link href={PAGE_ROUTES.PROJECTS} className='text-green underline ml-1 pc:hidden largepc:hidden tablet:inline'>Read More</Link>
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
        {showButtons?[{label:"Check our Projects", href:PAGE_ROUTES.PROJECTS, classNames:'shadow-xl border rounded-full py-2.5 px-4 text-green border-green'},
        {label:"Explore Courses", href:PAGE_ROUTES.COURSES, classNames:"shadow-xl bg-green border border-[#FFFFFF] text-white font-semibold rounded-full py-2.5 px-4"}]
            .map(({label, href, classNames},ind)=>
            <Link href={href} key={ind} className={classNames}>
            {label}
            </Link>
        ):null}
        </div>
    </section>
    )
}