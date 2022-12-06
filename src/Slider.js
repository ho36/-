import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from './img/s_01.png';
import slideImg2 from './img/s_02.png';
import slideImg3 from './img/s_03.png';
function Slider(){
    return (<Carousel>
        <div>
        <img src={slideImg1} alt="" />
        <p className="legend">Legend 1</p>
        </div>
        <div>
        <img src={slideImg1} alt="" />
        <p className="legend">Legend 2</p>
        </div>
        <div>
        <img src={slideImg1} alt="" />
        <p className="legend">Legend 3</p>
        </div>
    </Carousel>)
    }
    export default Slider;