import { BlogHelper, iconSvgPath, ImageContainer } from '@/components'

export default function FirstAidCPRTraining() {
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
            {"First Aid & CPR Training for All Site Workers"}
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
            Published Date: <b>{"12/08/2025"}</b>
          </p>
          <p className="text-sm">
            Last Edited: <b>{"12/08/2025"}</b>
          </p>
        </div>
      </div>

      <div className="px-20 py-[60px] text-[#414141] tablet:px-5">
        <div className="space-y-3">
          <p className="leading-[30px] text-sm">
            {
              "In our continuous commitment to maintaining a safe and responsive work environment, SafeplaceHSE organized a comprehensive First Aid and CPR training program for all site personnel. This initiative recognizes that timely and appropriate first aid response can be the difference between recovery and tragedy in workplace emergencies."
            }
          </p>

          {/* Picture 1: First Aid Training */}
          <div className="flex items-center flex-col justify-center mt-6">
            <ImageContainer
              src={iconSvgPath(path + "izzy-on-white5.jpg", "images")}
              className={
                "tablet:w-full w-[700px] h-[500px] tablet:h-[350px] object-cover"
              }
              alt="First Aid CPR training session"
            />
            <p className="text-center mt-2">
              <i className="text-xs">
                {"Comprehensive first aid and CPR training empowers employees to respond effectively in medical emergencies."}
              </i>
            </p>
          </div>

          <p className="text-sm leading-[30px]">
            {
              "The training program covered essential topics including cardiopulmonary resuscitation (CPR), recovery position, wound management, control of bleeding, and response to shock. Each participant received hands-on practice with CPR dummies and learned how to use automated external defibrillators (AEDs) effectively."
            }
          </p>

          <p className="text-xl font-semibold mt-6">
            {"Why First Aid Matters in the Workplace"}
          </p>

          <p className="text-sm leading-[30px]">
            {
              "Workplace injuries can range from minor cuts and bruises to serious medical emergencies. Having trained first aiders on-site significantly improves outcomes. Studies show that prompt CPR and early defibrillation can double or triple survival rates from cardiac arrest. In our industry, where work-related injuries occur, this training is not just beneficial — it is essential."
            }
          </p>

          <p className="text-xl font-semibold mt-6">
            {"Training Content Overview"}
          </p>

          <ul className="list-disc pl-6 text-sm leading-[30px]">
            <li>CPR techniques: Correct chest compression rate, hand placement, and rescue breathing.</li>
            <li>AED operation: Understanding when and how to use automated external defibrillators.</li>
            <li>Bleeding control: Applying pressure, bandaging, and managing life-threatening hemorrhage.</li>
            <li>Fracture and sprain management: Immobilization and initial treatment.</li>
            <li>Recovery position: Maintaining airway and breathing in unconscious patients.</li>
            <li>Shock management: Recognizing and responding to physiological shock.</li>
            <li>Communication: Coordinating with emergency services and providing clear information to paramedics.</li>
          </ul>

          <p className="text-sm leading-[30px] mt-6">
            {
              "All participants received certification upon completion. Refresher trainings are scheduled annually to ensure knowledge retention and familiarity with the latest protocols and guidelines."
            }
          </p>

          <p className="text-xl font-semibold mt-6">
            {"Building Confidence and Preparedness"}
          </p>

          <p className="text-sm leading-[30px]">
            {
              "Beyond the technical skills, this training builds confidence. When employees know they possess the skills to help a colleague in distress, workplace culture shifts toward greater responsibility and mutual care. Many of our trained personnel have already applied their knowledge, and feedback indicates increased preparedness across all sites."
            }
          </p>

          <p className="text-sm leading-[30px] mt-6">
            {
              "First aid and CPR training represents SafeplaceHSE's dedication to comprehensive health and safety. We believe that every worker deserves a workplace where help is available and colleagues are trained to provide it. As we continue to prioritize emergency preparedness alongside hazard prevention, we reinforce our message: Safety is everyone's responsibility."
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
      {/* <BlogHelper blog_id={-17} /> */}
    </main>
  )
}
