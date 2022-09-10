import React , {useState} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import TextField from '@mui/material/TextField';
import RangeSlider from '../Slider/RangeSlider';
import { height } from 'styled-system';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    height:1110 ,
    bgcolor: 'background.paper',
    borderradius: '0.5rem' ,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  export default function BasicModal ()
  {
    const[open , setOpen] = useState(false);
    const handleOpen = ()=> setOpen(true);
    const handleClose = ()=> setOpen(false);

    return (
        <div>
          <Button onClick={handleOpen}>Create NFT</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="rounded"
          >
            <Box sx={style}>
              
              <Typography id="modal-modal-title" variant="h6" component="h2" className='text-3xl font-semibold'>
                Input NFT Data
              </Typography>
             <div className='text-gray-400'>
              The Metadata Fields for your NFT
             </div>
              <form>
              <div className='flex justify-between'>
                <h1 className='mt-2 ml-2 mr-2 flex-none font-normal '><br /> Title  </h1>
                <TextField id="demo-helper-text-misaligned-no-helper" className='mt-16 -ml-64  w-96 flex-none' />
                <h1 className='flex-none -mr-64 mt-10 '>NFT Image</h1>
                <TextField id="demo-helper-text-misaligned-no-helper" className='mt-16 w-96 -ml-16 flex-none ' />
                </div>
                
                <div className='flex justify-between'>
                <h1 className='mt-2 mr-8 flex-none '><br /> Keyword Hashtags  </h1>
                <TextField id="demo-helper-text-misaligned-no-helper" className='mt-16 -ml-96  w-96 flex-none' />
                <h1 className='flex-none -mr-64 mt-10 '>Series Name</h1>
                <TextField id="demo-helper-text-misaligned-no-helper" className='mt-16 w-96 -ml-16 flex-none ' />
                </div>
                <div className='bg-slate-50 w-[966px] h-[206px] mt-10 -ml-5 rounded-lg shadow-lg flex'>
                 <div className='mt-4 ml-10 text-xl'>
                 Copies
                 </div>
                 <div className='text-red-600  '>
                 <br />
                 <br />
                    <div className=' mt-5 font-medium -ml-16 '>
                    Warning: the higher number of  <br /> copies you create the less valuable <br /> each  copy is likely to be </div>  
                    </div> 
                <RangeSlider arr = {[1,5,10,20,50,100,250,500,1000]} />
                </div> <div className='bg-slate-50 w-[966px] h-[206px] mt-10 -ml-5 rounded-lg shadow-lg flex'>
                 <div className='mt-4 ml-10 text-xl'>
                 Perpetual Royalty
                 </div>
                <div className='ml-10 -mt-5'>
                <RangeSlider arr = {[0,1,2,5,7.5,10,12,15,20]} />
                </div>

                </div>
                <div className='mt-5'>
                  Description
                </div>
                <TextField id="demo-helper-text-misaligned-no-helper"  className='w-[900px] mt-5' />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-56 ml-48 mt-5 rounded-lg">
  Go to Preview
</button>
              </form>
             
            </Box>
            
          </Modal>
        </div>
      );
  }