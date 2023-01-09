import { TodoItem } from './todoItem';

export class TodoList {
  constructor(public user: string, private todoItems: TodoItem[] = []) {}

  get Items(): readonly TodoItem[] {
    return this.todoItems;
  }

  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }
}
