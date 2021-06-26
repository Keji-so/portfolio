import Head from 'next/head'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'


export default function Home() {

  return (

     <Layout>
      <Head>
        <title>Morenikeji</title>
        <meta name="description" content="frontend portfolio homepage developer" />
      </Head>

 

     <div className={styles.container}>

       <div className={styles.left}>
         

          <div className={styles.content}>
             <h1>Morenikeji Ojo.</h1>
             <div className={styles.desc}>I’m a Frontend software developer, with a passion for responsive website design and a firm believer in the mobile-first approach.</div>
          
           </div>

 

          
        <div className={styles.email}>
         <a>ojokeji@gmail.com</a> 
        </div>
       </div>

       <div className={styles.right}>
          <Nav />
       </div>
 </div>

 <Project />

<Contact />
   
    </Layout> 
  )
}
