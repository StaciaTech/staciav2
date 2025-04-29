
// // Static 


import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import MobileFooter from "../components/MobileFooter";
import "../styles/MediaKit.css";
import axios from "axios";
import { FiDownload } from "react-icons/fi";

import Star from "../components/Star";
import data from "../Data/MediaKit.json";

function MediaKit() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [mediaData, setMediaData] = useState();

  console.log(data.logos);
  console.log(typeof data.logos);

  const fetchMediaData = async () => {
    try {
      // const res = await axios.get(`${apiUrl}/client/index`);
      setMediaData(JSON.stringify(data));
    } catch (error) { }
  };

  useEffect(() => {
    fetchMediaData();
    window.scrollTo(0, 0);
  }, []);
  // console.log(mediaData);

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
          <div style={{ borderBottom: "1px solid #e5e5e5" }}>
            <div className="media-section-heading">Logos</div>
            {data?.logos?.map((eachLogo, i) => {
              return <MediaLogoContainer key={i} eachLogo={eachLogo} />;

            })}
          </div>
          <div style={{ borderBottom: "1px solid #e5e5e5" }}>
            <div className="media-section-heading">Leaders</div>
            <div className="media-leader-card-container">
              {data?.founders.map((eachfounder, i) => {
                return (
                  <MediaLeadersContainer key={i} eachfounder={eachfounder} />
                );
              })}
            </div>
          </div>
          <div>
            <div className="media-section-heading">Brouchers</div>
            <div className="media-leader-card-container">
              {data?.brouchers?.map((eachBroucher, i) => {
                return (
                  <MediaBroucherContainer key={i} eachBroucher={eachBroucher} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
        <MobileFooter />
      </div>
    </div>
  );
}

export default MediaKit;

const MediaLogoContainer = ({ eachLogo }) => {
  async function downloadFile(s3Url, format, name) {
    try {
      // Determine the MIME type based on format
      const mimeType = format === "svg" ? "image/svg+xml" : "image/png";

      const response = await axios.get(s3Url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: mimeType });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${name}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove link after download

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Error downloading ${format.toUpperCase()}:`, error);
    }
  }

  return (
    <div className="media-logos-container">
      <div className="media-logo-content-container">
        <div className="media-logo-title">{eachLogo.name}</div>
        <p className="media-logo-des">{eachLogo.description}</p>
        <div className="media-logo-format-title">File Formats</div>
        <div className="media-logo-format-container">
          <div
            onClick={() => {
              downloadFile(eachLogo.pngFile.imageUrl, "png", eachLogo.name);
            }}
            className="pointer"
          >
            Download PNG
          </div>
          <div
            onClick={() => {
              downloadFile(eachLogo.svgFile.imageUrl, "svg", eachLogo.name);
            }}
            className="pointer"
          >
            Download SVG
          </div>
        </div>
      </div>
      <div className="media-logo-img">
        <img src={eachLogo.svgFile.imageUrl} alt="" />
      </div>
    </div>
  );
};

const MediaLeadersContainer = ({ eachfounder }) => {
  // async function downloadFile(s3Url, name) {
  //   try {
  //     // Determine the MIME type based on format
  //     const mimeType = "image/png";

  //     const response = await axios.get(s3Url, { responseType: "blob" });
  //     const blob = new Blob([response.data], { type: mimeType });
  //     const url = URL.createObjectURL(blob);

  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = `${name}.png`;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link); // Remove link after download

  //     URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error(`Error downloading ${"png".toUpperCase()}:`, error);
  //   }
  // }
  async function downloadFile(s3Url, name) {
    try {
      const mimeType = "image/png"; // <- Not relevant for PDFs
      const response = await axios.get(s3Url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${name}.pdf`;
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
        <img src={eachfounder.imageUrl} alt="" />
      </div>
      <div className="media-leader-contet-container">
        <div>
          <div className="media-leader-card-name">{eachfounder.name}</div>
          <div className="media-leader-card-role">
            {eachfounder.designation}
          </div>
        </div>
        <div
          className="media-leader-download-bg"
          onClick={() => {
            // downloadFile(eachfounder, eachfounder.name);
            downloadFile(eachfounder.file.fileUrl, eachfounder.name);
          }}
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
      const response = await axios.get(s3Url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${name}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); // Remove link after download

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  }

  return (
    <div className="media-leader-card">
      <div className="media-leader-img">
        <img src={eachBroucher.display.displayUrl} alt="" />
      </div>
      <div className="media-leader-contet-container">
        <div>
          <div className="media-leader-card-name">{eachBroucher.name}</div>
        </div>
        <div
          className="media-leader-download-bg"
          onClick={() => {
            downloadPDF(eachBroucher.file.fileUrl, eachBroucher.name);
          }}
        >
          <FiDownload color="#0047ff" fontSize={24} />
        </div>
      </div>
    </div>
  );
};
