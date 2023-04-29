import { MoveItem, SprintretroQuiz, Role } from '@/utils/types';

export enum themeColors {
  PRIMARY = 'primary',
  YELLOW = 'yellow',
  ORANGE = 'orange',
  PURPLE = 'purple',
  RED = 'red',
}

/** backlogs */
export const productBacklogs: MoveItem[] = [
  {
    id: 1,
    title: '應徵者的線上履歷編輯器',
    slotType: 'init',
    slot: 1,
    targetSlot: 3,
  },
  {
    id: 2,
    title: '後台職缺管理功能(資訊上架、下架、顯示應徵者資料)',
    slotType: 'init',
    slot: 2,
    targetSlot: 1,
  },
  {
    id: 3,
    title: '會員系統（登入、註冊、權限管理）',
    slotType: 'init',
    slot: 3,
    targetSlot: 2,
  },
  {
    id: 4,
    title: '前台職缺列表、應徵',
    slotType: 'init',
    slot: 4,
    targetSlot: 4,
  },
];

export const sprintBacklogs: MoveItem[] = productBacklogs.map((backlog) => ({
  id: backlog.id,
  title: backlog.title,
  slotType: backlog.slotType,
  slot: backlog.slot,
  points:
    backlog.id === 1
      ? 5
      : backlog.id === 2
      ? 8
      : backlog.id === 3
      ? 13
      : backlog.id === 4
      ? 8
      : 0,
}));

/** sprint meetings */
export const sprintMeetings: MoveItem[] = [
  {
    id: 1,
    title: '每日站立會議',
    subtitle: 'Daily Scrum',
    slotType: 'init',
    slot: 1,
    targetSlot: 1,
  },
  {
    id: 2,
    title: '短衝檢視會議',
    subtitle: 'Sprint Review',
    slotType: 'init',
    slot: 2,
    targetSlot: 2,
  },
  {
    id: 3,
    title: '短衝自省會議',
    subtitle: 'Sprint Retrospective',
    slotType: 'init',
    slot: 3,
    targetSlot: 3,
  },
];

export const sprintRetroInitQuiz: SprintretroQuiz = {
  Q1: {
    title: '做得好的地方?',
    options: [
      {
        id: 1,
        role: Role.MM,
        isAnswer: false,
        desc: '這次我幫了很多人救火耶～',
        checked: false,
      },
      {
        id: 2,
        role: Role.PO,
        isAnswer: true,
        desc: '大家在開發上都會互相 cover ， 讓任務都有準在時間內完成 。',
        checked: false,
      },
    ],
  },
  Q2: {
    title: '有哪些可以做得更好？?',
    options: [
      {
        id: 1,
        role: Role.EE,
        isAnswer: true,
        desc: '可以記錄這次的開發時間 ， 讓預估團隊點數可以更精準 。',
        checked: false,
      },
      {
        id: 2,
        role: Role.GG,
        isAnswer: false,
        desc: '開發時間預估不準確 ， 請後端下次改進 ， 避免 delay 到我 。',
        checked: false,
      },
    ],
  },
};
