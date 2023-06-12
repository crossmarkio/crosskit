import React, { ReactNode } from 'react';
import { ExtWrapper } from 'src/components/general//wrapper';
import { Header } from 'src/components/general/header';
import { Bar } from 'src/components/general/nav';

interface Props {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

const App = ({ children }: Props) => {
  return (
    <ExtWrapper>
      <Header />
      <div className="tw-w-full tw-grow tw-overflow-auto tw-overflow-x-hidden">{children}</div>
      <Bar />
    </ExtWrapper>
  );
};

export default App;
