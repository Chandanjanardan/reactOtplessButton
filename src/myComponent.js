import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import {faFacebook, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { Container } from 'react-bootstrap';
import "./App.css"

function MyComponent() {
  const addScript = () => {
    const script = document.createElement("script");
    script.src = "https://otpless.com/auth.js";
    document.body.appendChild(script);
  };

  const handleClick = () => {
    addScript();
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get("qr_ref_id")) {
      addScript();
    }
  }, []);

  function otpless(otplessUser) {
    console.log(JSON.stringify(otplessUser));
  }

  return (
    
         <div id='container'>
      {/* <button id="signin" onClick={handleClick}>Sign in</button> */}
      <FontAwesomeIcon id="signin" onClick={handleClick} icon={faWhatsapp} size='6x'/>
     
    </div>
    
   
  );
}

export default MyComponent;
