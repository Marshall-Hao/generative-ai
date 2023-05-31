'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';

export default function Home() {
  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <PageHeader svg={<SvgIcon href="world" fill="#34A853"></SvgIcon>}>
        Imagine you are a marketer <br /> for a travel brand
      </PageHeader>

      <MotionDiv mode="up" delay={0.3} classNames="mt-12 text-center">
        <p className="text-3xl text-ggreen-normal">
          Try using generative AI to create ads for YouTube Shorts <br /> to
          capture the attention of two traveler segments
        </p>
      </MotionDiv>

      <MotionDiv mode="down" delay={0.5} classNames="justify-self-end mt-auto">
        <Link href="/pages/results">
          <Button
            width={'w-[516px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}>
            Next
          </Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
