import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

function Target(props) {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() => {
      gsap.to(
        targetRef.current.position, {y: targetRef.current.position.y + 0.5,
          repeat: -1,
          yoyo: true
        }
      )
    })

    return (
        <primitive ref={targetRef} object={scene} {...props} />
    );
}

export default Target;
