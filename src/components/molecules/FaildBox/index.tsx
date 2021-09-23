import { Box, Container, Paper } from '@mui/material';
import { VFC } from 'react';
import { Faild } from '../../atoms/Faild';

export const FaildBox: VFC = () => {
  return (
    <Container component="main">
      <Paper
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginTop: 32,
            marginBottom: 32,
            alignItems: 'center',
          }}
        >
          <Faild />
        </Box>
      </Paper>
    </Container>
  );
};
