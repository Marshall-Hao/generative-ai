'use client';
import { Fragment, FC, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import SvgIcon from '../SvgIcon';
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
} from '@heroicons/react/20/solid';

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
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-full">
      <label className="mb-12 block text-4xl	text-ggreen-normal">{title}</label>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Listbox.Button className="flex w-full cursor-default items-center justify-between rounded-full bg-white px-11 py-9	text-left	text-4xl text-ggreen-normal">
            <span className="truncate ">{selected}</span>
            <div className="h-6 w-11">
              <SvgIcon href="chevronDown" fill="#34A853"></SvgIcon>
            </div>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute z-10 ml-11 mt-1 w-[89%] overflow-auto rounded-xl bg-white  text-4xl text-ggreen-normal shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((ele, i) => (
                <Listbox.Option
                  key={i}
                  value={ele}
                  className={({ active }) =>
                    `relative cursor-default select-none px-11 py-8  ${
                      active ? 'bg-ggreen-light' : ''
                    }`
                  }>
                  {ele}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
