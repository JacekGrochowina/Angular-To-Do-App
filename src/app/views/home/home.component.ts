import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public todoService: TodoService;
  public todoTitle: string;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
    this.todoTitle = '';
  }

  ngOnInit(): void {
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todoService.addTodo(this.todoTitle);
    this.todoTitle = '';
  }
}
