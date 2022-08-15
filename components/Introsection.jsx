import React from "react";
import ReactDOM from "react-dom";

import styled, { ThemeProvider } from "styled-components";
import { StaggerWrap } from "../ui/atoms/stagger-wrap";
import {FadeInUpBox} from "../ui/atoms/fade-in-up-box"
import {Typography} from "../ui/atoms/typography"
import {GridTemplate} from "../ui/atoms/grid-template"
import {Img} from "../ui/atoms/img"
import {Box} from "../ui/atoms/box"
import {ScaleBox} from "../ui/atoms/scale-box"
import {picsList} from "../assets/landingpageassets"
import {Container} from "../ui/atoms/container"
import {Flex} from "../ui/atoms/flex"
import Images from "../components/Images"



function rand(min, max) {
  return Math.floor(Math.random() * (+max - +min)) + +min;
}


const ProfilePic = styled(Img)`
  /* box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25); */
  box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.2);
`;
ProfilePic.defaultProps = {
  borderRadius: 33,
  height: [40, null, 30, 60],
  width: [40, null, 30, 60]
};




 export default function IntroSection() {
  return (
    
  //   <div className="flex flex-col justify-center items-center">
  //   <div className="max-w-900 z-10">
  //   <StaggerWrap childrenDelay={0.2} ease="backInOut">
  //   <div className="mt-1 mb-10">
  //   <FadeInUpBox yOffset={64} duration={4}>
  //                   Lorem ipsum
  //  </FadeInUpBox>
  //   </div>
  //   </StaggerWrap>  
  //   </div>
     
  //   </div>



   <div className="bg-white">
     {/* <Box>
    <Container>

    <Flex
            flexDirection="column"
            minHeight={[580, 580, 750, 800]}
            height={"calc(100vh - 64px)"}
            justifyContent="center"
            alignItems="center"
          >
  <Images />
    <Box  style={{ zIndex: 10 }}>
    <StaggerWrap childrenDelay={3.9} ease="backInOut">
    <h1 className=" font-extrabold text-5xl  text-white ">
									Creator<span className="text-violet-800">Space</span>
								</h1>
    
                
    <div className="flex flex-col justify-center items-center">
    <FadeInUpBox yOffset={64} duration={34}>
    <div className="text-5xl text-white mt-4 font-bold">
      Equitable future for Musicians
    </div>
    </FadeInUpBox>
    <FadeInUpBox yOffset={48} duration={34}>
      <div className="">
                  <Typography fontSize={[4, null, 4]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    natus, nesciunt quasi minima
                  </Typography>
                  </div>
                </FadeInUpBox>
                </div>
                </StaggerWrap>
                </Box>
                </Flex>
               
               

               
    

 </Container>
 </Box> */}

 <Images />
 
  </div>
  
  
  
  );
}

