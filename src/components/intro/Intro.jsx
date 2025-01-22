import { imgImports } from "../../assets";

const Intro = () => {
  const { heroImg } = imgImports;
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="max-w-[740px] text-center space-y-6">
            <p className="text-3xl sm:text-4xl md:text-6xl leading-tight font-semibold">
              Создайте домашний уют с нашей мебелью
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-7">
              Откройте для себя мебель премиум-класса, которая объединяет стиль,
              комфорт и функциональность для вашего дома.
            </p>
            <button className="px-8 py-2 bg-white text-black rounded-3xl">
              Позвонить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
