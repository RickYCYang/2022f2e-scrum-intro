import { useEffect, useState } from 'react';

interface ProgressbarProps {
  value: number;
}

const Progressbar = ({ value }: ProgressbarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (value <= 0 || value > 100) return;
    setProgress(value);
  }, [value]);

  return (
    <div className="w-full bg-dark rounded-full h-1.5 absolute top-0 z-50">
      <div
        style={{ width: `${progress}%` }}
        className="bg-primary h-1.5 rounded-full transition-all ease-out duration-1000"
      />
    </div>
  );
};

export default Progressbar;
