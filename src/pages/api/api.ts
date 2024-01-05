import axios from "axios";
import {authService} from "@/util/manageExtra";
import {getCookie} from "@/util/cookie";



// TestPage localhost connect proxy
// .net 에 접근하는 base url 설정 (실서버에 올라가게 되면 해당 path로 변경하여야 한다.)
//Local
//export const API_URL = 'http://localhost:3410/';

//DEV
 export const API_URL = 'http://ec2-3-26-11-110.ap-southeast-2.compute.amazonaws.com:80';
 // export const API_URL = 'http://localhost:80';

// @ts-ignore
export const getData = axios.create({
    baseURL: API_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getCookie(null,'accessToken').accessToken}`,
        "Refresh": getCookie(null,'refreshToken').refreshToken
    }
});

// 요청 인터셉터 추가
getData.interceptors.request.use(config => {
    const accessToken = getCookie(null,'accessToken').accessToken;
    const refreshToken = getCookie(null,'refreshToken').refreshToken;
    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        config.headers['Refresh'] = refreshToken;
    }
    return config;
}, error => {
    // 요청 에러 처리
    return Promise.reject(error);
});