import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imgImports } from "../../assets";

const ImgSlider = () => {
  const { slider1, slider2, slider3 } = imgImports;

  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="flex justify-center items-center p-4">
          <img src={slider1} alt="" />
        </div>
        <div className="flex items-center justify-center p-4 ">
          <img src={slider2} alt="" className="focus:border-none" />
        </div>
        <div className="flex items-center justify-center p-4">
          <img src={slider3} alt="" />
        </div>
        <div className="flex items-center justify-center p-4">
          <img src={slider2} alt="" />
        </div>
      </Slider>
    </>
  );
};

export default ImgSlider;
