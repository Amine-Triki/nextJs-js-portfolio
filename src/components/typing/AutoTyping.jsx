"use client"

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './AutoTyping.css'; 

const AutoTyping = () => {
    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["YouTuber", "Developer", "Blogger", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      cursorChar: '|️',
    });

     return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="autotyping">
      And I am a <span className="typing_text" ref={el}></span>
    </div>
  );
};

export default AutoTyping;
