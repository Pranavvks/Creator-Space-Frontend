import React , {memo, useEffect, useState , useRef} from "react";
import { maxWidth } from "styled-system";
import BasicModal from "../ModalSheet/Modal";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"


const RangeSlider = ({classes, label, onChange, value, ...sliderProps}) => {
    
    // const [mouseState, setMouseState] = useState(null);
    // value will be changed only after the mouse event is over.
   
    const [stepIndex, setStepIndex] = useState(0);
    const values = [1,5,10,20,50,100,250,500,1000];
    const inputref = useRef(null);

    // Here instead of passing the data that is the values as props
    // we can create a reference  between the values and slider input


    // useEffect(()=>{
    //     setSliderVal(value)
    // },[value])

    const changeCallback = (e)=>{
        console.log(e.target.value)
        setStepIndex(e.target.value);
       
    }

    //when the mouse event is up , then we call the 
    // parent state.
    // The parent state is changed by using the helper function

    // useEffect(()=>{
    //     if(mouseState=="up")
    //         onChange(sliderVal)  
    // },[mouseState])


    return (
        
        <div className="flex flex-col space-y-2 p-2 w-[400px] ">
        <p>{label}</p>
        <h3>value:{values[stepIndex]}</h3>
        <input type="range" 
        min={0}
        max={8}
        value={values[stepIndex+1]}
        width={{maxWidth:"800px"}}
        step={1}
       
        className={`slider ${classes}`}
        id="myRange"
        onInput={changeCallback}
        
        />
        <ul className="flex justify-between px-[10px]">
        <li class="flex justify-center relative"><span class="absolute">1</span></li>
        <li class="flex justify-center relative"><span class="absolute">5</span></li>
        <li class="flex justify-center relative"><span class="absolute">10</span></li>
        <li class="flex justify-center relative"><span class="absolute">20</span></li>
        <li class="flex justify-center relative"><span class="absolute">50</span></li>
        <li class="flex justify-center relative"><span class="absolute">100</span></li>
        <li class="flex justify-center relative"><span class="absolute">250</span></li>
        <li class="flex justify-center relative"><span class="absolute">500</span></li>
        <li class="flex justify-center relative"><span class="absolute">1K</span></li>
        </ul>
        
        </div>
        
    );




}
export default memo(RangeSlider);