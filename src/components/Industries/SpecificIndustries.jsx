import React from 'react';
import '../../styles/Industries/SpecificIndustries.css';
import data from "../../Data/Industries.json";
import NavBar from '../NavBar';
import Footer from '../Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const SpecificIndustries = () => {
    const { industryName } = useParams();
    const navigate = useNavigate();
    const [industryData, setIndustryData] = useState("");
    useEffect(() => {
        // Format the industryName to match the 'name' field in data
        const formattedName = industryName
            .toLowerCase()
            .replace(/\s+/g, '-')          // spaces → hyphens
            .replace(/[^a-z0-9-]/g, '');   // remove special chars  
        const foundIndustry = data.find(industry =>
            industry.name.toLowerCase() === formattedName
        );
        console.log(foundIndustry, "data");
        setIndustryData(foundIndustry || null);
    }, [industryName]);
    console.log(industryData, "industryData");
    console.log(industryName, "industryName");
    

    return (
        <div>
            {/* <NavBar /> */}
            <h1>Industries Covered{industryData}</h1>
            <p>Details about specific industries will be displayed here.</p>

            <Footer />
        </div>
    );
};

export default SpecificIndustries;