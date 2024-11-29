import { defineStore } from "pinia";
import { useTaskService } from "~/services/task.service";


export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as { id: number; title: string; description: string }[],
  }),
  actions: {
    taskService: useTaskService(),
    async fetchTasks() {
      const response = await useTaskService().get();
      this.tasks = response.data;
    },
    async addTask(task: { title: string; description: string }) {
      const newTask = await this.taskService.create(task);
      this.tasks.push(newTask.data);
    },
    async editTask(
      id: number,
      updates: { title: string; description: string }
    ) {
      await this.taskService.update(id, updates);
      const index = this.tasks.findIndex((t) => t.id === id);
      if (index !== -1)
        this.tasks[index] = { ...this.tasks[index], ...updates };
    },
    async removeTask(id: number) {
      await this.taskService.remove(id);
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
  },
});
