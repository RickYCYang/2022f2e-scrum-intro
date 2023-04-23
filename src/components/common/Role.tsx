import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/** utils */
import type {
  Role as TypeRole,
  ElementStyleProps,
  TransitionProps,
} from '@/utils/types';
import { roles } from '@/utils/const';
import classNames from 'classnames';

/** images */
import hole from '../../../public/role/hole.png';
import imgPO from '../../../public/role/role_po.png';
import imgReversedPO from '../../../public/role/role_po_reverse.png';
import imgMM from '../../../public/role/role_mm.png';
import imgEE from '../../../public/role/role_ee.png';
import imgReversedEE from '../../../public/role/role_ee_reverse.png';
import imgGG from '../../../public/role/role_gg.png';
import imgReversedGG from '../../../public/role/role_gg_reverse.png';

interface RoleProps extends TransitionProps, ElementStyleProps {
  role: TypeRole;
  reversed?: boolean;
}

const Role = memo(
  ({
    role,
    reversed = true && role !== roles.MM, // MM has no reversed effect
    duration = 0.3,
    delay = 0,
    visible = true,
    className,
  }: RoleProps) => {
    if (role === roles.ANONUMITY) return null;
    //if (!visible) return null;

    const roleImage = {
      [roles.PO]: reversed ? imgReversedPO : imgPO,
      [roles.MM]: imgMM,
      [roles.EE]: reversed ? imgReversedEE : imgEE,
      [roles.GG]: reversed ? imgReversedGG : imgGG,
    };

    /**
     * non-reversed role's position should be on top and hole should be on bottom,
     * reversed role's position should be on bottom and hole should be on top
     */
    const holePosClass = classNames({
      'top-0': reversed,
      'bottom-0': !reversed,
    });
    let roleInitPosStyle = reversed ? { top: -999 } : { bottom: -999 };
    let roleAnimatePosStyle = reversed ? { top: 1 } : { bottom: 2 };

    return (
      <AnimatePresence>
        {visible && (
          <div
            className={`basis-[180px] shrink-0 relative overflow-y-hidden ${className}`}
          >
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration, delay }}
              exit={{
                scale: 0,
                transition: { delay: duration, duration },
              }}
              className={`absolute max-w-full z-10 ${holePosClass}`}
              src={hole.src}
            />
            <motion.img
              initial={roleInitPosStyle}
              animate={roleAnimatePosStyle}
              exit={{
                ...roleInitPosStyle,
                transition: { delay: 0, duration },
              }}
              transition={{ duration, delay: duration + delay }} // delay after role shown
              className={`absolute  max-w-full z-20`}
              src={roleImage[role].src}
            />
          </div>
        )}
      </AnimatePresence>
    );
  }
);

Role.displayName = 'Role';

export default Role;
