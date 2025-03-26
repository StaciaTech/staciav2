import React from "react";
import ServiceCard from "./ServiceCard";

export default function AllServiceCard({ data }) {
  return (
    <div className="all-service-box">
      {data.map(
        (data) =>
          data.position !== 1 && (
            <ServiceCard
              img={data.image}
              title={data.title}
              description={data.des}
              id={data._id}
            />
          )
      )}
    </div>
  );
}
