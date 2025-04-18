declare module '*.scss';

type TaskStatus = 'To Do' | 'In Progress' | 'Completed' | 'Won\'t Do';

type Task = {
  id: number
  title: string
  desc: string | null
  icon: string
  status: TaskStatus
};
