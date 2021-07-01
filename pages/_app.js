import '../styles/globals.scss'
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";


const pageChange = {
  pageInitial: {
    opacity: 0
    },
  pageAnimate: {
   opacity: 1,
   transition: {
    ease: "linear",
    when: "beforeChildren"
}
  }, 
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.4,
  }
  }
  };



function MyApp({ Component, pageProps, router }) {
  return (
    <>
    <Head>
       <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
       <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
       <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
       <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
    <AnimatePresence exitBeforeEnter>
      <motion.div exit="exit"  key={router.route} initial="pageInitial" animate="pageAnimate" variants={pageChange}>
          <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
    </>
  ) 
}

export default MyApp
