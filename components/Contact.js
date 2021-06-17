import {useState} from 'react';
import styles from '../styles/Contact.module.scss';
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'





function Contact() {

    const [data, setData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = e => {
      
        setData({
            ...data,
            [e.target.name]: e.target.value,
          })

      }

   function handleSubmit (e) {
       setData({
       [e.target.name]: "",
      })
    }

    return (
        <div>
            <div className={styles.contact}>
                Contact Me!
            </div>

        <div className={styles.container}>

            <div className={styles.left}>
               <form className={styles.form} onSubmit={handleSubmit} action="https://formsubmit.co/ojokeji@gmail.com" method="POST">
                   <div className={styles.form_container}>

                      <div className={styles.info}>
                        <div className={styles.name}>
                                <div className={styles.label}>Fullname</div>
                                <input value={data.name} onChange={handleChange} type="text" className="form-control" placeholder="Name" name="name" required/>
                        </div>
                        <div className={styles.email}>
                             <div className={styles.label}>Email</div>
                            <input value={data.email} onChange={handleChange} type="email" className="form-control" placeholder="Email Address" name="email" required/>
                        </div>
                    </div> 
                    
                        <div className={styles.message}>
                             <div className={styles.label}>Message</div>
                            <textarea value={data.message} onChange={handleChange} className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>

                        <div className={styles.button}>
                            <input  type="submit" className={styles.btn} value="Send Message"></input>
                        </div>

                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="hidden" name="_next" value="https://keji.netlify.app/thanks"></input>
                        
                   </div>
               </form>    

            </div>

            <div className={styles.right}>
                <div className={styles.connect}>Connect with me</div>
                <div className={styles.name}>Morenikeji Ojo</div>
                <div className={styles.email}>ojokeji@gmail.com</div>
                <div className={styles.location}>Lagos, Nigeria.</div>


                <div className={styles.socials}>
                    <div className={styles.icons}>
                        <Link href="https://github.com/Keji-so">
                            <div className={styles.icon}><AiFillGithub size="1.8rem" /></div>
                        </Link>
                        <Link href="https://github.com/Keji-so">
                            <div className={styles.icon}><FaLinkedin size="1.8rem" /></div>
                        </Link>
                        <Link href="https://github.com/Keji-so">
                            <div className={styles.icon}><AiOutlineTwitter size="1.8rem" /></div>
                        </Link>
                    </div>
                </div>
           </div>

            </div>


        </div>
    )
}

export default Contact



