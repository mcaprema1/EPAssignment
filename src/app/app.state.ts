import { Demo } from "./models/demo.modal";
import { Projects } from "./models/projects.modal";

export interface AppState {
    readonly demoStore: Demo[];
}

export interface ProjState {
    readonly projectStore: Projects[];
}
export interface Proj_EmpState {
    readonly Proj_Emp_Store: Projects[];
}
