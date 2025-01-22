import About from "../../components/about/About";
import Catalog from "../../components/catalog/Catalog";
import Header from "../../components/header/Header";
import Info from "../../components/info/Info";
import Intro from "../../components/intro/Intro";
import Products from "../../components/products/Products";
import Workshop from "../../components/workshop/Workshop";

const Main = () => {
  return (
    <div className="h-[3000px]">
      <Header />
      <Intro />
      <About />
      <Catalog />
      <Products />
      <Workshop />
      <Info />
    </div>
  );
};

export default Main;
