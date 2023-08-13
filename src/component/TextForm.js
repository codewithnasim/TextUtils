import React, { useState } from 'react'
import Navbar from '../NavebarPage/Navbar';




export default function TextForm(props) {
    <Navbar/>


    const [text, setText] = useState('');

    const handleClick = () => {
        let newtext = text.toUpperCase()// make all text to uppper case
        document.getElementById('txt').innerHTML = setText(newtext)
    }
    const handleClicklower = () => {
        let new1text = text.toLowerCase()//make alll text to lower text
        document.getElementById('txt').innerHTML = setText(new1text)
    }
    const handleClickclear = () => {
        let newtext =("");//clear all text
        document.getElementById('txt').innerHTML = setText(newtext)
    }
    const copy=()=>{
        let text=document.getElementById('txt')
        text.select();
        navigator.clipboard.writeText(text.value)

    }
    // const extraSpace=()=>{
    //     let newtext =text.split(/[  ]+/)
    //     setText=newtext.join(" ")

    // }
    

    const handleClickChange = (event) => {
        setText(event.target.value)

    }

   
    // setText("jkdfhkjusdhfikjulsd");

    return (
        <>
                
            <div className='container' style={{color:props.mode==='dark'?'white':'#042743' }} >
                <h1 className='mb-4 lg'style={{color:props.mode==='dark'?'white':'black'}} >Enter Text to Analyze</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode}`} id="txt" style={{color:props.mode==='dark'?'white':'black'}}  onChange={handleClickChange} value={text} rows="7"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClicklower}>convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={copy}>copy text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClickclear}>clear text</button>
                {/* <button className="btn btn-primary mx-1" onClick={extraSpace}>Remove extra space</button> */}
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743' }}>
                <h2>Your text summery is </h2>
                <p>total {text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
                <p>you can read it in {0.008 * text.split("").length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"enter some text to preview"}</p>
            </div>
        
        </>
    )
}
