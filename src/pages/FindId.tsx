import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import {useState} from "react";
import {getData} from "@/pages/api/api";
import {setCookie} from "@/util/cookie";
import Link from "next/link";

export default function FindId() {

    const [info, setInfo] = useState({name: '', email: ''})

    function changeValue(type: string, e: any) {
        setInfo(v => {
            let property = {}
            // @ts-ignore
            property[type] = e.target.value;
            return {...v, ...property}
        })
    }

    async function findId() {
        const list = Object.values(info)
        let check = true
        list.forEach(v => {
            if (!v) {
                check = false;
            }
        });
        if (check) {

        } else {
            alert('빠진구간 있음')
        }
    }

    return <>

        <Header/>
        <div className={'register_container'}>
            <div>
                <h2>아이디 찾기</h2>
                <div>성함</div>
                <input type="text" onChange={(e) => changeValue('name', e)}
                       placeholder={'성함을 입력하세요'}/>
                <div>이메일 주소</div>
                <input type="text" onChange={(e) => changeValue('email', e)}
                       placeholder={'가입하신 이메일을 입력하세요'}/>


                <div>비밀번호 찾기</div>
                <div onClick={findId} style={{
                    height: 48, backgroundColor: '#4181a0', display: 'flex', padding: 0, borderRadius: 5,
                    alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: 20, cursor: "pointer"
                }}>아이디 찾기
                </div>

            <div style={{paddingTop : 40, textAlign : 'center'}}>가입하신 이메일로 아이디를 발송해 드립니다</div>
            </div>
            <Footer/>
        </div>
    </>
}