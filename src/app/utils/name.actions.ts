// This file is added for Step 21

import { createAction, props } from '@ngrx/store';

export const setName = createAction('[Name Component] Set', props<{ name: string }>());
