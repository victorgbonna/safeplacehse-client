import { iconSvgPath, ImageContainer } from "@/components";
import { API_ENDPOINTS, PAGE_ROUTES } from "@/configs";
import Link from "next/link";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { useEffect } from "react";

export default function CourseHelper({btnLabel, link, fromHome}){
    const ref = useIntersectionObserver();
    const neboshCourses = [
  {
    img: "nebosh-igc.png",
    title: "NEBOSH International General Certificate (IGC)",
    desc: "A globally recognized safety qualification providing essential knowledge of health, safety, and risk management principles.",
    duration: "6–8 weeks",
    audience: ["Aspiring Safety Professionals", "HSE Officers", "Supervisors"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-idip.png",
    title: "NEBOSH International Diploma (IDIP)",
    desc: "Advanced NEBOSH diploma for experienced safety practitioners focusing on higher-level health and safety management skills.",
    duration: "10–14 weeks",
    audience: ["Senior HSE Officers", "Safety Managers"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-psm.png",
    title: "NEBOSH HSE Certificate in Process Safety Management (PSM)",
    desc: "Specialized NEBOSH qualification concentrating on major hazard and process safety risk management.",
    duration: "Varies",
    audience: ["Process Industry Professionals", "Safety Specialists"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-emc.png",
    title: "NEBOSH Environmental Management Certificate (EMC)",
    desc: "NEBOSH course focused on environmental risk control, sustainability practices and ISO 14001 principles.",
    duration: "Varies",
    audience: ["Environmental Officers", "HSE Practitioners"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-raw.png",
    title: "NEBOSH Risk Assessment at Work (RAW)",
    desc: "Practical NEBOSH award for improving risk assessment skills and workplace hazard recognition.",
    duration: "Varies",
    audience: ["Supervisors", "Team Leads"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-hsw.png",
    title: "NEBOSH Health and Safety at Work Award (HSW)",
    desc: "Entry-level NEBOSH award introducing core health and safety basics for workplace safety culture.",
    duration: "Varies",
    audience: ["New Safety Practitioners", "Employees"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-incident-investigation.png",
    title: "NEBOSH Introduction to Incident Investigation",
    desc: "Course designed to help learners investigate workplace incidents and apply corrective actions to prevent recurrence.",
    duration: "Varies",
    audience: ["Safety Officers", "Team Leads"],
    price: "",
    views: 0
  }
];

const courses = [
    ...neboshCourses,
  {
    img: "nebosh-environmental-awareness.png",
    title: "NEBOSH Environmental Awareness",
    desc: "An introductory NEBOSH course focused on environmental risk management and sustainability in the workplace.",
    duration: "1 week",
    audience: ["Safety Officers", "Environmental Assistants"],
    price: "",
    views: 0
  },
  {
    img: "nebosh-working-with-wellbeing.png",
    title: "NEBOSH Working With Wellbeing",
    desc: "Course on wellbeing principles and creating healthier, more productive workplaces.",
    duration: "1 week",
    audience: ["HR Professionals", "Supervisors"],
    price: "",
    views: 0
  },
  {
    img: "iosh-managing-safely.png",
    title: "IOSH Managing Safely",
    desc: "Core IOSH safety leadership training for managers to understand risk and legal responsibilities.",
    duration: "3–5 days",
    audience: ["Managers", "Supervisors"],
    price: "",
    views: 0
  },
  {
    img: "iosh-level-3-certificate.png",
    title: "IOSH Level 3 Certificate",
    desc: "A formal IOSH Level 3 safety certificate covering broader safe working practices.",
    duration: "2 weeks",
    audience: ["Safety Practitioners", "Team Leads"],
    price: "",
    views: 0
  },
  {
    img: "iosh-level-6-diploma.png",
    title: "IOSH Level 6 Diploma – IOSH IDIP",
    desc: "Advanced IOSH Diploma for occupational health and safety professionals aiming for senior roles.",
    duration: "8–12 weeks",
    audience: ["HSE Managers", "Lead Auditors"],
    price: "",
    views: 0
  },
  {
    img: "proqual-nvq-assessing-vocational-achievement.png",
    title: "ProQual Level 3 NVQ Certificate in Assessing Vocational Achievement",
    desc: "NVQ qualification focused on assessing vocational achievements in workplace training.",
    duration: "Varies",
    audience: ["Assessors", "Trainers"],
    price: "",
    views: 0
  },
  {
    img: "proqual-nvq-environmental-management.png",
    title: "ProQual Level 3 NVQ Award in Environmental Management",
    desc: "NVQ award centered on environmental management principles for operational safety.",
    duration: "Varies",
    audience: ["Environmental Officers", "Safety Officers"],
    price: "",
    views: 0
  },
  {
    img: "proqual-nvq-occupational-health-safety.png",
    title: "ProQual Level 3 NVQ Certificate in Occupational Health and Safety",
    desc: "Practical NVQ safety certification focused on occupational OH&S standards.",
    duration: "Varies",
    audience: ["HSE Practitioners", "Safety Team Members"],
    price: "",
    views: 0
  },
    
    ];

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("opacity-100");
        }
        },
        {
        threshold: 0.1,           // VERY IMPORTANT for mobile
        rootMargin: "0px 0px -50px 0px"
        }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
    }, []);
    return (
    <section ref={ref} className='flex flex-col items-center w-screen h-fit bg-cover bg-top px-[100px] tablet:px-5'>
        <div className='w-fit flex flex-col justify-center items-center mb-10'>
            <h4 className='text-3xl mb-2 px-3 font-semibold tablet:text-2xl'>OUR COURSES</h4>
            <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
        <div className="space-y-3 tablet:space-y-8">
            {(fromHome?courses.slice(0,5):courses).map(({img, title, desc, price, views, audience, duration, status="Active"},ind)=>
                <div key={ind} className={``}>
                    <div className="flex gap-x-6 tablet:gap-y-4 tablet:flex-col">
                        <div className="w-full tablet:px-5">
                            <ImageContainer src={'/images/course/'+img} 
                                imgClass="object-center object-cover"
                                className='w-[300px] shadow-xl h-[300px] object-cover tablet:w-full tablet:h-[350px]'/>
                        </div>

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
                            {price ? <p>
                                <span className="font-bold">Price:</span>{' '}
                                <span className="text-[#414141]">{price}</span>
                            </p>:null}
                            {/* <p>
                                <span className="font-bold">Views:</span>{' '}
                                <span className="text-[#414141]">{views}</span>
                            </p> */}
                            <p>
                                <span className="font-bold">Status:</span>{' '}
                                <span className="text-[#414141]">{status}</span>
                            </p>
                        </div>
                        <div className="mt-6 tablet:mt-0 flex gap-x-3 tablet:justify-end">
                            {[
                                // {label:"Course Catalog", classNames:"#1877F2", img:iconSvgPath('download')},
                                {label:"Enroll Now", 
                                    classNames:"#057003", 
                                    img:iconSvgPath('caret-right'), 
                                    href:API_ENDPOINTS.CONTACT.WHATSAPP_LINK+`?text=${encodeURIComponent('How do I enroll for the '+title+' course?')}`
                                }
                            ]
                                .map(({label, classNames, img, href},i)=>
                                <Link href={href} key={i} 
                                    style={{background:classNames}}
                                    className="flex justify-center items-center gap-x-2 tablet:text-base  text-white font-medium px-5 tablet:px-10 py-3  rounded-full hover:opacity-90">
                                    <p>{label}</p>
                                    <img src={img} alt={label} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
        {/* <div className="w-full flex justify-center items-center py-20 tablet:py-12">
            <div className="flex flex-col items-center justify-center text-center max-w-2xl">
                <div className="mb-6">
                    <svg className="w-24 h-24 tablet:w-16 tablet:h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C6.5 6.253 3 9.086 3 12.5c0 4.446 4.03 8.211 9 11.911m0-13c5.5-3.7 9-7.465 9-11.911 0-3.414-3.5-6.247-9-6.253m0 13V3m0 13c-5.07 3.7-9 7.465-9 11.911M12 3c5.07 0 9 2.847 9 6.253" />
                    </svg>
                </div>
                <h3 className="text-3xl tablet:text-2xl font-semibold text-gray-800 mb-3">
                    No Courses Available
                </h3>
                <p className="text-lg tablet:text-base text-gray-600 mb-8 leading-relaxed">
                    {"We're currently not offering any courses at the moment. However, we provide comprehensive HSE consulting, training programs, and safety solutions tailored to your organization's needs."}
                </p>
                <p className="text-sm tablet:text-xs text-gray-500 px-4">
                    {"If you're interested in custom training or HSE development programs, please reach out to us via the contact form below."}
                </p>
            </div>
        </div> */}
        <div className='flex mt-14 justify-center gap-x-4 items-center'>
        {/* {[{label:"Browse More Courses", href:"/", classNames:'hover:opacity-90 shadow-xl border rounded-full py-2.5 px-4 text-green border-green'}] */}
        {btnLabel?
            <Link href={PAGE_ROUTES.PROJECTS} className="hover:opacity-90 shadow-xl bg-green border border-[#FFFFFF] text-white font-semibold rounded-full py-2.5 px-4">
            {btnLabel}
            </Link>
        :null}
        {fromHome?[
            {label:"Explore More Courses", href:"/", classNames:"bg-transparent hover:opacity-90  border-b-green border-b text-green font-semibold py-2.5 px-4"}
        ].map(({label, href, classNames},ind)=>
            <Link href={href} key={ind} className={classNames}>
            {label}
            </Link>
        ):null}
        </div>
    </section>
    )
}