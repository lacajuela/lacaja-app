import { IInputProps, VStack } from 'native-base';
import FloatingLabelInput from '../../FloatingLabelInput';
import React from 'react';

const FormInput = ({
  children,
  ...props
}: IInputProps & {
  label?: string;
  labelBGColor?: string;
  labelColor?: string;
  containerWidth?: string | number;
  children?: JSX.Element | JSX.Element[];
}) => (
  <VStack mb="6">
    <FloatingLabelInput {...props} />
    {children}
  </VStack>
);

export { FormInput };
