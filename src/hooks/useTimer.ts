import { useEffect, useState } from "react";

function useTimer() {
  const [launchTime, setLaunchTime] = useState<number | undefined>(undefined);

  useEffect(() => setLaunchTime(Date.now()), []);

  const restart = () => {
    setLaunchTime(Date.now());
  };

  return { launchTime, restart };
}

export default useTimer;
