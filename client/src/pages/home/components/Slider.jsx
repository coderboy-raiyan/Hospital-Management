// import Swiffy Slider JS
import { useEffect, useState } from "react";
import { swiffyslider } from "swiffy-slider";
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
  window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css";
import DoctorHttpRequest from "../../../services/Doctor.services";

function Slider() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await DoctorHttpRequest.getServices();
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  return (
    <>
      <section className="max-w-6xl mx-auto my-20 ">
        {/* Title */}
        <div className="flex justify-center flex-col items-center mb-16">
          <h1 className="text-[var(--text-color)] text-4xl font-semibold">
            Services we provide
          </h1>
          <p className="text-sm w-[55%] text-gray-600 leading-6 mt-8 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            tempore recusandae dignissimos autem tenetur vel quaerat, a numquam
            veritatis doloribus.
          </p>
        </div>

        <div className=" swiffy-slider slider-item-show3 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible slider-nav-autoplay">
          <ul className="slider-container py-4 scrollbar-hide">
            {services.map((service, index) => (
              <li key={index} className="slide-visible">
                <div className="bg-white shadow h-[400px]  mx-auto p-4 rounded-lg">
                  <div className="">
                    <img
                      src={service?.image}
                      className="card-img-top rounded-lg mx-auto"
                      loading="lazy"
                      alt="..."
                    />
                  </div>
                  <div className="card-body p-3 p-xl-5 space-y-4">
                    <h3 className="text-lg text-[var(--text-color)] font-semibold">
                      {service?.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-6">
                      {service?.description?.slice(0, 100)}...
                    </p>
                    <div>
                      <a
                        href="#"
                        className=" text-lg text-[var(--text-color)] font-semibold"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="slider-nav"
            aria-label="Go left"
          ></button>
          <button
            type="button"
            className="slider-nav slider-nav-next"
            aria-label="Go left"
          ></button>

          <div className="slider-indicators">
            <button className="active" aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
            <button aria-label="Go to slide"></button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;
