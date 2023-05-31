import { FC, ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const BluePingDiv: FC<TProps> = ({ children }) => {
  return (
    <div className="relative h-32 w-32 rounded-full border-4 border-ggreen-normal px-5 py-4">
      {children}
      <div className="absolute left-[-6px] top-[-6px] h-32 w-32 animate-ping rounded-full border-4 border-ggreen-normal"></div>
    </div>
  );
};

export default BluePingDiv;
