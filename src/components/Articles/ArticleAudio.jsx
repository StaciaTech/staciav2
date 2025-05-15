
import React, { useRef, useState } from "react";
import { FiDownload, FiVolumeX, FiVolume2 } from "react-icons/fi";
import "../../styles/CaseStudyAudio.css";
import articlesData from "../../Data/SingleArticle.json";

const ArticleAudio = ({ articleTitle }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Map audio data based on articleTitle
  const article = articlesData.articles.find(
    (art) =>
      art.title.toLowerCase().trim() === articleTitle.toLowerCase().trim()
  );
  const audioData = article?.audioData;

  // Fallback data if audioData is not found
  const defaultAudioData = {
    audioURL: "/assets/audio/default.mp3",
    publisher: {
      name: "Stacia Power Solutions",
      subtitle: "Default Publisher",
      logo: "/assets/singlepage-2.webp",
    },
    topics: [
      { name: "Default", link: "/topics/default", hashtag: "#Articles" },
    ],
    duration: "1m 0s",
    publishDate: "01 Jan, 2025",
    type: "Podcast",
  };

  const currentAudioData = audioData || defaultAudioData;

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = currentAudioData.audioURL;
    link.download = `${articleTitle}-audio.mp3`;
    link.click();
  };

  return (
    <div className="audio-container">
      <div className="audio-title">Published By</div>
      <div className="header-section">
        <div className="publisher-section">
          <div className="logo-container">
            <img
              src={currentAudioData.publisher.logo}
              alt="Publisher Logo"
              className="logo"
            />
          </div>
          <div className="publisher-info">
            <div className="title">{currentAudioData.publisher.name}</div>
            <div className="subtitle">
              {currentAudioData.publisher.subtitle}
            </div>
          </div>
        </div>
        <div className="topics">
          <div>
            <span className="topic-head">Topics:</span>
            {currentAudioData.topics.map((topic, index) => (
              <a key={index} href={topic.link} className="topic">
                <span className="hashtag">{topic.hashtag}</span>
              </a>
            ))}
          </div>
          <div className="details">
            Duration: {currentAudioData.duration} |{" "}
            {currentAudioData.publishDate} | {currentAudioData.type}
          </div>
        </div>
      </div>
      <div className="audio-section">
        <audio
          ref={audioRef}
          controlsList="nodownload noplaybackrate noaudio"
          controls
          className="audio"
        >
          <source src={currentAudioData.audioURL} type="audio/mp3" />
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

export default ArticleAudio;