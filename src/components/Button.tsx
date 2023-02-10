import React from 'react';

interface IButton {
  label: string;
  className?: string;
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
}: IButton) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick(e);
  };

  return (
    <button
      className={`${
        !outlined
          ? 'bg-gradient-to-b from-primary to-dark text-white'
          : 'bg-opacity-100 border border-primary text-primary'
      } 
        py-3 px-12 
        rounded-lg text-lg 
        transition-all duration-700 
        hover:translate-y-2
        ${disabled && 'bg-gradient-to-b from-gray-300 to-gray-600'}
        ${className}
        `}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
