import React from "react";

function RightMentalHealthTipsCard({ data }) {
  const { title, description, imageLink } = data;
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="col-start-1 col-end-2 flex flex-col font-Inter">
          <div className="w-full h-full bg-black"></div>
        </div>
        <div className="col-start-2 col-end-3">
          <h1 className="text-3xl text-[#1A8C10]">{title}</h1>
          <h2>{description}</h2>
        </div>
      </div>
    </div>
  );
}

export default RightMentalHealthTipsCard;
