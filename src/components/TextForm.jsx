import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick =() => {
    //console.log("Uppercase was clicked!" + text);

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }

  const handleLoClick =() => {
    //console.log("Uppercase was clicked!" + text);

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }

  

  const handleclearClick =() => {
    //console.log("Uppercase was clicked!" + text);

    let newText = ("");
    setText(newText);
    props.showAlert("Text has been cleared!", "success");
  }


  const handleOnChange = (event) => {
    //console.log("OnChange");
    setText(event.target.value);
  }

  const handlecopyclick = () => {
    const myBox = document.getElementById("myBox");
    myBox.select();
    document.execCommand("Copy");
    props.showAlert("Text has been copied!", "success");
  }

  const handlereplaceclick = () => {
     var replacefrom = prompt("Enter text which you want to replace:");
     var replaceto = prompt("Enter the new text:");
     let newText = text.replace (replacefrom, replaceto);
     setText(newText);
     props.showAlert("Text has been replaced!", "success");

  }

  const handlereverseclick = () => {
    let newText = text.toString().split('').reverse().join('');
    setText(newText);
    props.showAlert("Text has been reversed!", "success");
  }

  const repeatClick = () => {
    let newText = text + " " + text;
    //you can use text.replace(2); too but to implement space between the words we concatinated the text 2 times
    setText(newText);
    props.showAlert("Text has been repeated!", "success");
  }

    const [text, setText] = useState('');
    
  return (
    <>
      <div className = "container" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
  <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', 
color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" id="myButton" onClick={handlecopyclick}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlereverseclick}>Reverse Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={repeatClick}>Repeat Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlereplaceclick}>Replace Text</button>




</div>
<div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Words, {text.length} Characters</p>
  <p>{0.008 * text.split(" ").length}Minutes Read</p>

  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothing to preview!"}</p>
</div>
</>
  )
}

