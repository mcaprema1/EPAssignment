import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, ProjState } from '../app.state';
import { Projects } from '../models/projects.modal';
import * as DemoActions from './../actions/demo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projectsForm : FormGroup;
  project: Observable<Projects[]>;

  constructor(private store: Store<ProjState>, private router : Router) {
    this.projectsForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required]),
    });

    // this.project = store.select('demoStore');

  }
  addToProjectsStore(proid: string, name: string, desc: string) {

    this.store.dispatch(new DemoActions.AddProjects({
      proId : proid,
      project_name : name,
      description : desc
    }))
    console.log("storessss : ", this.store)
  }
  removeFromTable(id: number) {
    // this.store.dispatch(new DemoActions.RemoveDemo(id)); 
  }

  backHome(){
    this.router.navigate([''])
  }
}
