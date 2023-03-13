import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as DemoActions from './../actions/demo.actions';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  employeeForm : FormGroup;

  constructor(private store: Store<AppState>, private router : Router) {
    this.employeeForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.min(3)]),
      last_name: new FormControl('', [Validators.required]),
    });
   }
   get f() { return this.employeeForm.controls; }

  addToStore(Empid: string, First: string, Last: string, Email: string, Mobile: string,
    Address: string) {
    this.store.dispatch(new DemoActions.AddDemo({
      // name: nameL,
      // gender: genderL
    empId : Empid,
    first_name : First,
    last_name : Last,
    emailID : Email,
    mobile : Mobile,
    address : Address
      
    }))
  }

  ngOnInit() {
  }
  backHome(){
    this.router.navigate([''])
  }
}
