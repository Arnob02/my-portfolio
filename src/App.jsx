import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection";
import Navbar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
    </>
  );
};

export default App;
