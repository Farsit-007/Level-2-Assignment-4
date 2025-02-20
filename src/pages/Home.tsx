import Blogs from "../components/ui/Blogs";
import { Carousel } from "../components/ui/Carousel";
import FeaturesProduct from "../components/ui/FeaturesProduct";
import Testimonial from "../components/ui/Testimonial";

const Home = () => {
  return (
    <div>
      <Carousel />
      <FeaturesProduct />
      <Blogs />
      <Testimonial />
    </div>
  );
};

export default Home;
