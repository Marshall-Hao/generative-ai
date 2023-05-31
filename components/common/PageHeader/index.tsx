import { FC, ReactNode } from 'react';
import GreenPingDiv from '../GreenPingDiv';
import MotionDiv from '../MotionDiv';

type TProps = {
  children: ReactNode;
  svg: ReactNode;
};

const PageHeader: FC<TProps> = ({ svg, children }) => {
  return (
    <>
      <MotionDiv mode="down" delay={0.2} classNames="mx-auto mt-36">
        <GreenPingDiv>{svg}</GreenPingDiv>
      </MotionDiv>
      <MotionDiv mode="up" delay={0.3} classNames="mt-16 text-center">
        <h1 className="mx-auto max-w-[863px] text-[55px] leading-tight text-ggreen-normal">
          {children}
        </h1>
      </MotionDiv>
    </>
  );
};

export default PageHeader;
