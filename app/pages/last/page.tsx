'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import GreenPingDiv from '@/components/common/GreenPingDiv';
import VideoCard from '@/components/common/VideoCard';
import useGenerativestroe from '@/store';

export default function Home() {
  const result = useGenerativestroe((state) => state.result);
  const videoUrls = useGenerativestroe((state) => state.videoUrls);
  const setvideoUrls = useGenerativestroe((state) => state.setvideoUrls);

  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <MotionDiv mode="down" delay={0.2} classNames="mt-36">
        <GreenPingDiv>
          <SvgIcon href="world" fill="#34A853"></SvgIcon>
        </GreenPingDiv>
      </MotionDiv>
      <MotionDiv mode="up" delay={0.3} classNames="mt-16 text-center">
        <h1 className="mx-auto max-w-4xl text-[60px] leading-tight text-ggreen-normal">
          Here are the video ads generated for the <br />{' '}
          <span className="text-ggreen-dark">
            {result.audience_places[0]['audience']}
          </span>{' '}
          and{' '}
          <span className="text-ggreen-dark">
            {result.audience_places[1]['audience']}
          </span>{' '}
          segments
        </h1>
      </MotionDiv>

      <div className="mt-[133px] flex w-screen justify-evenly">
        {videoUrls?.map((ele, i) => {
          return (
            <MotionDiv mode="left" delay={0.3} key={i}>
              <VideoCard videoUrl={ele}></VideoCard>
            </MotionDiv>
          );
        })}
      </div>

      <MotionDiv mode="down" delay={0.5} classNames="justify-self-end mt-auto">
        <Link href="/">
          <Button
            width={'w-[516px]'}
            height={'h-[89px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}
            onClick={() => setvideoUrls([])}>
            Start Again
          </Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
