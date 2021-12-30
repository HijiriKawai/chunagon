import { Typography } from '@mui/material';
import { VFC } from 'react';

export const Failed: VFC = () => {
  return (
    <Typography variant="h1" align="center" color="error">
      取得に失敗しました
    </Typography>
  );
};
