import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
// import logo from '../assets/Image/Bg.jpg'
const Model = () => {
  // Load the GLB model
  const { scene } = useGLTF("/endrew.glb"); // Replace with your actual path
  return <primitive object={scene} />;
};

const Loader = () => {
  return (
    <div style={{  height: "100vh" }} className="bg-[#1E1E1E] z-50 h-screen flex justify-center items-center fixed left-0 top-0 w-full">
 <div className=" border-hover gradient-border border-0 border-t-4 
  w-[150px]
  h-[150px]
  rounded-full
  flex justify-center items-center
  loadingone
  ">
  <div className=" border-secondary border-0 border-primary border-b-4
   w-[100px]
   h-[100px]
   rounded-full
   flex justify-center items-center
   loadingsecond
   ">
 
<div className="flex items-center justify-center h-full">
      <div className="w-16 h-16 border-4 border-primary border-dotted rounded-full animate-spin"></div>
    </div>
 
  {/* <img src={logo} width={50} alt="" /> */}
  </div>
 </div>
    </div>
  );
};

export default Loader;
