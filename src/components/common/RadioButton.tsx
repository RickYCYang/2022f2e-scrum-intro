/** utils */
import { ElementStyleProps } from '@/utils/types';
import { themeColors } from '@/utils/const';
import classNames from 'classnames';

interface RadioButtonProps extends ElementStyleProps {
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  color?: themeColors;
  borderColor?: themeColors;
  disabled?: boolean;
}

const RadioButton = ({
  color = themeColors.PRIMARY,
  borderColor = themeColors.PRIMARY,
  onChange,
  checked,
  value,
  name,
  className,
  disabled = false,
}: RadioButtonProps) => {
  const colorClasses = classNames({
    'text-primary': color === themeColors.PRIMARY,
    'checked:outline-primary': color === themeColors.PRIMARY,
    'border-primary': borderColor === themeColors.PRIMARY,
    'text-red': color === themeColors.RED,
    'checked:outline-red': color === themeColors.RED,
    'border-red': borderColor === themeColors.RED,
  });

  return (
    <input
      id="red-radio"
      type="radio"
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
      className={`relative appearance-none rounded-full border-2 border-solid
                bg-black/50 checked:bg-none focus:bg-none
                focus:ring-offset-black/50 
                ${className} ${colorClasses}
                `}
      disabled={disabled}
    />
  );
};

export default RadioButton;
