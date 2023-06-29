import type { crossmark as Type } from "@/typings/crossmark";
import react, { useEffect, useState } from "react";

const useCrossmrk = () => {
  const [cs, setCs] = useState<Type | undefined>();

  useEffect(() => {
    setTimeout(() => {
      setCs(window.crossmark);
    }, 500);
  }, []);

  return cs;
};

export default useCrossmrk;
