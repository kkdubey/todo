import { Component, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/services/models/todo-data-model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  taskList: ToDoModel[] = [];
  freelancers: any = [];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.getFreelancer();
    this.getList();
  }

  getList() {
    this.taskList = this.dataServiceService.getToDoData();
  }

  onFreelancerSelected(event, task) {
    console.log(event, task);
    task.assign_to = event.target.value;
    this.dataServiceService.assignTask(task);
  }

  getFreelancer() {
    this.dataServiceService.getFreelancer()
    .subscribe( res =>  {
      this.freelancers = res;
    });
  }

}
