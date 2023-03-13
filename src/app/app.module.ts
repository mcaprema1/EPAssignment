import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { StoreModule } from '@ngrx/store';
import { demoReducer } from './reducers/demo.reducer';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { projectreducer } from './reducers/project.reducer';
import { ProjectsListComponent } from './projects-list/projects-list.component';

let rootReducer = {
  demoStore: demoReducer,
  projectStore: projectreducer, 
}
@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    HomeComponent,
    ProjectsComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      demoStore: demoReducer, 
      projectStore : projectreducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
