import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('models/react.glb');

  return (
    <Float floatIntensity={0.1} floatingRange={[-0.1, 0.3]}>
      <group position={[8, 8, 8]} scale={0.3} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[15, -4, -6.81]}
          rotation={[1, -1, 5]}
          scale={[0.32, 0.32, 0.95]}
        />
      </group>
    // </Float>
  );
};

useGLTF.preload('models/react.glb');

export default ReactLogo;