"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Cursor, Typewriter, useTypewriter} from "react-simple-typewriter";

export default function Typewrite() {
  const [IsHi, IsSetHi] = useState(false);
  const [text]= 
    useTypewriter({
    words: ['Hi,'],
    loop: 1,
    typeSpeed:100,
    onLoopDone: () => IsSetHi(true) 
  })
  
  return (
    <div>
      <h1 id='typewriter' className="font-montserrat font-extrabold text-6xl">
        {IsHi ? (
          <div className="pl-5">
          {text}
          <Cursor cursorStyle=''/>
        <br />
         <Typewriter
         words={["I'm Natsuki"]}
         loop={1}
         cursor
         cursorStyle='_'
         typeSpeed={100}
         deleteSpeed={50}
         delaySpeed={1000}
       />
       </div>
        ) : (
          <div>
             {text}
        <Cursor cursorStyle='_'/>
      <br />
          </div>
        )}
      </h1>
    </div>
  );
}

