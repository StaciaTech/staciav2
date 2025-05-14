// import { FiDownload, FiVolumeX, FiVolume2 } from "react-icons/fi";
// import React, { useRef, useState } from "react";
// import "../../styles/CaseStudyAudio.css";

// const CaseStudyaudio = () => {
//   const audioRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(false);

//   const handleMute = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !audioRef.current.muted;
//       setIsMuted(audioRef.current.muted);
//     }
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = "/assets/audio.mp3"; 
//     link.download = "audio.mp3";
//     link.click();
//   };

//   return (
//     <div className="audio-container">
//       <div className="audio-title">Published By</div>
//       <div className="header-section">
//         <div className="publisher-section">
//           <div className="logo-container">
//             <img src="/assets/singlepage-2.webp" alt="" className="logo" />
//           </div>
//           <div className="publisher-info">
//             <div className="title">Stacia Power Solutions</div>
//             <div className="subtitle">Nanostructured</div>
//           </div>
//         </div>

//         <div className="topics">
//           <div>
//             <span className="topic-head">Topics:</span>

//             <a href="/topics/nano" className="topic">
//               <span className="hashtag">#lorem</span>
//             </a>

//             <a href="/topics/lorem" className="topic">
//               <span className="#\hashtag">#lorem</span>
//             </a>

//             <a href="/topics/lorem" className="topic">
//               <span className="hashtag">#lorem</span>
//             </a>
//           </div>

//           <div className="details">
//             Duration: 1.1m 1s | 07 Oct, 2025 | Podcast
//           </div>
//         </div>

//         <button className="subscribe-button">Subscribe</button>
//       </div>

//       <div className="audio-section">
//         <audio
//           ref={audioRef}
//           controlsList="nodownload noplaybackrate noaudio"
//           controls
//           className="audio"
//         >
//           <source src="/assets/audio.mp3" type="audio/mp3" />
//           Your browser does not support the audio element.
//         </audio>
//         <div className="audio-controls">
//           <button onClick={handleMute} className="icon-button">
//             {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
//           </button>
//           <button onClick={handleDownload} className="icon-button">
//             <FiDownload size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyaudio;

// CaseStudyaudio.js

import { FiDownload, FiVolumeX, FiVolume2 } from "react-icons/fi";
import React, { useRef, useState } from "react";
import "../../styles/CaseStudyAudio.css";
import data from "../../Data/SingleCaseStudy.json";

const CaseStudyAudio = ({ caseStudyId }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Find the case study data based on caseStudyId
  let caseStudy = null;
  data.singlecasestudy.forEach((category) => {
    category.data.forEach((study) => {
      if (study.id === caseStudyId) {
        caseStudy = study;
      }
    });
  });

  // Fallback data if case study or audioData is not found
  const defaultAudioData = {
    audioURL: "/assets/audio/default.mp3",
    publisher: {
      name: "Stacia Power Solutions",
      subtitle: "Nanostructured",
      logo: "/assets/singlepage-2.webp",
    },
    topics: [
      { name: "Default", link: "/topics/default", hashtag: "#default" },
    ],
    duration: "1m 0s",
    publishDate: "01 Jan, 2025",
    type: "Podcast",
  };

  const audioData = caseStudy?.audioData || defaultAudioData;

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audioData.audioURL;
    link.download = `${caseStudyId}-audio.mp3`;
    link.click();
  };

  return (
    <div className="audio-container">
      <div className="audio-title">Published By</div>
      <div className="header-section">
        <div className="publisher-section">
          <div className="logo-container">
            <img src={audioData.publisher.logo} alt="Publisher Logo" className="logo" />
          </div>
          <div className="publisher-info">
            <div className="title">{audioData.publisher.name}</div>
            <div className="subtitle">{audioData.publisher.subtitle}</div>
          </div>
        </div>

        <div className="topics">
          <div>
            <span className="topic-head">Topics:</span>
            {audioData.topics.map((topic, index) => (
              <a key={index} href={topic.link} className="topic">
                <span className="hashtag">{topic.hashtag}</span>
              </a>
            ))}
          </div>

          <div className="details">
            Duration: {audioData.duration} | {audioData.publishDate} | {audioData.type}
          </div>
        </div>

        {/* <button className="subscribe-button">Subscribe</button> */}
      </div>

      <div className="audio-section">
        <audio
          ref={audioRef}
          controlsList="nodownload noplaybackrate noaudio"
          controls
          className="audio"
        >
          <source src={audioData.audioURL} type="audio/mp3" />
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

export default CaseStudyAudio;
