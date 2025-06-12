import Navbar from './components/Navbar'
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [text, settext] = useState("Enable dark mode");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  // const colorMode = ()=>{
  //     document.body.style.backgroundColor =;
  //     document.body.style.color = "black";
  //     setcolor("blue");
  // }
  const OnClickChange = () => {
    if (text === "Enable dark mode") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("btn").style.backgroundColor = "cyan";
      document.getElementById("btn").style.color = "black";
      settext("Enable light mode");
      showAlert("Dark mode has been enabled", "primary");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("btn").style.backgroundColor = "yellow";
      settext("Enable dark mode");
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
      <Navbar title="New navbar" aboutText="New text here" func1={OnClickChange} text={text}></Navbar>
      <Alert alert={alert} />
      <div className='container'>
      <About />
      <TextForm showAlert={showAlert}></TextForm>
          {/* <Routes> */}
            {/* <Route path="/home" element={<TextForm showAlert={showAlert}></TextForm>}/> */}
            {/* <Route path="/about" element={ <About />}/> */}
            {/* <Route path="/nav" element={<Navbar title="New navbar" aboutText="New text here" func1={OnClickChange} text={text}></Navbar> */}
{/* }/> */}

          {/* </Routes> */}
       
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
