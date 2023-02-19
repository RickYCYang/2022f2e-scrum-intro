export enum roles {
  PO = 'PO',
  TEAM1 = 'TEAM1',
  TEAM2 = 'TEAM2',
  SM = 'SM',
}

export enum dialogColors {
  PRIMARY = 'primary',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  PURPLE = 'purple',
}

export const INTRO_1 = 'INTRO_1';
export const INTRO_2 = 'INTRO_2';
export const EXAMPLE = 'EXAMPLE';
export const EXEC = 'EXEC';
export const PASS = 'PASS';
export const backlogDialogs = [INTRO_1, INTRO_2, EXAMPLE, EXEC, PASS];

export const tasksPool = [
  {
    title: '應徵者的線上履歷編輯器',
    initPos: 0,
    priority: 3,
    slot: null,
  },
  {
    title: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
    initPos: 1,
    priority: 1,
    slot: null,
  },
  {
    title: '會員系統（登入、註冊、權限管理）',
    initPos: 2,
    priority: 2,
    slot: null,
  },
  {
    title: '前台職缺列表、應徵',
    initPos: 3,
    priority: 4,
    slot: null,
  },
];
