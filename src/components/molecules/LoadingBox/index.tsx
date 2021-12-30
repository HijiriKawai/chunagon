import { Box, Container, Paper } from '@mui/material';
import { VFC } from 'react';

import { Loading } from '../../atoms/Loading';

export const LoadingBox: VFC = () => {
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
          <Loading />
        </Box>
      </Paper>
    </Container>
  );
};
