export class Todo {
  name: string;
  time: number;
  category: string;
  complete: boolean;
  constructor(name: string = "", time: number = 0, category: string = "", complete: boolean = false) {
    this.name = name;
    this.time = time;
    this.category = category;
    this.complete = complete;
  };
}
