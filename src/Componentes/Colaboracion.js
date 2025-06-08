import './Colaboracion.css';
import img5 from '../Img/img5.png';


const Colaboracion = () => {
    return (
        <div className="colaboracion pb-5">
            <div className='container'>
                <div className="collab-image">
                    <div className="row align-items-center justify-content-center">
                       <div className="content col-12 col-md-6">
                            <h2>LET'S WORK TOGETHER</h2>
                            <p>
                                Nibh enim interdum elit, et consequat nunc nibh luctus augue. 
                                Vivamus eget condin tumest massa id tincidunt. In iquit leo. 
                                Dons quam tortor, varius sit amet massa a, mode eget tortor ut 
                                et accumsan congue ul amet.
                            </p>
                            <button type="button" className="btn btn-dark rounded-0">LET'S CHAT</button>
                        </div>
                        <div className='img-persona-wrapper col-12 col-md-6 pt-5'>
                            <img src={img5} alt="Persona colaboración" className="img-persona" />
                        </div> 
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Colaboracion;