import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/home/home.component';
   

 const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, 
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'departures',
    loadChildren: () =>
      import('./modules/departures/departures.module').then((m) => m.DeparturesModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgxNavbarModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
