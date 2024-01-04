import cookie, {destroyCookie} from "nookies";


// todo : 여기 있는것들 nookies 라이브러리로 교체요망 *******
export const setCookie = (ctx, key, value) => {
    let expires = 24*60*60;
    if (key === "refreshToken")
        expires = 6 * 24*60*60;
    cookie.set(ctx, key, value, {
        maxAge: expires,
        path: "/"
    });
};

export const removeCookie = (ctx, key) => {
    destroyCookie(ctx, key, {
        path: '/',
    });
    cookie.destroy(ctx, key);
};

export const getCookie = (ctx, key) => {

    return cookie.get(ctx,key)
};

