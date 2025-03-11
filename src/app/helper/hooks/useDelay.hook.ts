import {useEffect, useRef} from 'react';

const useDelayHook = (
  callback: () => void,
  array: unknown[] = [],
  duration: number = 1000,
) => {
  const timer = useRef<NodeJS.Timeout>();
  useEffect(() => {
    timer.current = setTimeout(() => {
      callback();
    }, duration);

    return () => {
      clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, array);
  return null;
};

export default useDelayHook;
