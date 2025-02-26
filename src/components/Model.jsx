import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import * as THREE from 'three'

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    image: yellowImg,
  });

  //camera control for model view
  const cameraControlSmall = useRef() ;
  const cameraControlLarge = useRef() ;

  //actual models
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation
  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  useGSAP(() => {
    gsap.to("#header", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="header" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView 
            index = {1}
            groupRef = {small}
            gsapType = 'view1'
            
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
