import { Canvas } from "@react-three/fiber"
import HackerRoom from "../components/HackerRoom"
import { Suspense } from "react"
import CanvasLoader from "../components/CanvasLoader"
import { calculateSizes } from "../constants"
import { useMediaQuery } from "react-responsive"
import Target from "../components/Target"
import ReactLogo from "../components/ReactLogo"
import Cube from "../components/Cube"
import Rings from '../components/Rings'
import HeroCamera from "../components/HeroCamera"
import Button from "../components/Button"
import {useTypewriter, Cursor} from "react-simple-typewriter"

function Hero() {
  
  const isSmall = useMediaQuery({maxWidth: 440})
  const isMobile = useMediaQuery({maxWidth: 768})
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024})
  const [text] = useTypewriter({
    words: [" " ,'Roshan', 'Developer', 'Designer',],
    loop: true,
    deleteSpeed: 80,
    typeSpeed: 90,
  })

  const sizes = calculateSizes(isSmall,isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-2">
            <p className="sm:text-2xl text-2xl font-medium text-white text-center font-generalsans">Hi, I'm {' '}
              <span className="text-gray-200 hero-gray_gradient">{text}</span><Cursor/></p>
            <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
        </div>
        <div className="w-ful h-ful absolute inset-0">

            <Canvas className="w-full h-full">
              <Suspense fallback={<CanvasLoader />}>


                {/*  1. adding a camera  */}
                <perspectiveCamera makeDefault position={[0, 0, 30]} />

                {/* 2. adding a object */}

                <HeroCamera isMobile={isMobile}>
                <HackerRoom 
                scale={sizes.deskScale} 
                position={sizes.deskPosition} 
                rotation={[0,-Math.PI, 0]}/>
                </HeroCamera>

                <group>
                  <Target position={sizes.targetPosition} rotation={[0, Math.PI / 3 , 0]}/>
                  <ReactLogo position={sizes.reactLogoPosition}/>
                  <Cube position={sizes.cubePosition} />
                  <Rings position={sizes.ringPosition} />
                </group>

                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]}/>

              </Suspense>
            </Canvas>

        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-full">
              <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
          </a>
        </div>
    </section>
  )
}

export default Hero