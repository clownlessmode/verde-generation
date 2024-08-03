import { Button } from "@/components/ui/button";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutus/AboutUs";
import Activities from "./components/activities/Activities";
import Company from "./components/company/Company";
import Footer from "./components/footer/Footer";
import { Projects } from "./components/projects/Projects";
import News from "./components/news/News";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 justify-center items-center">
      <Hero />
      <Company />
      <AboutUs />
      <Activities />
      {/* <Projects /> */}
      <News />
    </main>
  );
}
