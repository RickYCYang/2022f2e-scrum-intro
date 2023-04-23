/** utils */
import { ElementStyleProps } from '@/utils/types';

interface DescriptionProps extends ElementStyleProps {
  desc: string;
}

const Description = ({ desc, className }: DescriptionProps) => {
  return (
    <p
      className={`border border-primary 
                bg-black/50 rounded-md text-white 
                px-5 py-3 ${className}`}
    >
      {desc}
    </p>
  );
};

export default Description;
