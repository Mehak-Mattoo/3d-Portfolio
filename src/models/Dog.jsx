import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../assets/3d/dog.glb";

export function Dog({ currentAnimation, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    console.log("Available animations:", animations); // Debugging: Log available animations
    
    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    } else {
      console.warn(`Animation "${currentAnimation}" not found`); // Warn if the animation doesn't exist
    }
    
    return () => {
      if (actions[currentAnimation]) {
        actions[currentAnimation].fadeOut(0.5);
      }
    };
  }, [currentAnimation, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.472}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Playful_dog_124">
                <group name="Playful_dog_Skeleton_123" scale={0.01}>
                  <group name="geo1_0" />
                  <group name="skeletal3_1">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_132"
                        geometry={nodes.Object_132.geometry}
                        material={materials.material0}
                        skeleton={nodes.Object_132.skeleton}
                      />
                      <group name="shiba_inu2_125_correction">
                        <group name="shiba_inu2_125" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Dog;
