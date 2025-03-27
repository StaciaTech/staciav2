import React,{useState, useEffect} from "react";
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
import templatesData from "../Data/Templates.json"

function SingleProject() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const projectTitle = pathSegments[pathSegments.length - 1]; // Extract and decode project title
  const [projectData, setProjectData] = useState(null);

  // Templates Object
  const templates = {
    template1: <Template1 />,
    template2: <Template2 />,
    template3: <Template3 />,
    template4: <Template4 />,
    template5: <Template5 />,
  };

  useEffect(() => {
    if (templatesData?.projects) {
      console.log("Project Data Structure:", templatesData.projects);
  
      // Normalize projectTitle from URL
      const normalizedTitle = decodeURIComponent(projectTitle)
        .replace(/-/g, " ") // Replace hyphens with spaces
        .trim()
        .toLowerCase();
  
      console.log("url title: ", normalizedTitle)
      // Find the project
      const project = templatesData.projects.find(
        (item) => item.title.trim().toLowerCase() === normalizedTitle
      );
  
      console.log("Matching Project:", project);
  
      if (project) {
        setProjectData(project);
      } else {
        console.error("Project not found!");
      }
    }
  }, [projectTitle, templatesData]);
  

  return (
    <div className="single-project-container">
      <NavBar />
      <SideBar />
      {projectData ? templates[projectData.template] : <p>No matching template found.</p>}
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default SingleProject;
