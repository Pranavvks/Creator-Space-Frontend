import React , {memo, useEffect, useState , useRef} from "react";
import { maxWidth } from "styled-system";
import BasicModal from "../ModalSheet/Modal";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"


const RangeSlider = (props) => {
    
    // const [mouseState, setMouseState] = useState(null);
    // value will be changed only after the mouse event is over.
   
    const [stepIndex, setStepIndex] = useState(0);
    const currentvalue = 0 ;
    

    // Here instead of passing the data that is the values as props
    // we can create a reference  between the values and slider input


    // useEffect(()=>{
    //     setSliderVal(value)
    // },[value])

    const changeCallback = (e)=>{
        console.log(e.target.value)
        setStepIndex(e.target.value);
        currentvalue=props.arr[stepIndex]
        console.log(currentvalue)
    }

    //when the mouse event is up , then we call the 
    // parent state.
    // The parent state is changed by using the helper function

    // useEffect(()=>{
    //     if(mouseState=="up")
    //         onChange(sliderVal)  
    // },[mouseState])


    return (
        
        <div className="flex flex-col  mt-20 ml-16 w-[400px] ">
       
        <input type="range" 
        min={0}
        max={8}
        value={props.arr[stepIndex+1]}
        width={{maxWidth:"900px"}}
        step={1}     
        id="myRange"
        onInput={changeCallback}
        
        />
        <ul className="flex justify-between px-[10px] ">
        <li class="flex justify-center relative"><span class="absolute">{props.arr[0]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[1]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[2]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[3]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[4]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[5]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[6]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[7]}</span></li>
        <li class="flex justify-center relative"><span class="absolute">{props.arr[8]}</span></li>
        </ul>
        
        </div>
        
    );




}
export default memo(RangeSlider);