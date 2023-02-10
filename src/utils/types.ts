/** utils */
import { roles } from '@/utils/const';

export type TRole = roles.PO | roles.SM | roles.TEAM1 | roles.TEAM2;

export type TTask = {
  title: string;
  initPos: number;
  priority: number;
  slot: null | number;
};

export type TMoveTask = (task: TTask, targetSlot: number | null) => void;
