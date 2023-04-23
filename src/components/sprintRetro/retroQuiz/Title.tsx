import React from 'react';

/** utils */
import { ElementStyleProps } from '@/utils/types';

interface TitleProps extends ElementStyleProps {
  title: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <h4 className={`px-8 py-1 bg-primary text-xl font-bold ${className}`}>
      {title}
    </h4>
  );
};

export default Title;
