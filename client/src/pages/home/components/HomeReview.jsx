import { useEffect, useState } from "react";
import DoctorHttpRequest from "../../../services/Doctor.services";

import { swiffyslider } from "swiffy-slider";
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
  window.swiffyslider.init();
});

// import Swiffy Slider CSS
import "swiffy-slider/css";
import Review from "../../../components/Review/Review";

function HomeReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await DoctorHttpRequest.getReviews();
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  return (
    <section className="max-w-6xl mx-auto my-20 ">
      {/* Title */}
      <div className="flex justify-center flex-col items-center mb-16">
        <h1 className="text-[var(--text-color)] text-4xl font-semibold">
          Clients Review about us
        </h1>
        <p className="text-sm w-[55%] text-gray-600 leading-6 mt-8 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          tempore recusandae dignissimos autem tenetur vel quaerat, a numquam
          veritatis doloribus.
        </p>
      </div>

      {/* Reviews */}
      <Review reviews={reviews} styles="bg-white shadow" />
    </section>
  );
}

export default HomeReview;
