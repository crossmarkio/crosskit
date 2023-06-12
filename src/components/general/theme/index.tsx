import React, { useEffect, useState } from 'react';
import { useStateContext } from 'src/context/state';

interface Props {
  children?: React.ReactNode;
}

const Theme = ({ children }: Props) => {
  const repo = useStateContext().repo;
  const [theme, setTheme] = useState(repo.User.isMounted() ? repo.Core.getTheme() : 'light');

  const handleUpdate = () => {
    setTheme(repo.Core.getTheme() || 'light');
  };

  useEffect(() => {
    repo.User.on('mountedUser', handleUpdate);
    repo.Core.on('generalUpdate', handleUpdate);
    return () => {
      repo.Core.removeListener('generalUpdate', handleUpdate);
      repo.User.removeListener('mountedUser', handleUpdate);
    };
  }, []);

  useEffect(() => {
    handleUpdate();
  }, [repo.state]);

  return <div className={`${theme} tw-transition-colors tw-duration-300`}>{children}</div>;
};

export default Theme;
