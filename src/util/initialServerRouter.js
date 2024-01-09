import {getCookie, setCookie} from "./cookie";
import {getData} from "@/pages/api/api";
import {setUserInfo} from "@/store/authSlice";


export default async function (ctx, store) {

    // todo : redirect의 기준은 role이 user이거나 유저정보가 없을때 일것입니다.
    let userState = false;
    let deployResponse = {};
    let userInfo = null;
    if (ctx.req) {
        getData.defaults.headers["Authorization"] = `Bearer ${getCookie(ctx, "accessToken").accessToken}`;
        getData.defaults.headers["Refresh"] = getCookie(ctx, "refreshToken").refreshToken;
        await getData.post('member/me').then(v => {
            store.dispatch(setUserInfo(v.data));
            userState = true
        }, async err => {
            await getData.get('member/refresh').then(v => {
                const {data, userInfo} = v.data
                const {accessToken, refreshToken} = data;
                setCookie(ctx, 'accessToken', accessToken)
                setCookie(ctx, 'refreshToken', refreshToken)
                store.dispatch(setUserInfo(userInfo));
                userState = true
            },err =>{
                userState = false
            })

        })
    }



    return {userState: userState}
    // return {userState: userState, userInfo: userInfo, deployResponse:deployResponse};
}

