import {Component, Input, Output, EventEmitter} from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import ITodo from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent {
  @Input() item: ITodo;

  @Output() completeChange = new EventEmitter<MatCheckboxChange>();
  @Output() deleteToDo = new EventEmitter<void>();
}
