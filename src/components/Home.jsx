import React from "react";
import Aurora from "./AuroraBG/Aurora";

export default function Home() {
  return (
    <div className="custom-box">
      <Aurora
        colorStops={["#180C70", "#FF00E6", "#6E00FF"]}
        blend={0.5}
        amplitude={0.3}
        speed={0.9}
      />
      <div className="custom-content">
        <h2 className="header-label">Tu primera inversión comienza aquí.</h2>
        <h3 className="subtitle-label">Simula operaciones en tiempo real sin ningún riesgo.</h3>
        <div className="button-row">
          <button className="primary-button">Comenzar</button>
          <button className="secondary-button">Aprender más</button>
        </div>
      </div>
    </div>
  );
}