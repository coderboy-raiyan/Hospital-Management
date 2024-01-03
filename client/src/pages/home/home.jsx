import Doctors from "./components/Doctors";
import Hero from "./components/Hero";
import HomeReview from "./components/HomeReview";

import Slider from "./components/Slider";

function Home() {
  return (
    <main>
      <Hero />
      <Slider />
      <Doctors />
      <HomeReview />
    </main>
  );
}

export default Home;
