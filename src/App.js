import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{useState}from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes ,
//   Route,

//   Link
// } from "react-router-dom";

function App() {
  let [mode,setMOde]=useState('light')
  const [alert, setAlert] = useState(null)
let showAlert=(message, type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert()
}, 1500);
}


let   toggleMode =()=>{
  if(mode==='light'){
    setMOde('dark')
    document.body.style.backgroundColor='#042743'
    // document.body.style.color='white'
    showAlert("Dark mode has been enebel" , "success")
  }
  else{
    setMOde('light')
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enebel", "success")

  }
}
  return (
    <div className="App">
      <Navbar title="My-react-app"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
          {/* <TextForm mode={mode} showAlert={showAlert} /> */}
            {/* <About /> */}
            <Routes>
      <Route path="/" element={ <TextForm mode={mode} showAlert={showAlert} />} />
      <Route path="/About" element={<About />} />
 
    </Routes>
    </div>

  );
}

export default App;
