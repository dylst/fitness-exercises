import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/all.png';
import Back from '../assets/icons/back.png';
import Cardio from '../assets/icons/cardio.png';
import Chest from '../assets/icons/chest.png';
import LowerArms from '../assets/icons/lower-arms.png';
import LowerLegs from '../assets/icons/lower-legs.png';
import Neck from '../assets/icons/neck.png';
import Shoulders from '../assets/icons/shoulders.png';
import UpperArms from '../assets/icons/upper-arms.png';
import UpperLegs from '../assets/icons/upper-legs.png';
import Waist from '../assets/icons/waist.png';

const getIcon = (bodyPart) => {
  switch (bodyPart) {
    case 'back':
      return Back;
    case 'cardio':
      return Cardio;
    case 'chest':
      return Chest;
    case 'lower arms':
      return LowerArms;
    case 'lower legs':
      return LowerLegs;
    case 'neck':
      return Neck;
    case 'shoulders':
      return Shoulders;
    case 'upper arms':
      return UpperArms;
    case 'upper legs':
      return UpperLegs;
    case 'waist':
      return Waist;
    default:
      return Icon;
  }
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #74B3CE' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={getIcon(item)}
        alt='dumbbell'
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='3a1212'
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
