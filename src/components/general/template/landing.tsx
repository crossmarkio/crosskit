import React, { ReactNode } from 'react';
import { ExtWrapper } from 'src/components/general/wrapper';
import Image from 'src/components/general/assets/images/png/background-2.png';
import Image2 from 'src/components/general/assets/images/png/background-1.png';
import Image3 from 'src/components/general/assets/images/png/background-3.png';

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const Landing = ({ children }: Props) => {
  return (
    <ExtWrapper>
      <div className="tw-absolute tw-bottom-0 tw-left-0 tw-z-0 tw-h-full tw-w-full tw-bg-gradient-to-b tw-from-gray-200 tw-to-white tw-opacity-60"></div>
      <img
        src={Image3}
        alt=""
        className="tw-absolute tw-top-0 tw-z-0 tw-h-full tw-w-full tw-overflow-hidden tw-object-cover tw-opacity-100"
      />
      {children}
    </ExtWrapper>
  );
};

export default Landing;
