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
        // case DemoActions.ADD_DEMO:
        //     return [...state, tutorialAction.payload];
        // case DemoActions.REMOVE_DEMO:
        //     state.splice(tutorialAction.payload, 1);
        //     return state;
        case DemoActions.ADD_PROJECT:
            return [...state, tutorialAction.payload];
        case DemoActions.UPDATE_PROJECT: {
            // export const getSelectedActivity = (id: string) =>
        //     createSelector(state, getSelectedActivityId, (state) => {
        //         return state.activities.find((activity) => activity.id === id);
        //     });
        }
            return [...state, tutorialAction.payload];
        default:
            return state;
    }
}   

   