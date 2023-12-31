import {useEffect, useState} from "react";
import Link from "next/link";
import {getCookie, removeCookie} from "@/util/cookie";
import cookie from "nookies";
import {useAppDispatch, useAppSelector} from "@/templates/hooks/reduxHooks";
import {setUserInfo} from "@/store/authSlice";
import {useRouter} from "next/router";

export default function Header() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector((state) => state.user.userInfo);

    const [state, setState] = useState('')


    function logOut(){
        dispatch(setUserInfo(null));
        removeCookie(null, 'accessToken')
        removeCookie(null, 'refreshToken')
        router.push('/');
    }

    return <div style={{
        height: 80,
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 10,
        backgroundColor: 'white',
        width: '100%'
    }}>
        <div style={{padding: '0px 32px 0px 32px', width: '100%'}}>
            <img src={'/img/logo.svg'} style={{float: 'left', width: 200, cursor : 'pointer'}} onClick={()=> router.push('/')}/>
            <div style={{float: 'right', paddingTop: 11, fontSize: 14, color: '#11414B'}}>
                <>
                    {userInfo ?
                        <>
                        <span style={{padding: '0px 18px 0px 18px', display: 'inline-block', cursor : 'pointer'}}>마이페이지</span>
                        <span style={{padding: '0px 18px 0px 18px', display: 'inline-block', color : 'red', opacity : 0.8, cursor : 'pointer'}} onClick={logOut}>로그아웃</span>
                        </>
                        :
                    <>
                        <Link href={'/Register'}>  <span style={{padding: '0px 18px 0px 18px', display: 'inline-block', cursor : 'pointer'}}>회원가입</span></Link>
                       <Link href={'/Login'}> <span style={{padding: '0px 18px 0px 18px', display: 'inline-block', cursor : 'pointer'}}>로그인</span></Link>
                    </>
                    }
                </>

                <span style={{padding: '0px 18px 0px 18px', display: 'inline-block'}}><img src="/img/search.svg"
                                                                                           width={13} alt=""
                                                                                           style={{paddingRight: 4}}/>검색</span>
            </div>
            <div style={{float: 'right', paddingTop: 10, fontSize: 16, fontWeight: 600}}>
                <span style={{padding: '0px 35px 0px 35px', display: 'inline-block', cursor : 'pointer'}} onClick={()=> router.push('/start_up_vc')}>STARTVC</span>
                <span style={{padding: '0px 35px 0px 35px', display: 'inline-block', cursor : 'pointer'}} onClick={()=> router.push('/eventforum')}>EVENTFORUM</span>
                <span style={{padding: '0px 35px 0px 35px', display: 'inline-block', cursor : 'pointer'}} onClick={()=> router.push('/ir')}>IR INVEST</span>
                <span style={{padding: '0px 35px 0px 35px', display: 'inline-block', cursor : 'pointer'}} onClick={()=> router.push('/start_short')}>스타트업Short</span>
                <span style={{padding: '0px 35px 0px 35px', display: 'inline-block', cursor : 'pointer'}}>채용공고</span>
                <span style={{padding: '0px 35px 0px 35px', display: 'inline-block', cursor : 'pointer'}} onClick={()=> router.push('/News')}>뉴스보도</span>
            </div>
        </div>
    </div>
}