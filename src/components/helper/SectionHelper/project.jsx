import { iconSvgPath, ImageContainer } from "@/components";
import { PAGE_ROUTES } from "@/configs";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useState } from "react";
import ProjectGalleryModal from "@/components/modal/projectGallery";

export default function ProjectHelper({showButtons=true}){
        const ref = useIntersectionObserver();
        const [openModal, setOpenModal] = useState(null);

        const projects = [
        {
                img: "/images/projects/white/izzy-on-white7.jpg",
                title: "EHS Officer — EPPCO Terminal 4 CCTV Installation",
                desc: `Served as the EHS Officer during the CCTV installation at EPPCO Terminal 4. Responsible for pre-work risk assessments, issuing and validating permits-to-work, enforcing PPE and safe work procedures, conducting site inductions and toolbox talks, coordinating safe access for technicians, and overseeing final handover to operations. Ensured compliance with local regulations and client-specific HSE requirements, and documented all safety observations and corrective actions.`,
                slides: [
                        { img: "/images/projects/white/izzy-on-white7.jpg", caption: "CCTV Installation Site Overview" },
                        { img: "/images/projects/white/izzy-on-white2.jpg", caption: "Safety Assessment and Planning Phase" },
                        { img: "/images/projects/white/izzy-on-white10.jpg", caption: "Installation Progress and Monitoring" }
                ],
                excludeBtn:true
                , date:"12th March 2024"
            },
            {
                img: "/images/projects/new-folder/final-work.jpeg",
                title: "Safety Inspector — FPSO Rosebank (petrol jar)",
                desc: `Performed safety inspections on FPSO Rosebank related to the petrol jar operations. Tasks included routine inspections, hazard identification, monitoring confined-space and fuel handling controls, verifying isolation and permit-to-work systems, and raising non-conformance reports where required. Worked closely with operations and contractors to implement corrective actions and improve procedural compliance.`,
                slides: [
                        { img: "/images/projects/new-folder/night-shift.jpeg", caption: "Night Shift Vessel Inspection" },
                        { img: "/images/projects/new-folder/rope-access-material.jpeg", caption: "Rope Access Material Inspection" },
                        { img: "/images/projects/new-folder/lifting-gear.jpeg", caption: "Lifting Gear Inspection and Verification" },
                        { img: "/images/projects/new-folder/final-work.jpeg", caption: "Completion" }

                ],date:"20th June 2024"
            },
            {
                img: "/images/projects/white/izzy-on-white10.jpg",
                title: "EHS Lead — Almarai Kizad Plant Roof Modification",
                desc: `Led EHS activities for the roof modification project at Almarai Kizad plant. Responsibilities covered fall-protection planning, scaffold and edge protection oversight, crane lift coordination, hot-work management and fire-watch arrangements, contractor safety management, and daily safety briefings. Focused on minimizing disruptions to plant operations while maintaining strict adherence to safety standards and ensuring timely incident reporting and mitigation.`,
                slides: [
                        { img: "/images/projects/new-folder/roof-modification-project.jpeg", caption: "Brief Tool Box Talk" },
                        { img: "/images/projects/new-folder/roof-modification2.jpeg", caption: "Tool Box Talk 2" },
                        { img: "/images/projects/new-folder/mobile-crane.jpeg", caption: "Crane Operations and Safety Coordination" },
                        { img: "/images/projects/new-folder/scissors-lift.jpeg", caption: "Scissors Lift Inspection" }
                ],date:"5th September 2024"
            }
        ];
    
    return (
    <>
    <section ref={ref} className='bg-[url("/images/project-new52.png")] flex flex-col items-center w-screen h-fit bg-cover bg-top px-[100px] tablet:px-5 tablet:py-0 opacity-0'>
        <div className='w-fit flex flex-col justify-center items-center mb-10'>
            <h4 className='text-3xl mb-2 px-3 font-semibold tablet:text-2xl'>PROJECTS</h4>
            <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
        <div className="space-y-10 tablet:space-y-8">
            {projects.map(({img, title, desc, slides, date,excludeBtn},ind)=>
                <div key={ind} className={`bg-white border border-green relative shadow-xl tablet:pb-10 rounded-md p-7 flex gap-x-10 items-center tablet:flex-col`}>
                    <ImageContainer src={img} imgClass="object-center object-cover" className='w-[400px] h-[300px] object-cover tablet:w-full tablet:h-[200px]'/>
                    <div className='w-[500px] tablet:w-full'>
                        <p className='font-semibold text-2xl mb-4 tablet:text-xl tablet:mt-3'>{title}</p>
                        <p className='text-sm'>{desc} 
                            {/* <span>
                                <Link href={PAGE_ROUTES.PROJECTS} className='text-green underline ml-1 pc:hidden largepc:hidden tablet:inline'>Read More</Link>
                            </span> */}
                        </p>
                        {excludeBtn?null:<button 
                            onClick={() => setOpenModal(ind)}
                            className='mt-6 tablet:mt-5 flex justify-center items-center gap-x-2 bg-green text-white font-medium px-8 py-2 rounded-full hover:opacity-90'>
                            <p>View Project</p>
                            <img src={iconSvgPath('caret-right')} alt="caret-right " />
                        </button>}
                    </div>
                    <div className='absolute right-[20px] bottom-[10px]'>
                        <p className='text-sand-600 text-xs'>{date}</p>
                    </div>
                </div>
            )}
        </div>
        <div className='flex mt-14 justify-center gap-6 items-center tablet:gap-x-3 tablet:text-sm tablet:flex-col'>
        {showButtons?[{label:"Check our Projects", href:PAGE_ROUTES.PROJECTS, classNames:'shadow-xl border rounded-full py-4 px-6 text-green border-green'},
        {label:"Explore Courses", href:PAGE_ROUTES.COURSES, classNames:"shadow-xl bg-green border border-[#FFFFFF] text-white font-semibold rounded-full py-4 px-6"}]
            .map(({label, href, classNames},ind)=>
            <Link href={href} key={ind} className={classNames}>
            {label}
            </Link>
        ):null}
        </div>
    </section>
    {openModal !== null && (
        <ProjectGalleryModal
            onClose={() => setOpenModal(null)}
            projectSlides={projects[openModal].slides}
            projectTitle={projects[openModal].title}
        />
    )}
    </>
    )
}