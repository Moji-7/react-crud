import { useState } from "react";

const useTheme = (_mode) => {
  const [mode, setMode] = useState(_mode);
  console.log(_mode);
  const handleMode = (m) => {
    setMode(() => m);
  };
  return [mode, handleMode];
};

export default useTheme;
