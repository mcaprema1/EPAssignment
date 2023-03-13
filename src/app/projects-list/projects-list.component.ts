import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects.modal';
import { Store } from '@ngrx/store';
import { ProjState, AppState, Proj_EmpState } from '../app.state';
import * as DemoActions from './../actions/demo.actions'
import { Demo } from '../models/demo.modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {
  projects: Observable<Projects[]>;
  employees : Observable<Demo[]>;
  assignedProjects : Observable<Projects[]>
  demo : any =[];
  assignProject : any
  assignProjectForm : FormGroup
  constructor(private store: Store<ProjState>,private store1: Store<AppState>, private store2 : Store<Proj_EmpState> ) {
    this.projects = store.select('projectStore');
    this.employees = store1.select('demoStore');
    this.assignedProjects = store2.select('Proj_Emp_Store');
    this.assignProjectForm = new FormGroup({
      assignProject: new FormControl(''),
    });
  }

  removeFromTable(id: number) {
    // this.store.dispatch(new DemoActions.RemoveDemo(id)); 
  }

  ngOnInit() {
    this.employees.subscribe(data =>{
      console.log("get emp from empStore : ", data);
      this.demo = data
    })
  }
  selectedEmployee(row : Projects, event : any){
    console.log("clicked : ",row, event.target.value);
      this.store2.dispatch(new DemoActions.UpdateProjects({
        proId : row.proId,
        project_name : row.project_name,
        description : row.description,
        Project_assigned_To : event.target.value
      }))
    
  }
}
