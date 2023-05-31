import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const PingDiv: FC<TProps> = ({ children }) => {
  return (
    <div className="relative h-[484px] w-[484px] rounded-full border-[10px] border-white p-28">
      {children}
      <div className="absolute left-[-6px] top-[-6px] h-[484px] w-[484px] animate-ping rounded-full border-[10px] border-white"></div>
    </div>
  );
};

export default PingDiv;
