import "../styles/tailwind.css";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter initial={true}>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
