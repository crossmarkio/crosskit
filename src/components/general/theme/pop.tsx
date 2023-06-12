import React, { useEffect, useState } from 'react';
import { animate, AnimatePresence, motion } from 'framer-motion';
const variants = {
  init: { scale: 1 },
  expand: { scale: 200, zIndex: 0 },
  fade: { opacity: 0 },
  close: { scale: 1 },
  up: { top: 0, left: 0 },
  down: { top: '100%', left: 0 },
};

const transition = {
  ease: 'easeInOut',
  duration: 0.3,
};

const Pop = () => {
  const [change, setChange] = useState(false);
  const [color, setColor] = useState('black');

  useEffect(() => {
    if (change)
      setTimeout(() => {
        setChange(!change);
        //setColor('white');
      }, 300);
  }, [change]);
  return (
    <div className="tw-absolute tw-bottom-0 tw-z-50 tw-flex tw-h-9 tw-w-full tw-flex-shrink-0 tw-items-center tw-justify-center">
      <motion.div
        variants={variants}
        initial={'init'}
        animate={change ? 'expand' : 'init'}
        exit={'close'}
        transition={transition}
        onClick={() => setChange(!change)}
        className={`tw-absolute tw-h-3 tw-w-3 tw-rounded-full tw-border tw-bg-white hover:tw-cursor-pointer`}></motion.div>
    </div>
  );
};

export default Pop;
