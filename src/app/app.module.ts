import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataServiceService } from './services/data-service.service';
import { ClientComponent } from './components/client/client.component';
import { ManagerComponent } from './components/manager/manager.component';
import { FreelancerComponent } from './components/freelancer/freelancer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ManagerComponent,
    FreelancerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
