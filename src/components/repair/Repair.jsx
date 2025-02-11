import { useEffect } from "react";
import useRepairStore from "../../api/repair";
import Error from "../error/Error";

const Repair = () => {
  const { repair, err, fetchRepair } = useRepairStore();

  useEffect(() => {
    fetchRepair();
  }, []);

  if (err) {
    return <Error message={err} />;
  }

  return (
    <>
      <div className="w-full h-auto mt-20">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-52 h-12 border border-black rounded-3xl flex justify-center items-center mb-8 cursor-pointer">
              Ремонт кресел
            </p>
            <div className="flex flex-col  text-center">
              <p className="text-lg md:text-4xl font-medium mb-8">
                {repair.title}
              </p>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-between md:justify-center mt-5 ">
            <div className="w-full md:w-1/2 h-auto flex flex-col justify-between  gap-2 md:gap-0">
              <div className="flex flex-col justify-between gap-5 text-xs sm:text-base md:text-base lg:text-lg font-medium mb-0 md:mb-2">
                <p>{repair.description}</p>
              </div>
              <p className="text-xs sm:text-base md:text-base lg-text-[21px] font-bold">
                {repair.description2}
              </p>
            </div>
            <div className="w-full md:w-1/2 mt-10 md:mt-0">
              <img
                src={repair.image}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repair;
