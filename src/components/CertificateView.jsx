import React from 'react';
import { useParams } from 'react-router-dom';

const certificateData = {
  "Mr-Elanchezhian-131857041282955840930-2025-03": "/assets/Hackathon Certificate 1.png",
  "arun-456": "/assets/caseStudy-2.webp",
  // Add more...
};

export default function CertificateView() {
  const { id } = useParams();
  
  let decodedId = '';
  try {
    decodedId = decodeURIComponent(id);
  } catch (error) {
    console.error("Invalid URI component:", id);
    return <h2 style={{ color: 'red', textAlign: 'center' }}>Invalid Certificate URL</h2>;
  }

  const imageUrl = certificateData[decodedId];
  
  if (!imageUrl) {
    return <h2 style={{ textAlign: 'center' }}>Certificate Not Found</h2>;
  }

  return (
    <div style={{ textAlign: 'center', margin: '2rem' , width :'90vw', height:'90vh' }}>
      <img src={imageUrl} alt="Certificate" style={{ Width: '100%' , height:'100%' , objectFit:'cover' }} />
    </div>
  );
}
