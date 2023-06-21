import Slide from "./molecules/Slide";
import Header from "./organisms/Header";
import About from "./templates/About";
import Contact from "./templates/emails";
import Index from "./templates/Index";
import Portfolios from "./templates/Index_Portfolios";

export default function Home() {
  return (
    <div>
      <Slide>
        <Index />
        <div>
          <Header />
          <About />
        </div>
        <div>
          <Header />
          <Portfolios />
        </div>
        <div>
          <Header />
          <Contact />
        </div>
      </Slide>
    </div>
  );
}
