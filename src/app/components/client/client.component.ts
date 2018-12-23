import { Component, OnInit } from '@angular/core';
import { ToDoModel } from '../../services/models/todo-data-model';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  task: ToDoModel = new ToDoModel();
  taskList: ToDoModel[] = [];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.getList();
  }

  addTask() {
    this.task.id = this.dataServiceService.getNextId();
    this.dataServiceService.addTask(this.task);
    this.getList();
    this.task = new ToDoModel();
  }

  getList() {
    this.taskList = this.dataServiceService.getToDoData();
  }
}
