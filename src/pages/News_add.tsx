import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";
import {useRouter} from "next/router";

export default function NewsAdd() {

    const router = useRouter();
    return <>
        <Header/>
        <div style={{paddingTop: 190}}>

            <div style={{width : 1320, height : '100%', margin : '0px auto'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 243px', columnGap: 13}}>
                   <div>
                       <div style={{fontWeight : 600}}>뉴스 보도 {'>'} 뉴스보도 등록</div>
                       <div style={{width : '100%', height : '100%', backgroundColor : 'white', marginTop : 40}}>
                         <div style={{padding : 20}}>
                             <div style={{fontWeight : 500}}>기업명</div>
                             <input type="text" style={{width : 360, height : 40, marginTop : 15, border : '1px solid lightGray', borderRadius : 5, paddingLeft : 10, fontSize : 16}}
                             placeholder={'기업명을 입력해주세요'}/>
                             <div style={{fontWeight : 500, marginTop : 40}}>기사 제목</div>
                             <input type="text" style={{width : 360, height : 40, marginTop : 15, border : '1px solid lightGray', borderRadius : 5, paddingLeft : 10, fontSize : 16}}
                                    placeholder={'기업명을 입력해주세요'}/>
                             <div style={{fontWeight : 500, marginTop : 40}}>기사 링크</div>
                             <input type="text" style={{width : 360, height : 40, marginTop : 15, border : '1px solid lightGray', borderRadius : 5, paddingLeft : 10, fontSize : 16}}
                                    placeholder={'기업명을 입력해주세요'}/>
                             <div style={{fontWeight : 500, marginTop : 40}}>기사 내용</div>
                             <textarea style={{width : '100%', height : 100, marginTop : 15, border : '1px solid lightGray', borderRadius : 5, paddingLeft : 10, fontSize : 16}}
                                    placeholder={'기업명을 입력해주세요'}/>
                             <div style={{paddingTop : 300}}>
                                 <div style={{float : 'right', width : 127, height : 46,backgroundColor : '#4181a0' , color : 'white', borderRadius : 7, display : 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     cursor : 'pointer'
                                 }} onClick={()=>router.push(`/BannerPricing?type=${'newsPaper'}`)}>등록하기</div>
                                 <div style={{float : 'right', width : 127, height : 46, color : 'white', backgroundColor : 'gray', borderRadius : 7, display : 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center', marginRight : 5}}>취소</div>
                             </div>
                         </div>

                       </div>
                   </div>
                   <div>
                       <div style={{border : '1px solid lightGray', borderRadius : 4, textAlign : 'center', fontSize : 14, cursor : "pointer"}}>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>메세지 목록</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}} onClick={()=> router.push('/Pricing')}>이용권 구매</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>투자사로 컨택 IR 발송하기</div>
                           <div style={{borderBottom : '1px solid lightGray',  height : 31, paddingTop : 14}}>투자사로 컨택 메세지 발송하기</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>심사역 연락처 요청하기</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}} onClick={()=> router.push('/news_spread')}>뉴스 기사 작성 배포</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>신청 내역</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>결제 내역</div>
                       </div>


                       <div style={{height : 165, marginTop : 25}}>

                           <div style={{background : 'linear-gradient(98deg, #20284E 2.64%, #4181A0 128.09%)',
                                borderTopLeftRadius : 8,
                                borderTopRightRadius : 8,
                               padding : '22px 18px',
                               fontSize : 11,
                               color : 'white',
                               lineHeight : '150%'
                           }}>
                               <div>투자유치</div>
                               <div>투자사 컨택</div>
                               <div>스마트업 찾기</div>
                               <div>스타트업 광고홍보</div>
                           </div>

                           <div style={{backgroundColor : '#e8eaed',
                               padding : '16px 18px',
                               fontSize : 11,
                               lineHeight : '130%',
                               borderBottomLeftRadius : 8,
                               borderBottomRightRadius : 8,
                           }}>
                               <div>스타트업 & 투자사 연결플랫폼</div>
                               <div>contact VC</div>
                           </div>
                       </div>

                       <div style={{backgroundColor : '#4181a0', height : 46, color : 'white', marginTop : 20, display : 'flex',
                           alignItems: 'center',
                           justifyContent: 'center', borderRadius : 10, fontSize : 15, cursor : 'pointer'}} onClick={()=> router.push('/pr_add')}>
                           배너 광고홍보 Self 등록하기
                       </div>




                       <div style={{border : '1px solid lightGray', borderRadius : 4, textAlign : 'center', fontSize : 14, cursor : "pointer", marginTop : 20}}>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>투자사 스크랩 리스트</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>IR 자료 업로드</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>팀원 등록 및 관리</div>
                          <div style={{borderBottom : '1px solid lightGray',  height : 31, paddingTop : 14}}>기업 프로필</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>회원정보 수정</div>
                           <div style={{borderBottom : '1px solid lightGray', height : 31, paddingTop : 14}}>로그아웃</div>
                       </div>
                   </div>
                </div>
            </div>

        </div>
        <Footer/>
    </>
}


export const getServerSideProps = wrapper.getStaticProps((store: any) => async (ctx: any) => {

    await initialServerRouter(ctx, store);


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

    return {props: {title: "tester", page: "tester"}}

});


