import { Action } from "@ngrx/store";
import { AssignedProjects } from "../models/projects.modal";
import * as DemoActions from './../actions/demo.actions';

const initialState: AssignedProjects = {
    proId: '',
    project_name: '',
    description : '',
}
export function assignedReducer(state: AssignedProjects[] = [initialState], action: Action) {
    const tutorialAction = action as DemoActions.Actions; 
    console.log("reducers projectreducer: ", tutorialAction.type)
    switch(tutorialAction.type) {
        // case DemoActions.ADD_PROJECT:
        //     return [...state, tutorialAction.payload];
        case DemoActions.UPDATE_PROJECT:
            return [...state, tutorialAction.payload];
            // {
            // export const getSelectedrecord = (id: string) =>
        //     createSelector(state, getSelectedId, (state) => {
        //         return state.find((data) => data.id === id);
        //     });
        // }
           
        default:
            return state;
    }
}   