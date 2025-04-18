declare module '*.scss';

type TaskStatus = 'In Progress' | 'Completed' | 'Won\'t Do';

type Task = {
  id: number
  title: string
  desc: string | null
  icon: number
  status: TaskStatus
};
