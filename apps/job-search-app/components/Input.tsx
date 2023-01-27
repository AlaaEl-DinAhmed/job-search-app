import { Input, InputProps } from '@chakra-ui/react';
import { HTMLInputTypeAttribute } from 'react';

export type InputPropsType = {
  placeHolder: string;
  type: Exclude<HTMLInputTypeAttribute, 'search' | 'number'>;
  size: Pick<InputProps, 'size'>['size'];
};

export default function CustomInput({
  placeHolder,
  type,
  size,
}: InputPropsType) {
  return (
    <Input type={type} placeholder={placeHolder} size={size} width="auto" />
  );
}
