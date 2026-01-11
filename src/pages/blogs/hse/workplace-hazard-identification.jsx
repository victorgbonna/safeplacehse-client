import { BlogHelper, iconSvgPath, ImageContainer } from '@/components'

export default function WorkplaceHazardIdentification() {
  const path = "projects/white/"

  return (
    <main>
      <div className=" h-screen tablet:h-fit">
        {/* Hero Section */}
        <div className="w-screen flex justify-center items-center h-[400px] tablet:h-[250px] bg-[url('/images/services.png')]">
          <p className="text-white text-6xl font-semibold tablet:text-4xl">
            BLOG POST
          </p>
        </div>
        <div className="h-fit py-10  flex items-cente px-[200px] tablet:px-10 justify-center">
          <h1 className="text-center text-[#2A2A2A] text-3xl leading-[40px] font-semibold tablet:text-xl">
            {"Workplace Hazard Identification Exercise at SafeplaceHSE Sites"}
          </h1>
        </div>
      </div>

      <div className="flex px-20 py-[20px] justify-between tablet:px-5 tablet:flex-col tablet:gap-y-10">
        <div className="tablet:order-1">
          <div className="flex items-center gap-x-2">
            <ImageContainer
              imgClass={"object-top object-cover"}
              src={iconSvgPath("/projects/white/izzy-on-white6.jpg", "images")}
              className={"w-20 h-20 rounded-full"}
              alt="Isreal Johnson"
            />
            <div>
              <p className="text-xs text-[#414141]">AUTHOR</p>
              <p className="text-sm font-semibold text-black tablet:text-base">
                Isreal Johnson
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm tablet:mb-2">
            Published Date: <b>{"28/08/2025"}</b>
          </p>
          <p className="text-sm">
            Last Edited: <b>{"28/08/2025"}</b>
          </p>
        </div>
      </div>

      <div className="px-20 py-[60px] text-[#414141] tablet:px-5">
        <div className="space-y-3">
          <p className="leading-[30px] text-sm">
            {
              "At SafeplaceHSE, we firmly believe that prevention is better than cure. This principle guides our proactive hazard identification exercises conducted across all our active project sites. These systematic assessments are designed to identify, evaluate, and mitigate potential workplace hazards before they result in incidents."
            }
          </p>

          {/* Picture 1: Hazard identification */}
          <div className="flex items-center flex-col justify-center mt-6">
            <ImageContainer
              src={iconSvgPath(path + "izzy-on-white3.jpg", "images")}
              className={
                "tablet:w-full w-[700px] h-[500px] tablet:h-[350px] object-cover"
              }
              alt="Workplace hazard identification"
            />
            <p className="text-center mt-2">
              <i className="text-xs">
                {"Proactive hazard identification reduces risks and promotes a safer work environment."}
              </i>
            </p>
          </div>

          <p className="text-sm leading-[30px]">
            {
              "Our hazard identification exercises involve cross-functional teams including site supervisors, safety officers, and workers. This collaborative approach ensures that hazards are identified from multiple perspectives, capturing both obvious and hidden risks that could otherwise go unnoticed."
            }
          </p>

          <p className="text-xl font-semibold mt-6">
            {"What We Look For"}
          </p>

          <p className="text-sm leading-[30px]">
            {
              "Our teams systematically assess physical hazards (uneven surfaces, poor lighting, noise), chemical hazards (improper storage of substances), biological hazards, ergonomic risks, and psychological stressors. We also evaluate management systems such as maintenance procedures, emergency preparedness, and training adequacy."
            }
          </p>

          <p className="text-xl font-semibold mt-6">
            {"The Exercise Process"}
          </p>

          <ul className="list-disc pl-6 text-sm leading-[30px]">
            <li>Site walkthroughs: Team members conduct thorough inspections of work areas.</li>
            <li>Worker consultations: Direct discussions with employees about their concerns and observations.</li>
            <li>Documentation: Recording all identified hazards with detailed descriptions and locations.</li>
            <li>Risk assessment: Evaluating the severity and likelihood of each hazard.</li>
            <li>Action planning: Developing corrective measures and timelines for implementation.</li>
            <li>Follow-up: Monitoring and verifying that corrective actions are completed.</li>
          </ul>

          <p className="text-sm leading-[30px] mt-6">
            {
              "During our recent exercises, we identified several recurring hazards such as inadequate guardrails on elevated platforms, poor housekeeping in storage areas, and incomplete PPE usage. Each finding resulted in immediate corrective actions and enhanced awareness among site personnel."
            }
          </p>

          <p className="text-xl font-semibold mt-6">
            {"Impact on Safety Culture"}
          </p>

          <p className="text-sm leading-[30px]">
            {
              "These exercises do more than just identify risks — they foster a culture of safety consciousness. Workers become more aware of their surroundings, supervisors develop stronger hazard recognition skills, and management gains valuable insights into systemic vulnerabilities that need attention."
            }
          </p>

          <p className="text-sm leading-[30px] mt-6">
            {
              "Prevention remains our strongest defense against workplace accidents. By conducting regular hazard identification exercises, SafeplaceHSE continues to demonstrate its commitment to maintaining safe, compliant, and efficient work environments. We encourage all organizations to adopt similar practices and make safety a shared responsibility."
            }
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
          <a href="https://wa.me/+971592295379" target="_blank" rel="noopener noreferrer" className='rounded-[22px]  px-5 py-2 bg-[#05C202] text-white flex items-center gap-x-3 hover:opacity-90'>
            <p>Book a Consultation</p>
            <img src="/svg/socials/whatsapp.svg" alt="whatsapp" />
          </a>
      </div>
      {/* <BlogHelper blog_id={-16} /> */}
    </main>
  )
}
