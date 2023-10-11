import React from "react";
import { useState } from "react";

const useRerender = () => {
  const [rerender, setRerender] = useState(false);
  const call = () => setRerender((prev) => !prev);

  return { call };
};

export default useRerender;
