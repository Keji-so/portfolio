import '../styles/globals.scss'
import { AnimatePresence, motion } from "framer-motion";
// import Layout from '../components/Layout'


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
    <AnimatePresence exitBeforeEnter>
      <motion.div exit="exit"  key={router.route} initial="pageInitial" animate="pageAnimate" variants={pageChange}>
          <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  ) 
}

export default MyApp
