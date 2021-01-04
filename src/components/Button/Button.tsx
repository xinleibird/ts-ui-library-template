import React, { FC, ReactNode } from 'react';
import cxs from 'classnames';

type ButtonProps = {
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  ghost?: boolean;
  href?: string;
  htmlType?: 'button' | 'submit' | 'reset';
  icon?: ReactNode;
  loading?: boolean;
  sharp?: 'circle' | 'round';
  size?: 'large' | 'middle' | 'small';
  target?: '_self' | '_blank' | '_parent' | '_top';
  type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  href,
  htmlType = 'button',
  icon,
  sharp = 'round',
  size = 'middle',
  target,
  type = 'default',
  onClick,
  children,
}) => {
  const classes = cxs(
    'dxy-btn',
    { block, danger, ghost, disabled },
    {
      circle: sharp !== 'round',
      large: size === 'large',
      middle: size === 'middle',
      small: size === 'small',
    }
  );
  return (
    <button disabled={disabled} className={classes} type={htmlType}>
      {sharp === 'circle' ? icon : children}
    </button>
  );
};

export default Button;
