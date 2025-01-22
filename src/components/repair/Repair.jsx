import { imgImports } from "../../assets";

const Repair = () => {
  const { repair } = imgImports;

  return (
    <>
      <div className="w-full h-auto mt-20">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-52 h-12 border border-black rounded-3xl flex justify-center items-center mb-8 cursor-pointer">
              Ремонт кресел
            </p>
            <div className="flex flex-col  text-center">
              <p className="text-4xl font-medium mb-8">Проблемы с креслом?</p>
              <p className="text-4xl font-medium mb-8">
                Мы поможем вернуть ему новый вид и комфорт!
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <div className="w-1/2 h-auto flex flex-col justify-between">
              <div className="flex flex-col justify-between gap-5 text-lg font-medium">
                <p>
                  Наши мастера профессионально занимаются ремонтом и
                  восстановлением кресел любого типа.
                </p>
                <p>
                  Мы предлагаем полный спектр услуг: от замены обивки и ремонта
                  механизмов до реставрации каркаса.{" "}
                </p>
                <p>
                  Если ваше кресло потеряло первоначальный вид или перестало
                  быть удобным, мы вернем ему прежнюю форму и функциональность.
                </p>
              </div>
              <p className="text-[21px] font-bold">
                Доверьте ремонт профессионалам, и ваше кресло будет как новое!
              </p>
            </div>
            <div>
              <img src={repair} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repair;
