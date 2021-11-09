import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DeparturesComponent } from './departures.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
 


const routes: Routes = [
  {
    path: '', 
    children: [
      {
        path: '',
        component: DeparturesComponent,
      },  
    ],
  },
];


@NgModule({
  declarations: [DeparturesComponent],
  imports: [
    HttpClientModule,
    CommonModule, 
    RouterModule.forChild(routes),  
    FormsModule,
    ReactiveFormsModule, 
    NgxDatatableModule,
    NgSelectModule
  ],
})
export class DeparturesModule { }
