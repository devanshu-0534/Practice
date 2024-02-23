import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {

  const[mode, setMode] = useState('light')
  const toggleMode =()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#0a254e';
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title = "TextUtils"  mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
        <TextForm heading = "Enter Text" mode={mode}></TextForm>
      </div>
      
    </>
  );
}

export default App;
