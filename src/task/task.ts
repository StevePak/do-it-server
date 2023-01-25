import { Task } from '../types/task';

interface TaskService {
  getTasksForUser(): Task[];
  getTaskById(id: string): Task;
  editTaskById(id: string): Task;
  createTask(task: Task): Task;
  deleteTask(id: string): void;
}

const taskService: TaskService = {
  getTasksForUser: function (): Task[] {
    throw new Error('Function not implemented.');
  },
  getTaskById: function (id: string): Task {
    throw new Error('Function not implemented.');
  },
  editTaskById: function (id: string): Task {
    throw new Error('Function not implemented.');
  },
  createTask: function (task: Task): Task {
    throw new Error('Function not implemented.');
  },
  deleteTask: function (id: string): void {
    throw new Error('Function not implemented.');
  },
};

export default taskService;
