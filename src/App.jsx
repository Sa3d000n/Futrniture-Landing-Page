import { Container, Box } from "@mui/material";
import "./App.css";
import NavBarSection from "./LandingPageSections/NavBarSection";
import DiscountSection from "./LandingPageSections/DiscountSection";
import HeroSection from "./LandingPageSections/HeroSection";
import CategorySection from "./LandingPageSections/CategorySection";
import FeaturesSection from "./LandingPageSections/FeaturesSection";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <NavBarSection />
      </Container>
      <DiscountSection />
      <Container maxWidth="xl">
        <HeroSection />
        <CategorySection/>
        <FeaturesSection/>
      </Container>
    </>
  );
}

export default App;
