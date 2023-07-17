import type { Dayjs } from 'dayjs';
import dayjs, { type ManipulateType } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isoWeek from 'dayjs/plugin/isoWeek';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/en';

dayjs.extend(utc);
dayjs.extend(isoWeek);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);

export const dayjsUtc = dayjs.utc;

export const dateUtils = {
  date: (date: Date | null | undefined | string | number) => {
    if (!date) return;
    return dayjs(date).format('MM/DD/YYYY');
  },

  year: (date: Date | null | undefined | string) => {
    if (!date) return;
    return dayjs(date).format('YYYY');
  },

  dateTime: (date: Date | null | undefined | string) => {
    if (!date) return;
    return dayjs(date).format('YYYY-MM-DD HH:mm');
  },

  fullDate: (date: Date | null | undefined | string) => {
    if (!date) return;
    return dayjs(date).format('MMM DD, YYYY');
  },
  month: (date: Date | null | undefined | string) => {
    if (!date) return;
    return dayjs(date).format('MMM YYYY');
  },
  startOfWeek: (date: Date | null | undefined | string) => {
    if (!date) return;
    return dayjs(date).startOf('week');
  },
  endOfWeek: (date: Date | null | undefined | string) => {
    if (!date) return;
    return dayjs(date).endOf('week');
  },
  dayTime: (date: any) => {
    if (!date) return;
    return dayjs(date).format('dddd, MMM D, hh:mm');
  },
  addTime: (
    type: ManipulateType = 'days',
    count = 1,
    date: Date | string | number = new Date()
  ) => {
    return dayjs(date).add(count, type);
  },
  time: (date: Date) => dayjs(date).format('HH:mm:ss'),
  weekDay: (date: Date) => dayjs(date).format('ddd MM/DD'),
  weekArray: (date: Dayjs) => {
    const firstDay = dayjs(date).startOf('week');
    return [
      firstDay,
      firstDay.add(1, 'day'),
      firstDay.add(2, 'day'),
      firstDay.add(3, 'day'),
      firstDay.add(4, 'day'),
      firstDay.add(5, 'day'),
      firstDay.add(6, 'day'),
    ].map((el) => el.format('ddd - MM/DD'));
  },
  formatWeek: (date: Dayjs) => {
    const firstDay = dayjs(date).startOf('week');
    const lastDay = dayjs(date).endOf('week');
    return `${firstDay.format('MM/DD')} - ${lastDay.format('MM/DD')}`;
  },
  getDurationInMinsBetweenTime: (startTime: Dayjs, endTime: Dayjs) => {
    const diff = dayjs(endTime).diff(startTime, 'minutes');
    let duration = 0;

    // case in 1 days:
    if (diff >= 0) {
      duration = diff + 1;
    }

    //case 2200-0200
    if (diff < 0) {
      const diffMinutes = dayjs(dayjs(endTime).add(1, 'day')).diff(
        startTime,
        'minutes'
      );
      duration = diffMinutes + 1;
    }

    return duration;
  },
};
