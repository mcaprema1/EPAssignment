import { Action } from '@ngrx/store';
import { Demo } from '../models/demo.modal';
import { Projects } from '../models/projects.modal';

export const ADD_DEMO = 'Add Demo';
export const REMOVE_DEMO = 'Remove Demo';
export const ADD_PROJECT = 'Add Projects';
export const UPDATE_PROJECT = 'Update Projects';
export class AddDemo implements Action {
    readonly type = ADD_DEMO;
    constructor(public payload: Demo) {
        console.log("add demo action ", this.type);
    }
}

export class RemoveDemo implements Action {
    readonly type = REMOVE_DEMO;
    constructor(public payload: number) {}
}
export class AddProjects implements Action {   
    readonly type = ADD_PROJECT;
    constructor(public payload: Projects) {
        console.log("add Proj action ", this.type);
    }
}
export class UpdateProjects implements Action {   
    readonly type = UPDATE_PROJECT;
    constructor(public payload: Projects) {
        console.log("add Proj action ", this.type);
    }
}
export type Actions = AddDemo | RemoveDemo | AddProjects | UpdateProjects;