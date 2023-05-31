'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Results from '@/components/common/Results';

export default function Home() {
  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <PageHeader svg={<SvgIcon href="world" fill="#34A853"></SvgIcon>}>
        Generative AI recommendations <br /> for your selected audience segments
      </PageHeader>

      <MotionDiv mode="left" delay={0.2} classNames="mx-auto mt-[188px]">
        <Results
          profile={'Foodie'}
          destination={'Singapore'}
          l1={'Lau Pa Sat'}
          l2={'Bedok 85 Market'}
          l3={'East Coast Lagoon'}></Results>
      </MotionDiv>

      <div className="mt-[70px] w-[929px] border-2 border-t-ggreen-dark"></div>

      <MotionDiv mode="right" delay={0.2} classNames="mx-auto mt-[83px]">
        <Results
          profile={'Nature Goers'}
          destination={'Singapore'}
          l1={'Labrador Park'}
          l2={'Gardens by the Bay'}
          l3={'Sentosa'}></Results>
      </MotionDiv>

      <MotionDiv
        mode="up"
        delay={0.2}
        classNames="mt-24 flex w-[929px] justify-evenly">
        <Link href="/pages/query">
          <Button
            width={'w-[388px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}>
            Back
          </Button>
        </Link>

        <Link href="/pages/video">
          <Button
            width={'w-[388px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}>
            Generate
          </Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
