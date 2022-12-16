// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

// import About from './components/About';
import {useState} from 'react';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 2000);
  }

  
  const toggleMode = () => {
    // console.log(mode)
    if (mode === 'light') {
        setMode('dark');
    }
    else {
        setMode('light');
    }
};
  
  return (
    <>
   
    
    {/* <BrowserRouter> */}
    <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <div className="container my-4">


      {/* <Routes>
        <Route exact path="/About" element={<About />} />
        <Route exact path="/">
        </Route>
      </Routes> */}
          <Textform showAlert = {showAlert} heading = "enter text" mode = {mode}/>

    </div>
    {/* <About/> */}
    
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
