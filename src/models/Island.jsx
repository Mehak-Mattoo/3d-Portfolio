import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "../assets/3d/island.glb";
import { a } from "@react-spring/three";

export function Island({ isRotating, setIsRotating, ...props }) {
  const islandRef = useRef();

  const { gl, viewport } = useThree();

  const { nodes, materials } = useGLTF(islandScene); // Loading the GLTF model (island).

  const lastX = useRef(0); // Tracks the last X-axis position of the mouse or touch.
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95; // Factor to slow down the rotation gradually.

  const handlePointerDown = (e) => {
    e.stopProgation();
    e.preventDefault();
    setIsRotating(true); // Start rotation.

    //figure out type of click it is-> click or touch event
    const clientX = e.touche ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    // mouse released
    e.stopProgation();
    e.preventDefault();
    setIsRotating(false);

    const clientX = e.touche ? e.touches[0].clientX : e.clientX;
    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    rotationSpeed.current = delta * 0.01 * Math.PI;

    const delta = (clientX - lastX.current) / viewport.width;
  };

  const handlePointerMove = (e) => {
    e.stopProgation();
    e.preventDefault();
    if (isRotating) {
      handlePointerUp(e);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) {
        setIsRotating(true);
      }
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) {
        setIsRotating(true);
      }
      islandRef.current.rotation.y -= 0.01 * Math.PI; // Rotate right.
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false); // Stop rotation when arrow key is released.
    }
  };

  useEffect(
    () => {
      document.addEventListener("pointerdown", handlePointerDown);
      document.addEventListener("pointerup", handlePointerUp);
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);

      return () => {
        document.removeEventListener("pointerdown", handlePointerDown);
        document.removeEventListener("pointerup", handlePointerUp);
        document.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      };
    },
    gl,
    handlePointerDown,
    handlePointerUp,
    handlePointerMove
  );
  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

export default Island;
