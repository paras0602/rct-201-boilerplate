import React, { useState } from "react";

export const useCounter = (init: number) => {
  const [count, setCount] = useState(init);
  return {
    value: count,

    inc: (arg = 1) => {
      setCount(count + arg);
    },
    dec: (arg = 1) => {
      setCount(count - arg);
    },
    set: (arg: number) => {
      setCount(arg);
    },
  };
};
