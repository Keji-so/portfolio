// import  {useEffect} from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss';
import { Projects } from '../components/data.js';
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";
import Name from '../components/Name'




function Card() {

   
return (
    <>  
      
 
  <Name />
    <div className={styles.projects}>
        Projects
    </div>
    <div className={styles.card_container}>
       {Projects.map(project => {
       
          return (
          <div className={styles.card} key={project.id}>
            <div className={styles.container}>
              <div className={styles.title}>{project.title}</div>
              <div className={styles.description}>{project.description}</div>
              <div className={styles.language}>
                {project.lang.map(lang => {
                  return (
                  <div className={styles.lang}>{lang}</div>
                 )})}
                
              </div>
              <div className={styles.direct}>

             <Link href={project.live}>
                <div className={styles.live}>
                  <div className={styles.icon}><BsBoxArrowInUpRight size="1.2rem" /></div>
                  <div className={styles.lives}><a>Live</a></div>
                </div>
               </Link> 
              
               <Link href={project.code}>
                <div className={styles.live}>
                  <div className={styles.icon}><VscRepoForked size="1.2rem" /></div>
                  <div className={styles.codes}><a>Code</a></div>
                </div>
               </Link>
              </div>
            </div>
          </div>
          )
       })}
        
   </div>
   </>
    )
}

export default Card
