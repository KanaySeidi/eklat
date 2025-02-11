import { useEffect } from "react";
import useCatalogStore from "../../api/catalog";
import Error from "../error/Error";

const Catalog = () => {
  const { fetchCatalog, catalog, err } = useCatalogStore();

  useEffect(() => {
    fetchCatalog();
  }, []);

  if (err) {
    return <Error message={err} />;
  }

  return (
    <>
      <div className="w-full h-auto mt-20" id="catalog">
        <div className="w-11/12 mx-auto">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-52 h-12 border border-black rounded-3xl flex justify-center items-center mb-8 cursor-pointer">
              Наш каталог
            </p>
            <p className="text-4xl font-medium mb-8">
              Исследуй наш богатый выбор мебели
            </p>
          </div>
          <div className="px-16 flex flex-wrap justify-center lg:justify-between gap-5">
            {catalog?.results?.length > 0 ? (
              catalog.results.map((item) => (
                <div key={item.id} className="relative rounded-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-72 h-56 object-cover"
                  />
                  <p className="px-8 py-2 flex justify-center items-center rounded-3xl bg-white absolute top-2 left-2 break-words text-center">
                    {item.title}
                  </p>
                </div>
              ))
            ) : (
              <p>Загрузка...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
