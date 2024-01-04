import Header from "@/layout/Header";
import CardTitle from "@/component/CardTitle";
import Footer from "@/layout/Footer";
import {useRouter} from "next/router";

export default function NewsSpread() {
    const router = useRouter();

    return <>
        <Header/>


        <div style={{height: '100%', padding: '180px 120px 0px 120px'}}>

            <CardTitle title={'뉴스기사 작성 배포'} subTitle={''}/>

            <div style={{
                marginTop : 180,
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
                    fontWeight: 500
                }}>신청
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
                    fontWeight: 500
                }}>신청
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
                    fontWeight: 500
                }}>신청
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

            <div style={{fontSize : 24, fontWeight : 600}}>A그룹</div>
            <div style={{
                marginTop : 30,
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

            <div style={{fontSize : 24, fontWeight : 600}}>B그룹</div>
            <div style={{
                marginTop : 30,
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

            <div style={{fontSize : 24, fontWeight : 600}}>C그룹</div>
            <div style={{
                marginTop : 30,
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
        <Footer/>
    </>

}