import "./hero.scss"
import {motion} from "framer-motion"
const textVariants={
     initial:{
       x:-500,
       opacity:0,
     },
     animate:{
      x:0,
      opacity:1,
      transition:{
         duration:1,
         staggerChildren:0.1,
      },
     },
     scrollButton:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
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
      duration:15,
      repeat:Infinity,
      repeatType:"mirror",
      staggerChildren:0.1,
   },
  },
  
 
}
const Hero = () => {
  const item="Services"
  return (
    <div className="hero">
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>RAHUL PASWAN</motion.h2>
        <motion.h1 variants={textVariants}> Aspiring Software Developer and UI designer</motion.h1>
        <motion.div variants={textVariants} className="buttons">
          {/* <motion.button variants={textVariants}><a href={`#${item}`}></a>See latest work</motion.button>
          <motion.button variants={textVariants}>Contact Me</motion.button> */}
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate" >
        Software Developer and Problem Solver
      </motion.div>
      <div className="imagContainer">
        <img src="RAHUL NEW.png" alt="" />
      </div>
      </div>
  )
}

export default Hero