// We are creating a custom hook : useSlider
// Why do we need this custom useSlider hook ?

import React , {useState,useMemo} from "react";
import RangeSlider from "./RangeSlider";
import { styled, alpha, Box } from '@mui/system';
import SliderUnstyled, { sliderUnstyledClasses } from '@mui/base/SliderUnstyled';


const Slider = ()=>{
    
    const[parentvalue , setparentValue] = useState(1);
    

    const sliderValueChanged = ((val)=>{
        setparentValue(val);
    } )

    const sliderProps = useMemo(
        () => ({
            min: 0,
            max: 8,
            value: parentvalue,
            step: 1,
            label: "This is a reusable slider",
            onChange: e => sliderValueChanged(e),
          }),
          
          [parentvalue]
    )

    return (
        <div>
          <h1>PARENT VALUE: {parentvalue}</h1>
          <RangeSlider {...sliderProps} classes="additional-css-classes" />
        </div>
      );
        
}










const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  300: '#66B2FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledSlider = styled(SliderUnstyled)(
  ({ theme }) => `
  color: ${theme.palette.mode === 'light' ? blue[500] : blue[300]};
  height: 6px;
  width: 100%;
  padding: 16px 0;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    opacity: 1;
  }

  &.${sliderUnstyledClasses.disabled} { 
    pointer-events: none;
    cursor: default;
    color: ${theme.palette.mode === 'light' ? grey[300] : grey[600]};
    opacity: 0.5;
  }

  & .${sliderUnstyledClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    opacity: 0.4;
  }

  & .${sliderUnstyledClasses.track} {
    display: block;
    position: absolute;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
  }

  & .${sliderUnstyledClasses.thumb} {
    position: absolute;
    width: 16px;
    height: 16px;
    margin-left: -6px;
    margin-top: -6px;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    border: 3px solid currentColor;
    background-color: #fff;

    :hover,
    &.${sliderUnstyledClasses.focusVisible} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? blue[400] : blue[300],
        0.15,
      )};
    }

    &.${sliderUnstyledClasses.active} {
      box-shadow: 0 0 0 0.25rem ${alpha(
        theme.palette.mode === 'light' ? blue[200] : blue[300],
        0.3,
      )};
    }
  }

  & .${sliderUnstyledClasses.mark} {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: currentColor;
    top: 50%;
    opacity: 0.7;
    transform: translateX(-50%);
  }

  & .${sliderUnstyledClasses.markActive} {
    background-color: #fff;
  }

  & .${sliderUnstyledClasses.valueLabel} {
    font-family: IBM Plex Sans;
    font-size: 14px;
    display: block;
    position: relative;
    top: -1.6em;
    text-align: center;
    transform: translateX(-50%);
  }

  & .${sliderUnstyledClasses.markLabel} {
    font-family: IBM Plex Sans;
    font-size: 12px;
    position: absolute;
    top: 20px;
    transform: translateX(-50%);
    margin-top: 8px;
  }
`,
);

const marks  = [
    {
      value: 0,  // 1
      scaledValue: 1,
      label: "1"
    },
    {
      value: 25, // 5
      scaledValue: 5,
      label: "5"
    },
    {
      value: 50, // 10
      scaledValue: 10,
      label: "10"
    },
    {
      value: 75, // 20
      scaledValue: 20,
      label: "20"
    },
    {
      value: 100, // 50
      scaledValue: 50,
      label: "50"
    },
    {
      value: 125, // 100
      scaledValue: 100,
      label: "100"
    },
    {
      value: 150, // 250
      scaledValue: 250,
      label: "250"
    },
    {
      value: 175, // 500
      scaledValue: 500,
      label: "500"
    },
    {
      value: 200, // 1000
      scaledValue: 1000,
      label: "1000"
    }
  ];
  const scale = value => {
    const previousMarkIndex = Math.floor(value / 25);
  //   console.log(previousMarkIndex)
    // 
    //1 5 10 20 50 100 250 500 1000
    const previousMark = marks[previousMarkIndex];
  //   const remainder = value % 25;
  //   if (remainder === 0) {
  //     return previousMark.scaledValue;
  //   }
  //   const nextMark = followersMarks[previousMarkIndex + 1];
  //   const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  //   console.log("From increment" + increment)
    return marks[previousMarkIndex].scaledValue
  };
  

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 500 }}>
      <StyledSlider
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={valuetext}
        scale={scale}
        marks={marks}
      />
    </Box>
  );
}
