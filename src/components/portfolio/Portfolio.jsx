import "./portfolio.scss"
import {motion ,useScroll, useSpring, useTransform} from "framer-motion"
import { useRef} from "react"
const items=[
    {
        id:1,
        title:"Social Networking Platform",
        img:"Social.png",
        link:"",
        desc:"Designed and developed a fully functional social networking platform using HTML, CSS, and JavaScript. Implemented user-friendly interfaces, interactive features, and responsive design, resulting in a successful and engaging online community.",
    },
    {
        id:2,
        title:"Usability Hub Clone",
        img:"Usability.png",
        link:"https://rahulpaswan461.github.io/Usability_hub_Clone/",
        desc:" Created a responsive website inspired by Usability Hub using HTML and CSS. Emphasized interactive design elements and user-friendly UI to enhance the overall user experience, resulting in an engaging and visually appealing platform.",
    },
    {
        id:3,
        title:"Sorting Visualizer",
        img:"MergeSort.png",
        desc:" Developed a sorting visualizer using React.js, HTML, and CSS, crafting an interactive tool that provides real-time visualization of sorting algorithms. Demonstrated expertise in front-end development, UI/UX design, and algorithm visualization to create an engaging and informative user experience",
    }
    , 
    {
        id:4,
        title:"Gym Websiste",
        img:"GYM.png",
        link:"https://poraskumar.github.io/getfit",
        desc:"This is a website developed for educational purpose. Our Basic goal is to understand how html, css, javascript, php are used to create a responsive and dynamic website through this project."
    },
    {
        id:5,
        title:"Vue.js Commerce",
        img:"https://images.unsplash.com/photo-1682687982468-4584ff11f88a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
        desc:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam vitae maxime aperiam consequatur! Facere cupiditate dolores commodi. Ipsum reiciendis incidunt veritatis, quo atque, repudiandae, officia aliquam porro reprehenderit perspiciatis ab?",
    }
]
const Single=({item})=>{   //we retrun a section for the each item of the array mean we call this method 
    //for every method so that it can create a separate method
   const ref=useRef()
  
   const {scrollYProgress}=useScroll({
    target:ref,
    // offset:["start start","end start"]
   })
   const y=useTransform(scrollYProgress,[0,1],[-100,100])
    return (
    <section >
    <div className="container">
        <div className="wrapper">
            <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <motion.button ><motion.a href={item.link} >See Demo</motion.a></motion.button>
            </motion.div>
        </div>
    </div>
    </section>
    )
}
const Portfolio = () => {

  const ref=useRef()
   const {scrollYProgress}=useScroll({
    target:ref,
    offset:["end end","start start"],
    })


  const scaleX=useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Features Work</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
           <Single item={item} key={item.id}/>  //call the single method to excute or return a section
        ))}
   </div>

  )
}

export default Portfolio