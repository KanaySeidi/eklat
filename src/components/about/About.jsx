import ImgSlider from "../slider/ImgSlider";

const About = () => {
  return (
    <>
      <div className="w-full mt-40">
        <div className="w-11/12 mx-auto ">
          <div className="w-full flex  ">
            <h1 className="w-1/5 text-2xl font-black">О Нас</h1>
            <p className="w-4/5 ml-5 text-justify text-md font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, amet asperiores. Ut atque officiis quod earum odit,
              eos maxime ipsam quia, culpa, eius quae inventore assumenda
              distinctio ipsa sint error ratione. Amet deleniti odio ab,
              dolorum, sequi dolore maxime quia iure tempore aspernatur quos
              asperiores esse quas magnam reprehenderit maiores id consequuntur
              ea ad laboriosam. Repellat, sit qui. Aliquam animi doloremque
              voluptatibus magni sequi laboriosam, officiis velit est facilis
              sunt obcaecati. Ea repellat aliquam eum tenetur inventore illum
              tempore veritatis sunt quas quibusdam harum dicta sequi
              consequuntur odio, natus sed quam mollitia atque dolore omnis
              sapiente assumenda unde vitae.
            </p>
          </div>
          <div className="w-full flex mt-20">
            <h1 className="w-1/5 text-2xl font-black">Галлерея</h1>
            <div className="w-4/5 max-w-4/5">
              <ImgSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
