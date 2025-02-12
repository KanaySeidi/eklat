import { useEffect } from "react";
import useContactStore from "../../api/contact";
import { imgImports } from "../../assets";
import Error from "../error/Error";

const Footer = () => {
  const { ig, tg, wats, logoFoot } = imgImports;

  const { contact, err, fetchContact } = useContactStore();

  useEffect(() => {
    fetchContact();
  }, []);

  if (err) {
    return <Error message={err} />;
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 80;
      const offsetTop = section.offsetTop - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-full h-auto mt-40 md:mt-62 bg-gray-300">
        <div className="w-11/12  mx-auto pt-7 flex flex-col">
          <div className="">
            <img src={logoFoot} alt="" className="w-auto h-20" />
          </div>
          <div className="flex flex-wrap justify-between items-start mt-20 mb-20 gap-2 md:gap-0">
            <div>
              <p className="text-xl font-medium mb-2">Мы находимся</p>
              <p className="text-gray-500 text-lg">{contact.address}</p>
            </div>
            <div>
              <p className="text-xl font-medium mb-2">Разделы</p>
              <div className="text-gray-500 text-lg">
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
            </div>
            <div>
              <p className="text-xl font-medium mb-2"> Контакты</p>
              <p className="text-gray-500 text-lg">{contact.phone}</p>
            </div>
            <div className="flex justify-between w-32">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ig} alt="" />
              </a>
              <a
                href={contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tg} alt="" />
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={wats} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
