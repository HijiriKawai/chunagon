import { Typography } from '@mui/material';
import { VFC } from 'react';

export const Error: VFC = () => {
  return (
    <Typography align="center" color="error">
      エラーが発生しました
    </Typography>
  );
};
