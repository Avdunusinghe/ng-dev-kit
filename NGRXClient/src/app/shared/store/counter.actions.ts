import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const customIncrement = createAction("customerIncrement", props<{value : number, action : string}>());
export const changeAppName = createAction("changeAppName", props<{appName : string}>());