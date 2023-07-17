import { Loc, Post, Shift } from './enum';

export const PAGE_SIZE = 20;
export const PATTERN_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PATTERN_PHONE = /^[+]*[0-9]{10,12}$/;

export const shiftColor: any = {
  [Shift.AM]: 'bg-[#FFEEB2]',
  [Shift.PM]: 'bg-[#FFB5B5]',
  [Shift.OVERNIGHT]: 'bg-[#B9BBFB]',
};

export const locColor: any = {
  [Loc.LOC1]: 'bg-[#BFEBC8]',
  [Loc.LOC2]: 'bg-[#FFE1B2]',
};

export const postColor: any = {
  [Post.POST1]: 'bg-[#F7A4AB]',
  [Post.POST2]: 'bg-[#BDBEDD]',
};

export const COLOR_AM = 'rgb(255, 238, 178)';
export const COLOR_PM = 'rgb(255, 181, 181)';
export const COLOR_NIGHT = 'rgb(185, 187, 251)';
export const COLOR_LOC = 'rgb(132,255,147)';
