import { FC } from 'react';

type Des = ['Philippines', 'Singapore', 'Vietnam'];
type Dud = [
  'Foodies',
  'Adventure Seekers',
  'Relaxation Lovers',
  'Nature Goers'
];

type TProps = {
  options: Des | Dud;
  title:
    | 'Travel Destination'
    | 'Travel Audience Profile 1'
    | 'Travel Audience Profile 2';
};

const Select: FC<TProps> = ({ options, title }) => {
  return (
    <div className="h-28 w-3/5">
      <label>{title}</label>
      <select>
        {options.map((ele, i) => (
          <option key={i}>{ele}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
