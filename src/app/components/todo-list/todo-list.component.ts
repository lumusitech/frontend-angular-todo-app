import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: Todo[];
  @Input() buttonName: string;
  @Output() todoEvent: EventEmitter<number>;

  constructor() {
    this.todoList = [];
    this.buttonName = "";
    this.todoEvent = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(i: number): void {
    this.todoEvent.emit(i);
  }

}
