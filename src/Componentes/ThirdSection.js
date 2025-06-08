import React from 'react';
import './ThirdSection.css';
import img5 from '../Img/img5.jpg'; // tu imagen de la chica

function ThirdSection() {
  return (
    <section className="third-section">
      <div className="third-section-wrapper">
        
        <div className="third-text-box">
          <h2 className="third-title">UNA PASIÓN QUE SE CONVIRTIÓ EN PROPÓSITO</h2>
          <p className="third-description">
            Mi nombre es Emily Grace y soy la fundadora de esta tienda. Desde siempre he sentido una conexión especial con los objetos que cuentan historias. Lo vintage no es solo una estética: es una forma de preservar la belleza, la autenticidad y la calidad de épocas pasadas. Cada pieza aquí fue elegida con amor, con la intención de que encuentres algo que resuene contigo y le dé vida a tu hogar.
          </p>
          <button className="third-button">VER CREACIONES</button>
        </div>
        <div className="third-image-box">
          <img src={img5} alt="Chica con laptop" className="third-image" />
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;
