import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterformComponent } from "./registerform/registerform.component";
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ProglistComponent } from './proglist/proglist.component';

const routes: Routes = [
  {
    path:"",
    component:RegisterformComponent,
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"dashbord",
    component:DashbordComponent,
  },
  {
  path:"proglist",
  component:ProglistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
