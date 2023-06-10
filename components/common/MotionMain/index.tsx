import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opactity: 0, x: 0, y: 20 },
};

type TProps = {
  children: ReactNode;
  bgColor?: string;
  delay?: number;
};

const MotionMain: FC<TProps> = ({
  children,
  bgColor = 'bg-gblue-light',
  delay = 0,
}) => {
  const actualClass = clsx(
    'flex',
    'min-h-screen',
    'flex-col',
    'items-center',
    'pb-44',
    bgColor
  );

  return (
    <motion.main
      key="main"
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut', delay }}
      className={actualClass}>
      {children}
    </motion.main>
  );
};

export default MotionMain;
