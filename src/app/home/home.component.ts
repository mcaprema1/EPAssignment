import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor( private router : Router){}

  ngOnInit(){

  }
  navigatetoEmp(){
    this.router.navigate(['employee'])
  }
  navigatetoProjects(){
    this.router.navigate(['project'])
  }
  listAssignedProjects(){
    this.router.navigate(['assigned'])
  }
}
