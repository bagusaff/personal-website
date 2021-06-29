import "../styles/globals.css";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <AnimatePresence key={router.route} exitBeforeEnter>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
