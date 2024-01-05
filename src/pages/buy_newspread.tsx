import Header from "@/layout/Header";
import CardTitle from "@/component/CardTitle";
import Footer from "@/layout/Footer";
import {useEffect, useState} from "react";
import Payment from "@/component/Payment";
import {setPrice} from "@/store/commonSlice";
import {useAppDispatch} from "@/templates/hooks/reduxHooks";
import {buyBannerType} from "@/util/initial";

export default function BuyNewspread(){
    const dispatch = useAppDispatch();

    const [group, setGroup]  = useState('B')


    useEffect(()=>{
       const {title, price} = buyBannerType[group]
          const sendParam = {
            name: title,
            price: price,
            discountPrice: 0
        }
        dispatch(setPrice(sendParam));
    },[group])
    return <>
        <Header/>


        <div style={{height: '100%', padding: '180px 120px 0px 120px'}}>
            <CardTitle title={'뉴스기사 작성 언론홍보'} subTitle={null}/>


            <div style={{display: 'grid', gridTemplateColumns: '250px 1fr', paddingTop : 40}} className={'tableSample'}>
                <div id={'title'}>그룹선택</div>
                <div style={{padding : '20px 20px'}}>
                    <select value={group} onChange={(e)=>setGroup(e.target.value)} style={{border : "none", fontSize : 16}}>
                        <option value="A">A 그룹</option>
                        <option value="B">B 그룹</option>
                        <option value="C">C 그룹</option>
                    </select>
                </div>

                <div id={'title'}>희망송출일</div>
                <div style={{padding : '10px 20px'}}><input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8}}
                placeholder={'2024. 01. 05'}
                /></div>

                <div id={'title'}>기사참조 페이지</div>
                <div style={{padding : '10px 20px'}}><input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8}}
                                                            placeholder={'보여주고자 하는 링크를 작성해 주세요'}
                /></div>

                <div id={'title'}>기사제목(3개)</div>
                <div style={{padding : '10px 20px'}}>
                    <input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8}}
                           placeholder={'첫 번째 제목을 작성해 주세요'}/>
                    <br/>
                    <input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8, marginTop : 10}}     placeholder={'두 번째 제목을 작성해 주세요'}/>
                    <br/>
                    <input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8, marginTop : 10}}     placeholder={'세 번째 제목을 작성해 주세요'}/>
                </div>

                <div id={'title'}>중요 기사 키워드(9개)</div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap : 10, gridRowGap : 10, padding : '10px 20px'}}>

                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8}}     placeholder={'중요 기사 단어 입력'}/>
                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8 }}   placeholder={'중요 기사 단어 입력'}/>
                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8}}   placeholder={'중요 기사 단어 입력'}/>

                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8}}   placeholder={'중요 기사 단어 입력'}/>
                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8 }}   placeholder={'중요 기사 단어 입력'}/>
                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8}}   placeholder={'중요 기사 단어 입력'}/>

                    <input type="text" style={{height : 40, border : '1px solid lightGray', borderRadius : 8}}   placeholder={'중요 기사 단어 입력'}/>
                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8 }}   placeholder={'중요 기사 단어 입력'}/>
                    <input type="text" style={{ height : 40, border : '1px solid lightGray', borderRadius : 8}}   placeholder={'중요 기사 단어 입력'}/>

                </div>

                <div id={'title'}>원고 내용 써머리(3개)</div>
                <div style={{padding : '10px 20px'}}>
                    <input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8}}   placeholder={'30 ~ 100자 작성해 주세요'}/>
                    <br/>
                    <input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8, marginTop : 10}}  placeholder={'30 ~ 100자 작성해 주세요'}/>
                    <br/>
                    <input type="text" style={{width : 280, height : 40, border : '1px solid lightGray', borderRadius : 8, marginTop : 10}}  placeholder={'30 ~ 100자 작성해 주세요'}/>
                </div>

                <div id={'title'}>원고 작성</div>
                <div id={'title'}>원고 상세 내용은 WRITER가 대행으로 작성합니다.</div>

                <div id={'title'}>기사 사진</div>
                <div style={{display: 'grid', gridTemplateColumns: '120px 120px 120px', gridTemplateRows : 50, gridColumnGap : 10, gridRowGap : 10, padding : '10px 20px',color : 'white'}}>

                    <div style={{backgroundColor : '#4181a0', borderRadius : 10,  display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', cursor : 'pointer'}}>파일선택 1</div>
                    <div style={{backgroundColor : '#4181a0', borderRadius : 10,  display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', cursor : 'pointer'}}>파일선택 2</div>
                    <div style={{backgroundColor : '#4181a0', borderRadius : 10,  display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center', cursor : 'pointer'}}>파일선택 3</div>


                </div>

            </div>

            <Payment/>
        </div>
        <Footer/>
    </>
}