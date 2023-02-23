import { memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/** utils */
import { TRole } from '@/utils/types';
import { roles } from '@/utils/const';

/** images */
import hole from '../../public/role/hole.png';
import imgRolePO from '../../public/role/role_po.png';
import imgRoleMM from '../../public/role/role_mm.png';
import imgRoleEE from '../../public/role/role_ee.png';
import imgRoleGG from '../../public/role/role_gg.png';

interface RoleProps {
  role: TRole;
  duration?: number;
}

const Role = memo(({ role, duration = 0 }: RoleProps) => {
  let roleImg = null;
  switch (role) {
    case roles.PO: {
      roleImg = imgRolePO;
      break;
    }
    case roles.MM: {
      roleImg = imgRoleMM;
      break;
    }
    case roles.EE: {
      roleImg = imgRoleEE;
      break;
    }
    case roles.GG: {
      roleImg = imgRoleGG;
      break;
    }
    default: {
      roleImg = imgRolePO;
      break;
    }
  }

  /**
   * role MM's position should be on top while hole should be on bottom
   * the other roles' position should be on bottom while hole should be on top
   * see the images at /public/role/*.png
   */
  let holePosClass = 'top-0';
  let roleInitPosStyle: { top?: number; bottom?: number } = { top: -999 };
  let roleAnimatePosStyle: { top?: number; bottom?: number } = { top: 1 };
  if (role === roles.MM) {
    holePosClass = 'bottom-0';
    roleInitPosStyle = { bottom: -999 };
    roleAnimatePosStyle = { bottom: 2 };
  }

  return (
    <div className={`relative overflow-y-hidden w-52 h-52`}>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration }}
        className={`absolute z-10  ${holePosClass}`}
        src={hole.src}
      />
      <motion.img
        initial={roleInitPosStyle}
        animate={roleAnimatePosStyle}
        transition={{ duration, delay: duration }} // delay after role shown
        className={`absolute z-20`}
        src={roleImg.src}
      />
    </div>
  );
});

Role.displayName = 'Role';

export default Role;
