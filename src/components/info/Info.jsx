import { useEffect } from "react";
import useContactStore from "../../api/contact";
import { imgImports } from "../../assets";
import Error from "../error/Error";

const Info = () => {
  const { adress, contacts, phone, wats, tg, ig } = imgImports;

  const { contact, err, fetchContact } = useContactStore();

  useEffect(() => {
    fetchContact();
  }, []);

  if (err) {
    return <Error message={err} />;
  }

  return (
    <>
      <div className="w-full mt-20" id="contact">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2 h-96 flex flex-col justify-between">
              <div className="w-28 h-10 border border-black rounded-3xl flex justify-center items-center mt-10 mb-8 cursor-pointer">
                <p>Адрес</p>
              </div>
              <p className="text-3xl w-full md:w-3/5">Мы находимся по адресу</p>
              <p className="text-3xl w-full md:w-3/5">{contact.address}</p>
              <p>Наши двери открыты для вас ежедневно {contact.work_time}</p>
              <p>
                Если вам нужно встретиться в другое время — свяжитесь с нами, и
                мы подберем удобное время для консультации.
              </p>
            </div>
            <div className="h-96 mt-10 md:mt-0 md:flex md:justify-center ">
              <img src={adress} alt="" className="h-72 md:h-96" />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between mt-20">
            <div className="h-96">
              <img src={contacts} alt="" className="h-72 md:h-96" />
            </div>
            <div className="w-full md:w-1/2 h-96 flex flex-col justify-between">
              <div className="w-28 h-10 border border-black rounded-3xl flex justify-center items-center mt-10 mb-8 cursor-pointer">
                <p>Контакты</p>
              </div>
              <p>
                Если у вас возникли вопросы или вы хотите узнать больше о наших
                услугах, мы всегда рады помочь! Мы доступны по различным каналам
                связи:
              </p>
              <div className="flex flex-col md:flex-row w-full justify-between">
                <div className="flex flex-col gap-10 mt-5 md:mt-0">
                  <p className="text-2xl">Контакты</p>
                  <div className="flex gap-2">
                    <img src={phone} alt="" />
                    <p className="text-xl font-medium">{contact.phone}</p>
                  </div>
                  <div className="flex gap-2">
                    <img src={wats} alt="" />
                    <p className="text-xl font-medium">{contact.phone}</p>
                  </div>
                </div>
                <div className="mr-20 flex flex-col gap-10 mt-10 md:mt-0">
                  <p className="text-2xl">Мы в соц.сетях</p>
                  <div className="flex justify-between">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
