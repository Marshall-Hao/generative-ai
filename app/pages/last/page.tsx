'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import GreenPingDiv from '@/components/common/GreenPingDiv';
import VideoCard from '@/components/common/VideoCard';

export default function Home() {
  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <MotionDiv mode="down" delay={0.2} classNames="mt-36">
        <GreenPingDiv>
          <SvgIcon href="world" fill="#34A853"></SvgIcon>
        </GreenPingDiv>
      </MotionDiv>
      <MotionDiv mode="up" delay={0.3} classNames="mt-16 text-center">
        <h1 className="mx-auto max-w-3xl text-[60px] leading-tight text-ggreen-normal">
          Here are the video ads generated for the <br />{' '}
          <strong className="text-ggreen-dark">Foodie</strong> and{' '}
          <strong className="text-ggreen-dark">Nature Goers</strong> audience
          segments
        </h1>
      </MotionDiv>

      <div className="mt-[133px] flex w-screen justify-evenly">
        <MotionDiv mode="left" delay={0.3}>
          <VideoCard></VideoCard>
        </MotionDiv>

        <MotionDiv mode="right" delay={0.3}>
          <VideoCard></VideoCard>
        </MotionDiv>
      </div>

      <MotionDiv mode="down" delay={0.5} classNames="justify-self-end mt-auto">
        <Link href="/">
          <Button
            width={'w-[516px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}>
            Start Again
          </Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
