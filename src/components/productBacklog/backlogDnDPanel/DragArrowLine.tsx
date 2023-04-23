/** components */
import { FaHandPaper } from 'react-icons/fa';
import { AiFillCaretLeft } from 'react-icons/ai';

const DragArrowLine = () => {
  return (
    <div>
      <div className="absolute origin-center rotate-[28deg] -left-[180px] -top-6 flex items-center ">
        <AiFillCaretLeft className="text-white -mr-1 p-0" />
        <div className="border-b border-white w-[180px]" />
      </div>
      <FaHandPaper className={`absolute left-0 top-4 text-white text-xl`} />
    </div>
  );
};

export default DragArrowLine;
