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

export const taskStatusEnumTranslation = {
  [TaskStatusEnum.PENDING]: "Pendiente",
  [TaskStatusEnum.IN_PROGRESS]: "En progreso",
  [TaskStatusEnum.COMPLETED]: "Completo",
};
