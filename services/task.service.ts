import { useRuntimeConfig } from "#app";

const config = useRuntimeConfig();

const API_BASE = config.public.apiBaseUrl;

class TaskService {
  static async get() {
    const response = await $fetch(`${API_BASE}/tasks`);
    return response;
  }

  static async create(task: { title: string; description: string }) {
    const response = await $fetch(`${API_BASE}/tasks`, {
      method: "POST",
      body: task,
    });
    return response;
  }

  static async update(
    id: number,
    updates: { title: string; description: string }
  ) {
    const response = await $fetch(`${API_BASE}/tasks/${id}`, {
      method: "PUT",
      body: updates,
    });
    return response;
  }

  static async delete(id: number) {
    const response = await $fetch(`${API_BASE}/tasks/${id}`, {
      method: "DELETE",
    });
    return response;
  }
}

export default TaskService;
