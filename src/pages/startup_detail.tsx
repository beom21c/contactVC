import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";
import {useRouter} from "next/router";
import {useEffect, useMemo, useState} from "react";
import {businessTypeInfo, buyBannerType, investAccountInfo, investStepInfo} from "@/util/initial";
import Header from "@/layout/Header";
import CardTitle from "@/component/CardTitle";
import Footer from "@/layout/Footer";
import {getData} from "@/pages/api/api";
import {formatPriceDot} from "@/util/temp";

export default function StartupDetail({type}) {

    const router = useRouter();

    const [content, setContent] = useState([]);
    const [newsList, setNewsList] = useState([]);


    useEffect(() => {
        getCompanyInfo(type).then(v => {
            setContent(v.data.companyInfo);
            setNewsList(v.data.newsList);

        })
    }, [])


    async function getCompanyInfo(type) {
        return await getData.get(`company/getCompanyList_with_news?cid=${type}`)
    }


    console.log(content[0]?.invest_count,'content[0]?.invest_count:::')
    return <>
        <Header/>
        <div style={{paddingTop: 80}}>
            <div style={{
                backgroundImage: `url(/img/startupVC-banner.png)`, height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{textAlign: 'center', color: 'white'}}>
                    <div style={{fontSize: 37, letterSpacing: 7}}>STARTUPVC</div>
                    <div style={{fontSize: 14}}>Home / STARTUPVC</div>
                </div>
            </div>


            <div style={{height: '100%', padding: '100px 120px 0px 120px'}}>

                <div style={{height: 55, borderBottom: '1px solid #e5e5e5'}}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: 15
                        }}>

                            <img src={'/img/test.png'} width={100} height={100} alt=""
                                 style={{borderRadius: 50, marginTop: -70}}/>
                            <div style={{paddingTop: 0, marginTop: -30}}>
                                <div style={{fontSize: 24, fontWeight: 700}}>{content[0]?.company}</div>
                                <div style={{paddingTop: 5}}>{'????'}</div>
                            </div>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            columnGap: 30,
                        }}>
                            <span>스크랩수 | 12회</span>
                            <span>조회수 | 12회</span>
                            <div>관심기업스크랩</div>
                        </div>
                    </div>

                    {/*<Payment type={'banner'}/>*/}
                    <div style={{backgroundColor: '#CC2300', height: 2, width: 50, marginTop: 25}}/>
                </div>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '2.2fr 1fr',
                    columnGap: 30,
                    paddingTop: 30
                }}>
                    <div>
                        <div style={{border: '1px solid lightGray', padding: 20, borderRadius: 7}}
                             className={'introduceText'}>
                            <img src={'/img/test.png'} width={'100%'} height={200} alt=""/>

                            <div>기업명<span>&nbsp;&nbsp;&nbsp; {content[0]?.company}</span></div>
                            <div>영문기업명<span>&nbsp;&nbsp;&nbsp;contact VC</span></div>
                            <div>기업 한줄소개<span>&nbsp;&nbsp;&nbsp;{content[0]?.introduce}</span></div>

                            <div>기업 상세소개</div>

                            <div><span>{content[0]?.subIntroduce}</span></div>

                        </div>


                        <div style={{borderRadius: 7, marginTop: 40}}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gridTemplateRows: 430,
                                columnGap: 10,
                            }}>
                                <div style={{
                                    textAlign: 'center', backgroundColor: '#f1faff',

                                    display: 'grid',
                                    gridTemplateRows: '1fr 1fr 1fr 1fr',
                                    padding: '20px 0px'
                                }}>


                                    <div style={{fontSize: 24, fontWeight: 700}}>투자 정보</div>
                                    <div>
                                        <div style={{fontSize: 14, color: '#4181A0', paddingBottom: 20}}>IR 자료</div>
                                        <span style={{
                                            fontSize: 20,
                                            fontWeight: 700,
                                            borderBottom: '1px solid black',
                                            paddingBottom: 20
                                        }}>공개중</span>
                                    </div>
                                    <div>
                                        <div style={{fontSize: 14, color: '#4181A0', paddingBottom: 20}}>희망 투자유지단계</div>
                                        <span style={{
                                            fontSize: 20,
                                            fontWeight: 700,
                                            borderBottom: '1px solid black',
                                            paddingBottom: 20
                                        }}>{investStepInfo[content[0]?.investStep]}</span>
                                    </div>
                                    <div>
                                        <div style={{fontSize: 14, color: '#4181A0', paddingBottom: 20}}>희망 투자유지금액</div>
                                        <span style={{
                                            fontSize: 20,
                                            fontWeight: 700,
                                            paddingBottom: 20
                                        }}>{investAccountInfo[content[0]?.investAmount]}</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div style={{
                            border: '1px solid lightGray',
                            padding: '26px 32px',
                            borderRadius: 4,
                            marginTop: 50
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                fontSize: 14
                            }}>
                                <span style={{fontWeight: 700}}>구성원 정보</span>
                                <span>더보기 +</span>
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                gridTemplateRows: 250,
                                columnGap: 10,
                                paddingTop: 30
                            }}>


                                {content?.map(v => {
                                    return <div style={{border: '1px solid gray', textAlign: 'center'}}>
                                        <div style={{height: 85, backgroundColor: '#4181A0'}}/>

                                        <img src={'/img/test.png'} width={95} height={95}
                                             style={{borderRadius: 50, marginTop: -42}} alt=""/>

                                        <div style={{paddingTop: 10}}>{v.name}</div>
                                        <div style={{
                                            color: 'white',
                                            backgroundColor: 'black',
                                            width: 60,
                                            height: 20,
                                            fontSize: 12,
                                            paddingTop: 5,
                                            borderRadius: 5,
                                            margin: '10px auto'
                                        }}>{v.position}
                                        </div>
                                        <div style={{fontSize: 12}}>{v.part}</div>
                                    </div>

                                })}


                            </div>
                        </div>


                        <div style={{textAlign: 'center', fontSize: 24, fontWeight: 700, padding: '50px 0px'}}>회사정보
                        </div>

                        <div style={{
                            border: '1px solid lightBlue', borderRadius: 7,
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            columnGap: 10,
                            rowGap: 40,
                            padding: '45px 40px'
                        }} className={'introduceText'}>

                            <div> 대표자명<span>&nbsp;&nbsp;&nbsp; {content[0]?.ceo}</span></div>
                            <div> 회사 주소<span>&nbsp;&nbsp;&nbsp;{content[0]?.address}</span></div>
                            <div> 직원수<span>&nbsp;&nbsp;&nbsp;{content[0]?.member_count}명</span></div>
                            <div> 홈페이지 플랫폼<span>&nbsp;&nbsp;&nbsp;{content[0]?.homepage}</span></div>
                            <div> 설립일<span>&nbsp;&nbsp;&nbsp;2023.10.10</span></div>
                            <div> 매출<span>&nbsp;&nbsp;&nbsp;{formatPriceDot(parseFloat(content[0]?.sales))}원</span>
                            </div>
                            <div> 회사소개 동영상<span>&nbsp;&nbsp;&nbsp;{content[0]?.video_address}</span></div>
                            <div> 비즈니스 분야<span>&nbsp;&nbsp;&nbsp;{businessTypeInfo[content[0]?.businessType]}</span>
                            </div>
                            <div> sns<span>&nbsp;&nbsp;&nbsp;{content[0]?.sns}</span></div>
                        </div>


                        <div style={{
                            width: 270,
                            height: 80,
                            backgroundColor: '#4181A0',
                            color: 'white',
                            borderRadius: 7,
                            margin: '50px auto',
                            fontSize: 24,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>IR 자료 요청하기
                        </div>

                    </div>


                    <div style={{paddingTop: 80}}>

                    <div style={{fontSize : 24, fontWeight : 600, padding : 20, textAlign : 'center'}}>NEWS</div>
                        <div style={{border: '1px solid lightGray', padding: '30px 10px'}}>
                            {newsList.map(v => {
                                return <div onClick={() => window.location.href = v.link}
                                            style={{cursor: 'pointer', border: '1px solid lightGray', padding : 10, marginBottom : 10}}>

                                    <img src={v.image} width={'100%'} height={160} alt=""/>
                                    <div style={{paddingTop : 10, fontSize : 12}}>
                                        <div style={{fontSize : 14, fontWeight : 600}}>{v.title}</div>
                                        <div style={{paddingTop : 10}}>{v.news_contents}</div>
                                    </div>
                                </div>

                            })}

                        </div>


                        <div style={{border: '1px solid lightGray', padding: '30px 20px', marginTop: 30}}>


                            <div style={{textAlign: 'center'}}>
                                <div style={{fontSize: 14}}>누적 투자금액</div>

                                <div style={{
                                    border: '1px solid lightGray',
                                    padding: 12,
                                    marginTop: 10,
                                    borderRadius: 5
                                }}>
                                    <div style={{
                                        fontSize: 24,
                                        color: '#4181A0',
                                        fontWeight: 700,
                                        paddingTop: 10
                                    }}>{formatPriceDot(parseFloat(content[0]?.acc_invest_amount))}원
                                    </div>
                                    <div style={{fontSize: 11, paddingTop: 20}}>투자유치 횟수 <span
                                        style={{color: '#4181A0', fontWeight: 700}}>{content[0]?.invest_count}+</span></div>
                                </div>
                            </div>


                            <div style={{textAlign: 'center', fontSize: 18, padding: '10px 0px'}}>투자사</div>
                            <div style={{padding: 16, border: '1px solid lightGray', fontSize: 13}}>
                                <div>
                                    <img src={'/img/test.png'} width={36} height={36} style={{borderRadius: 39}}
                                         alt=""/>
                                    <span style={{fontWeight: 700,}}> 티피엘엔디</span>
                                    <span style={{fontWeight: 400}}> &nbsp;  회사 한 줄 소개가 드러나는 부분입니다</span></div>


                                <div>
                                    <img src={'/img/test.png'} width={36} height={36} style={{borderRadius: 39}}
                                         alt=""/>
                                    <span style={{fontWeight: 700,}}> 티피엘엔디</span>
                                    <span style={{fontWeight: 400}}> &nbsp;  회사 한 줄 소개가 드러나는 부분입니다</span></div>
                                <div>
                                    <img src={'/img/test.png'} width={36} height={36} style={{borderRadius: 39}}
                                         alt=""/>
                                    <span style={{fontWeight: 700,}}> 티피엘엔디</span>
                                    <span style={{fontWeight: 400}}> &nbsp;  회사 한 줄 소개가 드러나는 부분입니다</span></div>

                            </div>
                            <div style={{textAlign: 'center', paddingTop: 20}}>투자정보 더보기 +</div>
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
        const {query} = ctx;
        const {type} = query; // 쿼리에서 '

        return {
            props: type ? {type} : '' // 페이지 컴포넌트로 props를 통해 전달
        };
    });



