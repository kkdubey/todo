import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { FreelancerComponent } from './components/freelancer/freelancer.component';
import { ManagerComponent } from './components/manager/manager.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/client',
    pathMatch: 'full'
  },
  {
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: 'freelancer',
    component: FreelancerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
