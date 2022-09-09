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
    width: 800,
    height:900 ,
    bgcolor: 'background.paper',
    borderradius: '100%' ,
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
          >
            <Box sx={style}>
              
              <Typography id="modal-modal-title" variant="h6" component="h2" className='text-3xl font-semibold'>
                Input NFT Data
              </Typography>
             
              <form>
                <h1 className='mt-4'>Title</h1>
                <TextField id="demo-helper-text-misaligned-no-helper" sx={{width:"500px"}} />
                <div className='flex justify-between'>
                <h1 className='mt-4 flex-none -mr-5'>Keyword hashtags </h1>
                <TextField id="demo-helper-text-misaligned-no-helper" className='mt-16 -ml-52  w-80' />
                <h1 className='mt-4 flex-none -mr-48'>Series Name</h1>
                <TextField id="demo-helper-text-misaligned-no-helper" className='mt-16 w-80 ml-5' />
                </div>
                <div className='bg-slate-400 w-[456px] h-[156px] mt-10'>
                <RangeSlider />
                </div>
              </form>
             
            </Box>
            
          </Modal>
        </div>
      );
  }