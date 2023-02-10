/** components */
import { AiFillCaretDown } from 'react-icons/ai';

const PriorityArrowLine = () => {
  return (
    <div className="absolute left-3 top-0 flex flex-col justify-center items-center h-full">
      <span className="text-white mb-1">高</span>
      <div className="border-r border-white h-3/4" />
      <AiFillCaretDown className="text-white -mt-1 p-0" />
      <span className="text-white">低</span>
    </div>
  );
};

export default PriorityArrowLine;
