import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationContextComponent} from "./core/authentication/authentication-context/authentication-context.component";

const routes: Routes = [
  {path:'', redirectTo: '/auth', pathMatch:'full'},
  {path:'auth', component: AuthenticationContextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
