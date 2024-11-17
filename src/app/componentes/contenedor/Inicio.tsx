import joearroyo from "../../../assets/img/joearroyo.jpg";
import karolg from "../../../assets/img/karolg.jpg";
import diomedes from "../../../assets/img/diomedes.jpg";
import evanescence from "../../../assets/img/evanescence.jpg";

export const Inicio = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide mt-4" data-bs-ride="carousel">
        
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={joearroyo} className="d-block w-100" alt="Joe Arroyo" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Joe Arroyo</h5>
                            <p>1</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={karolg} className="d-block w-100" alt="Karol G" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Karol G</h5>
                            <p>2</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={diomedes} className="d-block w-100" alt="Diomedes Díaz" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Diomedes Díaz</h5>
                            <p>3</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={evanescence} className="d-block w-100" alt="Evanescence" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Evanescence</h5>
                            <p>4</p>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};
