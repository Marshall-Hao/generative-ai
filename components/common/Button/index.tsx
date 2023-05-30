import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type TProps = {
  children: ReactNode;
  width: string;
  bg: string;
  text: string;
};

const Button: FC<TProps> = ({ children, width = '', bg = '', text = '' }) => {
  const divClass = clsx(
    'flex h-[89px] items-center justify-center rounded-full',
    bg,
    width
  );
  const textClass = clsx('animate-pulse text-4xl', text);

  return (
    <div className={divClass}>
      <p className={textClass}>{children}</p>
    </div>
  );
};

export default Button;
