import React, {useState} from 'react'



export default function Textform(props) {

    const toUpCase = () =>{
        var x = text.toUpperCase();
        setText(x)
        props.showAlert("converted to upper case","success");


    }
    const toLowCase = () =>{
        var x = text.toLowerCase();
        setText(x)
        props.showAlert("converted to lower case","success");

    }

    const toListen = () =>{
        readOut(text);

    }

    const toChange = (event) =>{
        console.log("hello");
        setText(event.target.value)
    }

    function readOut(message) {
        const speech = new SpeechSynthesisUtterance()
        speech.text = message;
        speech.volume = 1;
        const allVoices = speechSynthesis.getVoices();
        speech.voice = allVoices[7];
        window.speechSynthesis.speak(speech)
    
    }
    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea value={text} className="form-control" onChange={toChange}     
         id="formbox" 
         rows="7"></textarea>
         <button className="btn btn-primary my-3 mx-1" onClick={toUpCase}>
            Click here to change to upper case
         </button>
         <button className="btn btn-primary my-3 mx-1" onClick={toLowCase}>
            Click here to change to lower case
         </button>
         <button className="btn btn-primary my-3 mx-1" onClick={toListen}>
            Click here to listen text
         </button>
        </div>
    </div>
    <div className="container">
        <h1>
            Your text summary 
        </h1>
        <p>number of words: {text.split(" ").length}</p>
        <p>number of letters: {text.length}</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
