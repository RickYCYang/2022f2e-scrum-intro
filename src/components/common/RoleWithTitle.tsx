import { motion } from 'framer-motion';

/** components */
import Role from '@/components/common/Role';

/** utils */
import { ElementStyleProps, Role as TRole } from '@/utils/types';
import classNames from 'classnames';

interface RoleWithTitleProps extends ElementStyleProps {
  role: TRole;
  title: string;
  delay?: number;
}

const RoleWithTitle = ({ role, title, delay }: RoleWithTitleProps) => {
  const titleColor = classNames({
    'text-red': role === TRole.GG,
    'text-primary': role === TRole.PO,
    'text-yellow': role === TRole.EE,
    'text-purple': role === TRole.MM,
  });
  return (
    <div className="flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: (delay ?? 0) + 0.5 }}
        className={`${titleColor}`}
      >
        {title}
      </motion.p>
      <div className="flex w-[180px] h-48">
        <Role
          role={role}
          visible={true}
          reversed={false}
          className="basis-[180px]"
          delay={delay}
        />
      </div>
    </div>
  );
};

export default RoleWithTitle;
