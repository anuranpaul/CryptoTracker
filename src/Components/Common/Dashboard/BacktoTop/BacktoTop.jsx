import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import "./style.css"
import { motion } from "framer-motion";
const BacktoTop = () => {

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

  return (
    <div className="back-to-top" id="myBtn" onClick={topFunction}>
      <motion.div
        initial={{ y: 0}}
        animate={{ y: -5 }}
        transition={{
          type: "smooth",
          repeatType: "mirror",
          duration: 1,
          repeat: Infinity,
          delay:1,
        }}
      ><KeyboardDoubleArrowUpIcon className='arrow'/>
        </motion.div></div>
  )
}

export default BacktoTop