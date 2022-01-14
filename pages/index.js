import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Main from "../components/layouts/Main";
import Navbar from "../components/Navbar";
import Tech from "../components/Tech";
import Top from "../components/UI/Top";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      {/* <img
        className="fixed object-cover z-0 w-full h-screen opacity-50 gradient-mask-b-60"
        src="/images/bg1.jpeg"
        alt=""
      /> */}
      <Main>
        <Hero />
        <Work />
        <About />
        <Tech />
        <Contact />
        {/* <Top /> */}
      </Main>
    </>
  );
}
