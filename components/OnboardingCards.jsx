// function Onboarding ()
// {


//     const heading_props = "Getting started guide with Web3 & DApps"    
//     const predefinedcards = [{props: "" , color : ""} , {props: "" , color : ""}] ;
//     const [cards , setCards] = useState();

//     /**
//      * One way is to create a set of pre defined cards & use setCards to populate the array
//      * Alternate way is to create a object which holds the properties of the cards that we would 
//      * like to see for example. The card has a particular gradient of color , diffent props 
//      * Second way could be complicated.
//      * Third way : store the css properties within variables and apply the same within the style tag. 
//      */


//     return(
//         <div>Hi</div>
//     )
// }

// export default Onboarding ;

import React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import move from "lodash-move";

const CARD_COLORS = [{color : "bg-gradient-to-r from-purple-800 via-pink-500 to-red-600" , heading: "Why web3 ?" ,  props: "Web 3 is the internet owned by the builders and users, orchestrated with tokens. In the  Web2 world , unaccountable groups of employees at large platforms decide how information gets ranked and filtered, which users get promoted and which get banned, and other important governance decisions.In cryptonetworks / web3 these decisions are made by the community using open and transparent mechanisms."} , {color : "bg-gradient-to-r from-purple-800 via-pink-500 to-red-600" , heading: "" ,  props: ""}];

const CARD_OFFSET = 100;
const SCALE_FACTOR = 1.6;

const CardStack = (props) => {
  const [cards, setCards] = React.useState(CARD_COLORS);
  const moveToEnd = from => {
    setCards(move(cards, from, cards.length - 1));
  };

  const letters = Array.from(props["TEXT"])
  // console.log(letters);

  return (
    <div style={wrapperStyle}>
      <ul style={cardWrapStyle}>
        {cards.map((cards, index) => {

            

          const canDrag = index === 0;
        console.log(cards.color);
          return (
            
            <motion.li
                
              key={index}
              style={{
                ...cardStyle,
                cursor: canDrag ? "grab" : "auto"
              }}
              className={cards.color} 
              


              animate={{
                top: 1 * -CARD_OFFSET,
                scale:   SCALE_FACTOR,
                zIndex: -1* index
              }}
              drag={canDrag ? "y" : false}
              dragConstraints={{
                top: 0,
                bottom: 0
              }}
              onDragEnd={() => moveToEnd(index)}
              
            />
          
          );
        })}
      </ul>
    </div>
  );
};
const wrapperStyle = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
};

const cardWrapStyle = {
  position: "relative",
  width: "350px",
  height: "220px"
};

const cardStyle = {
  position: "absolute",
  width: "350px",
  height: "220px",
  borderRadius: "8px",
  transformOrigin: "top center",
  listStyle: "none"
};

export default CardStack ;
