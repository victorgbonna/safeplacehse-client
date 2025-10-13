import { iconSvgPath, ImageContainer } from "@/components";
import Link from "next/link";

export default function CourseHelper({}){
    const courses = [
        {
            img: "hse1.png",
            title: "HSE Level 1 – Health, Safety & Environment Awareness",
            desc: "This introductory course provides learners with fundamental HSE knowledge, covering workplace safety, hazard recognition, and emergency response procedures.",
            duration: "2 weeks",
            audience: ["Beginners", "Entry-level workers", "Interns"],
            price: "₦20,000",
            views: 1340
        },
        {
            img: "hse2.png",
            title: "HSE Level 2 – Risk Assessment & Safety Management",
            desc: "This course focuses on hazard identification, workplace inspections, and control measures to ensure a safe working environment.",
            duration: "3 weeks",
            audience: ["Supervisors", "Safety officers", "Team leads"],
            price: "₦35,000",
            views: 980
        },
        {
            img: "hse3.png",
            title: "HSE Level 3 – Advanced Health and Safety Management",
            desc: "Designed for professionals, this advanced course covers policy creation, safety leadership, and incident investigation for effective HSE management.",
            duration: "4 weeks",
            audience: ["Managers", "Coordinators", "HSE professionals"],
            price: "₦50,000",
            views: 1675
        },
        {
            img: "fire.png",
            title: "Fire Safety & Emergency Preparedness Training",
            desc: "Learn essential fire safety principles, evacuation planning, and the use of fire extinguishers to minimize risks during emergencies.",
            duration: "1 week",
            audience: ["Employees", "Contractors", "Facility managers"],
            price: "₦15,000",
            views: 890
        },
        {
            img: "firstaid.png",
            title: "First Aid & CPR Certification",
            desc: "This course equips learners with life-saving first aid and CPR techniques to handle medical emergencies at work or home.",
            duration: "1 week",
            audience: ["General staff", "First responders", "HSE trainees"],
            price: "₦25,000",
            views: 1420
        }
    ];


    return (
    <section className='flex flex-col items-center w-screen h-fit bg-cover bg-top px-[100px] tablet:px-5'>
        <div className='w-fit flex flex-col justify-center items-center mb-10'>
            <h4 className='text-3xl mb-2 px-3 font-semibold tablet:text-2xl'>OUR COURSES</h4>
            <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
        <div className="space-y-8">
            {courses.map(({img, title, desc, price, views, audience, duration, status="Active"},ind)=>
                <div key={ind} className={`tablet:bg-lightgreen tablet:px-3 bg-white relative shadow-xl  rounded-2xl flex gap-x-10 items-start tablet:flex-col`}>
                    <div className="flex gap-x-6 tablet:gap-y-4 tablet:flex-col">
                        <ImageContainer src={'/images/couse.png'} className='w-[300px] shadow-xl h-[300px] object-cover tablet:w-full tablet:h-[200px]'/>
                        <div className="pt-5 max-w-[400px] tablet:max-w-full">
                            <p className="text-2xl font-semibold mb-4 tablet:text-xl">{title}</p>
                            <p className="text-[#626262] text-[15px] tablet:text-sm">{desc}</p>
                        </div>
                    </div>
                    <div className="min-w-fit w-fit text-sm pt-4 pb-7 flex flex-col h-[300px] tablet:h-fit justify-between">
                       <div className="space-y-2 pr-5 tablet:mb-8">
                            <p>
                                <span className="font-bold">Course Duration:</span>{' '}
                                <span className="text-[#414141]">{duration}</span>
                            </p>
                            <p>
                                <span className="font-bold">Target Audience:</span>{' '}
                                <span className="text-[#414141]">
                                {audience.map((type, ind) => (
                                    <span key={ind}>{(ind === 0 ? '' : ', ') + type}</span>
                                ))}
                                </span>
                            </p>
                            <p>
                                <span className="font-bold">Price:</span>{' '}
                                <span className="text-[#414141]">{price}</span>
                            </p>
                            <p>
                                <span className="font-bold">Views:</span>{' '}
                                <span className="text-[#414141]">{views}</span>
                            </p>
                            <p>
                                <span className="font-bold">Status:</span>{' '}
                                <span className="text-[#414141]">{status}</span>
                            </p>
                        </div>
                        <div className="mt-6 tablet:mt-0 flex gap-x-3">
                            {[
                                {label:"Course Catalog", classNames:"#1877F2", img:iconSvgPath('download')},
                                {label:"Enroll Now", classNames:"#057003", img:iconSvgPath('caret-right')}
                            ]
                                .map(({label, classNames, img},i)=>
                                <Link href={"/"} key={i} 
                                    style={{background:classNames}}
                                    className="flex justify-center items-center gap-x-2  text-white font-medium px-3 py-2 rounded-full hover:opacity-90">
                                    <p>{label}</p>
                                    <img src={img} alt={label} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div className='flex mt-14 justify-center gap-x-4 items-center'>
        {/* {[{label:"Browse More Courses", href:"/", classNames:'hover:opacity-90 shadow-xl border rounded-full py-2.5 px-4 text-green border-green'}] */}
        {[{label:"Explore Courses", href:"/", classNames:"hover:opacity-90 shadow-xl bg-green border border-[#FFFFFF] text-white font-semibold rounded-full py-2.5 px-4"}]
            .map(({label, href, classNames},ind)=>
            <Link href={href} key={ind} className={classNames}>
            {label}
            </Link>
        )}
        </div>
    </section>
    )
}