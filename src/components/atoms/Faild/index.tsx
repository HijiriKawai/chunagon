import { VFC } from 'react';
import { Typography } from '@mui/material';

export const Faild: VFC = () => {
  return (
    <Typography variant="h1" align="center" color="error">
      取得に失敗しました
    </Typography>
  );
};
