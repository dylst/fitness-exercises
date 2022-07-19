import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner-sm.jpg';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position='relative'
      p='20px'
    >
      <Typography color='#74B3CE' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '40px' },
        }}
        mb='28px'
        mt='30px'
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        fontSize='22px'
        fontFamily='Alegreya'
        lineHeight='35px'
        mb={5}
      >
        Check out the most effective exercises
      </Typography>
      <Button
        variant='contained'
        href='#exercises'
        sx={{ backgroundColor: '#74B3CE', padding: '10px' }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color='#64B3CE'
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize='200px'
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
