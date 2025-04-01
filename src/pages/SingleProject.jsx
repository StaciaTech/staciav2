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
import templatesData from "../Data/Templates.json";
import ProjectsData from "../Data/ProjectsData.json"

function SingleProject() {
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const projectTitle = pathSegments[pathSegments.length - 1]; // Extract and decode project title
    const [projectData, setProjectData] = useState(null);
    // const [relatedProjects, setRelatedProjects] = useState(null);
  
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




        // import React, { useState, useEffect } from "react";
        // import { useLocation, useNavigate } from "react-router-dom";
        // import NavBar from "../components/NavBar";
        // import SideBar from "../components/SideBar";
        // import Footer from "../components/Footer";
        // import MobileFooter from "../components/MobileFooter";
        // import Template1 from "../Templets/Template1";
        // import Template2 from "../Templets/Template2";
        // import Template3 from "../Templets/Template3";
        // import Template4 from "../Templets/Template4";
        // import Template5 from "../Templets/Template5";
        // import "../styles/RelatedProjects.css"
        // import templatesData from "../Data/Templates.json"
        // import projectsData from "../Data/ProjectsData.json"; // ✅ Correct JSON file
        
        // function SingleProject() {
        //   const location = useLocation();
        //   const navigate = useNavigate();
        //   const pathSegments = location.pathname.split("/");
        
        //   // Extract department, category, and project title from URL
        //   const department = decodeURIComponent(pathSegments[2]).trim();
        //   const category = decodeURIComponent(pathSegments[3]).replace(/\s+/g, "-").trim();
        //   const projectTitle = decodeURIComponent(pathSegments[4])
        //     .replace(/-/g, " ")
        //     .trim()
        //     .toLowerCase();
        
        //     console.log("Department: ", department);
        //     console.log("category: ", category)
        //     console.log("projectTitle: ", projectTitle)
        //   const [projectData, setProjectData] = useState(null);
        //   const [relatedProjects, setRelatedProjects] = useState([]);
        
        //   // Templates Mapping
        //   const templates = {
        //     template1: <Template1 />,
        //     template2: <Template2 />,
        //     template3: <Template3 />,
        //     template4: <Template4 />,
        //     template5: <Template5 />,
        //     default: <Template1 />, // Default template fallback
        //   };
        
        //   useEffect(() => {
        //     if (projectsData?.Projects) {
        //       let foundProject = null;
        //       let related = [];
        
        //       projectsData.Projects.forEach((dept) => {
        //         console.log("Checking department:", dept.name);
        //         if (dept.name.trim().toLowerCase() === department.toLowerCase()) {
        //           dept.categories.forEach((subCategory) => {
        //             const formattedCategory = subCategory.name.replace(/\s+/g, "-").trim();
        //             console.log("Checking category:", formattedCategory);
                    
        //             if (formattedCategory.toLowerCase() === category.toLowerCase()) {
        //               subCategory.projects.forEach((project) => {
        //                 const formattedTitle = project.title.replace(/-/g, " ").trim().toLowerCase();
        //                 console.log("JSON Title:", formattedTitle);
        
        //                 if (formattedTitle === projectTitle) {
        //                   console.log("✅ Found project:", project);
        //                   foundProject = project;
        
        //                   // Get related projects (same category, excluding current project)
        //                   related = subCategory.projects.filter(
        //                     (p) =>
        //                       p.title.replace(/-/g, " ").trim().toLowerCase() !== projectTitle &&
        //                       String(p.id) !== String(foundProject.id)
        //                   );
        //                   console.log("Related: ", related)
        //                 }
        //               });
        //             }
        //           });
        //         }
        //       });
        
        //       console.log("ProjectsData:", foundProject);
        //       console.log("Related Projects:", related);
        
        //       setProjectData(foundProject);
        //       setRelatedProjects(related);
        //     }
        //   }, [department, category, projectTitle]);
        
        //   return (
        //     <div className="single-project-container">
        //       <NavBar />
        //       <SideBar />
        
        //       {/* Render Selected Project */}
        //       {projectData ? (
        //         <>
        //           {templates[projectData.template] || templates.default}
        
        //           {/* Related Projects Section */}
        //           <div className="related-projects-container">
        //             <h2>Related Projects</h2>
        //             <div className="related-projects">
        //               {relatedProjects.map((proj) => (
        //                 <div
        //                   key={proj.id}
        //                   className="related-project-card"
        //                   onClick={() =>
        //                     navigate(
        //                       `/project/${department}/${category}/${proj.title.replace(/\s+/g, "-")}`
        //                     )
        //                   }
        //                 >
        //                   <img src={proj.mainImageUrl} alt={proj.title} />
        //                   <h3>{proj.title}</h3>
        //                   <p>{proj.mainDesc}</p>
        //                 </div>
        //               ))}
        //             </div>
        //           </div>
        //         </>
        //       ) : (
        //         <p>Loading project...</p>
        //       )}
        
        //       <Footer />
        //       <MobileFooter />
        //     </div>
        //   );
        // }
        
        // export default SingleProject;
