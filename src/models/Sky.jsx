import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating }) => {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef();

  // Ensure the skyRef is properly set
  useFrame((_, delta) => {
    if (isRotating) {
      if (skyRef.current) {
        skyRef.current.rotation.y += 0.1 * delta; // Adjust the rotation speed as needed
      }
    }
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Sky;
