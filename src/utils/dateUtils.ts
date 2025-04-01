import { format, parseISO } from 'date-fns';
import { Task } from '../types';

export const formatDate = (dateString: string): string => {
  return format(parseISO(dateString), 'MMMM dd, yyyy');
};

export const isDateInRange = (dateString: string, startDate: string, endDate: string): boolean => {
  const date = parseISO(dateString);
  return date >= parseISO(startDate) && date <= parseISO(endDate);
};

export const sortByDate = (tasks: Task[]): Task[] => {
  return tasks.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
}