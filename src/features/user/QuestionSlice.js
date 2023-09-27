import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const addQuestion  = createAsyncThunk("addQuestion", async (data , {rejectWithValue}) => {
    try{
        return data;
    } catch (error){
        return rejectWithValue(error);
    }
});
const initialState = {
    questionSet : {},
    isLoading : false,
    error : false,
}

const question = createSlice({
    name : "question",
    initialState : initialState,
    reducers:{
        resetQuestionState: (state) => {
            state.questionSet = {};
            state.isLoading = false;
            state.error = false;
            return initialState;
        }
    },
    extraReducers : (builder) => {
        builder.addCase(addQuestion.pending, (state) => {
            state.isLoading = true;
        })

        builder.addCase(addQuestion.fulfilled, (state, action) => {

            state.isLoading = false;
            state.questionSet = action.payload;
          });
        

        builder.addCase(addQuestion.rejected, (state) => {
            state.isLoading = false;
            state.error = true;
        })
    }

})

export default question.reducer;