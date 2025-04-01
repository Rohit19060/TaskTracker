export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'critical' | 'warning' | 'normal';
  status: 'not started' | 'in progress' | 'done';
  dateCreated: string;
  dateCompleted?: string;
}

export type TaskStatus = 'not started' | 'in progress' | 'done';