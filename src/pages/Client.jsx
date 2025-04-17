import React from 'react';
import "../styles/Home.css";
import Marquee from "react-fast-marquee";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import client7 from "../assets/client7.png";
import client8 from "../assets/client8.png";
import client9 from "../assets/client9.png";
import client10 from "../assets/client10.png";
import client11 from "../assets/client11.png";
import client12 from "../assets/client12.png";
import client13 from "../assets/client13.png";
import client14 from "../assets/client14.png";
import client15 from "../assets/client15.png";
import client16 from "../assets/client16.png";
import client17 from "../assets/client17.png";
import client18 from "../assets/client18.png";
import client19 from "../assets/client19.png";
import client20 from "../assets/client20.png";
import client21 from "../assets/IndianOilLogo.svg";
import client22 from "../assets/brakesIndialogo.svg";
import client23 from "../assets/dynacastlogo.svg";
import client24 from "../assets/trumpflogo.svg";

const clients = [
    {
        id: 1,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client1,
    },
    {
        id: 2,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client2,
    },
    {
        id: 3,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client3,
    },
    {
        id: 4,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client4,
    },
    {
        id: 5,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client5,
    },
    {
        id: 6,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client6,
    },
    {
        id: 7,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client7,
    },
    {
        id: 8,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client8,
    },
    {
        id: 9,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client9,
    },
    {
        id: 10,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client10,
    },
    {
        id: 11,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client11,
    },
    {
        id: 12,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client12,
    },
    {
        id: 13,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client13,
    },
    {
        id: 14,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client14,
    },
    {
        id: 15,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client15,
    },
    {
        id: 16,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client16,
    },
    {
        id: 17,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client17,
    },
    {
        id: 18,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client18,
    },
    {
        id: 19,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client19,
    },
    {
        id: 20,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client20,
    },
    {
        id: 21,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client21,
    },
    {
        id: 22,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client22,
    },
    {
        id: 23,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client23,
    },
    {
        id: 24,
        link: "https://www.nabard.org/Hindi/Default.aspx",
        img: client24,
    }
   
    // client1,
    // client2,
    // client3,
    // client4,
    // client5,
    // client6,
    // client7,
    // client8,
    // client9,
    // client10,
    // client11,
    // client12,
    // client13,
    // client14,
    // client15,
    // client16,
    // client17,
    // client18,
    // client19,
    // client20,
    // client21,
    // client22,
    // client23,
    // client24,
];
const ClientComponent = () => {

    return (

        <div className="clientWrapper">
            <div className="clients">
                <div className="clientText test-seclection-blue">Our Clients</div>

                <div className="one">
                    <div className="line">
                        <div className="line1"></div>
                    </div>
                    <Marquee
                        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
                        gradient={true}
                        speed={30}
                        loop={0}
                        pauseOnHover
                    >
                        {clients.concat(clients).map((data, index) => (
                            <div
                                className="marquee-margin"
                                style={{
                                    height: "60px",
                                    marginLeft: "50px",
                                    display: "inline-block",
                                }}
                                key={index}
                            >
                                <a href={data.link} target="/blank" >
                                    <img src={data.img} alt="" className="client-marquee" />
                                </a>
                            </div>
                        ))}
                    </Marquee>
                    <div className="line">
                        <div className="line1"></div>
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "center",
                    }}
                >
                    <p className="clientPara test-seclection-blue">
                        We are honored to collaborate with a diverse range of clients,
                        from startups to established enterprises across industries like
                        agriculture, manufacturing, technology, and more. Our clients rely
                        on us for cutting-edge solutions that enhance efficiency, drive
                        innovation, and deliver measurable results. We value these
                        partnerships and are committed to exceeding expectations by
                        transforming ideas into impactful, real-world solutions. Together,
                        we empower businesses to reach new heights and achieve sustainable
                        growth through tailored technology and strategic insights.
                    </p>
                </div>
            </div >
        </div >

    );
};

export default ClientComponent;