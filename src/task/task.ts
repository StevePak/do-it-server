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
    return [];
    console.log('getTasksForUser');
  },
  getTaskById: function (id: string): Task {
    console.log('getTaskById');
  },
  editTaskById: function (id: string): Task {
    console.log('editTaskById');
  },
  createTask: function (task: Task): Task {
    console.log('createTask');
  },
  deleteTask: function (id: string): void {
    console.log('deleteTask');
  },
};

export default taskService;
