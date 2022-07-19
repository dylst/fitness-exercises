import React from 'react';
import { Box, Typography } from '@mui/material';

import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ ml: { lg: '100px', xs: '0' } }}>
      <Typography
        sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Similar{' '}
        <span style={{ color: '#09bc8a', textTransform: 'capitalize' }}>
          Target Muscle
        </span>{' '}
        exercises
      </Typography>
      <Box direction='row' sx={{ p: 2, position: 'relative', width: '100%' }}>
        {targetMuscleExercises.length !== 0 ? (
          <HorizontalScrollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Box>
      <Typography
        sx={{
          fontSize: { lg: '44px', xs: '25px' },
          ml: '20px',
          mt: { lg: '100px', xs: '60px' },
        }}
        fontWeight={700}
        color='#000'
        mb='33px'
      >
        Similar{' '}
        <span style={{ color: '#468c98', textTransform: 'capitalize' }}>
          Equipment
        </span>{' '}
        exercises
      </Typography>
      <Box direction='row' sx={{ p: 2, position: 'relative', width: '100%' }}>
        {equipmentExercises.length !== 0 ? (
          <HorizontalScrollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default SimilarExercises;
