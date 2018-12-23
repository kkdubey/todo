import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { ToDoModel } from './models/todo-data-model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _todoData: ToDoModel[] = [];
  private _id = 0;

  constructor(private httpClient: HttpClient) { }

  getFreelancer() {
    return this.httpClient.get('../../assets/api-data.json')
    .pipe(
      map(result => result)
    );
  }

  getToDoData() {
    return this._todoData;
  }

  addTask(task: ToDoModel) {
    this._todoData.push(task);
  }

  assignTask(task: ToDoModel) {
    const index = this._todoData.findIndex(t => t.id === task.id);
    this._todoData[index] = task;
  }

  getNextId() {
    this._id++;
    return this._id;
  }
}
