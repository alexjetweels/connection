import { DAY } from '~/configs/enum';

const convertShiftStringToDate = (shift: string) => {
  //0010-2030
  //1230-1430
  //2330-0200
  //OFF*OFF

  if (!shift || shift === 'OFF*OFF' || !shift.includes('-')) {
    return { startShift: 0, endShift: 0 };
  }

  const [start, end] = shift.split('-');

  const startShift = Date.parse('1-1-2000 ' + convertStringToTime(start));

  const endShift =
    Number(start) > Number(end)
      ? Date.parse('2-1-2000 ' + convertStringToTime(end))
      : Date.parse('1-1-2000 ' + convertStringToTime(end));

  return { startShift, endShift };
};

const convertStringToTime = (time: string) => {
  const first = time.slice(0, 2);
  const second = time.slice(2, 4);
  return `${first}:${second}`;
};

export const isScheduleOverlap = (
  day: DAY,
  shiftArr: any[] | undefined,
  planShift?: string
) => {
  if (!shiftArr?.length || !planShift) return false;

  const dayTime = {
    MON: 'MonTime',
    TUE: 'TueTime',
    WED: 'WedTime',
    THUR: 'ThurTime',
    FRI: 'FriTime',
    SAT: 'SatTime',
    SUN: 'SunTime',
  };

  const convertedScheduleShifts = shiftArr?.map((el) =>
    convertShiftStringToDate(el[dayTime[day]])
  );
  const convertedPlanShift = convertShiftStringToDate(planShift);

  for (const el of convertedScheduleShifts) {
    if (
      convertedPlanShift.startShift <= el.endShift &&
      convertedPlanShift.endShift >= el.startShift
    ) {
      return true;
    }
  }
  return false;
};
