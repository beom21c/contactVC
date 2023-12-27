import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import {useState} from "react";
import {getData} from "@/pages/api/api";
import {setCookie} from "@/util/cookie";
import {useRouter} from "next/router";
import Link from "next/link";

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

    async function login() {
        const list = Object.values(info)
        let check = true
        list.forEach(v => {
            if (!v) {
                check = false;
            }
        });
        if (check) {
            await getData.post(`login`, info).then(v => {
                const {data, result} = v.data;
                if (result) {
                    setCookie(null, 'user', data[0].name);
                    alert('로그인 성공')
                    router.push('/')
                } else {
                    alert('로그인 정보가 올바르지 않습니다.')
                }
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


                <div style={{textAlign: 'right', fontSize: 13}}> <Link href={'/Register'}>회원가입</Link> <span>|</span> 아이디/비밀번호 찾기</div>
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