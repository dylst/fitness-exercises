import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo2.png';

const Footer = () => (
  <Box mt='80px' bgcolor='#F6F3F4'>
    <Stack
      direction='row'
      sx={{ alignItems: 'center' }}
      justifyContent='center'
      flexWrap='wrap'
      px='40px'
      pt='24px'
    >
      <Typography
        variant='h3'
        textTransform='uppercase'
        fontFamily='Bebas Neue'
      >
        Gymwolf
      </Typography>
      <img src={Logo} alt='logo' style={{ width: '48px', height: '48px' }} />
    </Stack>
    <Typography
      variant='h5'
      sx={{ fontSize: { lg: '18px', xs: '10px' } }}
      mt='10px'
      textAlign='center'
      pb='40px'
    >
      © 2022 dylst
    </Typography>
  </Box>
);

export default Footer;
