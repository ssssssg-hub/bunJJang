import React, { useState } from "react";

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal);

  const handler = (e) => {
    setValue(e.target.value);
  };
  // input 값 넣어주기

  return [value, setValue, handler];
};

export default useInput;
