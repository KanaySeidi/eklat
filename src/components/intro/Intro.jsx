import { imgImports } from "../../assets";

const Intro = () => {
  const { heroImg } = imgImports;
  return (
    <>
      <div className="absolute -z-10 w-full">
        <img src={heroImg} alt="" className="w-full h-[750px] object-cover " />
      </div>
      <div className="w-full h-screen flex justify-center items-center text-white">
        <div className="w-[740px] h-[332px] flex flex-col items-center justify-between mt-20">
          <p className="text-6xl text-center leading-tight">
            Создайте домашний уют с нашей мебелью
          </p>
          <p className="text-lg text-center leading-7">
            Откройте для себя мебель премиум-класса, которая объединяет стиль,
            комфорт и функциональность для вашего дома.
          </p>
          <button className="w-44 h-10 bg-white text-black rounded-3xl">
            Позвонить
          </button>
        </div>
      </div>
    </>
  );
};

export default Intro;
