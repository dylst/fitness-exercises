import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner-md.jpg';

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
        textTransform='uppercase'
      >
        Don't Dream <br /> Of It,
        <span className='hero-banner-text'> Train </span>
        <br />
        For It
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={5}>
        What are you waiting for?
      </Typography>
      <Button
        variant='contained'
        sx={{ backgroundColor: '#74B3CE', padding: '10px' }}
        onClick={() => {
          window.scrollTo({ top: 1000, left: 0, behavior: 'smooth' });
        }}
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
        mt={3}
      >
        Get Swole
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
