import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutus/AboutUs";
import Activities from "./components/activities/Activities";
import Company from "./components/company/Company";
import News from "./components/news/News";
import Map from "./components/map/Map";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 xs:gap-[45px] justify-center items-center">
      <Hero />
      <Company />
      <AboutUs />
      <Activities />
      <Map />
      {/* <News /> */}
    </main>
  );
}
