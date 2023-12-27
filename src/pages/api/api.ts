import axios from "axios";



// TestPage localhost connect proxy
// .net 에 접근하는 base url 설정 (실서버에 올라가게 되면 해당 path로 변경하여야 한다.)
//Local
//export const API_URL = 'http://localhost:3410/';

//DEV
 export const API_URL = 'http://3.104.79.238:80';

export const getData = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type" : "application/json",
    }
});
