import { defineStore } from "pinia";
import { useTaskService } from "~/services/task.service";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as { id: number; title: string; description: string }[],
    taskToUpdate: undefined as
      | undefined
      | {
          id: number;
          title: string;
          description: string;
        },
  }),
  actions: {
    async fetchTasks() {
      const response = await useTaskService().get();
      this.tasks = response.data;
    },
    async addTask(task: { title: string; description: string }) {
      const newTask = await useTaskService().create(task);
      this.tasks.push(newTask.data);
    },
    async editTask(
      id: number,
      updates: { title: string; description: string }
    ) {
      await useTaskService().update(id, updates);
      const index = this.tasks.findIndex((t) => t.id === id);
      if (index !== -1)
        this.tasks[index] = { ...this.tasks[index], ...updates };
      this.cleanTaskToUpdate();
    },
    async removeTask(id: number) {
      await useTaskService().remove(id);
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
    setTaskToUpdate(id: number) {
      this.taskToUpdate = this.tasks.find((t) => t.id === id) || undefined;
    },
    cleanTaskToUpdate() {
      this.taskToUpdate = undefined;
    },
  },
});
