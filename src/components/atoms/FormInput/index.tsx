import { TextField } from '@mui/material';
import { VFC } from 'react';

type FormInputProps = {
  type: 'text' | 'password' | 'number';
  placeholder: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const FormInput: VFC<FormInputProps> = (props: FormInputProps) => {
  const { type, placeholder, label, onChange, value } = props;
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      label={label}
      onChange={onChange}
      value={value}
      required
    />
  );
};
