import {setModal} from "@/store/commonSlice";
import {useRouter} from "next/router";
import {modalInit} from "@/util/initial";
import {useAppDispatch} from "@/templates/hooks/reduxHooks";

export function InvestReqModal({type}: any) {
    const dispatch = useAppDispatch();
    const router = useRouter();

    return <div style={{width: 500, height: 780, backgroundColor: 'white', padding: 10, borderRadius: 10}}>
        <div style={{float: 'right'}}>
            <div style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'lightgray', cursor : 'pointer'}}
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
            <div style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'lightgray', cursor : 'pointer'}}
                 onClick={() => dispatch(setModal(modalInit))}>
                <img src={'/img/close.svg'} alt="" style={{marginLeft: 5}}/>
            </div>
        </div>
        <div style={{padding: '68px 38px'}}>
            <div style={{fontSize: 24, fontWeight: 700, textAlign: 'center'}}>IR 자료 발송하기</div>
            <div style={{paddingTop: 30}}>투자사명</div>
            <div style={{paddingTop: 10, color : '#4181a0', fontSize : 17, fontWeight  :700, paddingLeft : 20}}>골든오크 **상 심사역</div>
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