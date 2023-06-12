import React, { ReactNode } from 'react';
import Image from 'src/components/general/assets/images/png/background-1.png';
import { ExtWrapper } from 'src/components/general//wrapper';

interface Props {
  padded?: boolean;
  relaxed?: boolean;
  image?: boolean;
  children: JSX.Element | JSX.Element[] | ReactNode;
}
const Modal = (props: Props) => {
  return (
    <ExtWrapper>
      <div
        className={`tw-relative tw-flex tw-h-full tw-w-full tw-grow tw-flex-col tw-items-center tw-bg-gradient3 tw-text-t1 ${
          props.padded && 'tw-px-16 tw-py-10'
        } ${props.relaxed && 'tw-px-12 tw-py-10'} tw-pt-12`}>
        {props.image && (
          <img
            src={Image}
            alt=""
            className="tw-absolute tw-top-0 tw-z-0 tw-bg-cover tw-opacity-10 tw-grayscale"
          />
        )}

        <div
          className={`tw-flex tw-h-full tw-w-full tw-grow tw-flex-col tw-items-center tw-justify-center tw-overflow-hidden tw-font-montserrat ${
            (props.padded || props.relaxed) && 'tw-pt-8'
          }`}>
          {props.children}
        </div>
      </div>
    </ExtWrapper>
  );
};

export default Modal;
