import React from 'react'
import "./style.css"
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div

    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      type: "spring",
      duration: 0.9,
      delay: 0.1,
    }}
    className='footer'>
      <h1>TrackX</h1>
      <p></p>
    </motion.div>
  )
}

export default Footer