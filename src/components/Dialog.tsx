import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

/** utils */
import { dialogColors } from '@/utils/const';

interface IDialog {
  children: ReactNode;
  label: string;
  className?: string;
  color?: dialogColors;
  animateEffect?: boolean;
}

const Dialog = ({
  children,
  label,
  className,
  color,
  animateEffect = true,
}: IDialog) => {
  const duration = animateEffect ? 2 : 0;
  let borderColorClass = '';
  let shadowColorClass = '';
  let bgColorClass = '';

  switch (color) {
    case dialogColors.PRIMARY: {
      borderColorClass = `border-${dialogColors.PRIMARY}`; //border-primary
      shadowColorClass = `shadow-${dialogColors.PRIMARY}`; //shadow-primary
      bgColorClass = `bg-${dialogColors.PRIMARY}`; //bg-primary
      break;
    }
    case dialogColors.YELLOW: {
      borderColorClass = `border-${dialogColors.YELLOW}`; //border-yellow
      shadowColorClass = `shadow-${dialogColors.YELLOW}`; //shadow-yellow
      bgColorClass = `bg-${dialogColors.YELLOW}`; //bg-yellow
      break;
    }
    case dialogColors.ORANGE: {
      borderColorClass = `border-${dialogColors.ORANGE}`; //border-orange
      shadowColorClass = `shadow-${dialogColors.ORANGE}`; //shadow-orange
      bgColorClass = `bg-${dialogColors.ORANGE}`; //bg-orange
      break;
    }
    case dialogColors.PURPLE: {
      borderColorClass = `border-${dialogColors.PURPLE}`; //border-purple
      shadowColorClass = `shadow-${dialogColors.PURPLE}`; //shadow-purple
      bgColorClass = `bg-${dialogColors.PURPLE}`; //bg-purple
      break;
    }
    default: {
      borderColorClass = `border-${dialogColors.PRIMARY}`; //border-primary
      shadowColorClass = `shadow-${dialogColors.PRIMARY}`; //shadow-primary
      bgColorClass = `bg-${dialogColors.PRIMARY}`; //bg-primary
      break;
    }
  }

  return (
    <div
      className={`relative text-white z-30 
      border ${borderColorClass} rounded-lg 
      bg-black/50
      shadow-3xl ${shadowColorClass}
      py-8 px-20 text-xl
      flex flex-col justify-start items-start 
      ${className}
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
        className="w-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Dialog;
