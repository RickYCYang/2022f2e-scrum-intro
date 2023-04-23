import { useEffect } from 'react';

/** components */
import Button from '@/components/common/Button';

/** utils */
import { ElementStyleProps } from '@/utils/types';

interface NextPageForegroundProps extends ElementStyleProps {
  onClick: (e: unknown) => void;
}

const NextPageForeground = ({ onClick, visible }: NextPageForegroundProps) => {
  useEffect(() => {
    if (visible) {
      document.addEventListener('click', onClick);
    }
    return () => {
      document.removeEventListener('click', onClick);
    };
  }, [visible, onClick]);

  if (!visible) return null;

  return (
    <div
      className="absolute h-full w-full z-40 bg-gradient-to-t from-primary to-transparent 
                  flex justify-center items-center"
    >
      <Button
        label="點擊畫面任意處繼續"
        outlined
        className="border-2 bg-black/80"
        onClick={onClick}
        duration={1}
        delay={0.3}
      />
    </div>
  );
};

export default NextPageForeground;
