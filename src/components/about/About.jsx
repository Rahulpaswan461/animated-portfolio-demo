import "./about.scss"
import {motion} from "framer-motion"
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
const sliderVariants={
    initial:{
      x:0,
    },
    animate:{
     x:"-200%",
     transition:{
        duration:1,
        repeat:Infinity,
        repeatType:"mirror",
        staggerChildren:0.1,
     },
    },
  } 
const About = () => {
  return (
    <div className="about">
       <div className="textContainer">
        <motion.h1 initial={{opacity:0,scale:0.5}} 
            whileInView={{opacity:1,scale:1}} 
            transition={{duration:1}} >Hii ! There its Rahul</motion.h1>
       </div>
       <motion.div className="description" initial={{opacity:0,scale:0.5}} 
            whileInView={{opacity:1,scale:1}} 
            transition={{duration:1}}>
        <p>I am passionate about software development and possess a strong project portfolio. I am eager to join an organization that values skill enhancement and personal growth. With my adaptable nature, innovative mindset, and dedication, I am confident in my ability to contribute effectively to your team and projects. I look forward to discussing how I can be an asset to your organization.</p>
       </motion.div>
      <div>
      </div>
    </div>
  )
}

export default About