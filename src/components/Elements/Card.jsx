import React from "react";

function Card(props) {
  const { title, link = false, desc, className = "" } = props;

  return (
    <div className={`h-full flex flex-col ${className}`}>
      <div className="flex justify-between items-center text-gray-02 mb-2">
        <div className="text-2xl font-semibold">{title}</div>
        {link && <div className="text-xs text-gray-03 cursor-pointer">View All</div>}
      </div>
      <div className="flex-1 bg-white rounded-[1.25rem] px-6 py-5 shadow-xl flex-1">
        {desc}
      </div>
    </div>
  );
}

export default Card;