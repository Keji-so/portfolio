import Head from 'next/head'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.scss'

export default function Home() {

  return (

     <>
      <Head>
        <title>Morenikeji</title>
        <meta name="description" content="frontend portfolio homepage developer" />
      </Head>

     <div className={styles.stuff}>

       <div className={styles.left}>
         

          <div className={styles.content}>
             <h1>Morenikeji Ojo.</h1>
             <div className={styles.desc}>I’m a Frontend software developer, with a passion for responsive website design and a firm believer in the mobile-first approach.</div>
          
           </div>

           <div className={styles.btn}>
                <span class={styles.link}>
                    <span class={styles.link__inner}>
                        <span>
                        <a>Download Resume</a> 
                        </span>
                      <span class={styles.link__animated}>
                        <a>Download Resume</a>
                      </span>
                    </span>
              </span>
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
   
    </> 
  )
}
