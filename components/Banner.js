import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-auto bg-gray-400" />{" "}
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img className="h-80" src="/busac.jpg" alt="" />
        </div>
        <div>
          <img className="h-80" src="/carrier.jpg" alt="" />
        </div>
        <div>
          <img className="h-80 " src="/truckac.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
