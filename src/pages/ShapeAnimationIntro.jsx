


import React from "react";
import { ShaderAnimation } from "./ShapeAnimation";
import "../styles/ShapeAnimationIntro.css";
import shape from "../assets/shape.png"

export default function ShapeAnimationIntro() {
    return (
        <div className="demo-one-container">
            <ShaderAnimation />
            <span className="demo-one-title"><img src={shape} alt="" /></span>
        </div>
    );
}
