import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useGalleryStore from "../../api/gallery";
import { useEffect } from "react";

const ImgSlider = () => {
  const { gallery, fetchGallery } = useGalleryStore();

  useEffect(() => {
    fetchGallery();
  }, []);

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
        {gallery.length > 0 ? (
          gallery.map((img, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-4 focus:outline-0"
            >
              <img src={img} alt="" />
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center p-4 focus:outline-0">
            <h2>Загрузка</h2>
          </div>
        )}
      </Slider>
    </>
  );
};

export default ImgSlider;
