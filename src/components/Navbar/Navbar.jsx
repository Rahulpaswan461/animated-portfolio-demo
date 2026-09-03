import React from 'react'
import './navbar.scss'
import {motion} from "framer-motion"
import Sidebar from '../Sidebar/sidebar'
const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidenar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:0.5}}>MY CREATION</motion.span>
            <div className="social">

                <motion.a href="https://leetcode.com/paswan_rahul/" initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
                  <img src="leetcode.svg"
                   alt="" />
                  </motion.a>
                <motion.a href="https://auth.geeksforgeeks.org/user/rahulpaswandoon/practice" initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
                  <img src="geeks.svg" alt="" /></motion.a>

                <motion.a href="https://www.linkedin.com/in/rahul-paswan-78162a238/" initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
                  <img src="linkedin.svg" alt="" /></motion.a>

                <motion.a href="https://twitter.com/RahulPaswa61922" initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}}>
                  <img src="twitter.svg" alt="" /></motion.a>
            </div>
        </div>
    </div>
  )
}

export default Navbar