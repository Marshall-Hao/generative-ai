'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Select from '@/components/common/Select';
import { useRef } from 'react';
import useGenerativestroe from '@/store';

export default function Home() {
  const qOne = useRef();
  const qTwo = useRef();
  const qThree = useRef();

  const setResult = useGenerativestroe((state) => state.setResult);

  const onClick = () => {
    const res = fetch(
      'https://us-central1-project-916-387104.cloudfunctions.net/generate-videos',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          destination: qOne.current,
          audiences: [qTwo.current, qThree.current],
        }),
      }
    );

    res
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
      });
  };

  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <PageHeader svg={<SvgIcon href="world" fill="#34A853"></SvgIcon>}>
        Imagine you are a marketer <br /> for a travel brand
      </PageHeader>

      <MotionDiv mode="up" delay={0.3} classNames="mt-12 text-center">
        <p className="text-3xl text-ggreen-normal">
          Try using generative AI to create ads for YouTube Shorts <br /> to
          capture the attention of two traveler segments.
        </p>
      </MotionDiv>

      <MotionDiv
        classNames="mb-[200px] mt-36	flex w-8/12 flex-col	gap-y-20"
        mode="down"
        delay={0.4}>
        <Select
          options={['Philippines', 'Singapore', 'Vietnam']}
          title="Travel Destination"
          ref={qOne}></Select>
        <Select
          options={[
            'Foodies',
            'Adventure Seekers',
            'Relaxation Lovers',
            'Nature Goers',
          ]}
          title="Travel Audience Profile 1"
          ref={qTwo}></Select>
        <Select
          options={[
            'Foodies',
            'Adventure Seekers',
            'Relaxation Lovers',
            'Nature Goers',
          ]}
          title="Travel Audience Profile 2"
          ref={qThree}></Select>
      </MotionDiv>

      <MotionDiv mode="down" delay={0.5} classNames="justify-self-end mt-auto">
        <Link href="/pages/results" onClick={onClick}>
          <Button
            width={'w-[516px]'}
            height={'h-[89px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}>
            Next
          </Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
