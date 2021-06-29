import '../styles/globals.scss'
import { AnimateSharedLayout } from "framer-motion";
// import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
        <Component {...pageProps} />
    </AnimateSharedLayout>
  ) 
}

export default MyApp
