import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MusicianImage from "../assets/Musician.jpg" 


export default function Home() {
  return (

    <div id="parent">
      <div id="section-one" className='flex-col ml-40'>
        <header className='mt-6 ml-12 font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' >An equitable future for content-creators</header>
    <div id="subheading" className='mt-6 mb-6'>
    <div className='font-extrabold text-transparent text-1xl bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 inline-block'>Creator&apos;s space  </div> 
    <div className='inline-block ml-1'> is a Web3 solution which redefines the possibilites of connection between  artists and their community
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
  <div className='ml-[430px]'>
  <Image src={MusicianImage} alt="" width={200} height={450} ></Image> 
  </div>
  
    
    {/* <Button theme="primary" type="button" text="Launch Dapp" /> */}
    {/* <button>Explore</button> */}


    
    
    <div id="section-two" className='bg-black'>
  <h4 className='bg-black text-white'>We beleive that for creative pursuits to be followed</h4>
  <p></p>
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
