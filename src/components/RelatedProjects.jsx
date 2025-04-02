import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import templatesData from "../Data/Templates.json";

function RelatedProjects({ title, department, category }) {
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    if (!templatesData || !templatesData.Projects) {
      console.warn("templatesData is undefined or not structured properly", templatesData);
      return;
    }

    console.log("Related Projects - URL title:", title);

    const normalizedTitle = decodeURIComponent(title)
      .replace(/-/g, " ")
      .trim()
      .toLowerCase();

    let filteredProjects = [];

    // Find the current department & category
    const foundCategory = templatesData.Projects.find(
      (dept) => dept.name === department
    )?.categories.find((cat) => cat.name === category);

    if (foundCategory) {
      // Exclude active project
      filteredProjects = foundCategory.projects.filter(
        (item) => item.title.trim().toLowerCase() !== normalizedTitle
      );
    }

    setRelatedProjects(filteredProjects);
  }, [title, department, category]);
    console.log("related Projects: ", relatedProjects)
  return (
    <div>
      <h2>Related Projects</h2>
      {relatedProjects.length === 0 ? (
        <p>No Related Projects Found</p>
      ) : (
        <ul>
          {relatedProjects.map((project, index) => (
            <li key={index}>
              <Link to={`/project/${department}/${category}/${project.title.replace(/\s+/g, "-").toLowerCase()}`}>
                <img src={project.mainImageUrl} alt={project.title} width="200" />
                <h3>{project.title}</h3>
                <p>{project.mainDesc}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RelatedProjects;
