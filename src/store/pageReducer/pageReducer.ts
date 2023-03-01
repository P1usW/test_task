import {createReducer} from "@reduxjs/toolkit";
import {setPostsAction} from "../Actions/Actions";
import {InitialStatePage} from "../../interface/interface";

let initialState: InitialStatePage = {
    postsNumber: 10
};

const pageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(setPostsAction, (state, action) => {
            return {...state, postsNumber: state.postsNumber + 1};
        })
        .addDefaultCase((state) => {
            return state
        })
})
export default pageReducer