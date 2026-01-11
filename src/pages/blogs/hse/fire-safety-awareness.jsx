import { BlogHelper, iconSvgPath, ImageContainer } from '@/components'

export default function FireSafety() {
  const path = "firesafety/"

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
            {"Fire Safety Awareness: Preventing Fire Before It Starts"}
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
            Published Date: <b>{"29/10/2025"}</b>
          </p>
          <p className="text-sm">
            Last Edited: <b>{"29/10/2025"}</b>
          </p>
        </div>
      </div>

      <div className="px-20 py-[60px] text-[#414141] tablet:px-5">
        <div className="space-y-3">
          <p className="leading-[30px] text-sm">
            {
              "Fire safety awareness is about understanding how fires start, how they spread, and what actions can be taken to prevent them. It is one of the most important aspects of health, safety, and environment (HSE) management because even a small fire can cause great damage when not properly controlled."
            }
          </p>

          {/* Picture 1: Fire prevention illustration */}
          <div className="flex items-center flex-col justify-center mt-6">
            <ImageContainer
              src={iconSvgPath(path + "fire-prevention.png", "images")}
              className={
                "tablet:w-full w-[700px] h-[500px] tablet:h-[350px] object-cover"
              }
              alt="Fire prevention awareness illustration"
            />
            <p className="text-center mt-2">
              <i className="text-xs">
                {"Understanding the basic causes of fire helps prevent them before they start."}
              </i>
            </p>
          </div>

          <p className="text-sm leading-[30px]">
            {
              "Most fires start due to human error — unattended cooking, faulty electrical wiring, improper storage of flammable materials, or negligence with open flames. Recognizing these risks and maintaining safe habits is the first step toward prevention."
            }
          </p>

          <p className="text-xl font-semibold mt-6">
            {"Basic Principles of Fire Safety"}
          </p>

          <p className="text-sm leading-[30px]">
            {
              "Every individual should understand the three elements that cause fire — heat, fuel, and oxygen. Removing any one of these can stop a fire from igniting or spreading. This principle guides both prevention and response actions."
            }
          </p>

          {/* Picture 2: Fire triangle graphic */}
          <div className="flex items-center flex-col justify-center mt-0">
            <ImageContainer
              src={iconSvgPath(path + "fire_safety.png", "images")}
              className={
                "tablet:w-full w-[500px] h-[400px] tablet:h-[250px] object-contain"
              }
              alt="Fire triangle diagram"
            />
            <p className="text-center mt-0">
              <i className="text-xs">
                {"The fire triangle: heat, fuel, and oxygen — the three components that sustain fire."}
              </i>
            </p>
          </div>

          <p className="text-xl font-semibold mt-6">
            {"Preventive Measures"}
          </p>

          <ul className="list-disc pl-6 text-sm leading-[30px]">
            <li>Keep all electrical appliances in good condition and turn them off when not in use.</li>
            <li>Store flammable liquids in proper containers away from heat sources.</li>
            <li>Ensure gas cylinders are tightly closed after use and inspected regularly.</li>
            <li>Do not overload power sockets or extension cables.</li>
            <li>Install smoke detectors and regularly test them.</li>
            <li>Keep fire extinguishers accessible and ensure staff know how to use them.</li>
          </ul>

          {/* Picture 3: Fire extinguisher use */}
          <div className="flex items-center flex-col justify-center mt-6">
            <ImageContainer
              src={iconSvgPath(path + "fire-steps.png", "images")}
              className={
                "tablet:w-full w-[700px] h-[500px] tablet:h-[350px] object-cover"
              }
              alt="Fire extinguisher usage guide"
            />
            <p className="text-center mt-2">
              <i className="text-xs">
                {"Knowing how to use a fire extinguisher can prevent a small fire from growing out of control."}
              </i>
            </p>
          </div>

          <p className="text-xl font-semibold mt-6">
            {"During a Fire Emergency"}
          </p>

          <p className="text-sm leading-[30px]">
            {
              "If a fire breaks out, the first priority is to ensure everyone’s safety. Raise the alarm, evacuate calmly through the nearest exit, and never use elevators. If the fire is small and manageable, use an extinguisher only if you are trained. Otherwise, move to a safe assembly point and wait for help."
            }
          </p>

          {/* Picture 4: Evacuation signage */}
          <div className="flex items-center flex-col justify-center mt-6">
            <ImageContainer
              src={iconSvgPath(path + "evacuation_sign.jpg", "images")}
              className={
                "tablet:w-full w-[600px] h-[400px] tablet:h-[250px] object-contain"
              }
              alt="Fire evacuation sign"
            />
            <p className="text-center mt-2">
              <i className="text-xs">
                {"Clear exit routes and visible signs are essential during evacuation."}
              </i>
            </p>
          </div>

          <p className="text-sm leading-[30px]">
            {
              "Fire drills, safety training, and constant vigilance can make the difference between control and catastrophe. Safety HSE encourages everyone to stay alert, follow safety guidelines, and report potential hazards immediately."
            }
          </p>

          <p className="text-sm leading-[30px]">
            {
              "Fire safety awareness is not a one-time activity — it is a continuous culture of responsibility, prevention, and preparedness. Every action taken to prevent fire is a step toward protecting lives and property."
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
      {/* <BlogHelper blog_id={-14} /> */}
    </main>
  )
}
