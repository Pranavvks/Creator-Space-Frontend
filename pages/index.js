import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MusicianImage from "../assets/Musician.jpg" 
import CommunityImage from "../assets/Community.png"


export default function Home() {
  return (

    <div id="parent">
      <div id="section-one" className='flex-col ml-40'>
        <header className='mt-6 ml-12 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' >An equitable future for content-creators</header>
    <div id="subheading" className='mt-6 mb-6'>
    <div className='font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 inline-block'>Creator&apos;s space</div> 
    <div className='inline-block ml-1'> is a Web3 solution which redefines the possibilites of commerce & connection between  artists and their community
    </div>  
    </div>
   </div>
    <div className='ml-[448px]'>
    <button className='bg-gradient-to-r from-purple-700 via-red-400 to-pink-600 rounded-full text-lg text-white h-10 p-2 font-bold '>
    <div className=''>  
    Get Started →
    </div>
  </button>
  
  </div>
  <div className='ml-[370px]'>
  <Image src={MusicianImage} alt="" width={330} height={450} ></Image> 
  </div>
  
    
    {/* <Button theme="primary" type="button" text="Launch Dapp" /> */}
    {/* <button>Explore</button> */}


    
    
    <div id="section-two" className='bg-gradient-to-r from-yellow-400 via-purple-400  to-lime-800 '>
    <div className=''>
    </div> 
   <div id='flexclass ' className=''>  
  <div className='text-white text-5xl ml-[450px] tracking-tighter '> No more  <span className='font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-orange-300 via-yellow-700 to-pink-200'>hefty cuts!</span> </div>
  <div className=' text-white text-4xl ml-[260px]'><span className='font-bold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-rose-400 via-orange-900 to-slate-600'> Content & community</span> decides your worth period.</div>
  <div className='ml-[440px] mt-8'>
  <Image src={CommunityImage} alt="" width={330} height={220} ></Image> 
  </div>
  <p className='text-black text-2xl mt-8 ml-32 mr-7 tracking-widest'>
We believe most of the value should go to the <span className='font-bold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-rose-400 via-purple-700 to-pink-200'></span> creator and the fans not the platforms.
 
  With the help of NFT&apos;s Web3 enables musicians to pursue their creative career without worrying about their finances.
 
  
  NFT&apos;s are a win-win for both the creator and their community. 
  Members of a community get exclusive access to the artists and a ton of value and utility from the NFT&apos;s they own.</p>
  
  </div> 
  <button className='bg-white rounded-full text-lg text-black h-10 p-2 font-bold ml-[544px] mt-12 '>
    <div className=''>  
    Learn More ▶️
    </div>
  </button>
  </div>    
      <div id="section-three">
      </div> 
      <div id="section-four">
      </div> 
      <div>
      <footer></footer>
      </div>
   </div>
  )
}
