import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    pricing : [{name : '1 이용권', price : 75000, discountPrice : 0}],
    buyType : {title : '', img : '', price : '', type : ''}
};


const commonSlice = createSlice({
    name: "common", initialState, reducers: {
        setPrice: (state, action) => {
            const {payload} = action;
            state.pricing = [payload]
        },
        setBuyType: (state, action) => {
            const {payload} = action;
            state.buyType = [payload]
        },
    }
});

const {actions, reducer: commonReducer} = commonSlice;

export const {setPrice, setBuyType} = actions;

export default commonReducer;