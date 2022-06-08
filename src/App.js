import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {



const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  })

  setTimeout(() => {
    setAlert(null);
  }, 1000);
}
const [mode, setMode] = useState('light'); // whether dark mode is enabled or not


const toggleMode=(cls) =>{
  if(mode === 'light'){
    setMode('dark'); 
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark mode has been enabled", "success");
  }
  else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has been enabled", "success");
  }
}
  return (
<>

<Navbar title="TextAnalyze" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
<Alert alert={alert}/>
<div className="container my-3">

          
          
          <TextForm showAlert={showAlert}  mode={mode} 
          heading="Try TextAnalyze - Convert to uppercase & lowercase"/>
          
        
</div>

</>
    );
}

export default App;


 