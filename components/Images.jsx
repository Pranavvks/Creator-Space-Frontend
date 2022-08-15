// import { ClassNames } from "@emotion/react"

import { borderRadius } from "styled-system"

const commonprops = {
    width : "calc(25vw * 100 / 375)",
    height : "calc(25vw * 100 / 375)",
    overflow: "hidden" ,
    borderRadius: "50%",
    boxShadow: "0px 45px 50px rgb(0 0 0 / 25%)"
    
   
}

const imageonestyle = {
    
     marginTop : "calc(20vw * 100 / 375)" ,
     marginLeft:"calc(2vw * 100/375)" ,
    ...commonprops ,
    display:"inline-block"
 }

const imagetwostyle = {
    ...commonprops,
    marginTop : "calc(-30vw * 100 / 375)",
    marginLeft: "calc(25vw * 100 / 375)",
    display:"inline-block"
}

const imagethreestyle ={
    ...commonprops,
    marginTop : "calc(-22vw * 100 / 375)" ,
    marginLeft: "calc(350vw * 100 / 375)"
}

const imagefourstyle = {
    ...commonprops,
    marginTop : "calc(24vw * 100 / 375)",
    marginLeft:"calc(35vw *100 / 375)"
}

const imagefivestyle = {
    ...commonprops,
   
    marginTop : "calc(-18vw * 100 / 375)",
    marginLeft:"calc(315vw *100 / 375)" ,
    display:"inline-block"
}


const imagesixstyle = {
    ...commonprops,
    marginTop : "calc(-25vw * 100 / 375)",
    marginLeft:"calc(194vw * 100 / 375)" ,
    display:"inline-block"
}

const imagesevenstyle = {
    ...commonprops,
    marginTop : "calc(-25vw * 100 / 375)",
    marginLeft:"calc(264vw * 100 / 375)" ,
    display:"inline-block"
}


const imageeightstyle={
    ...commonprops,
    marginRight: "calc(10vw * 100 / 375)",
    marginBottom: "calc(1vw * 100 / 375)",
    display : "inline-block"
    
}

const imagetenstyle={
    ...commonprops ,
    display:"inline-block",
    marginTop : "calc(2vw * 100 / 375)" ,
    marginLeft: "calc(20vw * 100 / 375)"
}

const imageelevenstyle ={
    ...commonprops,
    marginTop: "calc(26vw * 100 / 375)",
    marginLeft: "calc(90vw * 100 / 375)"
}

const imagetwelevestyle ={
    ...commonprops,
    marginTop: "calc(-27vw * 100 / 375)",
    marginLeft: "calc(190vw * 100 / 375)"
}

const imagethriteenstyle = {
    ...commonprops,
    marginTop:"calc(-27vw * 100 / 375)",
    marginLeft: "calc(310vw * 100 / 375)"
}


const logostyling = {
    
    marginTop: "calc(-29vw * 100 / 375)" ,
    marginLeft: "calc(89vw * 100 / 375)" 
     
}

const introtext = {
    marginTop: "calc(-75vw * 100 / 375)" ,
    marginLeft: "calc(69vw * 100 / 375)" 
}

const explorepara ={
    marginTop: "calc(-24vw * 100 / 375)" ,
    marginLeft: "calc(69vw * 100 / 375)" 
}


// }

export default function Images() {
       return (
        <div className="w-[784px] h-[880px]">
       <div style={imageonestyle} >
        <img src="https://images.pexels.com/photos/7090866/pexels-photo-7090866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div style={imagetwostyle}>
        <img src="https://images.pexels.com/photos/2114758/pexels-photo-2114758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div style={imagethreestyle}>
       <img src="https://images.pexels.com/photos/7802596/pexels-photo-7802596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       
       </div>
       <div style={imagefourstyle}>
        <img src="https://images.pexels.com/photos/3756772/pexels-photo-3756772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
       </div>
       <div style={logostyling} className="text-7xl text-transparent bg-clip-text bg-gradient-to-r text-black font-HomeMadeApple">
        Syllabo
       </div>
       <div style={imagefivestyle}>
        <img src="https://images.pexels.com/photos/1044488/pexels-photo-1044488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
       </div>
       <div style={imagesixstyle}>
        <img src="https://images.pexels.com/photos/5555113/pexels-photo-5555113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
       </div>
       <div style={imagesevenstyle}>
        <img src="https://images.pexels.com/photos/6147040/pexels-photo-6147040.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
       </div>
       <div style={imageeightstyle}>
       <img src="https://images.pexels.com/photos/6256289/pexels-photo-6256289.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
       </div>
       <div style={imagefivestyle}>
       <img src="https://images.pexels.com/photos/4212883/pexels-photo-4212883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div style={imagetenstyle}>
       <img src="https://images.pexels.com/photos/6954208/pexels-photo-6954208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
      
      
       <div style={introtext} className="text-[56px] font-extrabold font-YatraOne absolute">
        Equitable future 
        <br />
        <span>for Musicians 🎵</span>
       </div>
       
       <div style={explorepara} className=" text-black absolute">
        Find out how artists and their communities are leveraging the power of 
        <br />
        blockchain and the web to build the future of music 
       </div>
       <div  style={imageelevenstyle}>
       <img src="https://images.pexels.com/photos/6892900/pexels-photo-6892900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div style={imagetwelevestyle}>
        <img src="https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       <div style={imagethriteenstyle}>
        <img src="https://images.pexels.com/photos/5934347/pexels-photo-5934347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
       </div>
       </div>
    )

}


// Instead of the grid template by giving 
//https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// defined locations we can create the animation



