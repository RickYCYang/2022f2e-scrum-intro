import { memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/** utils */
import { TRole } from '@/utils/types';
import { roles } from '@/utils/const';

/** images */
import hole from '../../public/role/hole.png';
import rolePO from '../../public/role/role_po.png';
import roleSM from '../../public/role/role_sm.png';
import roleTeam1 from '../../public/role/role_team1.png';
import roleTeam2 from '../../public/role/role_team2.png';

interface IRole {
  role: TRole;
  className?: string;
  duration?: number;
}

const Role = memo(({ role, className, duration = 0 }: IRole) => {
  let roleImg = null;
  switch (role) {
    case roles.PO: {
      roleImg = rolePO;
      break;
    }
    case roles.SM: {
      roleImg = roleSM;
      break;
    }
    case roles.TEAM1: {
      roleImg = roleTeam1;
      break;
    }
    case roles.TEAM2: {
      roleImg = roleTeam2;
      break;
    }
    default: {
      roleImg = rolePO;
      break;
    }
  }

  return (
    <div className={`relative overflow-y-hidden w-52 h-52 ${className}`}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration }}
        className={`absolute top-0 left-0 z-10`}
      >
        <Image src={hole} alt="hole" />
      </motion.div>
      <motion.div
        initial={{ top: -999 }}
        animate={{ top: 0 }}
        transition={{ duration, delay: duration }}
        className="absolute top-1 z-20"
      >
        <Image src={roleImg} alt="role" />
      </motion.div>
    </div>
  );
});

Role.displayName = 'Role';

export default Role;
