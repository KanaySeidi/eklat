import { useEffect, useState } from "react";
import { imgImports } from "../../assets";
import { navs } from "../../utils/navBtn";

const Header = () => {
  const { logoT, wa } = imgImports;
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
      {isScroll ? (
        <div className="w-full h-12 fixed top-0 left-0 bg-black bg-opacity-40 py-2 transition-all duration-700 ease-in z-50">
          <div className="w-11/12 h-full mx-auto flex justify-between items-center">
            <div>
              <img src={logoT} alt="" className="w-auto h-10" />
            </div>
            <div className="flex text-white text-lg gap-10">
              {navs.map((nav) => (
                <div key={nav.id}>{nav.title}</div>
              ))}
            </div>
            <div className="w-44 h-12  flex justify-center items-center gap-2 p-2 rounded-3xl transition-all duration-700 ease-in">
              <img src={wa} alt="" className="w-6 h-6" />
              <p className="text-white text-lg">Whats App</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-20 fixed top-0 left-0 py-5 transition-all duration-700 ease-in z-50">
          <div className="w-11/12 h-full mx-auto flex justify-between items-center">
            <div>
              <img src={logoT} alt="" className="w-auto h-10" />
            </div>
            <div className="flex text-white text-lg gap-10">
              {navs.map((nav) => (
                <div key={nav.id}>{nav.title}</div>
              ))}
            </div>
            <div className="w-44 h-12  flex justify-center items-center gap-2 p-2 rounded-3xl bg-gray-200 bg-opacity-30 cursor-pointer transition-all duration-700 ease-in">
              <img src={wa} alt="" className="w-6 h-6" />
              <p className="text-white text-lg">Whats App</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
