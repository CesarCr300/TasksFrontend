export interface TaskModel {
  id: number;
  title: string;
  description: string;
  status: TaskStatusEnum;
}

export enum TaskStatusEnum {
  PENDING = "pending",
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
}
