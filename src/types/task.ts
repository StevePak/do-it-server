export interface Task {
  id: string;
  createdAt: Date;
  title: string;
  description?: string;
  dueDate: Date;
  completed: boolean;
}
