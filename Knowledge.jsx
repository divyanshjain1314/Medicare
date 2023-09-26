import React from 'react'
import { Link } from 'react-router-dom'

export default function Knowledge() {
  return (
   <>
   <div className="knowledge_section layout_padding">
      <div className="container">
         <div className="knowledge_main">
            <div className="left_main">
               <h1 className="knowledge_taital">Knowledge of center</h1>
               <p className="knowledge_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="right_main">
               <div className="play_icon"><Link to="/"><img src="images/play-icon.png" alt="img" /></Link></div>
            </div>
         </div>
      </div>
   </div>
   </>
  )
}
