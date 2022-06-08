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
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear Text</button>

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

