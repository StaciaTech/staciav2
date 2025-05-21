import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import Template1 from "../Templets/Template1";
import Template2 from "../Templets/Template2";
import Template3 from "../Templets/Template3";
import Template4 from "../Templets/Template4";
import Template5 from "../Templets/Template5";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import RelatedProjects from "../components/RelatedProjects";
import templatesData from "../Data/Templates.json";
// import ProjectsData from "../Data/ProjectsData.json"



function SingleProject() {
  const params = useParams();
  const depKey = params.department.split(" ").join("-");
  console.log(depKey, "departmentKey");
  const categoryKey = params.category.split(" ").join("-");
  console.log(categoryKey, "categoryKey");
  const projectKey = params.title.split(" ").join("-");
  console.log(projectKey, "projectKey");

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

  const Data = templatesData.Projects;
  console.log(Data, "Data");

  useEffect(() => {
    setProjectData(Data);
  }, [Data]);

  console.log(projectData, "ProjectData");

  const FoundDept = projectData?.find(
    (eachDep) => eachDep.name.split(" ").join("-") === depKey
  );
  console.log(FoundDept, "DepartmetProject");

  const FoundCat = FoundDept?.categories?.find(
    (eachCat) => eachCat.name.split(" ").join("-") === categoryKey
  );
  console.log(FoundCat, "CategoryProject");

  const proData = FoundCat?.projects;
  console.log(proData, "ProDataProjects");

  const project = proData?.find(
    (eachPro) => eachPro.title.split(" ").join("-") === projectKey
  );
  console.log(project, "project");

  console.log(project?.template, "projectTemplate");

  const [SelectedProject, setSelectedProduct] = useState();

  useEffect(() => {
    setSelectedProduct(project);
  }, [Data]);

  console.log(SelectedProject, "Selectproject");

  const RemainingProjects = proData?.filter(
    (eachPro) => eachPro?.title.split(" ").join("-") !== projectKey
  );
  console.log(RemainingProjects, "RemainingProjects");

  // useEffect(() => {
  //   if (!templatesData || !templatesData.Projects) {
  //     console.error("templatesData is undefined or not structured properly");
  //     return;
  //   }

  //   console.log("Project Data Structure:", templatesData.Projects);

  // let foundProject = null;

  //   if (foundProject) {
  //     setProjectData(foundProject);
  //   } else {
  //     console.error("Project not found!");
  //   }
  // }, [title, templatesData]);

  // useEffect(() => {
  //     if (templatesData?.projects.categories.projects) {
  //         console.log("Project Data Structure:", templatesData.projects);

  // // Normalize projectTitle from URL
  // const normalizedTitle = decodeURIComponent(projectTitle)
  //   .replace(/-/g, " ") // Replace hyphens with spaces
  //   .trim()
  //   .toLowerCase();

  // console.log("url title: ", normalizedTitle)
  // // Find the project
  // const project = templatesData.projects.categories.projects.find(
  //     (item) => item.title.trim().toLowerCase() === normalizedTitle
  //   );

  //   console.log("Matching Project:", project);

  //   if (project) {
  //       setProjectData(project);
  //     } else {
  //         console.error("Project not found!");
  //       }
  //     }
  //   }, [projectTitle, templatesData]);

  return (
    <div className="single-project-container">
      <NavBar />
      <SideBar />
      {projectData ? (
        templates[project?.template]
      ) : (
        <p>No matching template found.</p>
      )}
      <RelatedProjects
        depKey={depKey}
        category={FoundCat}
        projectKey={projectKey}
        RemainingProjects={RemainingProjects}
      />
   
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default SingleProject;
