import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    pricing : [{name : '1 이용권', price : 75000, discountPrice : 0}],
    buyType : {title : '', img : '', price : '', type : ''},
    modal : {type : '', props : {}}
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
        setModal: (state, action) => {
            const {payload} = action;
            console.log(payload,'payload:::')
            state.modal = payload
        },
    }
});

const {actions, reducer: commonReducer} = commonSlice;

export const {setPrice, setBuyType, setModal} = actions;

export default commonReducer;