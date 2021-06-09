import styles from '../styles/Home.module.scss';
import { Projects } from './projects.js'
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";



function Card() {
    return (
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
                <div className={styles.live}>
                  <div className={styles.icon}><BsBoxArrowInUpRight size="1.2rem" /></div>
                  <div className={styles.lives}><a>Live</a></div>
                </div>
                <div className={styles.live}>
                  <div className={styles.icon}><VscRepoForked size="1.2rem" /></div>
                  <div className={styles.codes}><a>Code</a></div>
                </div>
              </div>
            </div>
          </div>
          )
       })}
        
   </div>
    )
}

export default Card
