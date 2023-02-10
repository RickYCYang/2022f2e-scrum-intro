import { useEffect, useRef } from 'react';

interface IProgressbar {
  value: number;
}

const Progressbar = ({ value }: IProgressbar) => {
  const progressbarRef = useRef<HTMLHeadingElement>(null);

  /** set progressbar's width for animation */
  useEffect(() => {
    if (value <= 0 || value > 100) return;

    let classOfWidth = '';
    switch (value) {
      case 20:
        classOfWidth = `w-[calc(20%)]`;
        break;
      case 40:
        classOfWidth = `w-[calc(40%)]`;
        break;
      case 60:
        classOfWidth = `w-[calc(60%)]`;
        break;
      case 80:
        classOfWidth = `w-[calc(80%)]`;
        break;
      case 100:
        classOfWidth = `w-[calc(100%)]`;
        break;
    }
    progressbarRef.current?.classList.remove('w-0');
    progressbarRef.current?.classList.add(classOfWidth);
  }, [value]);

  return (
    <div className="w-full bg-dark rounded-full h-1.5 absolute top-0 z-50">
      <div
        ref={progressbarRef}
        className="bg-primary h-1.5 rounded-full transition-all ease-out duration-1000 w-0"
      />
    </div>
  );
};

export default Progressbar;
