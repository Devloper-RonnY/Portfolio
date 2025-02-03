import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

function About() {
  const [hasCopied, setHasCopied] = useState(false)



  const handleCopy = () => {
    navigator.clipboard.writeText("work.roshan45@gmail.com")
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }
  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-3 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>

          {/*first section */}
        <div className="grid-container">
            <img src="assets/ronnygrid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Roshan Pawar</p>
              <p className="grid-subtext">
              With expertise in MERN Stack Development, I honed my skills in frontend and backend development, with a focus on UI/UX designs and animated 3D websites..
              </p>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid24.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I specialize in JavaScript with a focus on React ecosystems
              </p>
            </div>
          </div>
        </div>

        {/* third section */}
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="/assets/earth-day.jpg"
                bumpImageUrl="/assets/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely across most time zones.</p>
              <p className="grid-subtext">I'm based in India, excited for oppurtunity's with remote work available.</p>
              <Button name="Contact Me"
               isBeam
               containerClass="w-full mt-10"
               href="#contact"  />
            </div>
          </div>
        </div>

       
        {/* fourth section */}
        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
            <div>
              <p className='grid-headtext'>My Passion for Coding</p>
              <p className='grid-subtext'>I love solving problems and building things through code. Coding isn't jus my proffesion - it it my passion.</p>
            </div>
          </div>
        </div>

        {/* fifth section */}
        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:[276px] h-fit object-cover sm:object-top' />
            <div className='space-y-2'>
            <p className='grid-subtext text-center' >Contact Me</p>
            <div className='copy-container' onClick={handleCopy}>
              <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}alt='copy'/>
              <p className='lg:text-xl md:text-xl font-medium text-gray_gradient text-white'>work.roshan45@gmail.com</p>
            </div>
            </div>
            
          </div>
        </div>

        </div>
    </section>
  )
}

export default About