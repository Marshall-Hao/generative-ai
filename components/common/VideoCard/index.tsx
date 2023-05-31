import { FC } from 'react';
import Button from '../Button';

// type TProps = {
//   children: ReactNode;
// };

const VideoCard: FC<TProps> = () => {
  return (
    <div className="relative h-[779px] w-[438px] bg-[#596969]">
      <div className="absolute bottom-0 left-0 m-5 h-[136px] w-[352px] rounded-[28px] bg-[#25282A]/25 p-4">
        <div className="mb-2 flex">
          <div className="h-12 w-12 rounded-full bg-white"></div>
          <div className="ml-4">
            <div className="mb-3 h-[15px] w-[130px] bg-white"></div>
            <div className="h-[15px] w-[87px] bg-white"></div>
          </div>
        </div>
        <Button
          width={'w-[322px]'}
          bg={'bg-ggreen-normal'}
          text={'text-white text-[21px]'}>
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default VideoCard;
