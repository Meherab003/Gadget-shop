import Accordion from "../components/home/Accordion";
import Banner from "../components/home/Banner";
import FeaturedGadgets from "../components/home/FeaturedGadgets";
import UserReview from "../components/home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-24">
        <h1 className="mb-16 text-2xl lg:text-3xl font-semibold  text-center">Featured Products</h1>
        <FeaturedGadgets />
      </div>
      <div className="my-24">
        <h1 className="mb-16 text-2xl lg:text-3xl font-semibold  text-center">User Review</h1>
        <UserReview />
      </div>
      <div className="my-24">
        <h1 className="mb-16 text-2xl lg:text-3xl font-semibold  text-center">Frequently Asked Question</h1>
        <Accordion />
      </div>
    </div>
  );
};

export default Home;
