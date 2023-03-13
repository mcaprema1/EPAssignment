import { Action } from "@ngrx/store";
import { Projects } from "../models/projects.modal";
import * as DemoActions from './../actions/demo.actions';

const initialState: Projects = {
    proId: '11025',
    project_name: 'LIB',
    description : 'AI Project',
}

export function projectreducer(state: Projects[] = [initialState], action: Action) {
    const tutorialAction = action as DemoActions.Actions; 
    console.log("reducers projectreducer: ", tutorialAction.type)
    switch(tutorialAction.type) {
        case DemoActions.ADD_PROJECT:
            return [...state, tutorialAction.payload];
        case DemoActions.UPDATE_PROJECT: {
            // export const getSelectedrecord = (id: string) =>
        //     createSelector(state, getSelectedId, (state) => {
        //         return state.find((data) => data.id === id);
        //     });
        }
            return [...state, tutorialAction.payload];
        default:
            return state;
    }
}   

   