import { Component } from '@angular/core';
import { Todo } from './models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  todoPendingList: Todo[];
  todoCompletedList: Todo[];

  constructor() {
    this.todoPendingList = [];
    this.todoCompletedList = [];
  }

  onNewToDoEvent($event: Todo) {
    this.todoPendingList.push($event);
    console.log($event);
  }

  onToDoCompletedEvent($event: number): void {
    let todo = this.todoPendingList.splice($event, 1);
    todo[0].complete = true
    this.todoCompletedList.push(todo[0]);
  }

  onToDoRemakeEvent($event: number) {
    let todo = this.todoCompletedList.splice($event, 1);
    todo[0].complete = false
    this.todoPendingList.push(todo[0]);
  }
}
