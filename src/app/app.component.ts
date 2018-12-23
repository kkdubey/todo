import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { Observable, Subscribable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataServiceService: DataServiceService) {
    this.dataServiceService.getFreelancer().subscribe(
      res => {
        console.log(res);
      }
    );
   }

  title = 'todo';
}
