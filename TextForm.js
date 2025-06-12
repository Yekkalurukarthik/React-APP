import React, { useState } from "react";
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase was clickced","secondary");
        
    }
    const handleDownclick = ()=>{
        console.log("LowerCase was clicked "+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase was clickced","secondary");
    }
    const handleclear = ()=>{
        console.log("ClearText was clicked "+text);
        let newText ="";
        setText(newText);
        props.showAlert("Clear text was clickced","secondary");
    }
    const handleReverse = ()=>{
        console.log("Reverse was clicked "+text);
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
        props.showAlert("Reverse was clickced","secondary");
    }

    const handleOnchange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const[text,setText]=useState("Enter text here");
    return (
        <>
    <div className="container">
            <h1>{props.heading}</h1>
            <div className="md-3">
                <label for="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleDownclick}>Convert to lowercase</button>
            <button className="btn btn-primary" onClick={handleclear}>Clear TExt</button>
            <button className="btn btn-danger" onClick={handleReverse}>Reverse</button>
            <button className="btn btn-primary">Dark Mode</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.trim().split(" ").length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
//below code provides error if any