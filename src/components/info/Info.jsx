import { imgImports } from "../../assets";

const Info = () => {
  const { adress, contacts, phone, wats, tg, ig } = imgImports;

  return (
    <>
      <div className="w-full mt-20">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex justify-between">
            <div className="w-1/2 h-96 flex flex-col justify-between">
              <div className="w-28 h-10 border border-black rounded-3xl flex justify-center items-center mt-10 mb-8 cursor-pointer">
                <p>Адрес</p>
              </div>
              <p className="text-3xl w-3/5">
                Мы находимся по адресу г.Бишкек Токмакская 23 (Аламедин 1)
              </p>
              <p>Наши двери открыты для вас ежедневно с 9:00 до 18:00. </p>
              <p>
                Если вам нужно встретиться в другое время — свяжитесь с нами, и
                мы подберем удобное время для консультации.
              </p>
            </div>
            <div className="h-96">
              <img src={adress} alt="" className="h-96" />
            </div>
          </div>
          <div className="w-full flex justify-between mt-20">
            <div className="h-96">
              <img src={contacts} alt="" className="h-96" />
            </div>
            <div className="w-1/2 h-96 flex flex-col justify-between">
              <div className="w-28 h-10 border border-black rounded-3xl flex justify-center items-center mt-10 mb-8 cursor-pointer">
                <p>Контакты</p>
              </div>
              <p>
                Если у вас возникли вопросы или вы хотите узнать больше о наших
                услугах, мы всегда рады помочь! Мы доступны по различным каналам
                связи:
              </p>
              <div className="flex w-full justify-between">
                <div className="flex flex-col gap-10">
                  <p className="text-2xl">Контакты</p>
                  <div className="flex gap-2">
                    <img src={phone} alt="" />
                    <p className="text-xl font-medium">+996 999 911 317</p>
                  </div>
                  <div className="flex gap-2">
                    <img src={wats} alt="" />
                    <p className="text-xl font-medium">+996 999 911 317</p>
                  </div>
                </div>
                <div className="mr-20 flex flex-col gap-10">
                  <p className="text-2xl">Мы в соц.сетях</p>
                  <div className="flex justify-between">
                    <img src={ig} alt="" />
                    <img src={tg} alt="" />
                    <img src={wats} alt="" />
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
