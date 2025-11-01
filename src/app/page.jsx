import AboutSec from "./component/home/AboutSec";
import Contest from "./component/home/Contest";
import Hero from "./component/home/Hero";
import TestimonialSec from "./component/home/TestimonialSec";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSec />
      <TestimonialSec />
      <Contest />
    </>
  );
}
