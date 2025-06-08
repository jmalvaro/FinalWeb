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
                        titulo="Silla Vintage Madera Curva"
                        contenido="Espectacular silla de los años 70 con reposabrazos en madera curva. Unas piezas de fácil mantenimiento gracias a su tapicería en escay. Base en acero cromado restaurada y con sus brillos originales recuperados."
                        precio="250.00€"
                    /> 
                </div> 

                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <Card
                        imgURL={img2}
                        titulo="Estantería Arco Bambú"
                        contenido="Gran estantería de suelo arco en bambú. Una bonita pieza con nueve espaciosos estantes de cristal transparente. Un mueble de líneas curvas muy práctico y decorativo."
                        precio="380.00€"
                    />
                </div>
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <Card
                        imgURL={img3}
                        titulo="Perchero Mid-Century con Espejo"
                        contenido="Espectacular perchero Mid-Century con espejo. La combinación de su estructura tubular en acero cromado con los detalles metálicos en un vibrante color verde hacen de esta pieza una auténtica joya práctica y decorativa."
                        precio="195.00€"
                    />
                </div>

            </div>

        </div>
    </div>
  );
};

export default CardSection;
