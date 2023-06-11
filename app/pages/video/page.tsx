'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';

import GreenPingDiv from '@/components/common/GreenPingDiv';
import { useRouter } from 'next/navigation';
import useGenerativestroe from '@/store';

export default function Home() {
  const { push } = useRouter();
  const videoUrls = useGenerativestroe((state) => state.videoUrls);

  const onClick = () => push('/pages/last');

  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <MotionDiv mode="down" delay={0.2} classNames="mt-36 mb-[369px]">
        <GreenPingDiv>
          <SvgIcon href="world" fill="#34A853"></SvgIcon>
        </GreenPingDiv>
      </MotionDiv>

      <MotionDiv mode="up" delay={0.4}>
        {/* classNames="h-[608px] w-screen bg-white p-24"> */}
        {/* <SvgIcon href="building"></SvgIcon> */}
        <iframe
          className="h-[608px] w-screen"
          src="https://player.vimeo.com/video/834796966?h=7de55f2f94&autoplay=1&loop=1&title=0&byline=0&portrait=0"
          allow="autoplay"></iframe>
      </MotionDiv>

      <div className="mb-14 mt-[275px] text-center">
        <p className="text-3xl text-ggreen-normal">
          {videoUrls.length === 0
            ? ' Please wait while your video is being generated...'
            : 'Your video is generated.'}
        </p>
      </div>

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
          height={'h-[89px]'}
          bg={'bg-ggreen-normal'}
          text={'text-white'}
          disabled={videoUrls.length === 0}
          onClick={onClick}>
          {videoUrls.length === 0 ? 'Generating...' : 'Next'}
        </Button>
      </MotionDiv>
    </MotionMain>
  );
}
