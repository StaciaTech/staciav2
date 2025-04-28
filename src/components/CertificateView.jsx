// import React from 'react';
// import { useParams } from 'react-router-dom';

// const certificateData = {
//   "Mr-Elanchezhian-131857041282955840930-2025-03": "/assets/Hackathon Certificate 1.png",
//   "arun-456": "/assets/caseStudy-2.webp",
//   // Add more...
// };

// export default function CertificateView() {
//   const { id } = useParams();

//   let decodedId = '';
//   try {
//     decodedId = decodeURIComponent(id);
//   } catch (error) {
//     console.error("Invalid URI component:", id);
//     return <h2 style={{ color: 'red', textAlign: 'center' }}>Invalid Certificate URL</h2>;
//   }

//   const imageUrl = certificateData[decodedId];

//   if (!imageUrl) {
//     return <h2 style={{ textAlign: 'center' }}>Certificate Not Found</h2>;
//   }

//   return (
//     <div style={{ textAlign: 'center', margin: '2rem' , width :'90vw', height:'90vh' }}>
//       <img src={imageUrl} alt="Certificate" style={{ Width: '100%' , height:'100%' , objectFit:'cover' }} />
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import winnersData from "../Data/Winner.json";

export default function CertificateView() {
  const [certificate, setCertificate] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    try {
      const data = winnersData.docs[0];
      setCertificate(data.data || []);
    } catch (error) {
      console.error("Error loading winners data:", error);
    }
  }, []);

  let decodedId = '';
  try {
    decodedId = decodeURIComponent(id);
  } catch (error) {
    console.error("Invalid URI component:", id);
    return <h2 style={{ color: 'red', textAlign: 'center' }}>Invalid Certificate URL</h2>;
  }

  // Create a lookup object: { id: certificateUrl }
  const certificateData = certificate.reduce((acc, item) => {
    acc[item.id] = item.certificateUrl;
    return acc;
  }, {});

  const imageUrl = certificateData[decodedId];

  if (!imageUrl) {
    return <h2 style={{ textAlign: 'center' }}>Certificate Not Found</h2>;
  }

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box'
    }}
  >
    <img
      src={imageUrl}
      alt="Certificate"
      style={{
        maxWidth: '100%',
        maxHeight: '90vh',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}
    />
  </div>
  
  );
}
