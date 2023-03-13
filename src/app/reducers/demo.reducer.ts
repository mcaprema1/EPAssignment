import { Action } from "@ngrx/store";
import { Demo } from "../models/demo.modal";
import * as DemoActions from './../actions/demo.actions';

const initialState: Demo = {
    empId: '11025',
    first_name: 'Prema',
    last_name : 'Palanisamy',
    emailID : 'prema.palanisamy@gmail.com',
    mobile : '8610851868',
    address :"OMR"
}

export function demoReducer(state: Demo[] = [initialState], action: Action) {
    const tutorialAction = action as DemoActions.Actions; 
    
    switch(tutorialAction.type) {
        case DemoActions.ADD_DEMO:
            return [...state, tutorialAction.payload];
        case DemoActions.REMOVE_DEMO:
            state.splice(tutorialAction.payload, 1);
            return state;
        // case DemoActions.ADD_PROJECT:
        //     return [...state, tutorialAction.payload];
        default:
            return state;
    }
}   