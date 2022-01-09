import Head from "next/head";
import Navbar from "../Navbar";

const Main = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Albert Le</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Main;
