import {combineReducers, configureStore, PayloadAction} from "@reduxjs/toolkit";
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import commonReducer from "@/store/commonSlice";
import authReducer from "@/store/authSlice";

const reducer = (state: any, action: PayloadAction<any>) => {
    //hydration 일어날떄 별도 처리 구간
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload
        };
    }
    return combineReducers({
        common: commonReducer,
        user: authReducer,

    })(state, action);
};

const initialState = {};
export const makeStore = () =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false}),
        // .concat(logger),
        devTools: process.env.NODE_ENV !== "production",
        preloadedState: initialState,
        enhancers: (defaultEnhancers) => [...defaultEnhancers]
    });


const store = makeStore();

// wrapper를 생성해줍니다.
export const wrapper = createWrapper(makeStore, {
    // debug: process.env.NODE_ENV === "development"
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const storeP = store;