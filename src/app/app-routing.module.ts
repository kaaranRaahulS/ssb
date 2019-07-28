import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { CreatepractisetestComponent } from './createpractisetest/createpractisetest.component';


const routes: Routes = [
  {path:'' , component : LoginComponent},
  {path : 'sidemenu' , component: SidemenuComponent},
  {path:'createpractisetest' , component : CreatepractisetestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
