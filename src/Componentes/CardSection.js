import Card from './Card';
import img1 from '../Img/img2.jpg'
import img2 from '../Img/img3.jpg'
import img3 from '../Img/img4.jpg'

const CardSection = () => {
  return (
    <div className="card-section pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-4 mb-4 mb-md-0 ">
                    <Card
                        imgURL={img1}
                        titulo="Título de la tarjeta 1"
                        contenido="Contenido de la tarjeta 1"
                        precio="$10"
                    /> 
                </div> 

                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <Card
                        imgURL={img2}
                        titulo="Título de la tarjeta 2"
                        contenido="Contenido de la tarjeta 2"
                        precio="$20"
                    />
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <Card
                        imgURL={img3}
                        titulo="Título de la tarjeta 3"
                        contenido="Contenido de la tarjeta 3"
                        precio="$30"
                    />
                </div>

            </div>

        </div>
    </div>
  );
};

export default CardSection;
