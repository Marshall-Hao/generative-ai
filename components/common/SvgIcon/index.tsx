import { FC } from 'react';

type SvgName = 'world' | 'location' | 'building';

type TProps = {
  href: SvgName;
  fill?: '#ffffff' | '#34A853';
  animate?: string;
};

const SvgIcon: FC<TProps> = ({ href, fill = '#ffffff', animate }) => {
  return (
    <svg style={{ width: '100%', height: '100%' }} className={animate}>
      <use href={`#icon-${href}`} fill={fill}></use>
    </svg>
  );
};

export default SvgIcon;
