import { TextField } from '@mui/material';
import { VFC } from 'react';

type FormInputProps = {
  type: 'text' | 'password' | 'number';
  placeholder: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  margin?: 'normal' | 'none' | 'dense';
};

export const FormInput: VFC<FormInputProps> = (props: FormInputProps) => {
  const { type, placeholder, label, onChange, value, margin } = props;
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      label={label}
      onChange={onChange}
      value={value}
      margin={margin}
      required
    />
  );
};
