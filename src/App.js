import React from 'react';
import { useEffect } from 'react';

function App() {
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    script.id = "otplessIdScript"
    document.body.appendChild(script);
  }
useEffect(() => {
  
  loadScript()
  window.otpless = (otplessUser) => {
     
    console.log(otplessUser)
  };
  return () => {
    let scr = document.getElementById('otplessIdScript')
    document.body.removeChild(scr);
  };
}, []);
  return (
    <div id ="otpless" className="App" custom="true">
      <button>hehe</button>
    </div>
  );
}

export default App;
