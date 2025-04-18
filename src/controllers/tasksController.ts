import api from "../config/axios";


// === GET routes === //

export const getAllTasks = async (): Promise<Task[] | []> => {
  try {
    const res = await api.get(`/api/tasks`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
