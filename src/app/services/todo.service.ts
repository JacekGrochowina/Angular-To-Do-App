import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoTitle = '';
  idForTodo = 4;
  beforeEditCache = '';
  filter = 'all';
  anyRemainingModel = true;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todoTitle: string): void {
    if (todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: todoTitle,
      completed: false,
      editing: false
    });

    this.idForTodo++;
  }

  doneTodo(todo: Todo): void {
    todo.completed = true;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  anyRemaining(): boolean {
    return this.remaining() !== 0;
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos;
  }
}
