import { formatDistance, parseISO } from 'date-fns';

export const formatDate = (date: string) => {
  return formatDistance(parseISO(date), new Date());
};
