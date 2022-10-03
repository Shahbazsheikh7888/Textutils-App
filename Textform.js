import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("Upper case was clicked");
    let newText = text.toUpperCase()
    settext(newText)
  }
  const handleLoClick = ()=>{
    console.log("Lower case was clicked");
    let newText = text.toLowerCase()
    settext(newText)
  }
  const handleOnChange= (event)=>{
    console.log("onChange");
    settext(event.target.value)
  }
  const [text, settext] = useState("Enter the text here");
  return (
    <> 
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value = {text}  onChange  = {handleOnChange}  id="Mybox" rows="8"></textarea>
        </div>
        <buttton className="btn btn-primary mx-2" onClick ={handleUpClick} >Convert to uppercase</buttton>
        <buttton className="btn btn-primary" onClick ={handleLoClick} >Convert to lowercase</buttton>
      
    </div>
    <div className="container my-5">
      <h1>Your text summary</h1>
      <p>{text.length} characters and {text.split(" ").length} words</p>
      <p>{0.008 * text.split(" ").length}  minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>


    </div>



    </>
  
    
  )
}
