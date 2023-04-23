import React, { ReactNode } from 'react';

/** utils */
import { ElementStyleProps } from '@/utils/types';

interface ContainerProps extends ElementStyleProps {
  children: ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`mx-auto container py-10 flex flex-col ${className} relative`}
    >
      {children}
    </div>
  );
};

export default Container;
