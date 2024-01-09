import {setModal} from "@/store/commonSlice";
import {useRouter} from "next/router";
import {modalInit} from "@/util/initial";
import {useAppDispatch, useAppSelector} from "@/templates/hooks/reduxHooks";
import {useEffect, useMemo, useState} from "react";
import {getData} from "@/pages/api/api";
import {setCookie} from "@/util/cookie";

export function InvestReqModal({type}: any) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    return <div style={{width: 500, height: 780, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
        <div style={{float: 'right'}}>
            <div style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'lightgray', cursor: 'pointer'}}
                 onClick={() => dispatch(setModal(modalInit))}>
                <img src={'/img/close.svg'} alt="" style={{marginLeft: 5}}/>
            </div>
        </div>
        <div style={{padding: '68px 38px'}}>
            <div style={{fontSize: 24, fontWeight: 700, textAlign: 'center'}}>투자검토요청 메시지를 입력해 주세요</div>
            <div style={{paddingTop: 30}}>메시지 작성</div>
            <textarea style={{
                height: 400,
                width: '100%',
                border: '1px solid lightGray',
                padding: '15px 15px 0px 15px',
                fontSize: 16
            }} placeholder={'안녕하세요 숙박공유 플랫폼  하이퍼입니다.\n' +
                '투자검토를 희망 합니다.\n' +
                '희망투자단계 pre A\n' +
                '투자유치금액 20억 입니다.\n' +
                'CEO 박태호 HP 010-725-0255\n' +
                'ho@renthouse.kr'}/>
            <div style={{fontSize: 24, fontWeight: 500, paddingTop: 40, textAlign: 'center'}}>1PASS가 사용됩니다.</div>
            <div style={{fontSize: 16, color: '#888', textAlign: 'center', paddingTop: 10}}>메시지 발송에 사용된 PASS는 환불이
                불가능합니다.
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: 25,
                rowGap: 15,
                fontSize: 16,
                textAlign: 'center',
                padding: 13,
                color: 'white',
            }}>

                <div style={{
                    backgroundColor: '#4181A0', height: 48, borderRadius: 8, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={() => router.push('/Pricing')}>이용권 구매
                </div>
                <div style={{
                    backgroundColor: '#4181A0', height: 48, borderRadius: 8, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={() => {
                    alert('발송이 완료 되었습니다.');
                    dispatch(setModal(modalInit))
                }}>메세지 발송
                </div>
            </div>

        </div>
    </div>
}


export function IrModal({type}: any) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    return <div style={{width: 500, height: 780, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
        <div style={{float: 'right'}}>
            <div style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'lightgray', cursor: 'pointer'}}
                 onClick={() => dispatch(setModal(modalInit))}>
                <img src={'/img/close.svg'} alt="" style={{marginLeft: 5}}/>
            </div>
        </div>
        <div style={{padding: '68px 38px'}}>
            <div style={{fontSize: 24, fontWeight: 700, textAlign: 'center'}}>IR 자료 발송하기</div>
            <div style={{paddingTop: 30}}>투자사명</div>
            <div style={{paddingTop: 10, color: '#4181a0', fontSize: 17, fontWeight: 700, paddingLeft: 20}}>골든오크 **상
                심사역
            </div>
            <div style={{paddingTop: 30}}>메시지 작성</div>
            <textarea style={{
                height: 320,
                width: '100%',
                border: '1px solid lightGray',
                padding: '15px 15px 0px 15px',
                fontSize: 16
            }} placeholder={'안녕하세요 숙박공유 플랫폼  하이퍼입니다.\n' +
                '투자검토를 희망 합니다.\n' +
                '희망투자단계 pre A\n' +
                '투자유치금액 20억 입니다.\n' +
                'CEO 박태호 HP 010-725-0255\n' +
                'ho@renthouse.kr'}/>
            <div style={{fontSize: 24, fontWeight: 500, paddingTop: 40, textAlign: 'center'}}>1PASS가 사용됩니다.</div>
            <div style={{fontSize: 16, color: '#888', textAlign: 'center', paddingTop: 10}}>메시지 발송에 사용된 PASS는 환불이
                불가능합니다.
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: 25,
                rowGap: 15,
                fontSize: 16,
                textAlign: 'center',
                padding: 13,
                color: 'white',
            }}>

                <div style={{
                    backgroundColor: '#4181A0', height: 48, borderRadius: 8, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={() => router.push('/Pricing')}>이용권 구매
                </div>
                <div style={{
                    backgroundColor: '#4181A0', height: 48, borderRadius: 8, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={() => {
                    alert('발송이 완료 되었습니다.');
                    dispatch(setModal(modalInit))
                }}>메세지 발송
                </div>
            </div>

        </div>
    </div>
}


export function AddMemberModal({props}: any) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const [memberInfo, setMemberInfo] = useState({name: '', part: '', position: ''});
    const userInfo = useAppSelector((state) => state.user.userInfo);



    useEffect(()=>{
        if(props?.mode === 'update'){
            getTeamMemberInfo()
        }
    },[props])

    async function getTeamMemberInfo() {
       return await getData.post('company/get_team_memberInfo', {tid: props.tid}).then(v=>{
           const {name, part, position} = v.data;
           setMemberInfo({name: name, part: part, position: position});
       })
    }

    const [name, part, position] = useMemo(() => {
        const {name, part, position} = memberInfo;
        return [name, part, position]
    }, [memberInfo])

    async function addMember() {
        const list = Object.values(memberInfo)
        let check = true
        list.forEach(v => {
            if (!v) {
                check = false;
            }
        });
        if (check) {
         if(props?.mode === 'create') {
             await getData.post(`company/add_team_member`, {...memberInfo, cid: userInfo.cid}).then(v => {
                 dispatch(setModal(modalInit));
                 router.push('/News_add?type=update_company_profile')
             }).catch(err => {
                 alert(err.response.data.message)
             })
         }else{
             await getData.post(`company/update_team_member`, {...memberInfo, tid: props.tid}).then(v => {
                 dispatch(setModal(modalInit));
                 router.push('/News_add?type=update_company_profile')
             }).catch(err => {
                 alert(err.response.data.message)
             })
         }

        } else {
            alert('빠진구간 있음')
        }
    }

    function changeForm(e) {
        let temp = {};
        temp[e.target.name] = e.target.value;
        setMemberInfo(v => {
            return {...v, ...temp}
        })
    }

    return <div style={{width: 700, height: 780, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
        <div style={{float: 'right'}}>
            <div style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'lightgray', cursor: 'pointer'}}
                 onClick={() => dispatch(setModal(modalInit))}>
                <img src={'/img/close.svg'} alt="" style={{marginLeft: 5}}/>
            </div>
        </div>
        <div style={{padding: '68px 38px'}}>
            <div style={{fontSize: 24, fontWeight: 700, textAlign: 'center'}}>팀원 추가</div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr 35px 1fr',
                paddingTop: 100,
                rowGap: 30,
                columnGap: 60
            }}>
                <div style={{display: 'flex', alignItems: 'center', color: 'gray', fontSize: 15}}>이름</div>
                <input style={{height: 35, border: '1px solid lightGray'}} type="text" name={'name'} value={name}
                       onChange={changeForm}/>
                <div style={{display: 'flex', alignItems: 'center', color: 'gray', fontSize: 15}}>부서</div>
                <input style={{height: 35, border: '1px solid lightGray'}} type="text" name={'part'} value={part}
                       onChange={changeForm}/>
                <div style={{display: 'flex', alignItems: 'center', color: 'gray', fontSize: 15}}>직책</div>
                <input style={{height: 35, border: '1px solid lightGray'}} type="text" name={'position'}
                       value={position} onChange={changeForm}/>
                <div></div>
                <div></div>
                <div style={{display: 'flex', alignItems: 'center', color: 'gray', fontSize: 15}}>이미지</div>
                <div style={{
                    width: 200, height: 200, border: '1px solid lightGray', display: 'flex',
                    justifyContent: 'center', cursor: 'pointer',
                    alignItems: 'center'
                }}>

                    <img src={'/img/pic-modify.svg'} width={60} height={60} alt="" style={{margin: '0px auto'}}/>
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: 25,
                rowGap: 15,
                fontSize: 16,
                textAlign: 'center',
                padding: 13,
                color: 'white',
                paddingTop: 80
            }}>

                <div style={{
                    backgroundColor: '#4181A0', height: 48, borderRadius: 8, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={() => dispatch(setModal(modalInit))}>취소
                </div>
                <div style={{
                    backgroundColor: '#4181A0', height: 48, borderRadius: 8, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} onClick={addMember}> {props?.mode === 'update' ? '팀원 수정' : '팀원 추가'}
                </div>
            </div>

        </div>
    </div>
}