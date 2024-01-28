import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            {props.Example}
          </label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>

{/* -----------------------------------------Buttons----------------------------------------- */}
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      </div>

{/* -----------------------------------------Text Info----------------------------------------- */}

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summery</h2>
        <h4 className="my-1">
          <p className="my-1">
            {text.split(" ").length} Words and {text.length} Characters{" "}
          </p>
        </h4>
        <h5>{0.008 * text.split(" ").length} minutes required to read.</h5>
      </div>
      
{/* -----------------------------------------Preview----------------------------------------- */}

      <div className="card" style={{backgroundColor: props.mode==='dark'?'#3b4249':'white', color: props.mode==='dark'?'white':'black'}} >
        <div className="card-header" >Preview</div>
        <div className="card-body">
          <h5 className="card-title" />
          <h5 className="card-text">{text}</h5>
        </div>

        <div className=" ">
          <button className="btn btn-primary btn  mx-3 my-2 " onClick={handleCopy}>Copy Text</button>
        </div>
      </div>
    </>
  );
}
