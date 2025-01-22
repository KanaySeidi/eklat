import { imgImports } from "../../assets";

const Products = () => {
  const { stol } = imgImports;
  return (
    <>
      <div className="w-full">
        <div className="w-11/12 mx-auto mt-20">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-52 h-12 border border-black rounded-3xl flex justify-center items-center mb-8 cursor-pointer">
              Лучшие продукции
            </p>
            <p className="text-4xl font-medium mb-8">
              Мы предлагаем вам лучшие позиции
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-between mt-8">
            <div>
              <img src={stol} alt="" />
              <div className="h-20 flex flex-col justify-between mt-5">
                <p className="font-bold text-xl">Кресло</p>
                <div className="flex gap-5 items-center h-auto">
                  <p className="font-semibold text-lg">14000 сом</p>
                  <p className="line-through text-lg text-gray-500">
                    19999 сом
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={stol} alt="" />
              <div className="h-20 flex flex-col justify-between mt-5">
                <p className="font-bold text-xl">Кресло</p>
                <div className="flex gap-5 items-center h-auto">
                  <p className="font-semibold text-lg">14000 сом</p>
                  <p className="line-through text-lg text-gray-500">
                    19999 сом
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={stol} alt="" />
              <div className="h-20 flex flex-col justify-between mt-5">
                <p className="font-bold text-xl">Кресло</p>
                <div className="flex gap-5 items-center h-auto">
                  <p className="font-semibold text-lg">14000 сом</p>
                  <p className="line-through text-lg text-gray-500">
                    19999 сом
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img src={stol} alt="" />
              <div className="h-20 flex flex-col justify-between mt-5">
                <p className="font-bold text-xl">Кресло</p>
                <div className="flex gap-5 items-center h-auto">
                  <p className="font-semibold text-lg">14000 сом</p>
                  <p className="line-through text-lg text-gray-500">
                    19999 сом
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
