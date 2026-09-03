import { useRef, useState } from "react"
import "./contact.scss"
import { motion} from "framer-motion"
import emailjs from '@emailjs/browser';
//just we need to add variants to our elemen
const variants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1, //it show the animation delay between each children
        },
    },
}

const Contact = () => {

    const formRef=useRef()
 
     const [error,setError]=useState(false)
     const [success,setSuccess]=useState(false)
    const [data,setData]= useState({
        form_name:'',
        form_message:'',
    });
  
    const handleNameChange=(e)=>{
        setData(prev=>{
            return {...prev, form_name:e.target.value}
        })
    }
    const handleMsgCHange=(e)=>{
        // conso
        setData(prev=>{
            return {...prev, form_message:e.target.value}
        })
    }

     const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.send("service_o0qo8vo", "template_94q4sg8", {
            to_email: "fgf",
            subject: "subject",
            message: "message",
          },"ASB2-LCSF9mUth0IE")
        .then((result) => {
              setSuccess(true)
          }, (error) => {
              setError(true)
          });
      };
  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Email : </h2>
                <span>rahulpaswandoon@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address : </h2>
                <span> Keshav Road Laxman Chowk Dehradun, Uttarakhand</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone : </h2>
                <span>7060627387</span>
            </motion.div>
        </motion.div>

        <div className="formContainer">
            <motion.form   
            onSubmit={sendEmail}
              ref={formRef}
              initial={{opacity:0}}
              whileInView={{opacity:1}} 
              transition={{ delay:0.6, duration:1 }}  >
                <input onChange={handleNameChange} type="text" required placeholder="Enter Your Name" value={data.form_name} name="from_name" />
                <input   type="email" required placeholder="Enter Your Email" name="email" />
                <textarea value={data.form_message} onChange={handleMsgCHange}  rows="8" placeholder="Message" name="message"/>
                <button>Submit</button>
                {success && "Success"}
                {error && "Error"}
               
            </motion.form>
        </div>
    </motion.div>
  )
}

export default Contact 