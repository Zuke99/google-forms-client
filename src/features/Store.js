import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user/UserSlice";
import QuestionSlice from "./user/QuestionSlice";

export const store = configureStore({
    reducer : {
        user : UserSlice,
        question : QuestionSlice,
    }
})