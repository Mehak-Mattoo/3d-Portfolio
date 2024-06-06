import React from "react";
import planeScene from "../assets/3d/plane.glb";
import { useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const { scene, animations } = useGLTF(planeScene);
  return (
    <mesh
      {...props}
      //  position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
