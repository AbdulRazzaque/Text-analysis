import React, { useState } from 'react'
import "./Circle.css"
export default function Circle(props) {
    
    let  toggleModered =()=>{ 
    document.getElementById("circle").addEventListener('click',function(){        
    })
    }
    let  toggleModepink =()=>{ 
    document.getElementById("circlepink").addEventListener('click',function(){  
    document.body.style.backgroundColor='red'  
        })
        
    }
  return (
    <div className='main-circle'>
    <div className="red" id='circlepink' onClick={props.toggleModered}>
   
       
  </div>
    <div className="pink" id='circle' onClick={props.toggleModepink}>
   
       
  </div>
  </div>
  )
}
