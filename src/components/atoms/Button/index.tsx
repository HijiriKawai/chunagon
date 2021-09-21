import { MouseEventHandler, VFC } from 'react';
import { Button as MUIButton } from '@mui/material';

type ButtonProps = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const Button: VFC<ButtonProps> = (props: ButtonProps) => {
  const { value, onClick } = props;
  return (
    <MUIButton onClick={onClick} variant="contained" size="large" sx={{ borderRadius: 25 }}>
      {value}
    </MUIButton>
  );
};
