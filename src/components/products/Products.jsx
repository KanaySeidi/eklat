import { useEffect } from "react";
import useProductStore from "../../api/product";
import Error from "../error/Error";

const Products = () => {
  const { fetchProduct, err, product } = useProductStore();

  useEffect(() => {
    fetchProduct();
  }, []);

  if (err) {
    return <Error message={err} />;
  }
  return (
    <>
      <div className="w-full" id="product">
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
            {product?.results?.length > 0 ? (
              product.results.map((item) => (
                <div key={item.id}>
                  <img
                    src={item.image}
                    alt={item.image}
                    className="w-72 h-52"
                  />
                  <div className="h-20 flex flex-col justify-between mt-5">
                    <p className="font-bold text-xl">{item.title}</p>
                    <div className="flex gap-5 items-center h-auto">
                      <p className="font-semibold text-lg">
                        {item.discount_price} сом
                      </p>
                      <p className="line-through text-lg text-gray-500">
                        {item.price} сом
                      </p>
                    </div>
                  </div>
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

export default Products;
