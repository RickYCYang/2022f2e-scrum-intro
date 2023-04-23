import { useState, useEffect } from 'react';

const useFrame = (initFrame: number = 1) => {
  const [frame, setFrame] = useState(initFrame);
  const showNextFrame = () => {
    setFrame((prev) => prev + 1);
  };

  useEffect(() => {
    setFrame(initFrame);
  }, [initFrame]);

  return {
    showNextFrame,
    showFrame1: frame === 1,
    showFrame2: frame === 2,
    showFrame3: frame === 3,
    showFrame4: frame === 4,
    showFrame5: frame === 5,
    showFrame6: frame === 6,
    showFrame7: frame === 7,
    showFrame8: frame === 8,
  };
};

export default useFrame;
