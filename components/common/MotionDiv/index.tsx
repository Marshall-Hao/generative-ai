import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

type TProps = {
  children: ReactNode;
  classNames?: string;
  mode: 'up' | 'down' | 'left' | 'right';
  delay: number;
  name: string;
};

const variants = {
  up: {
    hidden: { opacity: 0, x: 0, y: 10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 10 },
  },
  down: {
    hidden: { opacity: 0, x: 0, y: -10 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -10 },
  },
  left: {
    hidden: { opacity: 0, x: -10, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -10, y: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 10, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 10, y: 0 },
  },
};

const MotionDiv: FC<TProps> = ({
  children,
  mode,
  delay = 0,
  classNames = '',
  name,
}) => {
  return (
    <motion.div
      className={classNames}
      initial="hidden"
      animate="enter"
      exit="exit"
      key={name}
      transition={{ duration: 0.8, type: 'easeInOut', delay }}
      variants={variants[mode]}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
