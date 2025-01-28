import { useEffect, useState } from "react";
import { imgImports } from "../../assets";

const Header = () => {
  const { logoM, wa } = imgImports;
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full fixed top-0 left-0 transition-all duration-700 ease-in z-50  ${
          isScroll ? "bg-black bg-opacity-80 h-16" : "h-20"
        }`}
      >
        <div className="w-11/12 h-full mx-auto flex justify-between items-center">
          <div className="flex text-white text-sm sm:text-base lg:text-lg gap-10">
            <p>Главная</p>
            <p>О Нас</p>
            <p>Мастерская</p>
          </div>
          <div className="ml-20">
            <img
              src={logoM}
              alt=""
              className={
                isScroll
                  ? "w-auto h-14 transition-all duration-700 ease-in"
                  : "w-auto h-16 transition-all duration-700 ease-in"
              }
            />
          </div>
          <div className="flex items-center gap-5">
            <div className=" flex text-white text-sm sm:text-base lg:text-lg gap-10">
              <p>Каталог</p>
              <p>Контакты</p>
            </div>
            <div
              className={`w-44 h-14 flex justify-center items-center gap-2 p-2 rounded-3xl transition-all duration-700 ease-in cursor-pointer ${
                isScroll ? "" : "bg-gray-200 bg-opacity-30 "
              }`}
            >
              <img src={wa} alt="" className="w-6 h-6 " />
              <p className="text-white text-sm sm:text-base lg:text-lg ">
                Whats App
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
