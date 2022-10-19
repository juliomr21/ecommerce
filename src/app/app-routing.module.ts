import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducDetailComponent } from './produc-detail/produc-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProducDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
