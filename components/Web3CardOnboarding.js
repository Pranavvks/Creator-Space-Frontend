import web3Logo from "../assets/WEB3LOGO.png"
import CryptoWallet from "../assets/cryptowallet.webp"
import Blockchain from "../assets/blockchain.png"


export default function CustomCards()

{
    const CustomCardContent = [{image:web3Logo , text:"Web 3 is the internet owned by the builders and users, orchestrated with tokens. In the  Web2 world , unaccountable groups of employees at large platforms decide how information gets ranked and filtered, which users get promoted and which get banned, and other important governance decisions. In cryptonetworks / web3 these decisions are made by the community using open and transparent mechanisms."}] ;
    
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
    


    return (
        <div>
            {
                CustomCardContent.map((CustomCardContent)=>{
                    <div className=""></div>
                })

                
            }
        </div>
    )
}