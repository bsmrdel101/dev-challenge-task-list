export const getNameFromStatus = (status: string): string => {
  switch(status) {
    case 'To Do':
      return 'todo';
    case 'In Progress':
      return 'in-progress';
    case 'Completed':
      return 'completed';
    case 'Won\'t Do':
      return 'wont-do';
    default:
      return 'todo';
  }
};
