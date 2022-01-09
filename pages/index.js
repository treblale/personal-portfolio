import Hero from "../components/Hero";
import Main from "../components/layouts/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <img
        className="fixed object-cover z-0 w-full h-screen opacity-95 gradient-mask-b-60"
        src="/images/bg2.jpg"
        alt=""
      />
      <Main>
        <Hero />
      </Main>
    </>
  );
}
