import { useEffect, useState } from "react";
import { imgImports } from "../../assets";
import { Menu, X } from "lucide-react";
import useContactStore from "../../api/contact";

const Header = () => {
  const { logoM, wa } = imgImports;
  const [isScroll, setIsScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { contact, fetchContact } = useContactStore();

  useEffect(() => {
    fetchContact();

    const handleScroll = () => {
      setIsScroll(window.scrollY >= 60);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(contact);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 80;
      const offsetTop = section.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 transition-all duration-700 ease-in z-50 ${
        isScroll ? "bg-black bg-opacity-80 h-16" : "h-20"
      }`}
    >
      <div className="w-11/12 h-full mx-auto flex justify-between items-center">
        {isMobile ? (
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={42} /> : <Menu size={42} />}
          </button>
        ) : (
          <div className="flex text-white text-sm sm:text-base md:text-base gap-10 ">
            <p
              onClick={() => scrollToSection("main")}
              className="cursor-pointer w-14"
            >
              Главная
            </p>
            <p
              onClick={() => scrollToSection("about")}
              className="cursor-pointer w-14"
            >
              О Нас
            </p>
            <p
              onClick={() => scrollToSection("workshop")}
              className="cursor-pointer w-14"
            >
              Мастерская
            </p>
          </div>
        )}

        <div className="mx-2">
          <img
            src={logoM}
            alt="Логотип"
            className={`w-96 transition-all duration-700 ease-in ${
              isScroll ? "h-14" : "h-16"
            }`}
          />
        </div>

        {!isMobile && (
          <div className="flex items-center gap-5">
            <div className="flex text-white text-sm sm:text-base md:text-base gap-10">
              <p
                onClick={() => scrollToSection("catalog")}
                className="cursor-pointer w-14"
              >
                Каталог
              </p>
              <p
                onClick={() => scrollToSection("contact")}
                className="cursor-pointer w-14"
              >
                Контакты
              </p>
            </div>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={`w-40 h-14 flex justify-center items-center gap-2 py-2  rounded-3xl transition-all duration-700 ease-in cursor-pointer ${
                  isScroll ? "" : "bg-gray-200 bg-opacity-30 "
                }`}
              >
                <img src={wa} alt="WhatsApp" className="w-6 h-6" />
                <p className="text-white text-sm sm:text-base lg:text-base">
                  WhatsApp
                </p>
              </div>
            </a>
          </div>
        )}
      </div>

      {isMobile && isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-5 gap-4 text-white text-base md:text-md">
          <p>Главная</p>
          <p
            onClick={() => scrollToSection("about")}
            className="cursor-pointer"
          >
            О Нас
          </p>
          <p>Мастерская</p>
          <p>Каталог</p>
          <p>Контакты</p>
        </div>
      )}
    </div>
  );
};

export default Header;
