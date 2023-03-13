import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssignedProjectsComponent } from './list-assigned-projects.component';

describe('ListAssignedProjectsComponent', () => {
  let component: ListAssignedProjectsComponent;
  let fixture: ComponentFixture<ListAssignedProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAssignedProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAssignedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
