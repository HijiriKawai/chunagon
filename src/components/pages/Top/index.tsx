import { Container, Paper, Stack, Typography } from '@mui/material';
import { VFC } from 'react';

export const Top: VFC = () => {
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
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={12}
          mt={12}
          mb={12}
        >
          <Typography variant="h2">Chunagonへようこそ!</Typography>
        </Stack>
      </Paper>
    </Container>
  );
};
