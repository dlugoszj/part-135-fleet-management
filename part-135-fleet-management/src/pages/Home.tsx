/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Map from "../components/Map";

export const Home = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr 1fr",
        height: "100vh",
        width: "100vw",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <h2>List of Planes</h2>
          {/* Add your planes list component here */}
        </div>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <h2>Trip Calculator</h2>
          {/* Add your trip calculator component here */}
        </div>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Map />
      </div>
    </div>
  );
};

export default Home;
