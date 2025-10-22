


import React from "react";
import { ShaderAnimation } from "./ShapeAnimation";
import "../styles/ShapeAnimationIntro.css";
import logo from "../assets/66.png"
import shape from "../assets/shape.png"

export default function ShapeAnimationIntro() {
    return (
        <div className="hero-container">
            <ShaderAnimation />

            <div className="hero-content">
                <img src={logo} alt="6 Years Celebration" className="hero-logo" />
                <img src={shape} alt="STACIA" className="hero-title" />
            </div>
        </div>

    );
}
