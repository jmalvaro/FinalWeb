import './Card.css';

const Card = ({ imgURL, titulo, contenido, precio }) => (
  <div className="card">
    <img src={imgURL} alt={titulo} className="card-img" />
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{contenido}</p>
      <p className="card-price"> {precio}</p>
    </div>
  </div>
);

export default Card;
