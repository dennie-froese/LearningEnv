import { useEffect, useState } from "react";

function useTimer() {
  const [launchTime, setLaunchTime] = useState<number | undefined>(undefined);

  useEffect(() => setLaunchTime(Date.now()), []);

  return launchTime;
}

export default useTimer;
