import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakeComponent } from './Filtering/take/take/take.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
    children:[
      { path: 'take', component: TakeComponent }
    ]
  }
]

@NgModule({
  declarations: [
    TakeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( routes ),
  ]
})
export class OperatorsModule { }
