import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CardTitle from "@/component/CardTitle";
import {setModal} from "@/store/commonSlice";
import {useAppDispatch} from "@/templates/hooks/reduxHooks";
import Modal from "@/component/Modal";
import {modalInit} from "@/util/initial";

export default function SendIr() {
    const dispatch = useAppDispatch();

    const contentsList = [
        {
            key: 0,
            investments: '컨텍브이씨',
            investMail: 'test@gmail.com',
        }, {
            key: 1,
            investments: '컨텍브이씨',
            investMail: 'test@gmail.com',
        }, {
            key: 2,
            investments: '컨텍브이씨',
            investMail: 'test@gmail.com',
        }, {
            key: 3,
            investments: '컨텍브이씨',
            investMail: 'test@gmail.com',
        }, {
            key: 4,
            investments: '컨텍브이씨',
            investMail: 'test@gmail.com',
        }, {
            key: 5,
            investments: '컨텍브이씨',
            investMail: 'test@gmail.com',
        }, {
            key: 6,
            investments: '컨텍브이씨',
            investMail: 'test@gmail.com',
        }
    ]

    return <>

        <Header/>
        <div style={{width: 1320, margin: '0px auto', paddingTop: 180}}>
            <CardTitle title={'투자사 컨택'} subTitle={''}/>
            <div>
                <div style={{textAlign: 'right', paddingTop: 30, height : 50}}>
                    <div style={{border: '1px solid lightGray', width: 66, height: 32, float: 'right', display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', backgroundColor : '#f5f7fa', borderLeft : 'none'}}>검색</div>
                    <input type="text" style={{width: 200, height: 30, border: '1px solid lightGray', float: 'right'}}

                    placeholder={'투자사 명을 검색해 주세요'}/>
                </div>
                <div style={{width : '100%', height : 40, textAlign: 'right'}}>
                    <span><input type="radio"/>A-type</span>
                    <span style={{paddingLeft : 15}}><input type="radio"/>B-type</span>
                </div>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '0.2fr 1fr 1fr',
                columnGap: 25,
                rowGap: 15,
                backgroundColor: '#4181A0',
                color: 'white',
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black'
            }}>
                <span>투자사 선택</span>
                <span>투자사</span>
                <span>투자심사메일</span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '0.2fr 1fr 1fr',
                gridAutoRows : 60,
                columnGap: 25,
                textAlign: 'center',
                fontSize: 13,
                padding: 13,
                border: '1px solid lightGray',
                borderBottom: 'none',
                borderTop: 'none'
            }}>


                {contentsList.map(v => {
                    return <>
                        <span style={{display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}}><input type="checkbox"/></span>
                        <span style={{display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}}>투자사</span>
                        <span style={{display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}}>투자심사메일</span>

                    </>
                })}
            </div>
            <div style={{
                textAlign: 'center',
                backgroundColor: '#f5f7fa',
                border: '1px solid lightGray',
                height : 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>더보기 +
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '48px',
                columnGap: 25,
                rowGap: 15,
                fontSize: 16,
                textAlign: 'center',
                paddingTop: 50,
                color: 'white',

            }}>
                <div style={{
                    backgroundColor: '#20284e66', borderRadius: 7, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor : 'pointer'
                }} onClick={() => {
                    dispatch(setModal({type: 'send_invest', props: {}}))
                }
                }>투자검토요청 메세지 발송
                </div>
                <div style={{
                    backgroundColor: '#20284e66', borderRadius: 7, display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor : 'pointer'
                }} onClick={() => {
                    dispatch(setModal({type: 'send_ir', props: {}}))
                }
                }>IR자료발송
                </div>

            </div>
        </div>
        {typeof window !== 'undefined' && <Modal/>}
        <Footer/>
    </>
}