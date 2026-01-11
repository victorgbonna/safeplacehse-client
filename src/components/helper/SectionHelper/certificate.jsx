import { iconSvgPath } from "@/components";
import { API_ENDPOINTS } from "@/configs";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function CertificateHelper(){
  const ref = useIntersectionObserver();
  const certs =API_ENDPOINTS.CERTIFICATIONS
  const certs1 = [
  {
    img: "cert.png",
    label: "ISO 45001",
    desc: "Occupational Health and Safety Management System certification"
  },
  {
    img: "cert.png",
    label: "ISO 14001",
    desc: "Environmental Management System (EMS)"
  },
  {
    img: "cert.png",
    label: "ISO/TS 29001",
    desc: "Quality Management System for Oil and Gas Industry"
  },
  {
    img: "cert.png",
    label: "ISO 22000",
    desc: "Food Safety Management Systems"
  },
  {
    img: "cert.png",
    label: "ISO 9001",
    desc: "Quality Management System (QMS) certification"
  }
];

  return(
    <div ref={ref} className='opacity-0'>
      <div className='flex justify-center mb-5 tablet:px-5 py-20 flex-col items-center '>
        <div className='w-fit flex flex-col items-center mb-20 tablet:mb-10'>
          <h4 className='text-3xl tablet:text-2xl mb-2 px-3 font-semibold'>OUR CERTIFICATES</h4>
          <span className='w-[30%] border-green h-[1px] border'></span>
        </div>
        <div className='grid grid-cols-3 gap-x-[70px] tablet:gap-y-8 gap-y-10 tablet:grid-cols-1 w-[1000px] tablet:w-full'>
          {certs.map(({img, label, desc},ind)=>
            <div key={ind} className='rounded-md p-7 flex flex-col items-center'>
              <img className="w-20 h-20 object-top object-cover" src={iconSvgPath('certifications/'+img, 'images')}/>
              <p className='text-center font-semibold text-lg my-4'>{label}</p>
              {/* <p className='text-center text-sm'>{desc}</p> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}