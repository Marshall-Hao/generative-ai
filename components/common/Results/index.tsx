import { FC } from 'react';

type TProps = {
  profile: string;
  destination: string;
  l1: string;
  l2: string;
  l3: string;
};

const Results: FC<TProps> = ({ profile, destination, l1, l2, l3 }) => {
  return (
    <>
      <p className="max-w-[930px] text-center text-[38px] text-ggreen-normal">
        For <strong className="text-ggreen-dark">{profile}</strong>, we
        recommend the following places in{' '}
        <strong className="text-ggreen-dark">{destination}</strong> to visit.
      </p>
      <div className="mx-auto mt-9 h-[270px] w-[929px] rounded-[32px] bg-ggreen-light px-24 py-8">
        <ul className="list-disc text-[38px] text-ggreen-dark">
          <li>{l1}</li>
          <li>{l2}</li>
          <li>{l3}</li>
        </ul>
      </div>
    </>
  );
};

export default Results;
