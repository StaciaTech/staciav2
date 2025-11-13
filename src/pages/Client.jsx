import React from 'react';
import "../styles/Home.css";
import Marquee from "react-fast-marquee";
import client1 from "../assets/client/Aachi.webp";
import client2 from "../assets/client/Vishvaksenah agro.webp";
import client3 from "../assets/client/Anil.webp";
import client4 from "../assets/client/Avinash Industries.webp";
import client5 from "../assets/client/Brakes India.webp";
import client6 from "../assets/client/Butterfly.webp";
import client7 from "../assets/client/GCC.webp";
import client8 from "../assets/client/DNA.webp";
import client9 from "../assets/client/Express-Holiday.webp";
import client10 from "../assets/client/Express Caters.webp";
import client11 from "../assets/client/Indian oil.webp";
import client12 from "../assets/client/NallaKeerai.webp";
import client13 from "../assets/client/MAC.webp";
import client14 from "../assets/client/Mamalla Beach resort.webp";
import client15 from "../assets/client/Peach on Plate.webp";
import client16 from "../assets/client/Prego.webp";
import client17 from "../assets/client/Pumpkin Tales.webp";
import client18 from "../assets/client/Santhi.webp";
import client19 from "../assets/client/Shasun.webp";
import client20 from "../assets/client/SRM sweets.webp";
import client21 from "../assets/client/Steam troops.webp";
import client22 from "../assets/client/trumpf.webp";
import client23 from "../assets/client/VijayGanapathy.webp";
import client24 from "../assets/client/Sagoserve.webp";
import client25 from "../assets/client/Idhayam.webp";
import client26 from "../assets/client/Parikshan.webp";
import client27 from "../assets/client/TN-APEX.webp";
import client28 from "../assets/client/Sharadha Stores.webp";
import client29 from "../assets/client/Sri Venkeshwara college.webp";



// import client1 from "../assets/client1.png";
// import client2 from "../assets/client2.png";
// import client3 from "../assets/client3.png";
// import client4 from "../assets/client4.png";
// import client5 from "../assets/client5.png";
// import client6 from "../assets/client6.png";
// import client7 from "../assets/client7.png";
// import client8 from "../assets/client8.png";
// import client9 from "../assets/client9.png";
// import client10 from "../assets/client10.png";
// import client11 from "../assets/client11.png";
// import client12 from "../assets/client12.png";
// import client13 from "../assets/client13.png";
// import client14 from "../assets/client14.png";
// import client15 from "../assets/client15.png";
// import client16 from "../assets/client16.png";
// import client17 from "../assets/client17.png";
// import client18 from "../assets/client18.png";
// import client19 from "../assets/client19.png";
// import client20 from "../assets/client20.png";
// import client21 from "../assets/IndianOilLogo.svg";
// import client22 from "../assets/brakesIndialogo.svg";
// import client23 from "../assets/dynacastlogo.svg";
// import client24 from "../assets/trumpflogo.svg";
// import client25 from "../assets/idhayam-tes.webp";
// import client26 from "../assets/parikshan-tes.webp";


const clients = [
    {
        id: 1,
        link: "https://aachifoods.com/",
        img: client1,
    },
    {
        id: 2,
        link: "https://vishvaksenah.com/",
        img: client2,
    },
    {
        id: 3,
        link: "https://www.theanilgroup.com/",
        img: client3,
    },
    {
        id: 4,
        link: "https://www.avinashinds.com/",
        img: client4,
    },
    {
        id: 5,
        link: "https://brakesindia.com/",
        img: client5,
    },
    {
        id: 6,
        link: "https://www.butterflyindia.com/",
        img: client6,
    },
    {
        id: 7,
        link: "https://chennaicorporation.gov.in/gcc/",
        img: client7,
    },
    {
        id: 8,
        link: "",
        img: client8,

    },
    {
        id: 9,
        link: "https://expressholidays.in/",
        img: client9,
    },
    {
        id: 10,
        link: "https://expressholidays.in/",
        img: client10,
    },
    {
        id: 11,
        link: "https://iocl.com/",
        img: client11,
    },
    {
        id: 12,
        link: "https://nallakeeraii.appspot.com",
        img: client12,
    },
    {
        id: 13,
        link: "https://asafoetida.in/",
        img: client13,
    },
    {
        id: 14,
        link: "https://www.mamallaresort.com/",
        img: client14,
    },
    {
        id: 15,
        link: "https://www.mockmeatindia.com/",
        img: client15,
    },
    {
        id: 16,
        link: "https://prego.co/",
        img: client16,
    },
    {
        id: 17,
        link: "https://pumpkintales.com/",
        img: client17,
    },
    {
        id: 18,
        link: "https://santhisweets.com/",
        img: client18,
    },
    {
        id: 19,
        link: " https://strides.com/",
        img: client19,
    },
    {
        id: 20,
        link: "https://srmsweets.com/online/",
        img: client20,
    },
    {
        id: 21,
        link: "https://steamtroops.com/",
        img: client21,
    },
    {
        id: 22,
        link: "https://www.trumpf.com/en_INT/",
        img: client22,
    },
    {
        id: 23,
        link: "https://www.svgs.co/",
        img: client23,
    },
    {
        id: 24,
        link: "https://www.sagoserve.co.in/",
        img: client24,
    },
    {
        id: 25,
        link: "https://www.idhayam.com/",
        img: client25,
    },
    {
        id: 26,
        link: "https://parikshan.com/",
        img: client26,
    },
    {
        id: 27,
        link: "https://www.tnapex.tn.gov.in/ords/r/wstnapex/tnapex173136/home",
        img: client27,
    },

    {
        id: 28,
        link: "https://play.google.com/store/apps/details?id=com.saradhastores&pcampaignid=web_share",
        img: client28,
    },

    {
        id: 29,
        link: "https://www.svce.ac.in/",
        img: client29,
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