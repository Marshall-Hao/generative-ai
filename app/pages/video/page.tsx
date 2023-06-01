'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import GreenPingDiv from '@/components/common/GreenPingDiv';

export default function Home() {
  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <MotionDiv mode="down" delay={0.2} classNames="mt-36">
        <GreenPingDiv>
          <SvgIcon href="world" fill="#34A853"></SvgIcon>
        </GreenPingDiv>
      </MotionDiv>

      <MotionDiv
        mode="up"
        delay={0.4}
        classNames="h-[608px] w-screen bg-white p-24 mt-[369px] mb-[275px]">
        <SvgIcon href="building"></SvgIcon>
      </MotionDiv>

      <div className="mb-14 text-center">
        <p className="text-3xl text-ggreen-normal">
          Please wait while your video <br /> is being generated...
        </p>
      </div>

      <Link href="/pages/last">
        <MotionDiv
          mode="down"
          delay={0.5}
          classNames="justify-self-end mt-auto relative">
          <svg
            width="1000"
            height="220"
            viewBox="0 0 1000 220"
            className="absolute -left-2.5 -top-2.5">
            <rect
              x="5"
              y="5"
              width="525"
              height="100"
              rx="50"
              ry="50"
              fill="none"
              stroke="#BBBBBB"
              stroke-width="12"></rect>
            <rect
              x="5"
              y="5"
              width="525"
              height="100"
              fill="none"
              stroke="#34A853"
              rx="50"
              ry="50"
              stroke-width="12"
              className="rect-animation"></rect>
          </svg>
          <Button
            width={'w-[516px]'}
            bg={'bg-ggreen-light'}
            text={'text-white'}>
            Next
          </Button>
        </MotionDiv>
      </Link>
      {/* <Button
        width={'w-[516px]  relative overflow-hidden'}
        bg={'bg-ggreen-light'}
        text={'text-white'}>
        Next
      </Button> */}
    </MotionMain>
  );
}
