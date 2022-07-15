import React,{useState} from 'react'
import Circle from './Circle'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let [modeRed,setMOdeRed]=useState('light')

  let   toggleModered =()=>{
    if(modeRed==='light'){
      setMOdeRed('red')
      document.body.style.backgroundColor='red'
    }
    else{
      setMOdeRed('light')
      document.body.style.backgroundColor='white'
  
    }
  }

  // here i am use pink color
  let [modepink,setMOdepink]=useState('light')
  let   toggleModepink =()=>{
    if(modepink==='light'){
      setMOdepink('pink')
      document.body.style.backgroundColor='pink'
    }
    else{
      setMOdepink('light')
      document.body.style.backgroundColor='white'
  
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="/">{props.title}</a> */}
      <Link className="navbar-brand" to="/" >{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            <Link className="nav-link" to="/" >Home</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/">About</a> */}
            <Link className="nav-link" to="/About" >About</Link>
          </li> 
        </ul>
         <Circle modeRed={modeRed} toggleModepink={toggleModepink} toggleModered={toggleModered}/>
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'black'}` }>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabel Dark Mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
