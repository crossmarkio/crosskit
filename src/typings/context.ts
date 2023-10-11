import { Dispatch, SetStateAction } from 'react';

interface Query {
  isLoading: boolean;
  data: any;
  isFetched: boolean;
  refetch: () => void;
  isStale: boolean;
  isError: boolean;
}

export interface IStoreContextProps {
  data: [any, Dispatch<SetStateAction<any>>];
  jwt: [string | undefined, Dispatch<SetStateAction<string | undefined>>];
  init?: Query;
}
