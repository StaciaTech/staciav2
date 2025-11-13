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
import placeholder from "../assets/white logo.png"; // small fallback

function resolveStaticUrl(url) {
  if (!url) return "";
  const u = String(url).trim();
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  if (u.startsWith("/")) return u;
  return `/${u}`;
}

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
  const { key } = useParams();
  const [mediaData, setMediaData] = useState(null);

  useEffect(() => {
    const fetchMediaData = async () => {
      try {
        setMediaData(data);
      } catch (err) {
        console.error("Error loading media data:", err);
        setMediaData(data);
      }
    };
    fetchMediaData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!key) return;
    const raw = String(key).trim();
    const seg = raw.split("/").filter(Boolean).pop().toLowerCase();
    const aliases = {
      logos: "logos",
      leaders: "leaders",
      brouchers: "brochers",
      brochers: "brochers",
      brochure: "brochers",
      brochures: "brochers",
      brocher: "brochers"
    };
    const canonical = aliases[seg] || seg;
    const validSections = ["logos", "leaders", "brochers"];
    if (!validSections.includes(canonical)) return;

    let cancelled = false;
    const maxAttempts = 12;
    const attemptScroll = (attempt = 1) => {
      if (cancelled) return;
      const el = document.getElementById(canonical);
      if (el) {
        const headerOffset = 80;
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (attempt < maxAttempts) {
        const delay = 200 * attempt;
        setTimeout(() => requestAnimationFrame(() => attemptScroll(attempt + 1)), delay);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const starter = setTimeout(() => requestAnimationFrame(() => attemptScroll(1)), 250);
    return () => {
      cancelled = true;
      clearTimeout(starter);
    };
  }, [key]);

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
          <div id="logos" style={{ borderBottom: "1px solid #e5e5e5" }}>
            <div className="media-section-heading">Logos</div>
            {(mediaData?.logos || []).map((eachLogo, i) => (
              <MediaLogoContainer key={i} eachLogo={eachLogo} />
            ))}
          </div>

          <div id="leaders" style={{ borderBottom: "1px solid #e5e5e5" }}>
            <div className="media-section-heading">Leaders</div>
            <div className="media-leader-card-container">
              {(mediaData?.founders || []).map((eachfounder, i) => (
                <MediaLeadersContainer key={i} eachfounder={eachfounder} />
              ))}
            </div>
          </div>

          <div id="brochers">
            <div className="media-section-heading">Brochure</div>
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

/* ---------------- Child components ---------------- */

const MediaLogoContainer = ({ eachLogo }) => {
  const [selectedFormat, setSelectedFormat] = useState("png");
  const [selectedColor, setSelectedColor] = useState("color");

  // Determine file URL from eachLogo object
  const getFileUrl = (format, color) => {
    if (!eachLogo) return null;
    if (format === "png") return eachLogo?.pngFiles?.[color] || eachLogo?.pngFiles?.color || null;
    if (format === "svg") return eachLogo?.svgFiles?.[color] || eachLogo?.svgFiles?.color || null;
    if (format === "pdf") return eachLogo?.pdfFile?.fileUrl || null;
    return null;
  };

  const previewSrc = getFileUrl(selectedFormat, selectedColor) || eachLogo?.pngFiles?.color || eachLogo?.svgFiles?.color;

  async function downloadFile(s3Url, format, name) {
    try {
      if (!s3Url) throw new Error("No file URL");
      const resolved = resolveStaticUrl(s3Url);
      const response = await axios.get(resolved, { responseType: "blob" });
      const blob = new Blob([response.data], { type: response.data.type || (format === "svg" ? "image/svg+xml" : "application/octet-stream") });
      const url = URL.createObjectURL(blob);
      const safeName = (name || "file").replace(/\s+/g, "_");
      const a = document.createElement("a");
      a.href = url;
      a.download = `${safeName}_${selectedColor}.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(`Error downloading ${format.toUpperCase()}:`, error);
      alert("Download failed. Check console for details.");
    }
  }

  const handleDownload = () => {
    const fileUrl = getFileUrl(selectedFormat, selectedColor);
    if (!fileUrl) {
      alert("Selected format/color not available for this logo.");
      return;
    }
    // extension (format); for svg/png use same; pdf is pdf
    const ext = selectedFormat === "svg" ? "svg" : selectedFormat === "png" ? "png" : selectedFormat;
    downloadFile(fileUrl, ext, eachLogo?.name);
  };

  const availableFormats = [
    { key: "png", label: "PNG" },
    { key: "svg", label: "SVG" },
    // optional PDF if provided - will only enable when file exists
  ];

  // show PDF option if pdf variant exists on logo
  const hasPdf = !!eachLogo?.pdfFile?.fileUrl;
  if (hasPdf) availableFormats.push({ key: "pdf", label: "PDF" });

  const colorOptions = ["black", "white", "color"];

  // is selected combination available?
  const selectedFileExists = !!getFileUrl(selectedFormat, selectedColor);

  return (
    <div className="media-logos-container">
      <div className="media-logo-content-container">
        <div className="media-logo-title">{eachLogo?.name}</div>
        <p className="media-logo-des">{eachLogo?.description}</p>

        <div style={{ display: "flex", gap: "2rem", marginTop: "0.75rem" }}>
          <div>
            <div className="media-logo-format-title">Choose File Format</div>
            <div className="option-buttons">
              {availableFormats.map((fmt) => (
                <button
                  key={fmt.key}
                  onClick={() => setSelectedFormat(fmt.key)}
                  className={`option-btn ${selectedFormat === fmt.key ? "active" : ""}`}
                  type="button"
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="media-logo-format-title">Choose Color</div>
            <div className="option-buttons">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`option-btn ${selectedColor === color ? "active" : ""}`}
                  type="button"
                >
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "1rem" }}>
          <button
            onClick={handleDownload}
            className="download-btn"
            disabled={!selectedFileExists}
            title={selectedFileExists ? "Download" : "Selected variant not available"}
          >
            <FiDownload style={{ marginRight: 8 }} />
            {selectedFileExists ? "Download" : "Not available"}
          </button>
        </div>
      </div>

      <div className="media-logo-img" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <SafeImg src={previewSrc} alt={eachLogo?.name} className="logo-preview" />
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
      alert("Download failed. Check console for details.");
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
          role="button"
          tabIndex={0}
          onKeyPress={() => downloadFile(eachfounder?.file?.fileUrl, eachfounder?.name)}
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
      alert("Download failed. Check console for details.");
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
          role="button"
          tabIndex={0}
          onKeyPress={() => downloadPDF(eachBroucher?.file?.fileUrl, eachBroucher?.name)}
        >
          <FiDownload color="#0047ff" fontSize={24} />
        </div>
      </div>
    </div>
  );
};
