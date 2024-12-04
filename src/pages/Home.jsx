import React, { Suspense, useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      // larger screen
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play(); 
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      // larger screen
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <div>
      <section className="w-full h-screen relative">
        <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <Canvas
          className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[10, 7, 2]} intensity={2} />
            {/* light from a distant source - sunlight */}
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#ble1ff" groundColor={"#000000"} />
            <Bird />
            <Sky isRotating={isRotating} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-2 left-2">
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            alt="jukebox"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            className="w-10 h-10 cursor-pointer object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
