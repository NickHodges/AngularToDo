// This file is added for Step 21

import { createReducer, on, Action } from '@ngrx/store';
import { setName } from './name.actions';

export const initialName: string = '';

const _nameReducer = createReducer<string, Action>(initialName, on(setName, (state: string, { name }) => name));

export function nameReducer(name: string, action: Action) {
  return _nameReducer(name, action);
}
