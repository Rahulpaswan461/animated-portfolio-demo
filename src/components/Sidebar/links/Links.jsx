import {motion} from "framer-motion"
const variants={
    open:{
        transition:{
            staggerChildren: 0.1,
        },
    },
    closed:{
        transition:{
            staggerChildren:0.05,
            staggerDirection:-1,
            delay:1,
        }
    }
}
const itemVariants={
    //it apply on the values if the open than the item will come from top that's why y is 0
    open:{
       y:0,
       opacity:1,
    },
    //when the items is closed it comes from th bottom that's why y is 50
    closed:{
       y:50,
       opacity:0,
    },
}
const Links = () => {
const itmes=[
    "Homepage",
    "Services",
     "Portfolio",
     "Contact",
     "About"
]
  return (
    <motion.div className="links" variants={variants}>
     {itmes.map((item)=>(
        //to displat the coressponding page when the click
        <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} >{item}</motion.a>
     ))}
    </motion.div>
  )
}

export default Links