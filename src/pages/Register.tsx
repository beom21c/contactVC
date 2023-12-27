import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import {useState} from "react";
// @ts-ignore
import _ from "lodash";
import {getData} from "@/pages/api/api";
import {useRouter} from "next/router";

export default function Register() {
    const router = useRouter();

    const initRegister = {
        company: '',
        name: '',
        id: '',
        position: '',
        email: '',
        phone: '',
        pw: '',
        confirmPw: ''
    };
    const initChecked = {0: false, 1: false, 2: false, 3: false};
    const initFullChecked = {0: true, 1: true, 2: true, 3: true};
    const [registerType, setRegisterType] = useState('startUp')
    const [info, setInfo] = useState(initRegister)
    const [checkInfo, setCheckInfo] = useState(initChecked)


    function changeValue(type: string, e: any) {
        setInfo(v => {
            let property = {}
            // @ts-ignore
            property[type] = e.target.value;
            return {...v, ...property}
        })
    }

    function changeChecked(key: any, e: any) {
        const copyInfo = _.cloneDeep(checkInfo)
        copyInfo[key] = e.target.checked
        if(key === 0 && e.target.checked){
            setCheckInfo(initFullChecked)
        }else if(key === 0 && !e.target.checked){
            setCheckInfo(initChecked)
        }else if(!copyInfo[1] || !copyInfo[2] || !copyInfo[3]){

            setCheckInfo(v => {
                    let property = {}
                    // @ts-ignore
                    property[key] = e.target.checked;
                    return {...v, ...property, 0 : false}
            })
        }else if(copyInfo[1] && copyInfo[2] && copyInfo[3]){
            setCheckInfo(initFullChecked)
        }else{
            setCheckInfo(v => {
                let property = {}
                // @ts-ignore
                property[key] = e.target.checked;
                return {...v, ...property}
            })
        }
    }


    async function doRegister() {
     const list = Object.values(info)
        let check = true
        list.forEach(v=>{
            if(!v){
                check = false;
            }
        })
        if(check){
            await getData.post(`registerMember`, info).then(v=>{
              alert('회원가입이 완료 되었습니다.');
                router.push('/Login')
            })
        }else{
            alert('빠진구간 있음')
        }
    }
    return <>
        <Header/>
        <div className={'register_container'}>
            <div>
                <h2>회원가입</h2>
                <div style={{fontSize: 20, cursor: 'pointer'}}>
                    <div style={{
                        height: 60,
                        backgroundColor: registerType === 'startUp' ? '#4181A0' : '#e7ebef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: registerType === 'startUp' ? 'white' : '#9a9a9a',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5
                    }} onClick={() => setRegisterType('startUp')}>스타트업으로 등업
                    </div>
                    <div style={{
                        height: 60,
                        backgroundColor: registerType === 'invest' ? '#4181A0' : '#e7ebef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: registerType === 'invest' ? 'white' : '#9a9a9a',
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5
                    }} onClick={() => setRegisterType('invest')}>투자사로 등업
                    </div>
                </div>
                <div style={{paddingTop : 30}}>회사명 <span>*</span></div>
                <input type="text" value={info.company} onChange={(e) => changeValue('company', e)}
                       placeholder={'한글 회사명을 입력하세요'}/>

                <div>성함<span>*</span></div>
                <input type="text" value={info.name} onChange={(e) => changeValue('name', e)}
                       placeholder={'성함을 입력하세요'}/>

                <div>아이디<span>*</span></div>
                <div className="input-wrapper">
                    <input type="text" value={info.id} onChange={(e) => changeValue('id', e)}
                           placeholder={'아이디를 입력하세요'}/>
                    <div className="suffix">중복확인</div>
                </div>

                <div>직책<span>*</span></div>
                <input type="text" value={info.position} onChange={(e) => changeValue('position', e)}
                       placeholder={'직책을 입력하세요'}/>

                <div>메일주소<span>*</span></div>
                <div className="input-wrapper">
                    <input type="text" value={info.email} onChange={(e) => changeValue('email', e)}
                           placeholder={'회사 메일을 입력하세요'}/>
                    <div className="suffix">메일전송</div>
                </div>

                {/*<div>인증번호<span>*</span></div>*/}
                {/*<div className="input-wrapper">*/}
                {/*    <input type="text" value={info.certNumb} onChange={(e) => changeValue('certNumb', e)}*/}
                {/*           placeholder={'인증 번호를 입력하세요'}/>*/}
                {/*    <div className="suffix">인증하기</div>*/}
                {/*</div>*/}

                <div>휴대폰 번호<span>*</span></div>
                <div className="input-wrapper">
                    <input type="text" value={info.phone} onChange={(e) => changeValue('phone', e)}
                           placeholder={'번호를 입력하세요'}/>
                    <div className="suffix">인증하기</div>
                </div>


                <div>비밀번호<span>*</span></div>
                <input type="text" value={info.pw} onChange={(e) => changeValue('pw', e)}
                       placeholder={'비밀번호를 8자리 입력하세요'}/>

                <div>비밀번호 재입력<span>*</span></div>
                <input type="text" value={info.confirmPw} onChange={(e) => changeValue('confirmPw', e)}
                       placeholder={'비밀번호를 재입력하세요'}/>

                <div>약관 동의<span>*</span></div>

                <div className={'terms_container'} style={{marginTop: 20, padding: 0}}>
                    <div style={{height: 60, borderBottom: '1px solid lightGray'}}><input type="checkbox"
                                                                                          checked={checkInfo[0]}
                                                                                          onChange={(e) => changeChecked(0, e)}/> 모두
                        동의합니다.
                    </div>
                    <div><input type="checkbox" checked={checkInfo[1]} onChange={(e) => changeChecked(1, e)}/>[필수] 서비스
                        이용 약관에 동의합니다.
                    </div>
                    <div><input type="checkbox" checked={checkInfo[2]} onChange={(e) => changeChecked(2, e)}/>[필수]
                        개인정보수집 및 이용에 동의합니다.
                    </div>
                    <div><input type="checkbox" checked={checkInfo[3]} onChange={(e) => changeChecked(3, e)}/>[선택] 마케팅
                        활용 동의 및 광고 수신에 동의합니다.
                    </div>
                    <div style={{fontSize: 13, color: 'lightGray', paddingLeft : 30, marginTop : -10}}>이벤트, 뉴스레터 등 서비스의 다양한 정보를 제공합니다.</div>
                </div>
                <div onClick={doRegister} style={{
                    height: 48, backgroundColor: '#4181a0', display: 'flex', padding: 0, borderRadius: 5,
                    alignItems: 'center', justifyContent: 'center', color: 'white', marginTop: 20, cursor: "pointer"
                }}>회원가입
                </div>
            </div>
            <Footer/>
        </div>

    </>
}