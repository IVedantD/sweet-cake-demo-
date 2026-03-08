import AboutUs from "@/components/AboutUs";
import FeaturedCakes from "@/components/FeaturedCakes";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";
import SpecialOccasions from "@/components/SpecialOccasions";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeaturedCakes />
      <AboutUs />
      <SpecialOccasions />
      <Gallery />
      <Testimonials />
      <OrderForm />
      <Footer />
    </div>
  );
};

export default Index;
