import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiFillCaretDown } from 'react-icons/ai';

/** utils */
import {
  ElementStyleProps,
  TransitionProps,
  SVGClickHandler,
  Role,
  Color,
} from '@/utils/types';
import classNames from 'classnames';

interface DialogProps extends ElementStyleProps, TransitionProps {
  children?: ReactNode;
  label: Role;
  color?: Color;
  onClick?: (event: SVGClickHandler) => void;
  showNextButton?: boolean;
  exitDuration?: number;
}

const Dialog = ({
  children,
  label,
  className,
  color = Color.PRIMARY,
  showNextButton,
  duration = 2,
  exitDuration = duration / 2,
  delay = 0,
  visible = true,
  onClick,
}: DialogProps) => {
  /** theme color classes */
  const borderColorClass = classNames({
    'border-primary': color === Color.PRIMARY,
    'border-yellow': color === Color.YELLOW,
    'border-purple': color === Color.PURPLE,
    'border-orange': color === Color.ORANGE,
  });
  const shadowColorClass = classNames({
    'shadow-primary': color === Color.PRIMARY,
    'shadow-yellow': color === Color.YELLOW,
    'shadow-purple': color === Color.PURPLE,
    'shadow-orange': color === Color.ORANGE,
  });
  const bgColorClass = classNames({
    'bg-primary': color === Color.PRIMARY,
    'bg-yellow': color === Color.YELLOW,
    'bg-purple': color === Color.PURPLE,
    'bg-orange': color === Color.ORANGE,
  });
  const btnColorClass = classNames({
    'text-primary': color === Color.PRIMARY,
    'text-yellow': color === Color.YELLOW,
    'text-purple': color === Color.PURPLE,
    'text-orange': color === Color.ORANGE,
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
