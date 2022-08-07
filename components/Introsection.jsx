import React from "react";
import { Annotation, Box,
    Container,
    FadeInUpBox,
    Flex,
    GridTemplate,
    Header,
    Heading,
    Img,
    Link,
    Paragraph,
    ScaleBox,
    StaggerWrap,
    theme,
    Typography } from "../ui";

    import { picsList } from "../assets/landingpageassets";
    import styled, { ThemeProvider } from "styled-components";

    function rand(min, max) {
        return Math.floor(Math.random() * (+max - +min)) + +min;
      }

      const ProfilePic = styled(Img)`
      /* box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.25); */
      box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.2);
    `;
    ProfilePic.defaultProps = {
      borderRadius: 4,
      height: [40, null, 60, 80],
      width: [40, null, 60, 80]
    };   
    
    const MainHeading = styled(Typography)``;
    MainHeading.defaultProps = {
      as: "h1",
      fontWeight: 2,
      color: "textTitle",
      fontSize: [6, null, 10, 11],
      lineHeight: [3, null, 6, 8]
    };
    

export default function IntroSection () 
    {
       return(
    <div>
        <ThemeProvider theme={theme} />
      <Header />
      <Box>
        <Container>
          <Flex
            flexDirection="column"
            minHeight={[580, 580, 750, 800]}
            height={"calc(100vh - 64px)"}
            justifyContent="center"
            alignItems="center"
          >
            <Box maxWidth={["auto", 400, 500, 800]} style={{ zIndex: 1 }}>
              <StaggerWrap childrenDelay={0.2} ease="backInOut" delayOrder={""}>
                {/* <FadeInUpBox yOffset={64} duration={1}>
                  <Typography color="brand" fontWeight={2} fontSize={[3, null, null, 6]}>
                    LOGO
                  </Typography>
                </FadeInUpBox> */}
                <MainHeading mt={1} mb={["20px", null, "30px", "40px"]}>
                  <FadeInUpBox yOffset={64} duration={1}>
                    Lorem ipsum
                  </FadeInUpBox>
                  <FadeInUpBox yOffset={64} duration={1}>
                    dolor
                  </FadeInUpBox>
                </MainHeading>
                <FadeInUpBox yOffset={48} duration={1}>
                  <Typography fontSize={[4, null, 5]}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                    natus, nesciunt quasi minima
                  </Typography>
                </FadeInUpBox>
              </StaggerWrap>
            </Box>
          </Flex>
          <Flex justifyContent="center" style={{ overflowX: "hidden" }}>
            <GridTemplate>
              {picsList.map((item, key) =>
                item !== null ? (
                  <Box key={key} pt={key % 2 === 0 ? 4 : 0} textAlign="center">
                    <ScaleBox duration={1} delayOrder={rand(1, 12)}>
                      <ProfilePic src={item.src} alt="" />
                    </ScaleBox>
                  </Box>
                ) : (
                  <Box />
                )
              )}
            </GridTemplate>
          </Flex>
        </Container>
      </Box>
      </div>
      
     
       )
    }
    
