import React , {useState} from "react";
import RangeSlider from "../components/Slider/RangeSlider";




  
  



      
  
    





export default function NonLinearSlider() {
  const [value, setValue] = useState(1);



  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
 <RangeSlider />
 
           
      
  );
}