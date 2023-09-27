import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addQuestion  = createAsyncThunk("addQuestion", async (data , {rejectWithValue}) => {
    try{
        return data;
    } catch (error){
        return rejectWithValue(error);
    }
});

const question = createSlice({
    name : "question",
    initialState : {
        questionSet : {},
        isLoading : false,
        error : false,
    },
    extraReducers : (builder) => {
        builder.addCase(addQuestion.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(addQuestion.fulfilled, (state, action) => {

            state.isLoading = false;
            const { type, question, options } = action.payload;

            // Check if the question text already exists in the state
            if (state.questionSet[question]) {
              // If it exists, update it
              state.questionSet[question] = action.payload
            } else {
              // Otherwise, add it as a new question
              state.questionSet[question] = action.payload
            }
          });
        

        builder.addCase(addQuestion.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }

})

export default question.reducer;