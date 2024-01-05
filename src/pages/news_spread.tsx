import Header from "@/layout/Header";
import CardTitle from "@/component/CardTitle";
import Footer from "@/layout/Footer";
import {useRouter} from "next/router";

export default function NewsSpread() {
    const router = useRouter();


    function buyGroup(type) {
        router.push(`/buy_newspread`)
    }

    return <>
        <Header/>


        <div style={{height: '100%', padding: '180px 120px 0px 120px'}}>

            <CardTitle title={'뉴스기사 작성 배포'} subTitle={''}/>

            <div style={{
                marginTop: 180,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                backgroundColor: '#4181A0',
                color: 'white',
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black'
            }}>
                <span>뉴스배포신청</span>
                <span>그룹</span>
                <span>노출포털</span>
                <span>뉴스사</span>
                <span>금액</span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>
                <div style={{
                    width: 120,
                    height: 40,
                    margin: '0px auto',
                    backgroundColor: '#4181A0',
                    borderRadius: 10,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: 'pointer'
                }} onClick={() => buyGroup('aGroup')}>신청
                </div>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>A그룹</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>1800000원</span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black'
            }}>
                <div style={{
                    width: 120,
                    height: 40,
                    margin: '0px auto',
                    backgroundColor: '#4181A0',
                    borderRadius: 10,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: 'pointer'
                }} onClick={() => buyGroup('bGroup')}>신청
                </div>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>B그룹</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>940000원</span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black'
            }}>
                <div style={{
                    width: 120,
                    height: 40,
                    margin: '0px auto',
                    backgroundColor: '#4181A0',
                    borderRadius: 10,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: 'pointer'
                }} onClick={() => buyGroup('cGroup')}>신청
                </div>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>C그룹</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>490000원</span>
            </div>
        </div>


        {/*=========================================================================================*/}
        {/*=========================================================================================*/}
        {/*=========================================================================================*/}


        <div style={{height: '100%', padding: '180px 120px 0px 120px'}}>

            <div style={{fontSize: 24, fontWeight: 600}}>A그룹</div>
            <div style={{
                marginTop: 30,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                backgroundColor: '#4181A0',
                color: 'white',
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black'
            }}>
                <span>뉴스배포신청</span>
                <span>첨부파일</span>
                <span>참고사항</span>

            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>일간스포츠/ 이코노미스트 /    <br/> 1택</span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>서울경제 / 한국경제TV / 스포츠동아 / 국토일보 / 건강다이제스트 / 텐아시아/ MHN스포츠 /
                        <br/>
中 1택</span>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>중앙선데이 / 세계일보 / 조세일보 / 파이낸셜뉴스 / 조선에듀 / 아시아경제 /
            <br/>
*네이버만 가능:
IT조선 / 스포츠한국 /
                        <br/>
中 1택</span>
            </div>
        </div>


        {/*=========================================================================================*/}
        {/*=========================================================================================*/}
        {/*=========================================================================================*/}


        <div style={{height: '100%', padding: '180px 120px 0px 120px'}}>

            <div style={{fontSize: 24, fontWeight: 600}}>B그룹</div>
            <div style={{
                marginTop: 30,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                backgroundColor: '#4181A0',
                color: 'white',
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black'
            }}>
                <span>뉴스배포신청</span>
                <span>첨부파일</span>
                <span>참고사항</span>

            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>국제뉴스 / 굿모닝경제 / IT비즈뉴스 / 이투뉴스 / 이넷뉴스 / 데일리경제 / 한 국영농신문 / 데이터넷 / 에듀동아 / 한국정경신문 / 스마트투데이 / 한국농어 촌방송 / 더파워 / 빅데이터뉴스 /
<br/>
*네이버만 가능:
                    <br/>
대한금융신문 / 인터뷰365 / 나무신문 / 직썰 / 이뉴스투데이 / AP신문/
中 1택</span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>스마트경제 / 뉴스퀘스트/ 데이터뉴스 / 증권경제신문/ 세계비즈/ 매일안전 신문/ 어린이동아/ 베이비타임즈 / 마켓뉴스 /
<br/>
*네이버만 가능:
<br/>
                    파이낸스투데이/ 지피코리아 / 글로벌경제 / 딜라이트닷넷 / 우먼타임즈 / 패 션비즈/ 스포츠W / 소셜류 / 한국면세신문 /
<br/>
                    中 1택</span>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>대한경제 / 메가경제신문 / 아시아투데이 / 케이스타뉴스 / 베이비뉴스 / 넥스 트데일리 / 농수축산신문/
<br/>
*네이버만 가능:
                    <br/>
헬로티 / 디아이투데이 / 전라일보 / 새전북신문 / 조이뉴스24
                    <br/>
中 1택</span>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>서울경제TV/ 비지니스코리아 / 스타데일리뉴스 / 뉴스웍스 / 키즈맘 / CBC 뉴스/ 이슈앤비즈 / 아웃도어뉴스 /
<br/>
*네이버만 가능:
                    <br/>
스포츠월드 /
                    <br/>
中 1택</span>
            </div>
        </div>


        {/*=========================================================================================*/}
        {/*=========================================================================================*/}
        {/*=========================================================================================*/}


        <div style={{height: '100%', padding: '180px 120px 0px 120px'}}>

            <div style={{fontSize: 24, fontWeight: 600}}>C그룹</div>
            <div style={{
                marginTop: 30,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                backgroundColor: '#4181A0',
                color: 'white',
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black'
            }}>
                <span>뉴스배포신청</span>
                <span>첨부파일</span>
                <span>참고사항</span>

            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>한국미디어뉴스통신 / 기업경제신문 / 수도권일보 /
                    <br/>
中 1택</span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>데일리시큐 / 라온신문 / 경상일보 / 울산제일일보 / 경북신문 / 월간원예 / 농 업정보 / 비즈월드 / 잡포스트 / 공무원수험신문 / FT스포츠 /
                    <br/>
中 1택</span>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                columnGap: 15,
                rowGap: 15,
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 700,
                padding: 13,
                borderBottom: '1px solid black',
            }}>

                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>네이버, 다음, 네이트</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>-</span>
                <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center', fontSize: 15,
                }}>FETV / 공감신문 / 시선뉴스 / 여성소비자신문 / 빌리어즈 /
                    <br/>

*네이버만 가능:
                    <br/>
문학뉴스 / 매일안전신문 / 기호일보 / 테크월드 / CCTV뉴스 / 컨슈머타임스 / 라이센스뉴스/ 핸드메이커 / 더퍼스트 / 제민일보 / 콘투뉴스 /
                    <br/>
中 1택</span>
            </div>
        </div>
        <Footer/>
    </>

}