import { Button as MUIButton, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import { MouseEventHandler, VFC } from 'react';

type ButtonProps = {
  value: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  sx?: SxProps<Theme>;
};

export const Button: VFC<ButtonProps> = (props: ButtonProps) => {
  const { value, onClick, sx } = props;
  const style: SxProps<Theme> = {
    ...sx,
    borderRadius: 25,
  };

  return (
    <MUIButton onClick={onClick} variant="contained" size="large" sx={style}>
      {value}
    </MUIButton>
  );
};
