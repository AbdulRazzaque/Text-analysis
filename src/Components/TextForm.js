import React,{useState} from 'react'
export default function TextForm(props) {
  

          let  HandelUpclick=()=>{
                  let newText = text.toUpperCase();
                  setText(newText )
                  props.showAlert("Converted to uppercase!", "success")
              }
          let  Handelloclick=()=>{
                  let newText = text.toLowerCase();
                  setText(newText )
                  props.showAlert("Converted to lowercase!", "success")
              }
          let  HandelClearclick=()=>{
                  let newText = ("");
                  setText(newText )
                  props.showAlert("text cleared!", "success")

              }
          let  HandelCopyclick=(copyText)=>{
          let copy=  document.getElementById("myBox");
            copy.select();
            navigator.clipboard.writeText(copy.value)
            props.showAlert("Copyt to clipboard!", "success")

                  }
            

          let handelOnChange=(event)=>{
              setText(event.target.value)
     
          }
          const [text, setText]=useState("")


    return (
        <>
    <div className="container"style={ {color:props.mode==='dark'?'white':'black'}}>
         <h1 className='my-3 text-center ' >Text To Anlyziz </h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" required value={text} rows="8"style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} onChange={handelOnChange} ></textarea>
            </div>
            <button type="button" disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={HandelUpclick}>Convert to upper case</button>
            <button type="button" disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={Handelloclick}>Convert to lower case</button>
            <button type="button"disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={HandelClearclick}>Clear</button>
            <button type="button" disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={HandelCopyclick}  >Copy</button>
          
    </div>
    <div className="container mt-3"  style={ {color:props.mode==='dark'?'white':'black'}}>
       
       <h4>Your words <span className="badge rounded-pill text-bg-dark">{text.split(/\s/+ "").filter((element)=>{return element.length!==0}).length} </span>
       &nbsp; and characters <span className="badge rounded-pill text-bg-dark">{text.length} </span>
       &nbsp; Minutes read <span className="badge rounded-pill text-bg-dark">{0.008 * text.split("").filter((element)=>{return element.length!==0}).length}</span></h4>
        {/* <h3>Previwe</h3>
        <p>{text}</p> */}
    </div>

    {/* Here i am use props */}
    <div className="container my-3" style={ {color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Your Text Previwe
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} >
        <p>{text}  </p> 
      </div>
    </div>
  </div>
</div>
    </div>
    </>
    
  )
}
