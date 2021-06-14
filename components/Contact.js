import {useState} from 'react';
import styles from '../styles/Contact.module.scss';
// import React from 'react';




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
                Contact
            </div>

            <div>
               <form onSubmit={handleSubmit} action="https://formsubmit.co/ojokeji@gmail.com" method="POST">
                   <div>
                       <div className="stuff">
                            <input value={data.name} onChange={handleChange} type="text" className="form-control" placeholder="Name" name="name" required/>
                     </div>
                     <div className="stuff">
                           <input value={data.email} onChange={handleChange} type="email" className="form-control" placeholder="Email Address" name="email" required/>
                     </div>
                     <div className="stuff">
                          <textarea value={data.message} onChange={handleChange} className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                     </div>
                     <div className="stuff">
                         <input onSubmit="window.location.reload();" type="submit" className="btn btn-info" value="Send Message"></input>
                     </div>
                     <input type="hidden" name="_captcha" value="false"></input>
                     <input type="hidden" name="_next" value="http://localhost:3000/contact"></input>
                     
                   </div>
               </form>    

            </div>
        </div>
    )
}

export default Contact



