import { FiDownload, FiVolumeX, FiVolume2 } from "react-icons/fi";
import React, { useRef, useState } from "react";
import CaseStudyAudio from "../../styles/CaseStudyAudio.css";

const CaseStudyaudio = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/audio.mp3"; 
    link.download = "audio.mp3";
    link.click();
  };

  return (
    <div className="audio-container">
      <div className="audio-title">Published By</div>
      <div className="header-section">
        <div className="publisher-section">
          <div className="logo-container">
            <img src="/assets/singlepage-2.webp" alt="" className="logo" />
          </div>
          <div className="publisher-info">
            <div className="title">Stacia Power Solutions</div>
            <div className="subtitle">Nanostructured</div>
          </div>
        </div>

        <div className="topics">
          Topics:
          <span className="topic">#Nano</span>
          <span className="topic">#lorem</span>
          <span className="topic">#lorem</span>
          <div className="details">
            Duration: 12m 16s | 26 Dec, 2023 | Podcast
          </div>
        </div>

        <button className="subscribe-button">Subscribe</button>
      </div>

      <div className="audio-section">
        <audio ref={audioRef} controls className="audio">
          <source src="/assets/audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="audio-controls">
          <button onClick={handleMute} className="icon-button">
            {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
          </button>
          <button onClick={handleDownload} className="icon-button">
            <FiDownload size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyaudio;
