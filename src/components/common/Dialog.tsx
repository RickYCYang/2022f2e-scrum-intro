import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillCaretDown } from 'react-icons/ai';

/** utils */
import { themeColors, roles } from '@/utils/const';
import type {
  ElementStyleProps,
  TransitionProps,
  SVGClickHandler,
} from '@/utils/types';
import classNames from 'classnames';

interface DialogProps extends ElementStyleProps, TransitionProps {
  children?: ReactNode;
  label: roles;
  color?: themeColors;
  onClick?: (event: SVGClickHandler) => void;
  showNextButton?: boolean;
  exitDuration?: number;
}

const Dialog = ({
  children,
  label,
  className,
  color = themeColors.PRIMARY,
  showNextButton,
  duration = 2,
  exitDuration = duration / 2,
  delay = 0,
  visible = true,
  onClick,
}: DialogProps) => {
  /** theme color classes */
  const borderColorClass = classNames({
    'border-primary': color === themeColors.PRIMARY,
    'border-yellow': color === themeColors.YELLOW,
    'border-purple': color === themeColors.PURPLE,
    'border-orange': color === themeColors.ORANGE,
  });
  const shadowColorClass = classNames({
    'shadow-primary': color === themeColors.PRIMARY,
    'shadow-yellow': color === themeColors.YELLOW,
    'shadow-purple': color === themeColors.PURPLE,
    'shadow-orange': color === themeColors.ORANGE,
  });
  const bgColorClass = classNames({
    'bg-primary': color === themeColors.PRIMARY,
    'bg-yellow': color === themeColors.YELLOW,
    'bg-purple': color === themeColors.PURPLE,
    'bg-orange': color === themeColors.ORANGE,
  });
  const btnColorClass = classNames({
    'text-primary': color === themeColors.PRIMARY,
    'text-yellow': color === themeColors.YELLOW,
    'text-purple': color === themeColors.PURPLE,
    'text-orange': color === themeColors.ORANGE,
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration, delay }}
          exit={{
            opacity: 0,
            transition: { delay: 0, duration: exitDuration },
          }}
          className={`grow relative text-white z-30 text-lg
                      border ${borderColorClass} rounded-lg bg-black/50
                      shadow-3xl ${shadowColorClass}
                      py-8 px-20 ${className}
                    `}
        >
          <span
            className={`absolute top-[calc(10%)] -left-4 
                        py-2 px-6 ${bgColorClass} text-black text-xl
                        shadow-3xl ${shadowColorClass}
                      `}
          >
            {label}
          </span>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration }}
            className="text-lg"
          >
            {children}
            {showNextButton && (
              <AiFillCaretDown
                className={`absolute bottom-2 right-10 text-2xl
                            animate-bounce cursor-pointer 
                            ${btnColorClass}
                          `}
                onClick={onClick}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
