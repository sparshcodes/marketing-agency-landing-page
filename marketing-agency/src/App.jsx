import "./App.css";
import Hero from "./Components/Hero/Hero";
import TrustedClient from "./Components/TrustedClient/TrustedClient";
import Services from "./Components/Services/Services";
import Stats from "./Components/Stats/Stats";
import Creators from "./Components/Creators/Creators";
import Testimonials from "./Components/Testimonials/Testimonials";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <TrustedClient />
      <Services />
      <Stats />
      <Creators />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
