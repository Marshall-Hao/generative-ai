'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Results from '@/components/common/Results';
import useGenerativestroe from '@/store';

export default function Home() {
  const result = useGenerativestroe((state) => state.result);

  console.log('result', result);
  return (
    <MotionMain bgColor="bg-ggreen-xlight">
      <PageHeader svg={<SvgIcon href="world" fill="#34A853"></SvgIcon>}>
        Generative AI recommendations <br /> for your selected audience segments
      </PageHeader>

      {result?.audience_places?.map((ele, i) => {
        return (
          <>
            <MotionDiv
              mode="left"
              delay={0.2}
              classNames={`mx-auto ${i === 0 ? 'mt-36' : 'mt-[83px]'}`}
              key={i}>
              <Results
                profile={ele.audience}
                destination={result.destination}
                l1={ele.places[0]}
                l2={ele.places[1]}
                l3={ele.places[2]}></Results>
            </MotionDiv>
            {i === 0 && (
              <div className="mt-[70px] w-[929px] border-2 border-t-ggreen-dark"></div>
            )}
          </>
        );
      })}
      {/* <MotionDiv mode="left" delay={0.2} classNames="mx-auto mt-36">
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
      </MotionDiv> */}

      <MotionDiv
        mode="up"
        delay={0.2}
        classNames="flex w-[929px] justify-evenly absolute top-[1670px]">
        <Link href="/pages/query">
          <Button
            width={'w-[388px]'}
            height={'h-[89px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}>
            Back
          </Button>
        </Link>

        <Link href="/pages/video">
          <Button
            width={'w-[388px]'}
            height={'h-[89px]'}
            bg={'bg-ggreen-normal'}
            text={'text-white'}>
            Generate
          </Button>
        </Link>
      </MotionDiv>
    </MotionMain>
  );
}
