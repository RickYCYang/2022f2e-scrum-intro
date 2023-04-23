import React from 'react';
import { motion } from 'framer-motion';

/** utils */
import { ElementStyleProps, TransitionProps } from '@/utils/types';
import classNames from 'classnames';

interface ButtonProps extends ElementStyleProps, TransitionProps {
  label: string;
  outlined?: boolean;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  onClick,
  className,
  outlined = false,
  disabled = false,
  visible = true,
  duration = 0,
  delay = 0,
}: ButtonProps) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick(e);
  };

  const btnClasses = classNames({
    'bg-gradient-to-b from-primary to-dark text-white': !outlined,
    'bg-opacity-100 border border-primary text-primary': outlined,
    'transition-all duration-700 hover:translate-y-2': !disabled,
    /** no transition effect when disabled */
    'bg-gradient-to-b from-gray-300 to-gray-600': disabled,
  });

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={`${btnClasses} 
                  py-3 px-12 
                  rounded-lg text-lg 
                  ${className}
                `}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {label}
    </motion.button>
  );
};

export default Button;
