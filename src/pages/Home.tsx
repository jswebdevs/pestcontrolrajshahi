import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import PopularServices from "../components/home/PopularServices";
import StatCounters from "../components/home/StatCounters";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <PopularServices/>
      <Testimonials/>
      <StatCounters/>
    </div>
  );
};

export default Home;
