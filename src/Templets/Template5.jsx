// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/Templet.css";
// import Star from "../components/Star";
// import Data from "../Data/Templates.json";


// function Template5() {
//   const { title } = useParams(); // Get title from URL
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     if (!Data || !Data.Projects) {
//       console.error("Data is undefined or does not contain Projects", Data);
//       return;
//     }

//     console.log("Template5 Data Structure:", Data.Projects);

//     // Normalize projectTitle from URL
//     const normalizedTitle = decodeURIComponent(title)
//       .replace(/-/g, " ") // Replace hyphens with spaces
//       .trim()
//       .toLowerCase();

//     console.log("url title: ", normalizedTitle);

//     let foundProject = null;

//     // Loop through each category to find the matching project
//     Data.Projects.forEach((projectCategory) => {
//       projectCategory.categories.forEach((category) => {
//         category.projects.forEach((item) => {
//           if (item.title.trim().toLowerCase() === normalizedTitle) {
//             foundProject = item;
//           }
//         });
//       });
//     });

//     console.log("Matching Project in Template5:", foundProject);

//     if (foundProject) {
//       setProject(foundProject);
//     } else {
//       console.error("Project not found in Template5!");
//     }
//   }, [title, Data]);


//   return (
//     <div>
//       <div className="temp5-project_container">
//         <div className="temp5-project_section temp5-p-section">
//           <div className="temp5-project_text">
//             <span className="test-selection-white">{project?.title}</span>
//             {project?.starComponent && <Star />}
//           </div>
//         </div>
//       </div>
//       <div
//         className="temp5-banner-img"
//         style={{ backgroundImage: `url(${project?.banner?.image})` }}
//       >
//         <div className="temp5-img-text test-selection-white">
//           <div>{project?.banner?.text}</div>
//         </div>
//       </div>
//       <div className="temp5-content-container">
//         <div className="temp5-heading">
//           <div className="temp5-title">{project?.industry?.title}</div>
//           <div className="temp5-topic">
//             Topics:{" "}
//             {project?.industry?.topics?.map((topic, index) => (
//               <span key={index}>
//                 <span style={{ color: "#0047FF" }}> #</span>
//                 {topic}
//               </span>
//             ))}
//           </div>
//         </div>
//         <div>
//           <div className="temp5-sec1-title">{project?.section1?.title}</div>
//           <div className="temp5-sec1-container">
//             <div className="temp5-sec1-content">
//               <div>{project?.section1?.summaryHeading}</div>
//               {project?.section1?.executiveSummary?.map((para, index) => (
//                 <p className="para-temp-styles temp-margin" key={index}>{para}</p>
//               ))}
//             </div>
//             <div className="temp5-sec1-img">
//               <img src={project?.section1?.image} alt="GreenHouse Image" />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="head-temp-style">{project?.section2?.heading}</div>
//           {project?.section2?.paragraphs?.map((para, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               {para}
//             </p>
//           ))}
//           {project?.section2?.listItems?.map((item, index) => (
//             <div className="temp5-sec2-list-container" key={index}>
//               <div className="temp5-sec2-list-num">{item.number}</div>
//               <div>
//                 <div className="temp5-sec2-list-title">{item.title}</div>
//                 <p className="para-temp-styles">{item.description}</p>
//               </div>
//             </div>
//           ))}
//           {project?.section3?.midSection?.map((item, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               {item.para}
//             </p>
//           ))}
//           <div className="temp5-sec4-container">
//             <div className="temp5-sec3-container">
//               <div>
//                 <p className="para-temp-styles temp-margin">{project?.section4?.content}</p>
//               </div>
//               <div className="temp5-sec4-mid">
//                 <hr />
//                 <div className="temp5-sec4-content">
//                   <p className="temp5-sec4-heading">
//                     {project?.section4?.midSection?.heading}
//                   </p>
//                   <p className="temp5-sec4-subheading">
//                     {project?.section4?.midSection?.subheading}
//                   </p>
//                   <p className="temp5-sec4-para">
//                     {project?.section4?.midSection?.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {project?.section5 && (
//             <>
//               <p className="para-temp-styles temp-margin">{project?.section5?.content}</p>
//               <div className="temp5-sec4-container">
//                 <div className="temp5-sec4-title">{project?.section5?.title}</div>
//                 <div className="temp5-sec3-container">
//                   <div className="temp5-sec4-img">
//                     <img src={project?.section5?.image} alt="Chilli Image" />
//                   </div>
//                   <div>
//                     <div className="temp5-sec3-subtitle">
//                       {project?.section5?.subsection?.title}
//                     </div>
//                     <p className="para-temp-styles temp-margin">
//                       {project?.section5?.subsection?.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//           {project?.conclusion?.map((item, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               {item.para}
//             </p>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Template5;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/Templet.css";
// import Star from "../components/Star";
// import Data from "../Data/ProjectData2.json"; // Use ProjectData2.json instead of Templates.json

// function Template5() {
//   const { title } = useParams(); // Get title from URL
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     if (!Data || !Data.Departments) {
//       console.error("Data is undefined or does not contain Departments", Data);
//       return;
//     }

//     // Normalize project title from URL
//     const normalizedTitle = decodeURIComponent(title)
//       .replace(/-/g, " ")
//       .trim()
//       .toLowerCase();

//     let foundProject = null;

//     // Loop through each department to find the matching project
//     Data.Departments.forEach((department) => {
//       department.categories.forEach((category) => {
//         category.projects.forEach((item) => {
//           if (item.title.trim().toLowerCase() === normalizedTitle) {
//             foundProject = item;
//           }
//         });
//       });
//     });

//     if (foundProject) {
//       setProject(foundProject);
//     } else {
//       console.error("Project not found for title:", normalizedTitle);
//     }
//   }, [title]);

//   if (!project) {
//     return <div>Loading...</div>;
//   }

//   // Map ProjectData2.json fields to the expected structure
//   const mappedProject = {
//     title: project.title,
//     starComponent: false, // Adjust based on your logic for Star component
//     banner: {
//       image: project.mainImageUrl || "/assets/default-banner.jpg", // Fallback image
//       description: project.mainDesc || "No description available",
//     },
//     industry: {
//       topics: [], // Derive from category/department if needed
//     },
//     section1: {
//       summaryHeading: "Executive Summary",
//       executiveSummary: [project["Executive-Summary"] || ""],
//       image: project.mainImageUrl || "/assets/default-image.jpg",
//     },
//     section2: {
//       clientOverview: [project["Client-Overview"] || project["Client-Overview2"] || ""],
//       projectObjective: project["Project-Objective"] || [project["Project-Objective2"] || ""],
//       listItems: (project.Challenges || project.Challenges2 || []).map((challenge, index) => ({
//         number: (index + 1).toString().padStart(2, "0"),
//         title: challenge.title,
//         description: challenge.des,
//       })),
//     },
//     section3: {
//       subheading: "Key Solutions",
//       features: (project.Solutions || project.Solutions2?.[0]?.data || []).map((solution) => ({
//         title: solution.title,
//         description: solution.des,
//       })),
//       technicalImplementation: (project["Technical-Implementation"] || []).map((tech) => ({
//         title: tech.title,
//         description: tech.des,
//       })),
//     },
//     section4: {
//       intro: project["Development-Process"]?.[0]?.des || "The development process followed a structured approach.",
//       stages: (project["Development-Process"]?.Stage || project["Development-Process"]?.stage || []).map((stage) => ({
//         title: stage.name || stage.title,
//         activities: [stage.Line1, stage.Line2, stage.Line3].filter(Boolean),
//         gate: stage.Gate
//           ? {
//               title: stage.Gate.name || "Decision Gate",
//               decisions: [stage.Gate.Line1].filter(Boolean),
//             }
//           : null,
//       })),
//     },
//     section5: {
//       image: project.mainImageUrl || "/assets/default-impact.jpg",
//       impacts: (project.Impacts || project.Impacts2 || []).map((impact) => ({
//         title: impact.title,
//         description: impact.des,
//       })),
//     },
//     conclusion: [project.Conclusion || project.Conclusion2 || ""],
//     references: project.References || [],
//   };

//   return (
//     <div>
//       {/* Project Header */}
//       <div className="temp5-project_container">
//         <div className="temp5-project_section temp5-p-section">
//           <div className="temp5-project_text">
//             <span className="test-selection-white">{mappedProject.title}</span>
//             {mappedProject.starComponent && <Star />}
//           </div>
//         </div>
//       </div>

//       {/* Banner Section */}
//       <div
//         className="temp5-banner-img"
//         style={{ backgroundImage: `url(${mappedProject.banner.image})` }}
//       >
//         <div className="temp5-img-text test-selection-white">
//           <div>{mappedProject.banner.description}</div>
//         </div>
//       </div>

//       {/* Content Container */}
//       <div className="temp5-content-container">
//         {/* Industry and Topics */}
//         <div className="temp5-heading">
//           <div className="temp5-title">Industry</div>
//           <div className="temp5-topic">
//             Topics:{" "}
//             {mappedProject.industry.topics.map((topic, index) => (
//               <span key={index}>
//                 <span style={{ color: "#0047FF" }}>#</span>
//                 {topic}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Executive Summary */}
//         <div>
//           <div className="temp5-sec1-title">{mappedProject.title}</div>
//           <div className="temp5-sec1-container">
//             <div className="temp5-sec1-content">
//               <div>{mappedProject.section1.summaryHeading}</div>
//               {mappedProject.section1.executiveSummary.map((para, index) => (
//                 <p className="para-temp-styles temp-margin" key={index}>
//                   {para}
//                 </p>
//               ))}
//             </div>
//             <div className="temp5-sec1-img">
//               <img src={mappedProject.section1.image} alt={`${mappedProject.title} Image`} />
//             </div>
//           </div>
//         </div>

//         {/* Client Overview */}
//         <div>
//           <div className="head-temp-style">Client Overview</div>
//           {mappedProject.section2.clientOverview.map((para, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               {para}
//             </p>
//           ))}
//         </div>

//         {/* Project Objective */}
//         <div>
//           <div className="head-temp-style">Project Objective</div>
//           {mappedProject.section2.projectObjective.flat().map((para, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               {typeof para === "string" ? para : para.des}
//             </p>
//           ))}
//         </div>

//         {/* Challenges */}
//         <div>
//           <div className="head-temp-style">Challenges</div>
//           {mappedProject.section2.listItems.map((item, index) => (
//             <div className="temp5-sec2-list-container" key={index}>
//               <div className="temp5-sec2-list-num">{item.number}</div>
//               <div>
//                 <div className="temp5-sec2-list-title">{item.title}</div>
//                 <p className="para-temp-styles">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Solution */}
//         <div className="Solution">
//           <div className="head-temp-style">Solution</div>
//           <p className="temp5-sec4-subheading">{mappedProject.section3.subheading}</p>
//           <ul className="sol">
//             {mappedProject.section3.features.map((feature, index) => (
//               <li className="para-temp-styles temp-margin" key={index}>
//                 <span className="temp5-sec4-subheading">{feature.title}: </span>
//                 {feature.description}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Technical Implementation */}
//         <div>
//           <div className="head-temp-style">Technical Implementation</div>
//           <ul>
//             {mappedProject.section3.technicalImplementation.map((item, index) => (
//               <li className="para-temp-styles temp-margin" key={index}>
//                 <span className="temp5-sec4-subheading">{item.title}: </span>
//                 {item.description}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Development Process */}
//         <div>
//           <div className="head-temp-style">Development Process</div>
//           <p className="para-temp-styles temp-margin">{mappedProject.section4.intro}</p>
//           {mappedProject.section4.stages.map((stage, index) => (
//             <div key={index}>
//               <p className="temp5-sec4-title">{stage.title}</p>
//               <ul>
//                 {stage.activities.map((activity, idx) => (
//                   <li className="para-temp-styles temp-margin" key={idx}>
//                     {activity}
//                   </li>
//                 ))}
//               </ul>
//               {stage.gate && (
//                 <>
//                   <p className="temp5-sec4-subheading">{stage.gate.title}</p>
//                   <ul>
//                     {stage.gate.decisions.map((decision, idx) => (
//                       <li className="para-temp-styles temp-margin" key={idx}>
//                         {decision}
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Impact */}
//         {mappedProject.section5 && (
//           <div>
//             <div className="head-temp-style">Impact</div>
//             <div className="temp5-sec3-container">
//               <div className="temp5-sec4-img">
//                 <img src={mappedProject.section5.image} alt="Impact Image" />
//               </div>
//               <div>
//                 <ul>
//                   {mappedProject.section5.impacts.map((impact, index) => (
//                     <li className="para-temp-styles temp-margin" key={index}>
//                       <span className="temp5-sec4-subheading">{impact.title}: </span>
//                       {impact.description}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Conclusion */}
//         <div>
//           <div className="head-temp-style">Conclusion</div>
//           {mappedProject.conclusion.map((item, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               {item}
//             </p>
//           ))}
//         </div>

//         {/* References */}
//         <div>
//           <div className="head-temp-style">References</div>
//           <div className="refer-con">
//             <ol>
//               {mappedProject.references.map((ref, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   {ref}
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template5;





// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/Templet.css";
// import Star from "../components/Star";
// import Data from "../Data/ProjectData2.json";


// function Template5() {
//   const { title } = useParams(); // Get title from URL
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     if (!Data || !Data.Projects) {
//       console.error("Data is undefined or does not contain Projects", Data);
//       return;
//     }

//     console.log("Template5 Data Structure:", Data.Projects);

//     // Normalize projectTitle from URL
//     const normalizedTitle = decodeURIComponent(title)
//       .replace(/-/g, " ") // Replace hyphens with spaces
//       .trim()
//       .toLowerCase();

//     console.log("url title: ", normalizedTitle);

//     let foundProject = null;

//     // Loop through each category to find the matching project
//     Data.Projects.forEach((projectCategory) => {
//       projectCategory.categories.forEach((category) => {
//         category.projects.forEach((item) => {
//           if (item.title.trim().toLowerCase() === normalizedTitle) {
//             foundProject = item;
//           }
//         });
//       });
//     });

//     console.log("Matching Project in Template5:", foundProject);

//     if (foundProject) {
//       setProject(foundProject);
//     } else {
//       console.error("Project not found in Template5!");
//     }
//   }, [title, Data]);


//   return (
//     <div>
//       <div className="temp5-project_container">
//         <div className="temp5-project_section temp5-p-section">
//           <div className="temp5-project_text">
//             <span className="test-selection-white">
//               Custom Chili Ladling Machine for Aachi Group
//             </span>
//             {project?.starComponent && <Star />}
//           </div>
//         </div>
//       </div>
//       <div
//         className="temp5-banner-img"
//         style={{ backgroundImage: `url(${project?.banner?.image})` }}
//       >
//         <div className="temp5-img-text test-selection-white">
//           <div>
//             Portable, battery-powered chili ladling machine with IP69K
//             components, cleated belt conveyor, and PLC/SCADA automation
//           </div>
//         </div>
//       </div>
//       <div className="temp5-content-container">
//         <div className="temp5-heading">
//           <div className="temp5-title">Industry's</div>
//           <div className="temp5-topic">
//             Topics:{" "}
//             {project?.industry?.topics?.map((topic, index) => (
//               <span key={index}>
//                 <span style={{ color: "#0047FF" }}> #</span>
//                 Food Processing, Automation
//               </span>
//             ))}
//           </div>
//         </div>
//         <div>
//           <div className="temp5-sec1-title">
//             Custom Chili Ladling Machine for Aachi Group
//           </div>
//           <div className="temp5-sec1-container">
//             <div className="temp5-sec1-content">
//               <div>{project?.section1?.summaryHeading}</div>
//               {project?.section1?.executiveSummary?.map((para, index) => (
//                 <p className="para-temp-styles temp-margin" key={index}>
//                   The Stacia Corp Custom Chili Ladling Machine—delivered for
//                   Aachi Group—automates chili handling end-to-end, reducing
//                   manual labor by 70% and boosting throughput by 50% while
//                   ensuring uniform product quality and stringent hygiene
//                   compliance. Its battery-powered portability, lightweight
//                   modular frame, and IP69K-rated components enable flexible
//                   deployment and rapid, high-temperature washdowns, cutting
//                   sanitation time by 60%. Integrated PLC/SCADA controls with
//                   remote HMI support real-time monitoring and data logging,
//                   yielding a six-month payback through combined labor and energy
//                   savings.
//                 </p>
//               ))}
//             </div>
//             <div className="temp5-sec1-img">
//               <img src={project?.section1?.image} alt="GreenHouse Image" />
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="head-temp-style">Client Overview</div>
//           {project?.section2?.paragraphs?.map((para, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               Aachi Group, headquartered in Chennai, India, is a leading name in
//               the food processing industry, renowned for its wide range of
//               high-quality products that have become household staples across
//               India and in numerous international markets.
//             </p>
//           ))}
//           <div className="head-temp-style">Project Objective</div>
//           {project?.section2?.paragraphs?.map((para, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               To design and develop a specialized chili ladling machine capable
//               of efficiently handling large quantities of chili with minimal
//               human intervention, thereby enhancing operational efficiency and
//               ensuring consistent product quality.
//             </p>
//           ))}
//           {/* Challenges section */}
//           <div className="head-temp-style">Challenges</div>
//           {/* just json content add */}
//           {project?.section2?.listItems?.map((item, index) => (
//             <div className="temp5-sec2-list-container" key={index}>
//               <div className="temp5-sec2-list-num">{item.number}</div>
//               <div>
//                 <div className="temp5-sec2-list-title">{item.title}</div>
//                 <p className="para-temp-styles">{item.description}</p>
//               </div>
//             </div>
//           ))}
//           {/* Solution section */}
//           <div className="Solution">
//             <div className="head-temp-style">Solution</div>
//             <p className="temp5-sec4-subheading">
//               Stacia Corp engineered a custom chili ladling machine
//               incorporating the following features:
//             </p>
//             <ul className="sol">
//               <li className="para-temp-styles temp-margin">
//                 <span className="temp5-sec4-subheading">High Efficiency:</span>
//                 Utilization of a directly driven food-grade plastic cleated belt
//                 conveyor system for effective chili handling.
//               </li>

//               <li className="para-temp-styles temp-margin">
//                 <span className="temp5-sec4-subheading">Portability :</span>
//                 Battery-operated design allowing for easy relocation within the
//                 facility.
//               </li>
//               <li className="para-temp-styles temp-margin">
//                 <span className="temp5-sec4-subheading">
//                   Lightweight Construction :
//                 </span>
//                 Optimized material selection to ensure ease of movement and
//                 installation.
//               </li>

//               <li className="para-temp-styles temp-margin">
//                 <span className="temp5-sec4-subheading">
//                   Space Optimization
//                 </span>
//                 Compact design tailored to fit within existing spatial
//                 constraints.
//               </li>
//               <li className="para-temp-styles temp-margin">
//                 <span className="temp5-sec4-subheading">
//                   High-Temperature Operability :
//                 </span>
//                 Components selected to withstand the high temperatures prevalent
//                 in processing environments.
//               </li>

//               <li className="para-temp-styles temp-margin">
//                 <span className="temp5-sec4-subheading">
//                   Remote Operation :
//                 </span>
//                 Integration of remote-control capabilities to allow operation
//                 from a distance, enhancing safety and convenience
//               </li>
//             </ul>
//           </div>
//           {/* Development Process */}
//           <div className="head-temp-style">Development Process</div>

//           <p className="para-temp-styles temp-margin">
//             Stacia Corp employed a hybrid Stage-Gate ⁽¹⁾⁻ (²) and
//             Agile-Stage-Gate ⁽³⁾ approach to guide the project from concept
//             through pilot deployment, ensuring rigorous decision points and
//             rapid iteration.
//           </p>

//           <ul>
//             <p className="temp5-sec4-title">Stage 1: Discovery & Ideation</p>
//             <li className="para-temp-styles temp-margin">
//               Conducted cross-functional workshops with Aachi Group to capture
//               chili-handling pain points, throughput targets, hygiene
//               requirements, and spatial constraints.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Generated multiple concepts for conveyor types, remote-control
//               architectures, and washdown strategies.
//             </li>

//             <p className="temp5-sec4-subheading">Gate 1 Decision</p>
//             <li className="para-temp-styles temp-margin">
//               Evaluated initial concepts against “must-meet” criteria: strategic
//               fit, technical feasibility, and hygiene compliance; selected
//               cleated- belt conveyor with IP69K-rated drive motors ⁽²⁾.
//             </li>

//             <p className="temp5-sec4-title">Stage 2: Scoping & Business Case</p>
//             <li className="para-temp-styles temp-margin">
//               Performed market benchmarking and cost–benefit analysis to
//               quantify labor-savings, ROI, and total cost of ownership ⁽⁴⁾.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Defined high-level system requirements: 0.1–1.5 m/s belt speed,
//               60–80 °C operability, battery runtime ≥ 4 hrs.
//             </li>

//             <p className="temp5-sec4-subheading">Gate 2 Decision</p>
//             <li className="para-temp-styles temp-margin">
//               Presented scoped business case—including payback projection and
//               risk assessment—to senior leadership; project approved to proceed.
//             </li>

//             <p className="temp5-sec4-title">
//               Stage 3: Detailed Design & Simulation
//             </p>
//             <li className="para-temp-styles temp-margin">
//               Developed full CAD models, selecting 304 SS and FDA-approved
//               polymers for structural and food-contact parts.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Used discrete-event simulation to validate conveyor flow, ladle
//               timing, and thermal loads under washdown scenarios ⁽⁵⁾.
//             </li>

//             <p className="temp5-sec4-subheading">Gate 3 Decision</p>
//             <li className="para-temp-styles temp-margin">
//               Reviewed design against detailed acceptance criteria (slice
//               accuracy, jam resistance, clean-in-place efficacy) and
//               green-lighted prototyping.
//             </li>

//             <p className="temp5-sec4-title">Stage 4: Prototyping & Testing</p>
//             <li className="para-temp-styles temp-margin">
//               Built alpha unit and conducted:
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Performance Tests: Measured throughput, ladle consistency, and
//               remote-control responsiveness.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Hygiene Validation: Ran 3,000 psi, 80 °C washdown cycles to verify
//               IP69K sealing ⁽⁶⁾.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Reliability Trials: Simulated 8-hour continuous operation to
//               assess motor heating and belt wear.
//             </li>

//             <p className="temp5-sec4-subheading">Gate 4 Decision</p>
//             <li className="para-temp-styles temp-margin">
//               Collected test data and operator feedback; iterated blade-cup
//               geometry and control logic in two-week sprints to resolve minor
//               jams and optimize washdown drains ⁽⁷⁾.
//             </li>

//             <p className="temp5-sec4-title">
//               Stage 5: Pilot Deployment & Launch
//             </p>

//             <li className="para-temp-styles temp-margin">
//               Deployed at Aachi Group’s Chennai facility for a 30-day onsite
//               pilot, log-booked performance metrics, and trained operators on
//               HMI/remote controls.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Final acceptance achieved once throughput, consistency, and
//               sanitation targets were met; full production rollout commenced.
//             </li>
//             <p className="para-temp-styles temp-margin">
//               Continuous Improvement & Agile Sprints:
//             </p>
//             <li className="para-temp-styles temp-margin">
//               Between each gate, two-week Agile sprints were used to incorporate
//               real-world insights rapidly, aligning with Agile-Stage- Gate best
//               practices for manufacturing innovations ⁽⁸⁾
//             </li>
//           </ul>
//           <div className="temp5-sec4-container">
//             <div className="temp5-sec3-container">
//               {/* <div>
//                 <p className="para-temp-styles temp-margin">
//                   {project?.section4?.content}
//                 </p>
//               </div> */}

//               {/* how stacia can help */}
//               {/* <div className="temp5-sec4-mid">
//                 <hr />
//                 <div className="temp5-sec4-content">
//                   <p className="temp5-sec4-heading">
//                     {project?.section4?.midSection?.heading}
//                   </p>
//                   <p className="temp5-sec4-subheading">
//                     {project?.section4?.midSection?.subheading}
//                   </p>
//                   <p className="temp5-sec4-para">
//                     {project?.section4?.midSection?.description}
//                   </p>
//                 </div>
//               </div> */}
//             </div>


//             {/* Impact */}

//           </div>
//           {project?.section5 && (
//             <>
//               <p className="para-temp-styles temp-margin"></p>
//               <div className="temp5-sec4-container">
//                 <div className="head-temp-style">Impact</div>
//                 <div className="temp5-sec3-container">
//                   <div className="temp5-sec4-img">
//                     <img src={project?.section5?.image} alt="Chilli Image" />
//                   </div>
//                   <div>
//                     <p className="para-temp-styles temp-margin">
//                       <ul>
//                         <li className="para-temp-styles temp-margin">
//                           <span className="temp5-sec4-subheading">
//                             Enhanced Productivity:
//                           </span>
//                           Significant reduction in manual labor requirements and
//                           processing time.
//                         </li>

//                         <li className="para-temp-styles temp-margin">
//                           <span className="temp5-sec4-subheading">
//                             Operational Flexibility:
//                           </span>
//                           Portability and compactness allowed for versatile
//                           deployment across different processing lines.
//                         </li>
//                         <li className="para-temp-styles temp-margin">
//                           <span className="temp5-sec4-subheading">
//                             Safety and Hygiene:
//                           </span>
//                           Remote operation minimized direct human contact,
//                           adhering to stringent hygiene standards.
//                         </li>
//                         <li className="para-temp-styles temp-margin">
//                           <span className="temp5-sec4-subheading">
//                             Improved Consistency:
//                           </span>
//                           Automated ladling ensured uniform mixing and quality
//                           of chili products.
//                         </li>
//                       </ul>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </>
//           )}
//           {/* Conclusion */}
//           <div className="head-temp-style">Conclusion</div>
//           {project?.conclusion?.map((item, index) => (
//             <p className="para-temp-styles temp-margin" key={index}>
//               The collaboration between Stacia Corp and Aachi Group resulted in
//               a technologically advanced solution that addressed specific
//               operational challenges, leading to improved efficiency, product
//               consistency, and workplace safety. This project exemplifies Stacia
//               Corp's commitment to delivering customized engineering solutions
//               that align with client needs and industry standards.
//             </p>
//           ))}
//         </div>
//         {/* References */}
//         <div className="head-temp-style">References </div>
//         <div className="refer-con">
//           <ol>
//             <li className="para-temp-styles temp-margin">
//               New Product Best Practices for Food & Beverage Industry (Stage-
//               Gate Model)
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Stages and gates in Food Processing (Stage-Gate Funnel)
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Cooper, R. G. – Evolution of Agile–Stage-Gate in Manufacturing
//             </li>
//             <li className="para-temp-styles temp-margin">
//               project management and development
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Automate phase-gate processes in manufacturing with digital
//               workflows
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Hygienic design and IP69K washdown compliance overview
//             </li>
//             <li className="para-temp-styles temp-margin">
//               Optimizing the Stage-Gate Process: Best Practices
//             </li>
//             <li className="para-temp-styles temp-margin">
//               How to take your Stage-Gate® process to the next level (flexible,
//               “fuzzy” gates)
//             </li>
//           </ol>
//         </div>
//         {/* Client Overview" */}
//         <div className="Client Overview">
//           <div className="head-temp-style">Client Overview</div>
//           <p className="para-temp-styles temp-margin">
//             Aachi Group, founded in 1995 by Mr. A.D. Padmasingh Isaac, is
//             headquartered in Chennai and recognized as India’s leading spice and
//             condiment manufacturer, offering over 200 products and 550 SKUs
//             across more than 10 lakh retail outlets in 231 countries cite
//             turn0search0 turn0search1 . The company operates a state-of- the-art
//             facility in Keel Ayyanabakkam, processing up to 120 metric tonnes of
//             spice powders and mixes daily and employing over 2,000 staff,
//             underscoring its scale in the FMCG sector cite turn0search8 . In
//             March 2025, Aachi Group was honoured with the Outstanding FMCG Brand
//             Award at the Economic Times Achievers Awards, reflecting its
//             commitment to quality and innovation .
//           </p>
//         </div>
//         {/* Project Objective */}
//         <div className="Project Objective">
//           <div className="head-temp-style">Project Objective</div>
//           <p className="para-temp-styles temp-margin">
//             The primary objective was to mechanize the chili ladling and mixing
//             operations to eliminate labour-intensive manual processes, ensure
//             uniform product quality, and integrate with existing production
//             lines without expanding the facility footprint. Secondary goals
//             included designing for high-temperature environments (60–80 °C),
//             complying with stringent hygiene standards (IP69K), and enabling
//             remote-controlled operation for enhanced safety and flexibility cite
//             turn2search0 .
//           </p>
//         </div>
//         {/* challenge */}
//         <div className="project-challenges">
//           <div className="head-temp-style">Challenges</div>
//           <ul className="para-temp-styles temp-margin">
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Manual Labor Dependence:
//               </span>
//               Traditional chili handling required significant human effort,
//               leading to inconsistent mixing and high labour costs.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Hygiene & Washdown:
//               </span>
//               Equipment had to endure frequent, high-pressure washdowns at
//               temperatures up to 80 °C without microbial harbourage.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Space Constraints:
//               </span>
//               The processing floor’s limited area demanded a compact, mobile
//               solution that could be repositioned as needed.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Digital Integration:
//               </span>
//               Seamless data logging, real-time monitoring, and remote
//               diagnostics had to be supported via PLC/SCADA systems.
//             </li>
//           </ul>
//         </div>
//         {/* solution */}
//         <div className="project-solution">
//           <div className="head-temp-style">Solution</div>
//           <p className="temp5-sec4-subheading">Salient Features</p>
//           <ul className="sol">
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 High Efficiency & Throughput:
//               </span>
//               A directly driven, food-grade plastic cleated belt conveyor
//               powered by an IP69K-rated drum motor minimizes slippage and
//               maximizes chili handling speed.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Portability & Lightweight Design:
//               </span>
//               Optimized stainless-steel and FDA-approved polymer framing yields
//               a battery-operated, remote-controlled module weighing under 150 kg
//               for easy redeployment.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Compact Footprint:
//               </span>
//               The machine’s 1 × 0.8 m footprint fits between existing lines
//               without requiring additional floor space.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 High-Temperature Operability:
//               </span>
//               Heat-resistant motors and seals operate reliably in ambient
//               process temperatures up to 80 °C.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 IP69K Hygiene Compliance:
//               </span>
//               All wetted parts and enclosures meet IP69K ingress protection,
//               enabling 3,000 psi washdowns and preventing microbial harbourage.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Remote PLC/SCADA Control:
//               </span>
//               A Mitsubishi MELSEC Q-series PLC with GOT2000 HMI touchscreen
//               manages belt speed, ladling cycles, and logs process data for
//               SCADA integration.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Modularity & Scalability:
//               </span>
//               Plug-and-play conveyor and ladling modules allow rapid
//               reconfiguration or capacity expansion with minimal downtime.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Ease of Maintenance:
//               </span>
//               Quick-release belts and a clean-in-place design reduce maintenance
//               and sanitation time by over 60%.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Energy Efficiency:
//               </span>
//               Encapsulated drum motors and high-efficiency gearboxes cut power
//               loss to under 10%, supporting six-month payback via utility and
//               labour savings.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Safety & Compliance:
//               </span>
//               Emergency-stop interlocks, guarded moving parts, and adherence to
//               FSSAI and ISO 22000 standards ensure operator safety and
//               regulatory compliance.
//             </li>
//           </ul>
//         </div>
//         {/* Technical Implementation */}
//         <div>
//           <p className="temp5-sec4-subheading">Technical Implementation</p>
//           <ul>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">Conveyor Drive:</span>{" "}
//               Van der Graaf stainless-steel SSV Series drum motor with IP69K
//               sealing drives a ThermoDrive ZeroSplice belt at adjustable speeds
//               (0.1–1.5 m/s) for gentle chili handling.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Frame & Materials:
//               </span>
//               304 stainless steel structural frame and FDA-approved polymer belt
//               cups resist corrosion and enable washdowns without disassembly.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">
//                 Controls Architecture:
//               </span>
//               MELSEC Q-series PLC interfaced with VFDs controls belt motors and
//               ladle actuators; GOT2000 HMI provides operator interface; OPC UA
//               links to plant SCADA for remote monitoring.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="  temp5-sec4-subheading">Remote Interface:</span>{" "}
//               A tablet-based wireless app modelled on robotic pick-and-place
//               controls offers intuitive operation from a safe distance.
//             </li>
//           </ul>
//         </div>
//         {/* Impact & Benefits */}
//         <div className="project-Impact & Benefits">
//           <div className="temp5-sec4-title">Impact & Benefits</div>
//           <ul>
//             <li className="para-temp-styles temp-margin">
//               <span className="temp5-sec4-subheading">Labor Reduction:</span>{" "}
//               Automated ladling cut manual labor by 70%, freeing staff for
//               higher-value tasks and reducing labor costs by 50%.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="temp5-sec4-subheading">
//                 Throughput Increase:
//               </span>{" "}
//               Processing capacity increased by 50%, enabling 1.5× more chili to
//               be handled per shift without additional operators.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="temp5-sec4-subheading">
//                 Consistency & Quality:
//               </span>{" "}
//               Uniform belt-driven mixing eliminated batch-to-batch variability,
//               improving product mouthfeel and color uniformity.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="temp5-sec4-subheading">
//                 Sanitation Efficiency:
//               </span>{" "}
//               IP69K-rated design and clean-in-place reduced sanitation cycles by
//               60%, slashing downtime and ensuring compliance with FSSAI
//               guidelines.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="temp5-sec4-subheading">
//                 Flexibility & Scalability:
//               </span>{" "}
//               Portable, modular design allowed redeployment across multiple
//               lines with under 2 hours of setup time, maximizing asset
//               utilization.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="temp5-sec4-subheading">Energy Savings:</span>{" "}
//               Optimized drum motors and VFD control yielded a 15% reduction in
//               power draw, achieving ROI within six months through combined
//               energy and labor savings.
//             </li>
//             <li className="para-temp-styles temp-margin">
//               <span className="temp5-sec4-subheading">
//                 Data-Driven Operations:
//               </span>{" "}
//               Real-time data logging and remote diagnostics enabled proactive
//               maintenance, reducing unplanned downtime by 40%.
//             </li>
//           </ul>
//         </div>
//         {/* Conclusion */}
//         <div className="Conclusion">
//           <div className="head-temp-style">Conclusion</div>
//           <p className="para-temp-styles temp-margin">
//             By integrating advanced hygienic conveyor technologies from Intralox
//             and Van der Graaf, high-performance PLC/SCADA control from
//             Mitsubishi Electric, and modular design principles, Stacia Corp
//             delivered a turnkey chili ladling solution that transforms Aachi
//             Group’s operations with enhanced efficiency, safety, and
//             scalability. This project exemplifies how strategic engineering
//             partnerships can drive sustainable automation in the food industry, 

//             setting a new benchmark for portable, high-temperature, and fully
//             connected processing equipment.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template5;

// 15/05

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/Templet.css";
// import Star from "../components/Star";
// import Data from "../Data/ProjectData2.json";

// function Template5() {
//   const { title } = useParams(); // Get title from URL
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!Data || !Data.Departments) {
//       console.error("Data is undefined or does not contain Departments", Data);
//       setError("Data is unavailable");
//       setLoading(false);
//       return;
//     }

//     // Normalize projectTitle from URL
//     const normalizedTitle = decodeURIComponent(title)
//       .replace(/-/g, " ")
//       .trim()
//       .toLowerCase();

//     console.log("URL title: ", normalizedTitle);

//     let foundProject = null;

//     // Loop through Departments, Categories, and Projects to find the matching project
//     Data.Departments.forEach((department) => {
//       department.categories.forEach((category) => {
//         category.projects.forEach((item) => {
//           if (item.title.trim().toLowerCase() === normalizedTitle) {
//             foundProject = item;
//           }
//         });
//       });
//     });

//     console.log("Matching Project in Template5:", foundProject);

//     if (foundProject) {
//       setProject(foundProject);
//     } else {
//       console.error("Project not found in Template5!");
//       setError("Project not found");
//     }
//     setLoading(false);
//   }, [title]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div>
//       {/* Project Header Section */}
//       <div className="temp5-project_container">
//         <div className="temp5-project_section temp5-p-section">
//           <div className="temp5-project_text">
//             <span className="test-selection-white">{project.title}</span>
//             {project.starComponent && <Star />}
//           </div>
//         </div>
//       </div>

//       {/* Banner Section */}
//       <div
//         className="temp5-banner-img"
//         style={{ backgroundImage: `url(${project.mainImageUrl})` }}
//       >
//         <div className="temp5-img-text test-selection-white">
//           <div>{project.mainDesc}</div>
//         </div>
//       </div>

//       {/* Main Content Container */}
//       <div className="temp5-content-container">
//         {/* Industry Topics */}
//         <div className="temp5-heading">
//           <div className="temp5-title">Industry</div>
//           <div className="temp5-topic">
//             Topics:{" "}
//             {["Food Processing", "Automation"].map((topic, index) => (
//               <span key={index}>
//                 <span style={{ color: "#0047FF" }}>#</span>
//                 {topic}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Executive Summary */}
//         <div>
//           <div className="temp5-sec1-title">{project.title}</div>
//           <div className="temp5-sec1-container">
//             <div className="temp5-sec1-content">
//               <div>Executive Summary</div>
//               <p className="para-temp-styles temp-margin">
//                 {project["Executive-Summary"]}
//               </p>
//             </div>
//             <div className="temp5-sec1-img">
//               <img src={project.mainImageUrl} alt={`${project.title} Image`} />
//             </div>
//           </div>
//         </div>

//         {/* Client Overview */}
//         <div>
//           <div className="head-temp-style">Client Overview</div>
//           <p className="para-temp-styles temp-margin">
//             {project["Client-Overview"]}
//           </p>
//           {project["Client-Overview2"] && (
//             <p className="para-temp-styles temp-margin">
//               {project["Client-Overview2"]}
//             </p>
//           )}
//         </div>

//         {/* Project Objective */}
//         <div>
//           <div className="head-temp-style">Project Objective</div>
//           {Array.isArray(project["Project-Objective"]) ? (
//             project["Project-Objective"].map((obj, index) => (
//               <p className="para-temp-styles temp-margin" key={index}>
//                 {typeof obj === "string" ? obj : obj.des}
//               </p>
//             ))
//           ) : (
//             <p className="para-temp-styles temp-margin">
//               {project["Project-Objective"]}
//             </p>
//           )}
//           {project["Project-Objective2"] && (
//             <p className="para-temp-styles temp-margin">
//               {project["Project-Objective2"]}
//             </p>
//           )}
//         </div>

//         {/* Challenges */}
//         <div>
//           <div className="head-temp-style">Challenges</div>
//           {project.Challenges.map((challenge, index) => (
//             <div className="temp5-sec2-list-container" key={index}>
//               <div className="temp5-sec2-list-num">{index + 1}</div>
//               <div>
//                 <div className="temp5-sec2-list-title">{challenge.title}</div>
//                 <p className="para-temp-styles">{challenge.des}</p>
//               </div>
//             </div>
//           ))}
//           {project.Challenges2 && (
//             <ul>
//               {project.Challenges2.map((challenge, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   <span className="temp5-sec4-subheading">{challenge.title}:</span>{" "}
//                   {challenge.des}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Solutions */}
//         <div className="Solution">
//           <div className="head-temp-style">Solution</div>
//           <p className="temp5-sec4-subheading">
//             Stacia Corp engineered a custom solution incorporating the following
//             features:
//           </p>
//           <ul className="sol">
//             {project.Solutions.map((solution, index) => (
//               <li className="para-temp-styles temp-margin" key={index}>
//                 <span className="temp5-sec4-subheading">{solution.title}:</span>{" "}
//                 {solution.des}
//               </li>
//             ))}
//           </ul>
//           {project.Solutions2 && (
//             <>
//               <p className="temp5-sec4-subheading">Salient Features</p>
//               <ul className="sol">
//                 {project.Solutions2[0]?.data.map((solution, index) => (
//                   <li className="para-temp-styles temp-margin" key={index}>
//                     <span className="temp5-sec4-subheading">{solution.title}:</span>{" "}
//                     {solution.des}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>

//         {/* Technical Implementation */}
//         {project["Technical-Implementation"] && (
//           <div>
//             <p className="temp5-sec4-subheading">Technical Implementation</p>
//             <ul>
//               {project["Technical-Implementation"].map((impl, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   <span className="temp5-sec4-subheading">{impl.title}:</span>{" "}
//                   {impl.des}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Development Process */}
//         <div>
//           <div className="head-temp-style">Development Process</div>
//           <p className="para-temp-styles temp-margin">
//             {project["Development-Process"]}
//           </p>
//           <ul>
//             {project.Stage?.map((stage, index) => (
//               <div key={index}>
//                 <p className="temp5-sec4-title">{stage.name}</p>
//                 <li className="para-temp-styles temp-margin">{stage.Line1}</li>
//                 {stage.Line2 && (
//                   <li className="para-temp-styles temp-margin">{stage.Line2}</li>
//                 )}
//                 {stage.Line3 && (
//                   <li className="para-temp-styles temp-margin">{stage.Line3}</li>
//                 )}
//                 {project.Gate && project.Gate[index] && (
//                   <>
//                     <p className="temp5-sec4-subheading">
//                       Gate {index + 1} Decision
//                     </p>
//                     <li className="para-temp-styles temp-margin">
//                       {project.Gate[index].Line1}
//                     </li>
//                   </>
//                 )}
//               </div>
//             ))}
//           </ul>
//         </div>

//         {/* Impacts */}
//         <div>
//           <div className="head-temp-style">Impact</div>
//           <div className="temp5-sec3-container">
//             <div className="temp5-sec4-img">
//               <img src={project.mainImageUrl} alt={`${project.title} Impact`} />
//             </div>
//             <div>
//               <ul>
//                 {project.Impacts.map((impact, index) => (
//                   <li className="para-temp-styles temp-margin" key={index}>
//                     <span className="temp5-sec4-subheading">{impact.title}:</span>{" "}
//                     {impact.des}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           {project.Impacts2 && (
//             <ul>
//               {project.Impacts2.map((impact, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   <span className="temp5-sec4-subheading">{impact.title}:</span>{" "}
//                   {impact.des}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Conclusion */}
//         <div>
//           <div className="head-temp-style">Conclusion</div>
//           <p className="para-temp-styles temp-margin">{project.Conclusion}</p>
//           {project.Conclusion2 && (
//             <p className="para-temp-styles temp-margin">{project.Conclusion2}</p>
//           )}
//         </div>

//         {/* References */}
//         <div>
//           <div className="head-temp-style">References</div>
//           <div className="refer-con">
//             <ol>
//               {project.References.map((ref, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   {ref}
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template5;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/Templet.css";
// import Star from "../components/Star";
// import Data from "../Data/ProjectData2.json";

// function Template5() {
//   const { title } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const normalize = (str) =>
//     typeof str === "string" ? str.trim().toLowerCase().replace(/-/g, " ") : "";

//   useEffect(() => {
//     if (!Data || !Data.Departments) {
//       console.error("Data is undefined or does not contain Departments", Data);
//       setError("Data is unavailable");
//       setLoading(false);
//       return;
//     }

//     const normalizedTitle = normalize(decodeURIComponent(title));
//     let foundProject = null;

//     for (const department of Data.Departments) {
//       for (const category of department.categories) {
//         for (const item of category.projects) {
//           if (normalize(item.slug) === normalizedTitle) {
//             foundProject = item;
//             break;
//           }
//         }
//         if (foundProject) break;
//       }
//       if (foundProject) break;
//     }

//     if (foundProject) {
//       setProject(foundProject);
//     } else {
//       setError("Project not found");
//     }

//     setLoading(false);
//   }, [title]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!project) return <div>Project not found</div>;

//   return (
//     <div>
//       <div className="temp5-project_container">
//         <div className="temp5-project_section temp5-p-section">
//           <div className="temp5-project_text">
//             <span className="test-selection-white">{project.title}</span>
//             {project.starComponent && <Star />}
//           </div>
//         </div>
//       </div>

//       <div
//         className="temp5-banner-img"
//         style={{ backgroundImage: `url(${project.mainImageUrl})` }}
//       >
//         <div className="temp5-img-text test-selection-white">
//           <div>{project.mainDesc}</div>
//         </div>
//       </div>

//       <div className="temp5-content-container">
//         <div className="temp5-heading">
//           <div className="temp5-title">Industry</div>
//           <div className="temp5-topic">
//             Topics: {project.Topics?.map((topic, index) => (
//               <span key={index}>
//                 <span style={{ color: "#0047FF" }}>#</span>
//                 {topic} {" "}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div>
//           <div className="temp5-sec1-title">{project.title}</div>
//           <div className="temp5-sec1-container">
//             <div className="temp5-sec1-content">
//               <div>Executive Summary</div>
//               <p className="para-temp-styles temp-margin">
//                 {project["Executive-Summary"]}
//               </p>
//             </div>
//             <div className="temp5-sec1-img">
//               <img src={project.mainImageUrl} alt={`${project.title} Image`} />
//             </div>
//           </div>
//         </div>

//         <div>
//           <div className="head-temp-style">Client Overview</div>
//           <p className="para-temp-styles temp-margin">
//             {project["Client-Overview"]}
//           </p>
//           {project["Client-Overview2"] && (
//             <p className="para-temp-styles temp-margin">
//               {project["Client-Overview2"]}
//             </p>
//           )}
//         </div>

//         <div>
//           <div className="head-temp-style">Project Objective</div>
//           {Array.isArray(project["Project-Objective"]) ? (
//             project["Project-Objective"].map((obj, index) => (
//               <p className="para-temp-styles temp-margin" key={index}>
//                 {typeof obj === "string" ? obj : obj.des}
//               </p>
//             ))
//           ) : (
//             <p className="para-temp-styles temp-margin">
//               {project["Project-Objective"]}
//             </p>
//           )}
//           {project["Project-Objective2"] && (
//             <p className="para-temp-styles temp-margin">
//               {project["Project-Objective2"]}
//             </p>
//           )}
//         </div>

//         <div>
//           <div className="head-temp-style">Challenges</div>
//           {project.Challenges?.map((challenge, index) => (
//             <div className="temp5-sec2-list-container" key={index}>
//               <div className="temp5-sec2-list-num">{index + 1}</div>
//               <div>
//                 <div className="temp5-sec2-list-title">{challenge.title}</div>
//                 <p className="para-temp-styles">{challenge.des}</p>
//               </div>
//             </div>
//           ))}
//           {project.Challenges2 && (
//             <ul>
//               {project.Challenges2.map((challenge, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   <span className="temp5-sec4-subheading">{challenge.title}:</span> {challenge.des}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div className="Solution">
//           <div className="head-temp-style">Solution</div>
//           <ul className="sol">
//             {project.Solutions?.map((solution, index) => (
//               <li className="para-temp-styles temp-margin" key={index}>
//                 <span className="temp5-sec4-subheading">{solution.title}:</span> {solution.des}
//               </li>
//             ))}
//           </ul>
//           {project.Solutions2 && (
//             <>
//               <p className="temp5-sec4-subheading">Salient Features</p>
//               <ul className="sol">
//                 {project.Solutions2[0]?.data.map((solution, index) => (
//                   <li className="para-temp-styles temp-margin" key={index}>
//                     <span className="temp5-sec4-subheading">{solution.title}:</span> {solution.des}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>

//         {project["Technical-Implementation"] && (
//           <div>
//             <p className="temp5-sec4-subheading">Technical Implementation</p>
//             <ul>
//               {project["Technical-Implementation"].map((impl, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   <span className="temp5-sec4-subheading">{impl.title}:</span> {impl.des}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div>
//           <div className="head-temp-style">Development Process</div>
//           <p className="para-temp-styles temp-margin">
//             {project["Development-Process"]}
//           </p>
//           <ul>
//             {project.Stage?.map((stage, index) => (
//               <div key={index}>
//                 <p className="temp5-sec4-title">{stage.name}</p>
//                 <li className="para-temp-styles temp-margin">{stage.Line1}</li>
//                 {stage.Line2 && <li className="para-temp-styles temp-margin">{stage.Line2}</li>}
//                 {stage.Line3 && <li className="para-temp-styles temp-margin">{stage.Line3}</li>}
//                 {project.Gate && project.Gate[index] && (
//                   <>
//                     <p className="temp5-sec4-subheading">Gate {index + 1} Decision</p>
//                     <li className="para-temp-styles temp-margin">{project.Gate[index].Line1}</li>
//                   </>
//                 )}
//               </div>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <div className="head-temp-style">Impact</div>
//           <div className="temp5-sec3-container">
//             <div className="temp5-sec4-img">
//               <img src={project.mainImageUrl} alt={`${project.title} Impact`} />
//             </div>
//             <div>
//               <ul>
//                 {project.Impacts?.map((impact, index) => (
//                   <li className="para-temp-styles temp-margin" key={index}>
//                     <span className="temp5-sec4-subheading">{impact.title}:</span> {impact.des}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           {project.Impacts2 && (
//             <ul>
//               {project.Impacts2.map((impact, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>
//                   <span className="temp5-sec4-subheading">{impact.title}:</span> {impact.des}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         <div>
//           <div className="head-temp-style">Conclusion</div>
//           <p className="para-temp-styles temp-margin">{project.Conclusion}</p>
//           {project.Conclusion2 && (
//             <p className="para-temp-styles temp-margin">{project.Conclusion2}</p>
//           )}
//         </div>

//         <div>
//           <div className="head-temp-style">References</div>
//           <div className="refer-con">
//             <ol>
//               {project.References?.map((ref, index) => (
//                 <li className="para-temp-styles temp-margin" key={index}>{ref}</li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template5;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/Templet.css";
// import Star from "../components/Star";
// import Data from "../Data/ProjectData2.json";

// function Template5() {
//   const { title } = useParams();
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Normalize function to compare slugs safely
//   const normalize = (str) =>
//     typeof str === "string" ? str.trim().toLowerCase().replace(/-/g, " ") : "";

//   useEffect(() => {
//     if (!Data || !Data.Departments) {
//       setError("Data unavailable");
//       setLoading(false);
//       return;
//     }

//     const normalizedTitle = normalize(decodeURIComponent(title));
//     let foundProject = null;

//     for (const department of Data.Departments) {
//       for (const category of department.categories) {
//         for (const proj of category.projects) {
//           if (normalize(proj.slug) === normalizedTitle) {
//             foundProject = proj;
//             break;
//           }
//         }
//         if (foundProject) break;
//       }
//       if (foundProject) break;
//     }

//     if (foundProject) {
//       setProject(foundProject);
//       setError(null);
//     } else {
//       setError("Project not found");
//     }
//     setLoading(false);
//   }, [title]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;
//   if (!project) return <div>Project not found</div>;

//   return (
//     <div>
//       <div className="temp5-project_container">
//         <div className="temp5-project_section temp5-p-section">
//           <div className="temp5-project_text">
//             <span className="test-selection-white">{project.title}</span>
//             {project.starComponent && <Star />}
//           </div>
//         </div>
//       </div>

//       <div
//         className="temp5-banner-img"
//         style={{ backgroundImage: `url(${project.mainImageUrl})` }}
//       >
//         <div className="temp5-img-text test-selection-white">
//           <div>{project.mainDesc}</div>
//         </div>
//       </div>

//       <div className="temp5-content-container">
//         {/* Industry topics, if exists */}
//         {project.Topics && (
//           <div className="temp5-heading">
//             <div className="temp5-title">Industry</div>
//             <div className="temp5-topic">
//               Topics:{" "}
//               {project.Topics.map((topic, idx) => (
//                 <span key={idx}>
//                   <span style={{ color: "#0047FF" }}>#</span>
//                   {topic}{" "}
//                 </span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Executive Summary */}
//         <div>
//           <div className="temp5-sec1-title">{project.title}</div>
//           <div className="temp5-sec1-container">
//             <div className="temp5-sec1-content">
//               <div>Executive Summary</div>
//               <p className="para-temp-styles temp-margin">
//                 {project["Executive-Summary"]}
//               </p>
//             </div>
//             <div className="temp5-sec1-img">
//               <img src={project.mainImageUrl} alt={`${project.title} Image`} />
//             </div>
//           </div>
//         </div>

//         {/* Client Overview */}
//         <div>
//           <div className="head-temp-style">Client Overview</div>
//           <p className="para-temp-styles temp-margin">
//             {project["Client-Overview"]}
//           </p>
//           {project["Client-Overview2"] && (
//             <p className="para-temp-styles temp-margin">
//               {project["Client-Overview2"]}
//             </p>
//           )}
//         </div>

//         {/* Project Objective */}
//         <div>
//           <div className="head-temp-style">Project Objective</div>
//           {Array.isArray(project["Project-Objective"]) ? (
//             project["Project-Objective"].map((obj, idx) => (
//               <p className="para-temp-styles temp-margin" key={idx}>
//                 {typeof obj === "string" ? obj : obj.des}
//               </p>
//             ))
//           ) : (
//             <p className="para-temp-styles temp-margin">
//               {project["Project-Objective"]}
//             </p>
//           )}
//           {project["Project-Objective2"] && (
//             <p className="para-temp-styles temp-margin">
//               {project["Project-Objective2"]}
//             </p>
//           )}
//         </div>

//         {/* Challenges */}
//         <div>
//           <div className="head-temp-style">Challenges</div>
//           {project.Challenges?.map((challenge, idx) => (
//             <div className="temp5-sec2-list-container" key={idx}>
//               <div className="temp5-sec2-list-num">{idx + 1}</div>
//               <div>
//                 <div className="temp5-sec2-list-title">{challenge.title}</div>
//                 <p className="para-temp-styles">{challenge.des}</p>
//               </div>
//             </div>
//           ))}
//           {project.Challenges2 && (
//             <ul>
//               {project.Challenges2.map((challenge, idx) => (
//                 <li className="para-temp-styles temp-margin" key={idx}>
//                   <span className="temp5-sec4-subheading">{challenge.title}:</span>{" "}
//                   {challenge.des}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Solutions */}
//         <div className="Solution">
//           <div className="head-temp-style">Solution</div>
//           <ul className="sol">
//             {project.Solutions?.map((solution, idx) => (
//               <li className="para-temp-styles temp-margin" key={idx}>
//                 <span className="temp5-sec4-subheading">{solution.title}:</span>{" "}
//                 {solution.des}
//               </li>
//             ))}
//           </ul>
//           {project.Solutions2 && (
//             <>
//               <p className="temp5-sec4-subheading">Salient Features</p>
//               <ul className="sol">
//                 {project.Solutions2[0]?.data.map((solution, idx) => (
//                   <li className="para-temp-styles temp-margin" key={idx}>
//                     <span className="temp5-sec4-subheading">{solution.title}:</span>{" "}
//                     {solution.des}
//                   </li>
//                 ))}
//               </ul>
//             </>
//           )}
//         </div>

//         {/* Technical Implementation */}
//         {project["Technical-Implementation"] && (
//           <div>
//             <p className="temp5-sec4-subheading">Technical Implementation</p>
//             <ul>
//               {project["Technical-Implementation"].map((impl, idx) => (
//                 <li className="para-temp-styles temp-margin" key={idx}>
//                   <span className="temp5-sec4-subheading">{impl.title}:</span>{" "}
//                   {impl.des}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* Development Process */}
//         <div>
//           <div className="head-temp-style">Development Process</div>
//           <p className="para-temp-styles temp-margin">
//             {project["Development-Process"]}
//           </p>
//           <ul>
//             {project.Stage?.map((stage, idx) => (
//               <div key={idx}>
//                 <p className="temp5-sec4-title">{stage.name}</p>
//                 <li className="para-temp-styles temp-margin">{stage.Line1}</li>
//                 {stage.Line2 && <li className="para-temp-styles temp-margin">{stage.Line2}</li>}
//                 {stage.Line3 && <li className="para-temp-styles temp-margin">{stage.Line3}</li>}
//                 {project.Gate && project.Gate[idx] && (
//                   <>
//                     <p className="temp5-sec4-subheading">Gate {idx + 1} Decision</p>
//                     <li className="para-temp-styles temp-margin">{project.Gate[idx].Line1}</li>
//                   </>
//                 )}
//               </div>
//             ))}
//           </ul>
//         </div>

//         {/* Impacts */}
//         <div>
//           <div className="head-temp-style">Impact</div>
//           <div className="temp5-sec3-container">
//             <div className="temp5-sec4-img">
//               <img src={project.mainImageUrl} alt={`${project.title} Impact`} />
//             </div>
//             <div>
//               <ul>
//                 {project.Impacts?.map((impact, idx) => (
//                   <li className="para-temp-styles temp-margin" key={idx}>
//                     <span className="temp5-sec4-subheading">{impact.title}:</span>{" "}
//                     {impact.des}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           {project.Impacts2 && (
//             <ul>
//               {project.Impacts2.map((impact, idx) => (
//                 <li className="para-temp-styles temp-margin" key={idx}>
//                   <span className="temp5-sec4-subheading">{impact.title}:</span>{" "}
//                   {impact.des}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Conclusion */}
//         <div>
//           <div className="head-temp-style">Conclusion</div>
//           <p className="para-temp-styles temp-margin">{project.Conclusion}</p>
//           {project.Conclusion2 && (
//             <p className="para-temp-styles temp-margin">{project.Conclusion2}</p>
//           )}
//         </div>

//         {/* References */}
//         <div>
//           <div className="head-temp-style">References</div>
//           <div className="refer-con">
//             <ol>
//               {project.References?.map((ref, idx) => (
//                 <li className="para-temp-styles temp-margin" key={idx}>{ref}</li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Template5;


// import React, { Suspense } from "react";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Templet.css";

import Star from "../components/Star";
import Data from "../Data/ProjectData2.json";

const NavBar = React.lazy(() => import("../components/NavBar"));
const SideBar = React.lazy(() => import("../components/SideBar"));
const Footer = React.lazy(() => import("../components/Footer"));
const MobileFooter = React.lazy(() => import("../components/MobileFooter"));

function Template5() {
  const { title } = useParams(); // Get title from URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!Data || !Array.isArray(Data.Departments)) {
      console.error("Data is undefined or does not contain Departments", Data);
      return;
    }

    // Normalize projectTitle from URL
    const normalizedTitle = decodeURIComponent(title)
      .replace(/-/g, " ")
      .trim()
      .toLowerCase();

    console.log("URL title:", normalizedTitle);

    let foundProject = null;

    // Loop through each department and category to find the matching project
    try {
      Data.Departments.forEach((department, deptIndex) => {
        if (!department || !Array.isArray(department.categories)) {
          console.warn(`Department at index ${deptIndex} is invalid:`, department);
          return;
        }
        department.categories.forEach((category, catIndex) => {
          if (!category || !Array.isArray(category.projects)) {
            console.warn(`Category at index ${catIndex} in department '${department.name}' is invalid:`, category);
            return;
          }
          category.projects.forEach((item, projIndex) => {
            // Check if item.title is defined and is a string
            if (item && item.title && typeof item.title === "string") {
              if (item.title.trim().toLowerCase() === normalizedTitle) {
                foundProject = item;
              }
            } else {
              console.warn(
                `Project at index ${projIndex} in category '${category.name || "unknown"}' of department '${department.name || "unknown"}' has invalid or missing title:`,
                item
              );
            }
          });
        });
      });
    } catch (error) {
      console.error("Error processing project data:", error);
    }

    console.log("Matching Project in Template5:", foundProject);

    if (foundProject) {
      setProject(foundProject);
    } else {
      console.error("Project not found in Template5 for title:", normalizedTitle);
      setProject(null);
    }
  }, [title]);

  if (!project) {
    return <div>Project not found or loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="nav_style">
          <NavBar />
          <SideBar />
        </div>
        {/* <div className="temp5-project_container">
          <div className="temp5-project_section temp5-p-section">
            <div className="temp5-project_text">
              <span className="test-selection-white">{project.title}</span>
              {project.starComponent && <Star />}
            </div>
          </div>
        </div> */}
        <div
          className="temp5-banner-img"
          style={{ backgroundImage: `url(${project.mainImageUrl || "/assets/placeholder.jpg"})` }}
        >
          <div className="temp5-img-text test-selection-white">
            <div>{project.title|| "No description available"}</div>
          </div>
        </div>
        <div className="temp5-content-container">
          <div className="temp5-heading">
            <div className="temp5-title">Industry</div>
            <div className="temp5-topic">
              Topics:{" "}
              <span>
                <span style={{ color: "#0047FF" }}>#</span>
                {project.category || "Food Processing, Automation"}
              </span>
            </div>
          </div>
          <div>
            <div className="temp5-sec1-title">{project.title}</div>
            <div className="temp5-sec1-container">
              <div className="temp5-sec1-content">
                <div>Executive Summary</div>
                <p className="para-temp-styles temp-margin">
                  {project["Executive-Summary"] || "No executive summary available"}
                </p>
              </div>
              <div className="temp5-sec1-img">
                <img
                  src={project.mainImageUrl || "/assets/placeholder.jpg"}
                  alt={`${project.title} Image`}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="head-temp-style">Client Overview</div>
            <p className="para-temp-styles temp-margin">
              {project["Client-Overview"] || "No client overview available"}
            </p>
            <div className="head-temp-style">Project Objective</div>
            {Array.isArray(project["Project-Objective"]) ? (
              project["Project-Objective"].map((obj, index) => (
                <li className="para-temp-styles temp-margin" key={index}>
                  {typeof obj === "string" ? obj : obj.des || "No objective description"}
                </li>
              ))
            ) : (
              <p className="para-temp-styles temp-margin">
                {project["Project-Objective"] || "No project objective available"}
              </p>
            )}
            <div className="head-temp-style">Challenges</div>
            {project.Challenges && Array.isArray(project.Challenges) ? (
              project.Challenges.map((challenge, index) => (
                <div className="temp5-sec2-list-container" key={index}>
                  <div className="temp5-sec2-list-num">{index + 1}</div>
                  <div>
                    <div className="temp5-sec2-list-title">{challenge.title || "Untitled Challenge"}</div>
                    <p className="para-temp-styles">{challenge.des || "No description"}</p>
                  </div>
                </div>
              ))
            ) : Array.isArray(project.Challenges) ? (
              project.Challenges.map((challenge, index) => (
                <div className="temp5-sec2-list-container" key={index}>
                  <div className="temp5-sec2-list-num">{index + 1}</div>
                  <div>
                    <div className="temp5-sec2-list-title">{challenge.title || "Untitled Challenge"}</div>
                    <p className="para-temp-styles">{challenge.des || "No description"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="para-temp-styles temp-margin">No challenges listed</p>
            )}
            <div className="Solution">
              <div className="head-temp-style">Solution</div>
              <p className="temp5-sec4-subheading">
                Stacia Corp engineered a custom solution incorporating the following features:
              </p>
              <ul className="sol">
                {project.Solutions && Array.isArray(project.Solutions) && project.Solutions[0]?.data ? (
                  project.Solutions[0].data.map((solution, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {solution.title || "Untitled Solution"}:
                      </span>{" "}
                      {solution.des || "No description"}
                    </li>
                  ))
                ) : Array.isArray(project.Solutions) ? (
                  project.Solutions.map((solution, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {solution.title || "Untitled Solution"}:
                      </span>{" "}
                      {solution.des || "No description"}
                    </li>
                  ))
                ) : (
                  <li className="para-temp-styles temp-margin">No solutions listed</li>
                )}
              </ul>
            </div>
            <div className="head-temp-style">Development Process</div>
            <p className="para-temp-styles temp-margin">
              {project["Development-Process"] || "No development process described"}
            </p>
            <div className="head-temp-style1">{project["title1"] || "No development process described"}</div>
            <p className="para-temp-styles temp-margin">
              {project["stage-Gate-Framework"] || "No development process described"}
            </p>
            <ul className="sol">
              {Array.isArray(project.Stage) ? (
                project.Stage.map((stage, index) => (
                  <div key={index}>
                    <p className="temp5-sec4-title">{stage.name || "Unnamed Stage"}</p>
                    <div className="sol">
                      <li className="para-temp-styles temp-margin">
                        {stage.Line1 || "No details"}
                      </li>
                      {stage.Line2 && (
                        <li className="para-temp-styles temp-margin">{stage.Line2}</li>
                      )}
                      {stage.Line3 && (
                        <li className="para-temp-styles temp-margin">{stage.Line3}</li>
                      )}
                    </div>
                    {Array.isArray(project.Gate) && project.Gate[index] && (
                      <div className="sol">
                        <p className="temp5-sec4-subheading">
                          Gate {project.Gate[index].id || index + 1} Decision
                        </p>
                        <div className="sol">
                          <li className="para-temp-styles temp-margin">
                            {project.Gate[index].Line1 || "No gate decision"}
                          </li>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <li className="para-temp-styles temp-margin">No stages listed</li>
              )}
            </ul>
            <div className="temp5-sec4-container">
              <div className="head-temp-style">Impact</div>
              <div className="temp5-sec3-container">
                <div className="temp5-sec4-img">
                  <img
                    src={project.mainImageUrl || "/assets/placeholder.jpg"}
                    alt={`${project.title} Image`}
                  />
                </div>
                <div>
                  <ul>
                    {project.Impacts && Array.isArray(project.Impacts) ? (
                      project.Impacts.map((impact, index) => (
                        <li className="para-temp-styles temp-margin" key={index}>
                          <span className="temp5-sec4-subheading">
                            {impact.title || "Untitled Impact"}:
                          </span>{" "}
                          {impact.des || "No description"}
                        </li>
                      ))
                    ) : Array.isArray(project.Impacts) ? (
                      project.Impacts.map((impact, index) => (
                        <li className="para-temp-styles temp-margin" key={index}>
                          <span className="temp5-sec4-subheading">
                            {impact.title || "Untitled Impact"}:
                          </span>{" "}
                          {impact.des || "No description"}
                        </li>
                      ))
                    ) : (
                      <li className="para-temp-styles temp-margin">No impacts listed</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="head-temp-style">Conclusion</div>
            <p className="para-temp-styles temp-margin">
              {project.Conclusion || "No conclusion provided"}
            </p>
            {project.Conclusion2 && (
              <p className="para-temp-styles temp-margin">{project.Conclusion2}</p>
            )}
            <div className="head-temp-style">References</div>
            <div className="refer-con">
              <ol>
                {Array.isArray(project.References) ? (
                  project.References.map((ref, index) => (
                    <div className="sol">
                      <li className="para-temp-styles temp-margin" key={index}>
                        {ref || "No reference"}
                      </li>
                    </div>
                  ))
                ) : (
                  <li className="para-temp-styles temp-margin">No references listed</li>
                )}
              </ol>
            </div>
            {project["Client-Overview2"] && (
              <div className="Client Overview">
                <div className="head-temp-style">Client Overview</div>
                <p className="para-temp-styles temp-margin">
                  {project["Client-Overview2"]}
                </p>
              </div>
            )}
            {project["Project-Objective2"] && (
              <div className="Project Objective">
                <div className="head-temp-style">Project Objective</div>
                <p className="para-temp-styles temp-margin">
                  {project["Project-Objective2"]}
                </p>
              </div>
            )}
            {project.Challenges2 && Array.isArray(project.Challenges2) && (
              <div className="project-challenges">
                <div className="head-temp-style">Challenges</div>
                <ul className="para-temp-styles temp-margin">
                  {project.Challenges2.map((challenge, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {challenge.title || "Untitled Challenge"}:
                      </span>{" "}
                      {challenge.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.Solutions2 && Array.isArray(project.Solutions2) && project.Solutions2[0]?.data && (
              <div className="project-solution">
                <div className="head-temp-style">Solution</div>
                <p className="temp5-sec4-subheading">Salient Features</p>
                <ul className="sol">
                  {project.Solutions2[0].data.map((solution, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">
                        {solution.title || "Untitled Solution"}:
                      </span>{" "}
                      {solution.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project["Technical-Implementation"] && Array.isArray(project["Technical-Implementation"]) && (
              <div>
                <p className="temp5-sec4-subheading">Technical Implementation</p>
                <ul className="sol">
                  {project["Technical-Implementation"].map((tech, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">{tech.title || "Untitled"}:</span>{" "}
                      {tech.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.Impacts2 && Array.isArray(project.Impacts2) && (
              <div className="project-Impact & Benefits">
                <div className="temp5-sec4-title">Impact & Benefits</div>
                <ul className="sol">
                  {project.Impacts2.map((impact, index) => (
                    <li className="para-temp-styles temp-margin" key={index}>
                      <span className="temp5-sec4-subheading">{impact.title || "Untitled Impact"}:</span>{" "}
                      {impact.des || "No description"}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project.Conclusion2 && (
              <div className="Conclusion">
                <div className="head-temp-style">Conclusion</div>
                <p className="para-temp-styles temp-margin">{project.Conclusion2}</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <Footer />
          <MobileFooter />
        </div>
      </div>
    </Suspense>
  );
}

export default Template5;
