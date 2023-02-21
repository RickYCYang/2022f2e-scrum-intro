/** utils */
import { roles } from '@/utils/const';
import React from 'react';

export type TRole = roles.PO | roles.SM | roles.TEAM1 | roles.TEAM2;

export type Task = {
  title: string;
  initPos: number;
  priority: number;
  slot: null | number;
};

export type MoveTask = (task: Task, targetSlot: number | null) => void;
export type TButtonSVGClickHandler = React.MouseEvent<
  HTMLButtonElement | SVGAElement
>;
export type TSVGClickHandler = React.MouseEvent<SVGAElement>;
