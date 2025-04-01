import { format, parseISO } from 'date-fns';

export const formatDate = (dateString: string): string => {
  return format(parseISO(dateString), 'MMMM dd, yyyy');
};

export const isDateInRange = (dateString: string, startDate: string, endDate: string): boolean => {
  const date = parseISO(dateString);
  return date >= parseISO(startDate) && date <= parseISO(endDate);
};