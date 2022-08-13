import React from "react";
import ReactDOM from "react-dom";

import styled, { ThemeProvider } from "styled-components";
import { StaggerWrap } from "./Animation/StaggerWrap";
import {FadeInUpBox} from "./Animation/FadeInUpBox"


function rand(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}



 export default function IntroSection() {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="max-w-900 z-10">
    <StaggerWrap childrenDelay={0.2} ease="backInOut">
    <div className="mt-1 mb-10">
    <FadeInUpBox />
    Hello World
    </div>
    </StaggerWrap>  
    </div>
     
    </div>
  
  );
}

