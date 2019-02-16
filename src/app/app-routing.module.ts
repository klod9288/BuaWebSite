import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinginComponent } from './singin/singin.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: '', component: SinginComponent },
  { path: 'signup', component: SingupComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
