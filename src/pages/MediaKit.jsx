
// // Static 


// import React, { useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import Footer from "../components/Footer";
// import MobileFooter from "../components/MobileFooter";
// import "../styles/MediaKit.css";
// import axios from "axios";
// import { FiDownload } from "react-icons/fi";

// import Star from "../components/Star";
// import data from "../Data/MediaKit.json";

// function MediaKit() {
//   const apiUrl = process.env.REACT_APP_API_URL;
//   const [mediaData, setMediaData] = useState();

//   console.log(data.logos);
//   console.log(typeof data.logos);

//   const fetchMediaData = async () => {
//     try {
//       // const res = await axios.get(`${apiUrl}/client/index`);
//       setMediaData(JSON.stringify(data));
//     } catch (error) { }
//   };

//   useEffect(() => {
//     fetchMediaData();
//     window.scrollTo(0, 0);
//   }, []);
//   // console.log(mediaData);

//   return (
//     <div>
//       <div className="nav_style">
//         <NavBar />
//         <SideBar />
//       </div>
//       <div>
//         <div className="mediakit-hero-section">
//           <div>
//             <span>Media Kit</span>
//             <Star />
//           </div>
//         </div>
//         <div className="media-container">
//           <div style={{ borderBottom: "1px solid #e5e5e5" }}>
//             <div className="media-section-heading">Logos</div>
//             {data?.logos?.map((eachLogo, i) => {
//               return <MediaLogoContainer key={i} eachLogo={eachLogo} />;

//             })}
//           </div>
//           <div style={{ borderBottom: "1px solid #e5e5e5" }}>
//             <div className="media-section-heading">Leaders</div>
//             <div className="media-leader-card-container">
//               {data?.founders.map((eachfounder, i) => {
//                 return (
//                   <MediaLeadersContainer key={i} eachfounder={eachfounder} />
//                 );
//               })}
//             </div>
//           </div>
//           <div>
//             <div className="media-section-heading">Brochers</div>
//             <div className="media-leader-card-container">
//               {data?.brouchers?.map((eachBroucher, i) => {
//                 return (
//                   <MediaBroucherContainer key={i} eachBroucher={eachBroucher} />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <Footer />
//         <MobileFooter />
//       </div>
//     </div>
//   );
// }

// export default MediaKit;

// const MediaLogoContainer = ({ eachLogo }) => {
//   async function downloadFile(s3Url, format, name) {
//     try {
//       // Determine the MIME type based on format
//       const mimeType = format === "svg" ? "image/svg+xml" : "image/png";

//       const response = await axios.get(s3Url, { responseType: "blob" });
//       const blob = new Blob([response.data], { type: mimeType });
//       const url = URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${name}.${format}`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link); // Remove link after download

//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error(`Error downloading ${format.toUpperCase()}:`, error);
//     }
//   }

//   return (
//     <div className="media-logos-container">
//       <div className="media-logo-content-container">
//         <div className="media-logo-title">{eachLogo.name}</div>
//         <p className="media-logo-des">{eachLogo.description}</p>
//         <div className="media-logo-format-title">File Formats</div>
//         <div className="media-logo-format-container">
//           <div
//             onClick={() => {
//               downloadFile(eachLogo.pngFile.imageUrl, "png", eachLogo.name);
//             }}
//             className="pointer"
//           >
//             Download PNG
//           </div>
//           <div
//             onClick={() => {
//               downloadFile(eachLogo.svgFile.imageUrl, "svg", eachLogo.name);
//             }}
//             className="pointer"
//           >
//             Download SVG
//           </div>
//         </div>
//       </div>
//       <div className="media-logo-img">
//         <img src={eachLogo.svgFile.imageUrl} alt="" />
//       </div>
//     </div>
//   );
// };

// const MediaLeadersContainer = ({ eachfounder }) => {
//   // async function downloadFile(s3Url, name) {
//   //   try {
//   //     // Determine the MIME type based on format
//   //     const mimeType = "image/png";

//   //     const response = await axios.get(s3Url, { responseType: "blob" });
//   //     const blob = new Blob([response.data], { type: mimeType });
//   //     const url = URL.createObjectURL(blob);

//   //     const link = document.createElement("a");
//   //     link.href = url;
//   //     link.download = `${name}.png`;
//   //     document.body.appendChild(link);
//   //     link.click();
//   //     document.body.removeChild(link); // Remove link after download

//   //     URL.revokeObjectURL(url);
//   //   } catch (error) {
//   //     console.error(`Error downloading ${"png".toUpperCase()}:`, error);
//   //   }
//   // }
//   async function downloadFile(s3Url, name) {
//     try {
//       const mimeType = "image/png"; // <- Not relevant for PDFs
//       const response = await axios.get(s3Url, { responseType: "blob" });
//       const blob = new Blob([response.data], { type: "application/pdf" });
//       const url = URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${name}.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error(`Error downloading PDF:`, error);
//     }
//   }


//   return (
//     <div className="media-leader-card">
//       <div className="media-leader-img">
//         <img src={eachfounder.imageUrl} alt="" />
//       </div>
//       <div className="media-leader-contet-container">
//         <div>
//           <div className="media-leader-card-name">{eachfounder.name}</div>
//           <div className="media-leader-card-role">
//             {eachfounder.designation}
//           </div>
//         </div>
//         <div
//           className="media-leader-download-bg"
//           onClick={() => {
//             // downloadFile(eachfounder, eachfounder.name);
//             downloadFile(eachfounder.file.fileUrl, eachfounder.name);
//           }}
//         >
//           <FiDownload color="#0047ff" fontSize={24} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const MediaBroucherContainer = ({ eachBroucher }) => {
//   async function downloadPDF(s3Url, name) {
//     try {
//       const response = await axios.get(s3Url, { responseType: "blob" });
//       const blob = new Blob([response.data], { type: "application/pdf" });
//       const url = URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${name}.pdf`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link); // Remove link after download

//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Error downloading PDF:", error);
//     }
//   }

//   return (
//     <div className="media-leader-card">
//       <div className="media-leader-img">
//         <img src={eachBroucher.display.displayUrl} alt="" />
//       </div>
//       <div className="media-leader-contet-container">
//         <div>
//           <div className="media-leader-card-name">{eachBroucher.name}</div>
//         </div>
//         <div
//           className="media-leader-download-bg"
//           onClick={() => {
//             downloadPDF(eachBroucher.file.fileUrl, eachBroucher.name);
//           }}
//         >
//           <FiDownload color="#0047ff" fontSize={24} />
//         </div>
//       </div>
//     </div>
//   );
// };




// src/pages/MediaKit.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import "../styles/MediaKit.css";
import axios from "axios";
import { FiDownload } from "react-icons/fi";

import Star from "../components/Star";
import data from "../Data/MediaKit.json";
import placeholder from "../assets/white logo.png"; // <-- add a small placeholder image here

// Convert JSON path -> absolute/root-relative URL
function resolveStaticUrl(url) {
  if (!url) return "";
  const u = String(url).trim();
  // absolute urls keep as-is
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  // already root-relative
  if (u.startsWith("/")) return u;
  // treat as public/<path>
  return `/${u}`;
}

// Safe image that falls back to placeholder and logs broken URLs
const SafeImg = ({ src, alt = "", className }) => {
  const resolved = resolveStaticUrl(src) || placeholder;
  const handleError = (e) => {
    console.warn("Image failed to load:", src);
    e.currentTarget.onerror = null;
    e.currentTarget.src = placeholder;
  };
  return <img src={resolved} alt={alt || ""} className={className} onError={handleError} />;
};

function MediaKit() {
  const { key } = useParams(); // path param (e.g. "logos" or "media-kit/logos")
  const [mediaData, setMediaData] = useState(null);

  // Load static JSON (or fetch from API if needed)
  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        // If you later fetch from API, map/resolve urls as needed
        setMediaData(data);
      } catch (err) {
        console.error("Error loading media data:", err);
        setMediaData(data); // fallback to local data
      }
    };

    fetchMediaData();
    window.scrollTo(0, 0);
  }, []);

  // Scroll to section based on URL param (robust, with alias mapping and retries)
  useEffect(() => {
    if (!key) return;

    // handle both "logos" and possible full path "media-kit/logos"
    const raw = String(key).trim();
    const seg = raw.split("/").filter(Boolean).pop().toLowerCase();

    // Accept several common aliases for brochures/brochers
    const aliases = {
      logos: "logos",
      leaders: "leaders",
      brouchers: "brochers",
      brochers: "brochers",
      brochure: "brochers",
      brochures: "brochers",
      brocher: "brochers",
    };

    const canonical = aliases[seg] || seg;
    const validSections = ["logos", "leaders", "brochers"];
    if (!validSections.includes(canonical)) {
      console.warn("Unknown MediaKit section:", seg);
      return;
    }

    let cancelled = false;
    const maxAttempts = 12;

    const attemptScroll = (attempt = 1) => {
      if (cancelled) return;
      const el = document.getElementById(canonical);
      if (el) {
        const headerOffset = 80; // adjust if navbar height different
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (attempt < maxAttempts) {
        const delay = 200 * attempt;
        setTimeout(() => requestAnimationFrame(() => attemptScroll(attempt + 1)), delay);
      } else {
        console.warn(`Could not find section id="${canonical}" after ${maxAttempts} attempts.`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const starter = setTimeout(() => requestAnimationFrame(() => attemptScroll(1)), 250);
    return () => {
      cancelled = true;
      clearTimeout(starter);
    };
  }, [key]);

  // helper to accept multiple possible keys for brochures in JSON
  const getBrochuresArray = () =>
    mediaData?.brouchers || mediaData?.brochers || mediaData?.brochures || [];

  return (
    <div>
      <div className="nav_style">
        <NavBar />
        <SideBar />
      </div>

      <div>
        <div className="mediakit-hero-section">
          <div>
            <span>Media Kit</span>
            <Star />
          </div>
        </div>

        <div className="media-container">
          {/* Logos Section */}
          <div id="logos" style={{ borderBottom: "1px solid #e5e5e5" }}>
            <div className="media-section-heading">Logos</div>
            {(mediaData?.logos || []).map((eachLogo, i) => (
              <MediaLogoContainer key={i} eachLogo={eachLogo} />
            ))}
          </div>

          {/* Leaders Section */}
          <div id="leaders" style={{ borderBottom: "1px solid #e5e5e5" }}>
            <div className="media-section-heading">Leaders</div>
            <div className="media-leader-card-container">
              {(mediaData?.founders || []).map((eachfounder, i) => (
                <MediaLeadersContainer key={i} eachfounder={eachfounder} />
              ))}
            </div>
          </div>

          {/* Brochers Section */}
          <div id="brochers">
            <div className="media-section-heading">Brochers</div>
            <div className="media-leader-card-container">
              {getBrochuresArray().map((eachBroucher, i) => (
                <MediaBroucherContainer key={i} eachBroucher={eachBroucher} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <MobileFooter />
    </div>
  );
}

export default MediaKit;

/* ---------------- Child components (use resolveStaticUrl + SafeImg) ---------------- */

// const MediaLogoContainer = ({ eachLogo }) => {
//   async function downloadFile(s3Url, format, name) {
//     try {
//       if (!s3Url) throw new Error("No file URL");
//       const mimeType = format === "svg" ? "image/svg+xml" : "image/png";
//       const response = await axios.get(resolveStaticUrl(s3Url), { responseType: "blob" });
//       const blob = new Blob([response.data], { type: mimeType });
//       const url = URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.download = `${(name || "file").replace(/\s+/g, "_")}.${format}`;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error(`Error downloading ${format.toUpperCase()}:`, error);
//     }
//   }

//   return (
//     <div className="media-logos-container">
//       <div className="media-logo-content-container">
//         <div className="media-logo-title">{eachLogo?.name}</div>
//         <p className="media-logo-des">{eachLogo?.description}</p>
//         <div className="media-logo-format-title">File Formats</div>
//         <div className="media-logo-format-container">
//           <div
//             onClick={() => downloadFile(eachLogo?.pngFile?.imageUrl, "png", eachLogo?.name)}
//             className="pointer"
//           >
//             Download PNG
//           </div>
//           <div
//             onClick={() => downloadFile(eachLogo?.svgFile?.imageUrl, "svg", eachLogo?.name)}
//             className="pointer"
//           >
//             Download SVG
//           </div>
//         </div>
//       </div>
//       <div className="media-logo-img">
//         <SafeImg src={eachLogo?.svgFile?.imageUrl} alt={eachLogo?.name} />
//       </div>
//     </div>
//   );
// };

const MediaLogoContainer = ({ eachLogo }) => {
  const [selectedFormat, setSelectedFormat] = useState("png");
  const [selectedColor, setSelectedColor] = useState("color");

  async function downloadFile(s3Url, format, name) {
    try {
      if (!s3Url) throw new Error("No file URL");

      const mimeTypeMap = {
        svg: "image/svg+xml",
        png: "image/png",
        jpeg: "image/jpeg",
        pdf: "application/pdf",
      };

      const mimeType = mimeTypeMap[format] || "image/png";
      const response = await axios.get(resolveStaticUrl(s3Url), { responseType: "blob" });
      const blob = new Blob([response.data], { type: mimeType });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${(name || "file").replace(/\s+/g, "_")}_${selectedColor}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Error downloading ${format.toUpperCase()}:`, error);
    }
  }

  const handleDownload = () => {
    // Pick correct file URL based on format and color
    let fileUrl;

    // Example file mapping (adjust according to your API)
    if (selectedFormat === "png") fileUrl = eachLogo?.pngFile?.imageUrl;
    else if (selectedFormat === "svg") fileUrl = eachLogo?.svgFile?.imageUrl;
    else if (selectedFormat === "jpeg") fileUrl = eachLogo?.jpegFile?.imageUrl;
    else if (selectedFormat === "pdf") fileUrl = eachLogo?.pdfFile?.fileUrl;

    downloadFile(fileUrl, selectedFormat, eachLogo?.name);
  };

  return (
    <div className="media-logos-container">
      <div className="media-logo-content-container">
        <div className="media-logo-title">{eachLogo?.name}</div>
        <p className="media-logo-des">{eachLogo?.description}</p>

        <div style={{ display: 'flex' , gap: '2rem' }}>
          {/* --- Format Selection --- */}
          <div>
            <div className="media-logo-format-title">Choose File Format</div>
            <div className="option-buttons">
              {["png", "svg", "jpeg", "pdf"].map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format)}
                  className={`option-btn ${selectedFormat === format ? "active" : ""}`}
                >
                  {format.toUpperCase()}
                </button>
              ))}
            </div>

          </div>
          {/* --- Color Selection --- */}
          <div>
            <div className="media-logo-format-title">Choose Color</div>
            <div className="option-buttons">
              {["black", "white", "color"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`option-btn ${selectedColor === color ? "active" : ""}`}
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- Download Button --- */}
        <button onClick={handleDownload} className="download-btn">
          Download
        </button>
      </div>

      <div className="media-logo-img">
        <SafeImg src={eachLogo?.svgFile?.imageUrl} alt={eachLogo?.name} />
      </div>
    </div>
  );
};

const MediaLeadersContainer = ({ eachfounder }) => {
  async function downloadFile(s3Url, name) {
    try {
      if (!s3Url) throw new Error("No file URL");
      const response = await axios.get(resolveStaticUrl(s3Url), { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${(name || "file").replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Error downloading PDF:`, error);
    }
  }

  return (
    <div className="media-leader-card">
      <div className="media-leader-img">
        <SafeImg src={eachfounder?.imageUrl} alt={eachfounder?.name} />
      </div>
      <div className="media-leader-contet-container">
        <div>
          <div className="media-leader-card-name">{eachfounder?.name}</div>
          <div className="media-leader-card-role">{eachfounder?.designation}</div>
        </div>
        <div
          className="media-leader-download-bg"
          onClick={() => downloadFile(eachfounder?.file?.fileUrl, eachfounder?.name)}
        >
          <FiDownload color="#0047ff" fontSize={24} />
        </div>
      </div>
    </div>
  );
};

const MediaBroucherContainer = ({ eachBroucher }) => {
  async function downloadPDF(s3Url, name) {
    try {
      if (!s3Url) throw new Error("No file URL");
      const response = await axios.get(resolveStaticUrl(s3Url), { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${(name || "file").replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  }

  return (
    <div className="media-leader-card">
      <div className="media-leader-img">
        <SafeImg src={eachBroucher?.display?.displayUrl} alt={eachBroucher?.name} />
      </div>
      <div className="media-leader-contet-container">
        <div>
          <div className="media-leader-card-name">{eachBroucher?.name}</div>
        </div>
        <div
          className="media-leader-download-bg"
          onClick={() => downloadPDF(eachBroucher?.file?.fileUrl, eachBroucher?.name)}
        >
          <FiDownload color="#0047ff" fontSize={24} />
        </div>
      </div>
    </div>
  );
};
