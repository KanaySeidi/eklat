import { useEffect } from "react";
import useWorkshopStore from "../../api/workshop";
import Error from "../error/Error";

const Workshop = () => {
  const { workshop, err, fetchWorkshop } = useWorkshopStore();

  useEffect(() => {
    fetchWorkshop();
  }, []);

  if (err) {
    return <Error message={err} />;
  }

  return (
    <div className="relative w-full h-screen mt-20" id="workshop">
      <img
        src={workshop.image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0  text-white">
        <div className="w-11/12 mx-auto h-full mt-10 flex flex-col justify-center gap-10 md:gap-0 md:justify-between">
          <div>
            <h1 className="text-lg sm:text-lg md:text-2xl lg:text-4xl text-white font-bold leading-snug tracking-wide ">
              {workshop.title}
            </h1>
          </div>
          <div className="flex w-full gap-10 md:gap-20 justify-between text-lg ">
            <div className="w-3/4 text-justify text-xs sm:text-md md:text-lg lg:text-lg">
              {workshop.description}
            </div>
            <div className="w-3/4 text-justify text-xs sm:text-md md:text-lg lg:text-lg">
              {workshop.description2}
            </div>
          </div>
          <div className="flex flex-col mb-32">
            <div className="text-xs sm:text-md md:text-lg lg:text-2xl  w-full flex justify-center">
              {workshop.description3}
            </div>
            <div className="mt-4 md:mt-10">
              <p className="text-xs sm:text-md md:text-lg lg:text-lg">
                {workshop.description4}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
