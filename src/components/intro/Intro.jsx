import { useEffect } from "react";
import useIntroStore from "../../api/intro";
import Error from "../error/Error";
import { imgImports } from "../../assets";

const Intro = () => {
  const { intro, err, fetchIntro } = useIntroStore();

  const { heroImg } = imgImports;

  useEffect(() => {
    fetchIntro();
  }, []);

  if (err) {
    return <Error message={err} />;
  }

  return (
    <>
      <div className="relative w-full h-screen" id="main">
        {intro.map((item) => (
          <div key={item.id}>
            <img
              src={heroImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="max-w-[740px] text-center space-y-6">
                <p className="text-3xl sm:text-4xl md:text-6xl leading-tight font-semibold">
                  {item.title}
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-7 mx-4 sm:mx-10">
                  {item.description}
                </p>
                <button className="px-8 py-2 bg-white text-black rounded-3xl">
                  Позвонить
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Intro;
