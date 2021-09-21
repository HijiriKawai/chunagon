import { CircularProgress } from '@mui/material';
import { VFC } from 'react';

export const Loading: VFC = () => {
  return <CircularProgress size={100} />;
};
