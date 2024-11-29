import { defineStore } from "pinia";
import { useTaskService } from "~/services/task.service";
import type { TaskModel, TaskStatusEnum } from "~/models/task.model";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: [] as TaskModel[],
    taskToUpdate: undefined as
      | undefined
      | TaskModel,
  }),
  actions: {
    async fetchTasks() {
      const response = await useTaskService().get();
      this.tasks = response.data as TaskModel[];
    },
    async addTask(task: { title: string; description: string }) {
      const newTask = await useTaskService().create(task);
      this.tasks.push(newTask.data as TaskModel);
    },
    async editTask(
      id: number,
      updates: { title: string; description: string, status: TaskStatusEnum }
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
