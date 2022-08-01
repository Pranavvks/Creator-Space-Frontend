import Web from "../assets/web-3.0.png"
import CryptoWallet from "../assets/cryptowallet.webp"
import Blockchain from "../assets/blockchain.png"
import { wrap } from "popmotion";
import {useState} from "react" ;
import Image from 'next/image'

 const CustomCards = ()=>{


    const CustomCardContent = [{ id:1 , image:Web, heading:"WHY WEB3?" , text:"Web3 is the internet owned by the builders and users, orchestrated with tokens. In the  Web2 world , unaccountable groups of employees at large platforms decide how information gets ranked and filtered, which users get promoted and which get banned, and other important governance decisions. In cryptonetworks / web3 these decisions are made by the community using open and transparent mechanisms.", width:470 , height:290}] ;
    
    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          };
        }
      };
    

      const swipeConfidenceThreshold = 10000;

      const swipePower = (offset , velocity ) => {
        return Math.abs(offset) * velocity;
      };
      
      const [[page, direction], setPage] = useState([0, 0]);
      const cardIndex = wrap(0,CustomCardContent.length,page);
      const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
      };

    return(  
        <div>
            {
                CustomCardContent.map((cardData)=>{
                  return (  
                  <li key={cardData.id}>
                    
                    <div className='max-w-[514px] h-[914px]  bg-black shadow-1xl rounded-3xl  rotate-90 ml-96'   id='card-one' >
                                          
                     <h1 className="text-white fixed py-96 px-8 -rotate-90">{cardData.heading}</h1>
   
  
                       <div className="-rotate-90 text-left text-white text-xl py-56  ">{cardData.text}</div>      
                       <div className="px-20  ">
                      <Image src={cardData.image} width={cardData.width} height={cardData.height} alt="Web3Logo" className="-rotate-90"/>
                       </div>  
                       </div> 
                       
                   
                  </li>
                  )
                })

                
            }
                
                
                {/* <div className='max-w-sm h-[534px]  bg-gradient-to-r from-slate-700 via-indigo-800  to-black-800 shadow-1xl rounded-3xl mt-8 shadow-indigo-800 transition ease-in-out  hover:-translate-y-8 -translate-x-3 delay-250  ' id='card-one'>
                    Hey 
                </div>     */}
            
        </div>
    )
}

export default CustomCards;