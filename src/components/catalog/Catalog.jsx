import { imgImports } from "../../assets";

const Catalog = () => {
  const { slider1, slider2, slider3 } = imgImports;

  const cards = [
    {
      id: 1,
      title: "Мебель",
      img: slider1,
    },
    {
      id: 2,
      title: "Мебель",
      img: slider2,
    },
    {
      id: 3,
      title: "Мебель",
      img: slider3,
    },
    {
      id: 4,
      title: "Мебель",
      img: slider1,
    },
    {
      id: 5,
      title: "Мебель",
      img: slider2,
    },
    {
      id: 6,
      title: "Мебель",
      img: slider1,
    },
    {
      id: 7,
      title: "Мебель",
      img: slider3,
    },
    {
      id: 8,
      title: "Мебель",
      img: slider2,
    },
  ];

  return (
    <>
      <div className="w-full h-auto mt-20">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-52 h-12 border border-black rounded-3xl flex justify-center items-center mb-8 cursor-pointer">
              Наш каталог
            </p>
            <p className="text-4xl font-medium mb-8">
              Исследуй наш богатый выбор мебели
            </p>
          </div>
          <div className="px-20 flex flex-wrap justify-center lg:justify-between gap-5">
            {cards.map((item) => (
              <div
                key={item.slider3}
                className="relative rounded-xl bg-red-500"
              >
                <img src={item.img} alt="" className="w-82 h-58" />
                <p className="w-40 h-10 flex justify-center items-center rounded-3xl bg-white absolute top-2 left-2 ">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
