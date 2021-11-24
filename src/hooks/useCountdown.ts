import { useRef, useEffect, useState, useCallback } from "react";

export default function useCountdown(interval: number) {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined
  );

  const stopCountdown = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }, []);

  const startCountdown = useCallback(
    (start: number) => {
      stopCountdown();
      setCounter(start);
      intervalRef.current = setInterval(
        () =>
          setCounter((c) => {
            if (c > 0) {
              return c - 1;
            }
            stopCountdown();
            return c;
          }),
        interval
      );
    },
    [interval, stopCountdown]
  );

  useEffect(() => stopCountdown, [stopCountdown]);

  return { counter, startCountdown };
}
