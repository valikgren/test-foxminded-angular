import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
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
      },
      {
        id: 2,
        task: 'Second task',
        complete: true,
      },
      {
        id: 3,
        task: 'Second task',
        complete: true,
      },
      {
        id: 4,
        task: 'Second task',
        complete: true,
      }
    ];
  }

  constructor() {
    this.list = this.generateDefaultToDos();
  }

  onCompleteChange(toDo: ITodo, change: MatCheckboxChange) {
    this.list = this.list.map(_ => _.id === toDo.id ? {..._, complete: change.checked} : _)
  }
  onDelete(toDo: ITodo) {
    const elementInList = this.list.find((_) => _.id === toDo.id);
    const indexInList = this.list.indexOf(elementInList);
    this.list.splice(indexInList, 1);
  }
}
