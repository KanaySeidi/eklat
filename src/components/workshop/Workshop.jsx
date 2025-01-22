import { imgImports } from "../../assets";

const Workshop = () => {
  const { workshop } = imgImports;

  return (
    <div className="relative w-full h-screen mt-20">
      <img
        src={workshop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0  text-white">
        <div className="w-11/12 mx-auto h-full mt-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl text-white font-bold leading-snug tracking-wide w-[500px]">
              Наша собственная мебельная мастерская
            </h1>
          </div>
          <div className="flex w-full gap-40 justify-between text-lg ">
            <div className="w-3/4 text-justify">
              В нашей компании мы гордимся наличием собственной мебельной
              мастерской, где создаём уникальные и качественные изделия,
              соответствующие самым высоким стандартам.{" "}
            </div>
            <div className="w-3/4 text-justify">
              Используя современные технологии и материалы, мы производим мебель
              на заказ, учитывая все пожелания клиентов. Каждое изделие — это
              результат профессионализма, внимательности к деталям и любви к
              своему делу.
            </div>
          </div>
          <div className="flex flex-col mb-32">
            <div className="text-3xl  w-full flex justify-center">
              Будь то индивидуальная мебель для дома или уникальные решения для
              бизнеса, в нашей мастерской создаётся всё с максимальной точностью
              и заботой о вашем комфорте.
            </div>
            <div className="mt-10">
              *Все процессы — от разработки дизайна до финальной отделки —
              проходят под строгим контролем наших специалистов.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
