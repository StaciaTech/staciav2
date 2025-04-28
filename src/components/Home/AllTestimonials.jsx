import React from "react";
import TestimonialCard from "./TestimonialCard";
import Aachi from "../../assets/aachi-tes.png";
import Parkshan from "../../assets/parikshan-tes.png";
import Manage from "../../assets/manage-tes.png";
import Mac from "../../assets/mac-tes.png";
import shanti from "../../assets/shanthi-tes.png";
import idhayam from "../../assets/idhayam-tes.png";

const TestimonialData = [
  {
    name: "Idhayam",
    title: "CEO, XYZ Corp.",
    image: idhayam,
    text: "As a client of Stacia Corp, I can confidently say that they are a company that we would like to have a long-term relationship with. In a market where we are constantly dealing with various vendors, Stacia Corp stands out with their excellent service and commitment to meeting our needs.",
  },
  {
    name: "Parikshan",
    title: "CEO, XYZ Corp.",
    image: Parkshan,
    text: "I am extremely delighted to recommend your esteemed self the exemplary quality services of Stacia Corp. They lay out prodigious work with remarkable variety of products and services that thrives an impressive change",
  },
  {
    name: "Manage",
    title: "CEO, XYZ Corp.",
    image: Manage,
    text: "I have been extremely impressed with Stacia Corp's niche problem-solving capabilities. Their team of experts took the time to thoroughly understand our unique challenges and requirements, and provided innovative solutions that exceeded our expectations.",
  },
  {
    name: "MAC",
    title: "CEO, XYZ Corp.",
    image: Mac,
    text: "We had the opportunity  to work with Stacia Corp and are impressed with the consistency, diligence and efficiency with which the result is delivered.",
  },
  {
    name: "Aachi",
    title: "CEO, XYZ Corp.",
    image: Aachi,
    text: "We have varied experiences convinced with Stacia Corp where they demonstrated extraordinary intellectual abilities. Solutions to business problems come instantaneously from the team and are praiseworthy!",
  },
  {
    name: "Shanthi sweets and bakery",
    title: "CEO, XYZ Corp.",
    image: shanti,
    text: "I should say im very much impressed with Stacia’s product design capabilities. Their team is incredibly knowledgeable, innovative, and creative, and they always strive to understand our needs and requirements to create a solution that exceeds our expectations.",
  },
];

export default function AllTestimonials() {
  return (
    <div style={{ display: "flex" }}>
      {TestimonialData.map((eachTestimonial, i) => (
        <TestimonialCard key={i} eachTestimonial={eachTestimonial} />
      ))}
    </div>
  );
}
