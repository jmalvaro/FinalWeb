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
                                <h3 className="hero-title">THE SERVICE OFFERING</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <button type="button" className="btn btn-dark rounded-0">LET'S CHAT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

