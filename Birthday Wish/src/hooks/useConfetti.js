import { useState } from "react";

export default function useConfetti() {
  const [run, setRun] = useState(false);

  const trigger = () => {
    setRun(true);
    setTimeout(() => setRun(false), 5000);
  };

  return { run, trigger };
}