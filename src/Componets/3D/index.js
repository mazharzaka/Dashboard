import React, {Suspense} from "react";
import Model from "./Shoe";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";
import {useState} from "react";
export default function ThreeD(props) {
  const [main, setmain] = useState("#fffff");
  const [sec, setsec] = useState("#fffff");
  const [thrid, setthrid] = useState("#fffff");
  return (
    <div className="Image-contain">
      <h2 className="nameimage">3D Modle Color</h2>{" "}
      <div className="card-cotainer">
        <div className="card">
          <div className="d-item">
            {" "}
            <Canvas>
              <Suspense fallbac={null}>
                <ambientLight />
                <spotLight angle={0.1} penumbra={1} position={[10, 15, 10]} />

                <Model
                  colors={{
                    main: main,
                    seccolor: sec,
                    thridcolor: thrid,
                  }}
                />
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                />
              </Suspense>
            </Canvas>
          </div>
          <div className="colors">
            <div className="color-lable">
              MainColor
              <input
                type="color"
                value={main}
                className="color"
                id="main"
                onChange={(e) => {
                  setmain(e.target.value);
                }}
              />
            </div>
            <div className="color-lable">
              SecColor
              <input
                type="color"
                value={sec}
                className="color"
                id="sec"
                onChange={(e) => {
                  setsec(e.target.value);
                }}
              />
            </div>
            <div className="color-lable">
              ThridColor
              <input
                type="color"
                value={thrid}
                className="color"
                id="thrid"
                onChange={(e) => {
                  setthrid(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
