import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type TProps = {
  children: ReactNode;
  width: string;
  height: string;
  bg: string;
  text: string;
  onClick?: () => undefined;
  disabled?: boolean;
};

const Button: FC<TProps> = ({
  children,
  width = '',
  height = '',
  bg = '',
  text = '',
  onClick = () => undefined,
  disabled = false,
}) => {
  const divClass = clsx(
    'flex items-center justify-center rounded-full transition-color disabled:bg-ggreen-light',
    width,
    height,
    bg
  );
  const textClass = clsx('animate-pulse text-4xl', text);

  return (
    <button className={divClass} onClick={onClick} disabled={disabled}>
      <p className={textClass}>{children}</p>
    </button>
  );
};

export default Button;
