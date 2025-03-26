import React from "react";
import "../styles/Templet.css";
import Star from "../components/Star";
import Greenhouse2 from "../assets/Green-House2.webp";
import GreenHouse from "../assets/Green-house.webp";
import chilli from "../assets/Chilli2.webp";
import drychilli from "../assets/dryChilli.webp";
import chilli2 from "../assets/chilli3.webp";

function Template4() {
  return (
    <div>
      <div className="temp5-project_container">
        <div className="temp4-project_section temp5-p-section">
          <div className="temp5-project_text">
            <span className="test-selection-white">Chilli Solar House</span>
            <Star />
          </div>
        </div>
      </div>
      <div
        className="temp5-banner-img"
        style={{ backgroundImage: `url(${Greenhouse2})` }}
      >
        <div className="temp5-img-text test-selection-white">
          <div>Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor</div>
        </div>
      </div>
      <div className="temp5-content-container">
        <div>
          <div className="temp5-sec1-title">Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem Lorem ipsum dolor Lorem ipsum</div>
          <div className="temp5-sec1-container">
            <div className="temp5-sec1-content">
              <div>Lorem ipsum dolor Lorem ipsum dolorLorem</div>
              <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam.</p>
              <p>Lorem ipsum dolor sit amet consectetur.  Blandit in Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant.</p>
            </div>
            <div className="temp5-sec1-img">
              <img src={GreenHouse} alt="GreenHouse Image" />
            </div>
          </div>
        </div>
        <div className="mid-container">
          <section className="temp4-sec2">
            <div className="temp4-sec2-img no-padding">
              <img src={chilli} />
            </div>
            <div className="temp4-sec2-img2 second-image">
              <img src={drychilli} />
            </div>
          </section>
          <div className="text-mid-container">
            <div className="head2-temp-style head2-mid-container">Lorem ipsum dolor Lorem ipsum dolorLoremLorem ipsum dolor Lorem ipsum dolorLoremLorem</div>
            <p className="para-temp-styles para-mid-container">
              The goal of this project is to streamline and digitize the supply
              chain for oil production. By offering specialized apps and websites
              for farmers, surveyors, procurement managers, and logistics teams,
              this ecosystem aims to make it a better around the world and make the problem solved once and for all.
            </p>
          </div>
        </div>
        <div className="temp4-sec2-list-container">
          <div className="box box1">
            <div className="temp5-sec2-list-num">01</div>
            <div>
              <div className="temp5-sec2-list-title">Lorem ipsum dolor Lorem ipsum dolorLorem</div>
              <p className="para-temp-styles">Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
          </div>
          <div className="box box2">
            <div className="temp5-sec2-list-num">02</div>
            <div>
              <div className="temp5-sec2-list-title">Lorem ipsum dolor Lorem ipsum dolorLorem</div>
              <p className="para-temp-styles">Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
          </div>
          <div className="box box3">
            <div className="temp5-sec2-list-num">03</div>
            <div>
              <div className="temp5-sec2-list-title">Lorem ipsum dolor Lorem ipsum dolorLorem</div>
              <p className="para-temp-styles">Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
          </div>
          <div className="box box4">
            <div className="temp5-sec2-list-num">04</div>
            <div>
              <div className="temp5-sec2-list-title">Lorem ipsum dolor Lorem ipsum dolorLorem</div>
              <p className="para-temp-styles">Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. </p>
            </div>
          </div>
        </div>
        <div className="temp5-sec4-container">
          <div className="temp5-sec4-title">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="temp5-sec3-container">
            <div className="temp4-sec4-img">
              <img src={chilli2} alt="Chilli Image" />
            </div>
            <div>
              <p className="para-temp-styles">
              Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam. Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam.  aliquam. Lorem ipsum dolor sit amet consectetur. Ullamcorper eu egestas tempor nunc nec habitant. Dolor vulputate tempor sagittis et maecenas praesent congue ac. Blandit in sagittis sem quis lectus aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template4;
