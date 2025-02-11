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

  return (
    <>
      <div className="w-full h-96 mt-40 md:mt-20 bg-gray-300">
        <div className="w-11/12  mx-auto pt-7 flex flex-col">
          <div className="flex justify-between">
            <img src={logoFoot} alt="" className="w-auto h-20" />
            <input
              type="text"
              placeholder="Оставить заявку на покупку, бронь"
              className="w-80 pl-6 rounded-3xl text-black outline-none placeholder-black font-medium"
            />
          </div>
          <div className="flex justify-between items-start mt-20">
            <div>
              <p className="text-xl font-medium mb-2">Мы находимся</p>
              <p className="text-gray-500 text-lg">{contact.address}</p>
            </div>
            <div>
              <p className="text-xl font-medium mb-2">Разделы</p>
              <ul className="text-gray-500 text-lg">
                <li>Главная</li>
                <li>О нас</li>
                <li>Каталог</li>
                <li>Мастерская</li>
                <li>Контакты</li>
              </ul>
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
