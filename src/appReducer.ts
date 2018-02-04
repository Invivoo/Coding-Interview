import { Reducer } from 'redux';
import { reducerWithInitialState } from 'typescript-fsa-reducers';

// temporary implementation - should a combine of all the reducers
export const appReducer: Reducer<{}> =
    reducerWithInitialState({})
        .build();