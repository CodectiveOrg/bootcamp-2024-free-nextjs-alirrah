import { useLayoutEffect, useMemo, useRef } from "react";

export const useDebounce = (
  callback: (value: string) => void,
  delay: number,
) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  let timeoutId: undefined | ReturnType<typeof setTimeout>;

  const naiveDebounce = (
    func: (value: string) => void,
    delayMs: number,
    value: string,
  ) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(value);
    }, delayMs);
  };

  return useMemo(
    () => (value: string) => naiveDebounce(callbackRef.current, delay, value),
    [delay],
  );
};
