import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Output() newToDoEvent: EventEmitter<Todo>
  newToDo: Todo;

  constructor() {
    this.newToDoEvent = new EventEmitter();
    this.newToDo = new Todo();
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.newToDoEvent.emit(this.newToDo);
    this.newToDo = new Todo();
  }
}
