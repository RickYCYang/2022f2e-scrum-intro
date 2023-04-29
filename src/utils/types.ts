export enum Role {
  PO = 'PO',
  GG = 'GG',
  MM = 'MM',
  EE = 'EE',
  ANONUMITY = '(謎之音)',
}

export enum Color {
  PRIMARY = 'primary',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  PURPLE = 'purple',
  RED = 'red',
}

export type SlotType = 'init' | 'moved';

export type MoveItem = {
  id: number;
  title: string;
  subtitle?: string;
  slotType: SlotType;
  slot: number;
  targetSlot?: number;
  points?: number;
};

export type MoveItemFn = (
  ask: MoveItem,
  slotType: SlotType,
  targetSlot: number
) => void;

export type ButtonSVGClickEvent = React.MouseEvent<
  HTMLButtonElement | SVGAElement
>;
export type SVGClickHandler = React.MouseEvent<SVGAElement>;

export type TransitionProps = {
  duration?: number;
  delay?: number;
};

export type ElementStyleProps = {
  visible?: boolean;
  className?: string;
  style?: object;
};

export type RoleDialogProps = ElementStyleProps &
  TransitionProps & {
    onClick?: (event: SVGClickHandler) => void;
  };

export type SprintRetroOption = {
  id: number;
  role: Role;
  isAnswer: boolean;
  desc: string;
  checked: boolean;
};

export type SprintretroQuiz = {
  [key: string]: {
    title: string;
    options: SprintRetroOption[];
  };
};
