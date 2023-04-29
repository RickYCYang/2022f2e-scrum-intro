/** components */
import Spot from '@/components/common/Spot';

/** utils */
import { TransitionProps, Color } from '@/utils/types';

const duration = 0.7;

const Spots = ({ delay }: TransitionProps) => {
  return (
    <>
      {/** left */}
      <Spot
        color={Color.PURPLE}
        delay={delay}
        duration={duration}
        className="absolute top-10 left-1/4 animate-spin"
      />
      <Spot
        color={Color.PRIMARY}
        delay={delay}
        duration={duration}
        className="absolute top-32 left-10 animate-spin"
      />
      <Spot
        color={Color.RED}
        delay={delay}
        duration={duration}
        className="absolute top-52 left-40 animate-spin"
      />
      <Spot
        color={Color.YELLOW}
        delay={delay}
        duration={duration}
        className="absolute top-80 left-6 animate-spin"
      />
      {/** right */}
      <Spot
        color={Color.YELLOW}
        delay={delay}
        duration={duration}
        className="absolute top-10 right-1/4 animate-spin"
      />
      <Spot
        color={Color.RED}
        delay={delay}
        duration={duration}
        className="absolute top-32 right-10 animate-spin"
      />
      <Spot
        color={Color.PRIMARY}
        delay={delay}
        duration={duration}
        className="absolute top-52 right-40 animate-spin"
      />
      <Spot
        color={Color.PURPLE}
        delay={delay}
        duration={duration}
        className="absolute top-80 right-6 animate-spin"
      />
    </>
  );
};

export default Spots;
