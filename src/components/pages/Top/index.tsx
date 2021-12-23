import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import { VFC } from 'react';

const buttonStyle: SxProps<Theme> = {
  width: 300,
  fontSize: 30,
};

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
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h3">未登録の方はこちら</Typography>
            <Button href="/signup" variant="contained" sx={buttonStyle}>
              新規登録
            </Button>
          </Stack>
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h3">登録済みの方はこちら</Typography>
            <Button href="/login" variant="contained" sx={buttonStyle}>
              ログイン
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};
