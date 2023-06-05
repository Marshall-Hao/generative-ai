import { FC } from 'react';
import Button from '../Button';
import SvgIcon from '../SvgIcon';

type TProps = {
  videoUrl: string;
};

const VideoCard: FC<TProps> = ({ videoUrl }) => {
  console.log('videoUrl', videoUrl);

  return (
    <div className="relative h-[779px] w-[438px] bg-[#596969]">
      <div className="flex justify-center">
        <div className="absolute mt-8 h-[87px] w-[107px]">
          <SvgIcon href="hotel_logo"></SvgIcon>
        </div>
      </div>
      <div className="absolute flex h-full w-full justify-center">
        <div className="mt-[185px]">
          {' '}
          <video autoPlay muted src={videoUrl} className="h-[350px]"></video>
        </div>
      </div>
      <div className="absolute -right-[115px] top-[160px] h-full">
        <SvgIcon href="results_icons"></SvgIcon>
      </div>
      <div className="absolute bottom-0 left-0 mb-8 ml-5 h-[136px] w-[352px] rounded-[28px] bg-[#25282A]/25 p-4">
        <div className="mb-2 flex">
          <div className="h-12 w-12 rounded-full bg-white"></div>
          <div className="ml-4">
            <div className="mb-3 h-[15px] w-[130px] bg-white"></div>
            <div className="mb-2 h-[15px] w-[87px] bg-white"></div>
          </div>
        </div>
        <Button
          width={'w-[322px]'}
          height={'h-[45px]'}
          bg={'bg-ggreen-normal'}
          text={'text-white text-[21px]'}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
