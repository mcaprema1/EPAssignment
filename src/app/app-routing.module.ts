// import { SinglePostComponent } from './posts/single-post/single-post.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component2Component } from './component2/component2.component';
import { ProjectsComponent } from './projects/projects.component';
import { ListAssignedProjectsComponent } from './list-assigned-projects/list-assigned-projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path : 'employee',
    component : Component2Component
  },
  {
    path : 'project',
    component : ProjectsComponent
  },
  {
    path : 'assigned',
    component : ListAssignedProjectsComponent
  }
]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}