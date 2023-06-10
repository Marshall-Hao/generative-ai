'use client';
import SvgIcon from '@/components/common/SvgIcon';
import MotionMain from '@/components/common/MotionMain';
import MotionDiv from '@/components/common/MotionDiv';
import Button from '@/components/common/Button';
import Link from 'next/link';
import PageHeader from '@/components/common/PageHeader';
import Results from '@/components/common/Results';
import useGenerativestroe from '@/store';
import { useRouter } from 'next/navigation';

export default function Home() {
  const result = useGenerativestroe((state) => state.result);
  const setvideoUrls = useGenerativestroe((state) => state.setvideoUrls);
  const { push, prefetch } = useRouter();

  // console.log('result', result);
  const onClick = () => {
    const res = fetch('https://generate-videos-bh2e4ujswa-uc.a.run.app', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destination: result.destination,
        audience_places: result.audience_places,
      }),
    });
    res
      .then((res) => res.json())
      .then((data) => {
        if (data.audience_places) {
          prefetch('/pages/last');
          setvideoUrls(data.audience_places.map((ele: any) => ele.video_url));
        }
      });
    push('/pages/video');
  };

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
                l1={ele.places[0].name}
                l2={ele.places[1].name}
                l3={ele.places[2].name}></Results>
            </MotionDiv>
            {i === 0 && (
              <div
                className="mt-[70px] w-[929px] border-2 border-t-ggreen-dark"
                key={'div' + i}></div>
            )}
          </>
        );
      })}
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

        <Button
          width={'w-[388px]'}
          height={'h-[89px]'}
          bg={'bg-ggreen-normal'}
          text={'text-white'}
          onClick={onClick}>
          Generate
        </Button>
      </MotionDiv>
    </MotionMain>
  );
}
