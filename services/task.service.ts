import type { GeneralResponse } from "../generalResponse";
import type { TaskStatusEnum } from "../models/task.model";

export const useTaskService = () => {
  const API_BASE = "http://localhost:4000";

  const get = async () => {
    const response = (await $fetch(`${API_BASE}/tasks`)) as any;
    return response as GeneralResponse<
      {
        id: number;
        title: string;
        description: string;
        status: TaskStatusEnum;
      }[]
    >;
  };

  const create = async (task: { title: string; description: string }) => {
    const response = (await $fetch(`${API_BASE}/tasks`, {
      method: "POST",
      body: task,
    })) as any;
    return response as GeneralResponse<{
      id: number;
      title: string;
      description: string;
      status: TaskStatusEnum;
    }>;
  };

  const update = async (
    id: number,
    updates: { title: string; description: string; status: TaskStatusEnum }
  ) => {
    const response = await $fetch(`${API_BASE}/tasks/${id}`, {
      method: "PUT",
      body: updates,
    });
    return response;
  };

  const remove = async (id: number) => {
    const response = await $fetch(`${API_BASE}/tasks/${id}`, {
      method: "DELETE",
    });
    return response;
  };

  return {
    get,
    create,
    update,
    remove,
  };
};
