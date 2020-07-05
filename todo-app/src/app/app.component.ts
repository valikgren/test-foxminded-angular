import { Component } from '@angular/core';
import ITodo from './interfaces/todo.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  list: ITodo[] = [];

  generateDefaultToDos(): ITodo[] {
    return [
      {
        id: 1,
        task: 'First task',
        complete: false,
        editing: false,
      },
      {
        id: 2,
        task: 'Second task',
        complete: true,
        editing: false,
      }
    ];
  }

  constructor() {
    this.list = this.generateDefaultToDos();
  }
}
