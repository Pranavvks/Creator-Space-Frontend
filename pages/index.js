import Image from 'next/image'
import MusicianImage from "../assets/Musician_one.png" 
import CommunityImage from "../assets/Community.png"
import SocialImage from "../assets/socialmedia.png"
import NFTImage from "../assets/nft .png"
import DashboardImage from "../assets/dashboard.png"
import CustomCards from '../components/CustomCards'
import { motion } from "framer-motion";


export default function Home() {
  return (

    <div id="parent">
      
      <div id="section-one" className='flex-col ml-40'>
        <header className='mt-6  font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-800 via-pink-500 to-red-600' >An equitable future for <span className='text-black'>musicians</span> </header>
    <div id="subheading" className='mt-6 mb-6'>
    <div className='font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 inline-block'>Creator&apos;s space</div> 
    <div className='inline-block ml-1 text-1xl'> is a Web3 solution which redefines the possibilites of commerce & connection between  artists and their community
    </div>  
    </div>
   </div>
    {/* <div className='ml-[448px]'>
    <button className='bg-gradient-to-r from-purple-700 via-red-400 to-pink-600 rounded-full text-lg text-white h-10 p-2 font-bold '>
    <div className=''>  
    Get Started →
    </div>
  </button>
  
  </div> */}
  {/* <div className='flex justify-evenly'> */}
  <div className='ml-[380px]'>
  <Image src={MusicianImage} alt="" width={330} height={650} ></Image> 
  </div>
  {/* <Image src={MusicianImageTwo} alt="" width={480} height={470} ></Image> 
  <Image src={MusicianImageThree} alt="" width={280} height={470} ></Image> 
  <Image src={FanImage} alt="" width={380} height={570} ></Image>  */}
  {/* </div> */}
    
    {/* <Button theme="primary" type="button" text="Launch Dapp" /> */}
    {/* <button>Explore</button> */}


    
    
    <div id="section-two" className='bg-gradient-to-r from-yellow-400 via-purple-400  to-lime-800 '>
    <div className=''>
    </div> 
   <div id='flexclass ' className=''>  
  <div className='text-white text-5xl ml-[450px] tracking-tighter '> <br /> No more  <span className='font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-700 to-pink-200'>hefty cuts!</span> </div>
  <div className=' text-white text-4xl ml-[260px]'><span className='font-bold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-rose-400 via-orange-900 to-slate-600'> Content & community</span> decides your worth period.</div>
  <div className='ml-[440px] mt-8'>
  <Image src={CommunityImage} alt="" width={330} height={220} ></Image> 
  </div>
  <p className='text-black text-2xl mt-8 ml-32 mr-7 tracking-widest'>
We believe most of the value should go to the <span className='font-bold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-rose-400 via-purple-700 to-pink-200'></span> creator and the fans not the platforms.
 
  With the help of NFT&apos;s Web3 enables musicians to pursue their creative careers without worrying about their  finances.
 
  
  NFT&apos;s are a win-win for both the creator and their community. 
  Members of a community get exclusive access to the artists and a ton of value and utility from the NFT&apos;s they own.</p>
  
  </div> 
  <button className='bg-white rounded-full text-lg text-black h-10 p-2 font-bold ml-[544px] mt-12 mb-14 '>
    <div className=''>  
    Learn More ▶️
    </div>
  </button>
  </div>    
      <div id="section-three" className='bg-black  '>
        <div className='text-white font-extralight text-5xl ml-56 mb-10'> <br /> We introduce you to the <span className='font-bold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-rose-400 via-purple-700 to-pink-200'> future</span> of 🎵</div>
        <div className='text-white font-medium text-2xl mt-5 tracking-wider ml-10'>Creatorspace is your gateway to the emerging creator economy. We integrate with artists and their communities to create immersive experiences on our platform which had never been possible in the Web2 world.</div>
        <div className='flex justify-evenly'>
        <div className='max-w-sm h-[534px]  bg-gradient-to-r from-slate-700 via-indigo-800  to-black-800 shadow-1xl rounded-3xl mt-8 shadow-indigo-800 transition ease-in-out  hover:-translate-y-8 -translate-x-3 delay-250  ' id='card-one'>
        <Image src={NFTImage} alt="" width={330} height={290} ></Image> 
        <h3 className='text-white font-extrabold text-2xl ml-16 '>NFT Marketplace</h3>
        <div className='text-white font-medium text-1xl mt-2 ml-7 -tracking-wider'>Explore NFT&apos;s created by your favorite artists. <br /> There are different levels of NFT&apos;s within a marketplace.Hangout tokens , Facetime tokens , Concert tokens , Brunch tokens and a lot more</div>
        <button className='text-white font-extrabold mt-4 ml-8'>Learn More</button>
       </div>
        <div className='max-w-sm h-[534px] w-100 bg-gradient-to-r from-blue-700 via-black-700  to-slate-900 shadow-1xl rounded-3xl mt-8 shadow-blue-800 transition ease-in-out  hover:-translate-y-8 -translate-x-3 delay-250 ' id='card-two'>
        <div className='ml-10'>
        <Image src={SocialImage} alt="" width={310} height={220} ></Image> 
        </div>
        <h3 className='text-white font-extrabold text-2xl ml-[94px] mt-14'>CreatorsDAO</h3>
        <div className='text-white font-medium text-1xl mt-2 ml-7 -tracking-wider'>Explore NFT&apos;s created by your favorite artists. <br /> There are different levels of NFT&apos;s within a marketplace.Hangout tokens , Facetime tokens , Concert tokens , Brunch tokens and a lot more</div>
        <button className='text-white font-extrabold mt-4 ml-8'>Learn More</button>
        
           </div>
        <div className='max-w-sm h-[534px] w-100 bg-gradient-to-r from-slate-700 via-pink-700  to-teal-800-800 shadow-1xl rounded-3xl mt-8 shadow-pink-800 transition ease-in-out  hover:-translate-y-8 -translate-x-3 delay-250 ' id='card-three'> 
         <div className='ml-10'>
         <Image src={DashboardImage} alt="" width={300} height={220} ></Image>
         </div>
         <h3 className='text-white font-extrabold text-2xl ml-[64px] mt-14'>Metric Monitoring</h3>
         <div className='text-white font-medium text-1xl mt-2 ml-7 -tracking-wider'>Explore NFT&apos;s created by your favorite artists. <br /> There are different levels of NFT&apos;s within a marketplace.Hangout tokens , Facetime tokens , Concert tokens , Brunch tokens and a lot more</div>
        <button className='text-white font-extrabold mt-4 ml-8'>Learn Moree</button>

           </div>
     
        </div>
      </div> 
      <div id="section-four" className='bg-neutral-900 w-[1400px] h-[900px] px-10 py-48'>
      <div>
        <motion.div className='text-white text-7xl flex justify-center -mt-36 mr-12 '>Onboarding Guide </motion.div>
        <CustomCards></CustomCards>
        </div>
      </div> 
      {/* <div className='bg-white h-14 w-40'>
      <span className="h-1 w-full bg-green-600 "></span>
      <hr className='border-2 w-auto' />
      <div className='grid grid-cols-auto  divide-y'> */}
        
      </div>
  )
      {/* <div className='text-black text-1xl font-extrabold  ml-5 mb-12 mt-5'>CreatorSpaces™</div> */}

     
      
      
     
{/* 
      <ul className=''>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul> */}
                // </div>
                // </div>
      

        
     }
    
      
    
   
