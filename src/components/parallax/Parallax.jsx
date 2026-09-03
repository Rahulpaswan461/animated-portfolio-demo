import "./parallax.scss"
import {useRef} from "react"
import {motion, useScroll,useTransform} from "framer-motion"

const Parallax = ({type}) => {
  
    const ref=useRef()
   //to connect with the parallax element so that we can easily parform the operation
     const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"],
     })

     const yText=useTransform(scrollYProgress,[0,1],["0%","500%"]) //the value to change the direction
     const yBg=useTransform(scrollYProgress,[0,1],["0%","100%"])   //some other animtion to do the changes
  return (
    <div className="parallax" ref={ref}
     style={{background :type==="Services" 
    
    ? "linear-gradient(180deg,#111132,#0c0c1d)"
    : "linear-gradient(180deg,#111132,#505064)",}}>

    <motion.h1 style={{y: yText}}>{type==="Services" ? "What We Do?" : "What We Did?"}</motion.h1>
    <motion.div className="mountains"></motion.div>
    <motion.div className="planets" style={{y:yBg,backgroundImage:`url(${type==="Services" ? "/planets.png" : "/sun.png"})`}}    
    ></motion.div>
    <motion.div className="stars" style={{x:yBg}}></motion.div>
    </div>
  )
}

export default Parallax