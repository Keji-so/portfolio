import '../styles/globals.scss'
import { AnimatePresence, motion } from "framer-motion";
// import Layout from '../components/Layout'


const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate : {
    transition: {
      staggerChildren: 0.5,
      delay: 0.3
    }
  }
}

const pageChange = {
  pageInitial: {
    opacity: 0,
    transition: {
      ease: "linear"
    }
   
  },
  pageAnimate: {
   opacity: 1,
   transition: {
    duration: 0.3,
    ease: "linear"
 },
 pageExit: {
  opacity: 0,
  y: -400,
  backgroundColor: '#fafafa',
  transition: {
  duration: 0.3,
  ease: "linear"
  }
}
  
}
  };



function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
    <motion.div key={router.route} exit="pageExit" initial="pageInitial" animate="pageAnimate" variants={pageChange} >
        <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
  ) 
}

export default MyApp
