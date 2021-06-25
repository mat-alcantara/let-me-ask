import React, { ButtonHTMLAttributes } from 'react';

import { Button as Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  isOutlined = false,
  ...props
}) => {
  return (
    <Container
      type="button"
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
};
