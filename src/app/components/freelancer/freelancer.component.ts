import { Component, OnInit } from '@angular/core';
import { ToDoModel } from 'src/app/services/models/todo-data-model';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.css']
})
export class FreelancerComponent implements OnInit {

  taskList: ToDoModel[] = [];
  freelancers: any = [];

  constructor(private dataServiceService: DataServiceService) { }

  ngOnInit() {
    this.getList();
    this.getFreelancer();
  }

  getList() {
    this.taskList = this.dataServiceService.getToDoData();
  }

  getFreelancer() {
    this.dataServiceService.getFreelancer()
    .subscribe( res =>  {
      this.freelancers = res;
      for (let i = 0; i < this.freelancers.length; i++) {
        // tslint:disable-next-line:triple-equals
        const list = this.taskList.find( t => t.assign_to == this.freelancers[i].id);
        if (!list) {
          this.freelancers[i]['tasks'] = [];
        }
        this.freelancers[i]['tasks'] = list;
      }
    });
  }

  getTaskList(freelancer) {
    // tslint:disable-next-line:triple-equals
    const list = this.taskList.filter( t => t.assign_to == freelancer.id);
    if (!list) {
      return [];
    }
    return list;
  }

}
