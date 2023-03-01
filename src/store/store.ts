import {configureStore} from "@reduxjs/toolkit";
import pageReducer from "./pageReducer/pageReducer";


export const store = configureStore({reducer: pageReducer})