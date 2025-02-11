import { useEffect } from "react";
import ImgSlider from "../slider/ImgSlider";
import useAboutStore from "../../api/about";
import Error from "../error/Error";

const About = () => {
  const { about, fetchAbout, err } = useAboutStore();

  useEffect(() => {
    fetchAbout();
  }, []);

  if (err) {
    return <Error message={err} />;
  }

  return (
    <>
      <div className="w-full mt-20" id="about">
        <div className="w-11/12 mx-auto ">
          <div className="w-full flex  ">
            <h1 className="w-1/5 text-base md:text-2xl font-black">О Нас</h1>
            <p
              key={about.id}
              className="w-4/5 ml-5 text-justify text-xs md:text-xl font-medium"
            >
              {about.description}
            </p>
          </div>
          <div className="w-full flex mt-20">
            <h1 className="w-1/5 text-2xl font-black">Галлерея</h1>
            <div className="w-4/5 max-w-4/5 mt-10 md:mt-0">
              <ImgSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
