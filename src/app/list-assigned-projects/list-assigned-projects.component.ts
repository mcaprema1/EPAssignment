import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects, AssignedProjects } from '../models/projects.modal';
import { Store } from '@ngrx/store';
import { ProjState, AppState, Proj_EmpState } from '../app.state';
import * as DemoActions from './../actions/demo.actions'
import { Demo } from '../models/demo.modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-assigned-projects',
  templateUrl: './list-assigned-projects.component.html',
  styleUrls: ['./list-assigned-projects.component.css']
})
export class ListAssignedProjectsComponent {
  assignedProjects : Observable<AssignedProjects[]>
  all_assignedProject : any= [];
  len= 0;
  assignProjectForm : FormGroup
  constructor(private store2 : Store<Proj_EmpState> ) {
    this.assignedProjects = store2.select('Proj_Emp_Store');
  }

  removeFromTable(id: number) {
    // this.store.dispatch(new DemoActions.RemoveDemo(id)); 
  }

  ngOnInit() {
    this.assignedProjects.subscribe(data =>{
      this.all_assignedProject = data
      this.len = data.length
    })
  }
}
