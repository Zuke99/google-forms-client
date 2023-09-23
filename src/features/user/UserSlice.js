import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setUserDetails = createAsyncThunk("setUserDetails", async (data, {rejecWithValue}) => {
    try{
        return data;
    } catch(error){
        return rejecWithValue(error)
    }
})

const userDetais = createSlice({
    name : "user",
    initialState : {
        name : "",
        isLoading : false,
        error : null,
        imageUrl : "",
    },
    extraReducers : (builder) => {
        builder.addCase(setUserDetails.pending, (state, action) => {
            state.isLoading = true;
        });
        
        builder.addCase(setUserDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.imageUrl = action.payload.picture;
            state.name = action.payload.name;
        });

        builder.addCase(setUserDetails, (state, action) => {
            state.error = true;
            state.isLoading = false;
        })

    }
})

export default userDetais.reducer;