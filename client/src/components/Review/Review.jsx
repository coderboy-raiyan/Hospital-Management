/* eslint-disable react/prop-types */

import { swiffyslider } from "swiffy-slider";
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
  window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css";
import { images } from "../../assets";

function Review({ reviews, styles }) {
  return (
    <section className="max-w-6xl mx-auto my-20 ">
      {/* Reviews */}
      <div className=" swiffy-slider slider-item-show3 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible slider-nav-autoplay">
        <ul className="slider-container py-4 scrollbar-hide">
          {reviews?.map((review, index) => (
            <li key={index} className="slide-visible">
              <div className={`${styles}  h-[400px] mx-auto p-4 rounded-lg`}>
                <div className="mx-auto w-[100px]">
                  <img
                    src={images.girl}
                    className="card-img-top block  h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover "
                    loading="lazy"
                    alt="..."
                  />
                </div>
                <div className="card-body p-3 p-xl-5 space-y-4 text-center">
                  <h3 className="text-lg text-[var(--text-color)] font-semibold">
                    {review?.reviewer}
                  </h3>
                  <p className="text-sm text-gray-600 leading-6 ">
                    {review?.body?.slice(0, 100)}...
                  </p>
                  <div>
                    <p>{review?.rating}</p>
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
  );
}

export default Review;
