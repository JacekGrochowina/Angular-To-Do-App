import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  public todoService: TodoService;
  @Input()
  todo!: Todo;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  ngOnInit(): void {
  }

}
