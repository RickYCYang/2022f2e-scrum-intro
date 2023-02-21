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
   * role MM's position should be at top while hole should be at bottom
   * the other roles' position should be at bottom while hole should be at top
   */
  let holeClass = 'absolute top-0 left-0 z-10';
  let roleClass = 'absolute top-1 z-20';

  return (
    <div className={`relative overflow-y-hidden w-52 h-52`}>
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration }}
        className={holeClass}
        src={hole.src}
      />
      <motion.img
        initial={{ top: -999 }}
        animate={{ top: 0 }}
        transition={{ duration, delay: duration }}
        className={roleClass}
        src={roleImg.src}
      />
    </div>
  );
});

Role.displayName = 'Role';

export default Role;
