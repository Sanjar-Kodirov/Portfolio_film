import React from 'react'
import home1 from '../img/home1.png'
import styled from 'styled-components'
import {About, Description, Image, Hide} from '../Styles'
import {motion} from 'framer-motion'
const AboutSection = () => {
    const titleAnimation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 1}}
    }
    const contAnimate = {
        hidden: {x: 100, opacity:0 },
        show: {x: 0,  opacity:1, transition: {duration: 0.7, staggerChildren: 0.5}}
    }
    return (
        <About>
            <Description>
                <motion.div variants={contAnimate} initial="hidden" animate="show" className="title">
                     {/* <Hide><motion.h2 animate={{opacity: 1, transition: {duration: 2}}} initial={{opacity: 0}}> We work to make </motion.h2></Hide> */}
                     <Hide><motion.h2 variants={contAnimate}> We work to make </motion.h2></Hide>
                     <Hide><motion.h2 variants={contAnimate}>  your <span>dreams</span> come</motion.h2></Hide>
                     <Hide><motion.h2 variants={contAnimate}> true </motion.h2></Hide>
                </motion.div>
                <p>Contact us for any photography  or videography ideas that you have. We have professionals with amazing skills</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt=""/>
            </Image>
        </About>
    )
}



export default AboutSection
