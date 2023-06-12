import React, { useEffect, useRef, useState } from 'react';

export function useStateRef<T>(initialValue: T) {
  const [value, _setValue] = useState(initialValue);

  const ref = useRef(value);

  const setValue = (data: any) => {
    ref.current = data;
    _setValue(data);
  };

  return [ref.current, setValue] as const;
}
