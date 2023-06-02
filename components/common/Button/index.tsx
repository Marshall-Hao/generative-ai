import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type TProps = {
  children: ReactNode;
  width: string;
  height: string;
  bg: string;
  text: string;
};

const Button: FC<TProps> = ({
  children,
  width = '',
  height = '',
  bg = '',
  text = '',
}) => {
  const divClass = clsx(
    'flex items-center justify-center rounded-full',
    width,
    height,
    bg
  );
  const textClass = clsx('animate-pulse text-4xl', text);

  return (
    <div className={divClass}>
      <p className={textClass}>{children}</p>
    </div>
  );
};

export default Button;
