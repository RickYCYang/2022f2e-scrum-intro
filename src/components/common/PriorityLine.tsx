/** components */
import { AiFillCaretDown } from 'react-icons/ai';

/** utils */
import { ElementStyleProps } from '@/utils/types';

const PriorityLine = ({ className }: ElementStyleProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-full ${className}`}
    >
      <span className="text-white mb-1">高</span>
      <div className="border-r border-white h-3/4" />
      <AiFillCaretDown className="text-white -mt-1 p-0" />
      <span className="text-white">低</span>
    </div>
  );
};

export default PriorityLine;
