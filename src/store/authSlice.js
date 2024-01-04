import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    userInfo :null

};

const authSlice = createSlice({
    name: "user", initialState, reducers: {
        setUserInfo: (state, action) => {
            console.log(action.payload,'action.payload::')
            state.userInfo =  action.payload;
        }
    }, extraReducers: (builder) => {

        // builder.addCase(userInfo.pending, (state) => {
        //
        //     state.error = null;
        //     state.loading = true;
        // });
        // builder.addCase(userInfo.fulfilled, (state, { payload }, ...rest) => {
        //
        //     return payload.userInfo.result;
        // });

    }
});

const { actions, reducer: authReducer } = authSlice;

export const { setUserInfo } = actions;

export default authReducer;


