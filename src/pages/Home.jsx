import Arrivals from '../components/Arrivals';
import BackToTop from '../components/BackToTop';
import Category from '../components/Category';
import DiscountCode from '../components/DiscountCode';
import Footer from '../components/Footer';
import FromSeed from '../components/FromSeed';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OurBlog from '../components/OurBlog';
import OurPlant from '../components/OurPlant';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Arrivals />
      <Category />
      <FromSeed />
      <OurPlant />
      <OurBlog />
      <DiscountCode />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
