import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";

const Main = () => {
  return (
    <div className="h-[3000px]">
      <Header />
      <Intro />
      <About />
    </div>
  );
};

export default Main;
