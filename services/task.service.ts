export const useTaskService = () => {
  const config = useRuntimeConfig();
  const API_BASE = config.public.apiBaseURL;

  const get = async () => {
    const response = await $fetch(`${API_BASE}/tasks`);
    return response;
  };

  const create = async (task: { title: string; description: string }) => {
    const response = await $fetch(`${API_BASE}/tasks`, {
      method: "POST",
      body: task,
    });
    return response;
  };

  const update = async (
    id: number,
    updates: { title: string; description: string }
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
    remove
  };
};
