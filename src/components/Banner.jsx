import React from "react";

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex-1 bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 rounded-lg">
        <h2>In-Progress</h2>
        <p className="text-4xl">{inProgressCount}</p>
      </div>
      <div className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-lg">
        <h2>Resolved</h2>
        <p className="text-4xl">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
