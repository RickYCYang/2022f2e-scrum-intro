/** utils */
import { ElementStyleProps, Color } from '@/utils/types';
import classNames from 'classnames';

interface RadioButtonProps extends ElementStyleProps {
  value: string | number;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  color?: Color;
  borderColor?: Color;
  disabled?: boolean;
}

const RadioButton = ({
  color = Color.PRIMARY,
  borderColor = Color.PRIMARY,
  onChange,
  checked,
  value,
  name,
  className,
  disabled = false,
}: RadioButtonProps) => {
  const colorClasses = classNames({
    'text-primary': color === Color.PRIMARY,
    'checked:outline-primary': color === Color.PRIMARY,
    'border-primary': borderColor === Color.PRIMARY,
    'text-red': color === Color.RED,
    'checked:outline-red': color === Color.RED,
    'border-red': borderColor === Color.RED,
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
