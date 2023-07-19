import { useState } from "react";
import {
  Navbar,
  Footer,
  SocialIcons,
  HeroSection,
  AboutSection,
  StarsSection,
  StakeholdersSection,
  SubscriptionSection,
  ScrollToTopButton,
} from "./components";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StarsSection />
      <StakeholdersSection />
      <SubscriptionSection />
      <SocialIcons />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
