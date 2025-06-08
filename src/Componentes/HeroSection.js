import './HeroSection.css';
import img1 from '../Img/img1.jpg';

const HeroSection = () => {
    return (
        <div className="hero-section py-5">
            <div className="container">
                <div className="row equal-height g-5">
                    <div className="col-12 col-md-6">
                        <div className="image-wrapper">
                            <img src={img1} alt="Hero" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-0">
                        <div className="hero-content d-flex justify-content-center align-items-center">
                            <div className="text-center px-4">
                                <h3 className="hero-title">REDESCUBRE EL ENCANTO DEL PASADO</h3>
                                <p className='hero-description'>
                                      En Emily Grace seleccionamos cuidadosamente cada pieza para que tu hogar respire historia, diseño y calidez. Muebles originales de los años 50, 60 y 70 restaurados con amor, listos para una nueva vida contigo.
                                </p>
                                <button type="button" className="btn btn-dark rounded-0">VER COLECCIÓN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

