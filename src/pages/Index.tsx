import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCakes from "@/components/FeaturedCakes";
import AboutUs from "@/components/AboutUs";
import SpecialOccasions from "@/components/SpecialOccasions";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
