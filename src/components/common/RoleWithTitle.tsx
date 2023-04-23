import { motion } from 'framer-motion';

/** components */
import Role from '@/components/common/Role';

/** utils */
import { ElementStyleProps } from '@/utils/types';
import { roles } from '@/utils/const';
import classNames from 'classnames';

interface RoleWithTitleProps extends ElementStyleProps {
  role: roles;
  title: string;
  delay?: number;
}

const RoleWithTitle = ({ role, title, delay }: RoleWithTitleProps) => {
  const titleColor = classNames({
    'text-red': role === roles.GG,
    'text-primary': role === roles.PO,
    'text-yellow': role === roles.EE,
    'text-purple': role === roles.MM,
  });
  return (
    <div className="flex flex-col items-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay }}
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
