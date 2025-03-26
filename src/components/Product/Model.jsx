import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";
// import SC from "../../3D_Models/scmac.glb";

const ProductModel = (props) => {
  const { scene } = useGLTF(props.ModelFile);
  return <primitive object={scene} scale={0.01} {...props} />;
};

export default function Model({ ModelFile }) {
  return (
    <div className="model" style={{ width: "100%", minHeight: "90vh" }}>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ fov: 75 }}
        style={{ position: "absolute" }}
      >
        <ambientLight intensity={10} />
        <directionalLight position={[5, 5, 5]} intensity={2.5} />
        <directionalLight position={[-5, 5, 5]} intensity={2.5} />
        <PresentationControls
          speed={3}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <group>
            <ProductModel scale={3} ModelFile={ModelFile} />
          </group>
        </PresentationControls>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
