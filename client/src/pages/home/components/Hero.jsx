import { images } from "../../../assets";

function Hero() {
  return (
    <section>
      {/* description*/}
      <div className="max-w-6xl mx-auto my-10">
        <h1 className="text-2xl mx-10 my-8">
          Hlw, Mr.{" "}
          <span className="font-bold text-[var(--text-color)]">Shuvashis</span>
        </h1>

        {/* container-hero */}
        <div
          style={{ background: "linear-gradient(to right, #74ebd5, #acb6e5)" }}
          className="hero-container flex lg:h-[400px] h-full items-center rounded-xl lg:mx-0 mx-4"
        >
          <div className="left p-10 lg:w-[50%] w-full space-y-4">
            <h1 className="text-5xl text-[var(--text-color)] font-bold">
              Providing Quality Healthcare
            </h1>
            <p className="text-[var(--text-color)] leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at
              nunc feugiat, pretium quam malesuada, luctus ex. Duis eu dui
              rhoncus, faucibus diam ac, iaculis urna. Phasellus pellentesque
              dui in suscipit eleifend.
            </p>
          </div>

          <div className="right w-[50%]  hidden lg:inline-flex">
            <img
              className="w-full block relative h-[500px] object-contain mt-[-100px]"
              src={images.hero_doc}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
