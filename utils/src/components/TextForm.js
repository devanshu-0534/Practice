import React, { useState } from 'react'


export default function TextForm(props) {
    const[text, setText] = useState("Write Your Thought")
    function changeUpClick(){
 
        let newText = text.toUpperCase();
        setText(newText)
    }
    function changeLowClick(){
     
        let newText = text.toLowerCase();
        setText(newText)
    }
    function changeClearClick(){
  
        let newText = (" ")
        setText(newText)
    }
    function copyText(){
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    function changeHandler(event){
        console.log(event)
        setText(event.target.value)

    }
  return (
    <>
       <div className ='container' style={{color: props.mode==='dark'? 'white':'black'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-4">
                <label htmlFor="myBox" className="form-label border border-dark"></label>
                <textarea  value={text} onChange={changeHandler} className="form-control" id="myBox" 
                style={{backgroundColor: props.mode==='dark'? '#0a254e':'light',
                color:props.mode==='dark'? 'white':'black' }} rows="8"/>
            </div>  
            <button className="btn btn-primary mx-2" onClick={changeUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={changeLowClick}>Convert Lower Case</button>  
            <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button> 
            <button className="btn btn-primary mx-2" onClick={changeClearClick}>Clear Text</button> 
        </div> 
        <div style={{color: props.mode==='dark'? 'white':'black'}}> 
            <h2 className='my-3'>Text Summary</h2>
            <p>{text.split(" ").length} Words and {text.length} Character</p>
            <p>{0.008 * text.split(" ").length} required to Read Text</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
    
  )
}
