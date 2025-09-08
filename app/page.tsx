import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Services from "@/components/home/services";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* <Navbar /> */}
      {/* Hero Section */}
      <div className="fixed top-0 left-0 w-full h-screen z-10 bg-black">
        <Hero />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-20 mt-[100vh] bg-white rounded-t-2xl border-2">
        <About />
        <Services />
      </div>
    </div>
  );
};

export default Home;
