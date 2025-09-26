import Aurora from "../../components/AuroraBG/Aurora";
import { InfiniteMovingCards } from "../../components/MovingCards/MovingCards";
import { tradingCandle, eduCourse, profit, bitcoin } from "../../assets";
import "./Home.scss";
import "./../../scss/buttons.scss";
import { useState } from "react";

export default function Home() {
  const [apiMessage, setApiMessage] = useState("");

  const handleClick = async () => {
  try {
    const res = await fetch("http://localhost:5189/api/hello");
    if (!res.ok) throw new Error("Error en la API");
    const data = await res.json();
    setApiMessage(data.message);
  } catch (err) {
    console.error(err);
    setApiMessage("No se pudo conectar con la API");
  }
};

  return (
    <div>
      <div className="custom-box">
        <Aurora
          colorStops={["#180C70", "#FF00E6", "#6E00FF"]}
          blend={0.5}
          amplitude={0.3}
          speed={0.9}
        />
        <div className="custom-content">
          <h2 className="header-label">Tu primera inversión comienza aquí.</h2>
          <h3 className="subtitle-label">
            Simula operaciones en tiempo real sin ningún riesgo.
          </h3>
          <div className="button-row">
            <button className="primary-button" onClick={handleClick}>
              Comenzar
            </button>
            <button className="secondary-button">Aprender más</button>
          </div>
          {apiMessage && (
            <p style={{ marginTop: "1rem", color: "#fff" }}>{apiMessage}</p>
          )}
        </div>
      </div>

      <div className="cards-section">
        <InfiniteMovingCards
          items={[
            {
              image: tradingCandle,
              title: "Análisis y reportes",
              description:
                "Accede a métricas detalladas de desempeño, riesgos y transacciones, con la opción de exportar reportes para evaluación.",
            },
            {
              image: eduCourse,
              title: "Creación de cursos",
              description:
                "Diseña ambientes de trading educativos configurando reglas, activos disponibles, capital inicial y condiciones de mercado personalizadas.",
            },
            {
              image: bitcoin,
              title: "Diversidad de activos",
              description:
                "Opera con acciones, ETFs, criptomonedas y otros instrumentos simulados para experimentar con diferentes mercados.",
            },
            {
              image: profit,
              title: "Simulación avanzada",
              description:
                "Precios dinámicos que reaccionan a la oferta, la demanda y las condiciones definidas en la configuración del curso.",
            },
          ]}
          direction="left"
          speed="normal"
        />
      </div>
    </div>
  );
}
