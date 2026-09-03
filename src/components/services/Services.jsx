import { useRef } from "react"
import "./services.scss"
import {animate, motion, useInView} from "framer-motion"

const variants={
     initial:{
      x:-500,
      y:100,
      opacity:0,
     },
     animate:{
       x:0,
       y:0,
       opacity:1,
       transition:{
        duration:1,
        staggerChildren: 0.1
       },
     },
}
const Services = () => {

    const item="Services"
    const ref=useRef();

    const isInView=useInView(ref,{margin:"-100px"}); 

  return (
    <motion.div className="services" 
     variants={variants} 
    initial="initial" 
    ref={ref}
    animate="animate"
    >
        <motion.div className="textContainer"
         variants={variants}
          initial="initial"
           animate="animate">
            <p>I focus on helping your brand grow
            <br/>and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants} initial="initial" animate="animate">
            <div className="title">
                <img src="people.webp" alt=""/>
                <h1>
                    <motion.b whileHover={{color:"yellow"}}>Unique </motion.b>Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"yellow"}}>For Your </motion.b>Business.
                </h1>
                <motion.button ><motion.a href={`#${item}`}>WHAT WE DO?</motion.a></motion.button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} initial="initial" animate="animate">
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h1>Coding and Development Skills:</h1>
                <hr></hr>
             <p>1.Write clean, efficient, and well-documented code in programming languages relevant to the organization's tech stack.</p>
             <p>2.Contribute to the development of software applications, features, or modules.</p>
             {/* <button>GO</button> */}

            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h1>Web Development:</h1>
                <hr></hr>
             <p>1.Design and develop websites, web applications, or web components.</p>
             <p>2.Implement responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript.</p>
             {/* <button>GO</button> */}
            </motion.div>

            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h1> Data Structures and Algorithm:</h1>
                <hr></hr>
             <p>1.Solve complex programming problems by designing efficient algorithms and using appropriate data structures.</p>
             <p>2.Optimize code for performance and scalability.</p>

             {/* <button>GO</button> */}
            </motion.div>
            
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h1>Version Control :</h1>
                <hr></hr>
             <p>1.Managing version control systems like Git for tracking changes in software code.</p>
             <p>2.Collaborating with team members to ensure effective communication and coordination.</p>

             {/* <button>GO</button> */}
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services