import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import {useEffect, useState} from "react";
import {getData} from "@/pages/api/api";
import {getCookie, setCookie} from "@/util/cookie";
import {useRouter} from "next/router";
import Link from "next/link";
import {authService} from "@/util/manageExtra";
import cookie from "nookies";
import initialServerRouter from "@/util/initialServerRouter";
import {wrapper} from "@/store/store";

export default function Login() {
    const router = useRouter();

    const [info, setInfo] = useState({id: '', pw: ''})

    function changeValue(type: string, e: any) {
        setInfo(v => {
            let property = {}
            // @ts-ignore
            property[type] = e.target.value;
            return {...v, ...property}
        })
    }

    useEffect(() => {
    }, []);
    async function login() {
        const list = Object.values(info)
        let check = true
        list.forEach(v => {
            if (!v) {
                check = false;
            }
        });
        if (check) {
            await getData.post(`member/signin`, info).then(v => {
                const {accessToken, refreshToken} = v.data.data;
                setCookie(null, 'accessToken', accessToken);
                setCookie(null, 'refreshToken', refreshToken);
                router.push('/')
            }).catch(err =>{
                console.log(err,':::')
            })
        } else {
            alert('빠진구간 있음')
        }
    }


    return <>

        <Header/>
        <div className={'register_container'}>
            <div>
                <h2>로그인</h2>
                <div>아이디(이메일)</div>
                <input type="text" onChange={(e) => changeValue('id', e)}
                       placeholder={'아이디를 입력하세요'}/>
                <div>비밀번호</div>
                <input type="text" onChange={(e) => changeValue('pw', e)}
                       placeholder={'패스워드를 입력하세요'}/>


                <div style={{textAlign: 'right', fontSize: 13}}> <Link href={'/Register'}>회원가입</Link> <span>|</span> <Link href={'/FindId'}>아이디/비밀번호 찾기</Link></div>
                <div onClick={login} style={{
                    height: 48, backgroundColor: '#4181a0', display: 'flex', padding: 0, borderRadius: 5,
                    alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: 10, cursor: "pointer"
                }}>로그인
                </div>

                <div style={{borderBottom: '1px solid lightGray'}}/>


                <div>
                    <div style={{textAlign: 'center', fontSize: 15}}>또는</div>
                    <div style={{
                        height: 48, backgroundColor: '#FEE500', display: 'flex', padding: 0, borderRadius: 5,
                        alignItems: 'center', justifyContent: 'center', marginTop: 20, cursor: "pointer",
                        fontSize : 14, color : '#1a1600'
                    }}>카카오로 간편로그인하기
                    </div>
                    <div style={{
                        height: 48, backgroundColor: '#06BD34', display: 'flex', padding: 0, borderRadius: 5,
                        alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: 20, cursor: "pointer",
                        fontSize : 14
                    }}>네이버로 간편로그인하기
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    </>
}


export const getServerSideProps  = wrapper.getStaticProps((store: any) => async (ctx: any) => {

  const {userState} = await initialServerRouter(ctx, store);



    // const { req } = context;
    // const token = req.cookies.token; // 쿠키에서 토큰 가져오기
    //
    // try {
    //     // 토큰 검증 로직
    //     jwt.verify(token, secretKey);
    //     return { props: {} };
    // } catch (err) {
    //     // 토큰이 유효하지 않은 경우 리디렉션
    //     return {
    //         redirect: {
    //             destination: '/login',
    //             permanent: false
    //         }
    //     };
    // }

    const redirectProperty = {
        redirect: {
            permanent: false,
            destination: "/"
        }
    };
    return userState ? redirectProperty :  {
        props: {title: "tester", page: "tester"}
    };
});
