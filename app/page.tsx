'use client';
import SvgIcon from '@/components/common/SvgIcon';
import PingDiv from '@/components/common/PingDiv';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <MotionMain bgColor="bg-ggreen-normal">
      <div className="-mt-12">
        <MotionDiv mode="down" delay={0.4}>
          <PingDiv>
            <SvgIcon href={'world'} fill="#ffffff"></SvgIcon>
          </PingDiv>
        </MotionDiv>
      </div>

      <MotionDiv mode="down" delay={0.4}>
        <section className="mb-[92px] mt-40 text-center">
          <h3 className="text-[65px] text-white">Welcome to</h3>
          <h1 className="mx-auto mb-[92px] mt-8	block  px-11 text-[98px] leading-tight text-white">
            Custom Generative AI for a Travel Advertiser
          </h1>
          <p className=" text-[40px] text-white">
            Where can we take you today?
          </p>
        </section>
      </MotionDiv>

      <Link href="/pages/query">
        <Button
          bg={'bg-ggreen-xlight'}
          text={'text-ggreen-normal'}
          width={'w-[516px]'}
          height={'h-[89px]'}>
          Start
        </Button>
      </Link>

      <MotionDiv mode="up" delay={0.4}>
        <div className="mb-9 mt-[100px] text-center">
          <p className="max-w-3xl text-3xl text-white">
            Not an official Google product. <br /> For demonstration purpose
            only.
          </p>
        </div>
      </MotionDiv>

      <MotionDiv mode="up" delay={0.4}>
        <PingDiv>
          <SvgIcon href={'location'} fill="#ffffff"></SvgIcon>
        </PingDiv>
      </MotionDiv>
    </MotionMain>
  );
}
