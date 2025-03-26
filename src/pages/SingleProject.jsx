import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import Template1 from "../Templets/Template1";
import Template2 from "../Templets/Template2";
import Template3 from "../Templets/Template3";
import Template4 from "../Templets/Template4";
import Template5 from "../Templets/Template5";
import { useLocation } from "react-router-dom";
// import projectData from "../Data/ProjectsData.json"

function SingleProject() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const projectTitle = pathSegments[pathSegments.length - 1]; // Extract project title from URL

  console.log("Current Path:", location.pathname);
  console.log("Extracted Project Title:", projectTitle);

  // Project-to-Template Mapping as an Array
  const projectTemplates = [
    { title: "One-Drill", template: "template5" },
    { title: "ismart", template: "template2" },
    { title: "Automobile-&-Automotive-SPM", template: "template3" },
    { title: "Smart-Implementation", template: "template4" },
    { title: "Smart-Grid-Implementation", template: "template5" },
    { title: "AI-Chatbot", template: "template2" },
    { title: "AI-Chatbot-version", template: "template1" },
  ];

  // Templates Object
  const templates = {
    template1: <Template1 />,
    template2: <Template2 />,
    template3: <Template3 />,
    template4: <Template4 />,
    template5: <Template5 />,
  };

  // Find the project in the array using .find()
  const projectData = projectTemplates.find((item) => item.title === projectTitle);

  // Get the corresponding template component
  const SelectedTemplate = projectData ? templates[projectData.template] : null;

  return (
    <div className="single-project-container">
      <NavBar />
      <SideBar />
      {SelectedTemplate || <p>No matching template found.</p>}
      <Footer />
      <MobileFooter />
    </div>
  );

}

export default SingleProject;
