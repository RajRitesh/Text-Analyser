import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enable on not

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
     <Navbar title="TextAnalyser" aboutText="Preview" mode={mode} toggleMode={toggleMode} />
     <div className="container my-3">
     <h2><TextForm Example="Enter the Text to Analyse" mode={mode} /></h2>
     </div>
    </>
  )
}

export default App;
