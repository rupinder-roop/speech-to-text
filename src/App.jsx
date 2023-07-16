import React, { useState } from "react";
import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from "react-use-clipboard";


const App = () => {
    const [textToCopy,setTextToCopy]=useState();
    const [isCopied, setCopied] = useClipboard(textToCopy);
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language : 'en-IN' })
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    if (!browserSupportsSpeechRecognition) {
        return null
      } 
      
      function reload(){
        window.location.reload()
    }
    return (
        <>
            <div className="container">
                <h2> SPEXTER </h2>
                <br/>
                <p>A Site that converts speech from the microphone to text and makes it available to your use. </p>
                <p className="para2">Just click in the box before procced to copy the text.</p>

                <div className="main-content" onClick={ () => setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">
                    <button onClick={setCopied}> {isCopied ? "Yes! Copied" : 'Copy To ClipBoard'}  </button>
                    <button onClick={startListening}>Start Listening </button>
                    <button onClick={SpeechRecognition.stopListening}>Stop Listening </button>
                    <button onclick="reload()">Clear</button>
                </div>
            </div>
        </>
    );
};

export default App;