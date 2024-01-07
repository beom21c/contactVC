import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";
import {useRouter} from "next/router";
import {useMemo} from "react";
import {buyBannerType} from "@/util/initial";
import Header from "@/layout/Header";
import CardTitle from "@/component/CardTitle";
import Footer from "@/layout/Footer";

export default function investDetail(props) {

    const router = useRouter();
    const [contentKey] = useMemo(() => {
        console.log(props, 'props')
        return [props?.type]
    }, [props])

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
                            display: 'grid', gridTemplateColumns: '1fr 10fr', columnGap: 15
                        }}>

                            <img src={'/img/test.png'} width={100} height={100} alt=""
                                 style={{borderRadius: 50, marginTop: -70}}/>
                            <div style={{paddingTop: 0, marginTop: -50}}>
                                <div style={{fontSize: 24, fontWeight: 700}}>{'ContactVC'}</div>
                                <div style={{paddingTop: 5}}>투자사 소개</div>
                                <div
                                    style={{paddingTop: 5}}>{'0000파트너스(K&투자파트너스)는 업계경력 평균 10년 이상의 전문가들이 유망기업 및 벤처기업의 가치 실현을 만듭니다.'}</div>
                            </div>
                        </div>

                        <div>관심기업스크랩</div>
                    </div>

                    {/*<Payment type={'banner'}/>*/}
                    <div style={{backgroundColor: '#CC2300', height: 2, width: 50, marginTop: 25}}/>
                </div>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '65fr 59fr',
                    columnGap: 30,
                    paddingTop: 30
                }}>

                    <div style={{fontSize: 14}}>

                        <div>중요 투자 분야</div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            textAlign: 'center',
                            borderBottom: '1px solid lightGray',
                            padding: '15px 0px'
                        }}>
                            <div>순위</div>
                            <div>카테고리</div>
                            <div>투자횟수</div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            textAlign: 'center',
                            borderBottom: '1px solid lightGray',
                            padding: '15px 0px'
                        }}>
                            <div>1위</div>
                            <div style={{textAlign: 'left'}}>블록체인/딥테크/AI</div>
                            <div>59</div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            textAlign: 'center',
                            borderBottom: '1px solid lightGray',
                            padding: '15px 0px'
                        }}>
                            <div>2위</div>
                            <div style={{textAlign: 'left'}}>커머스</div>
                            <div>49</div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            textAlign: 'center',
                            borderBottom: '1px solid lightGray',
                            padding: '15px 0px'
                        }}>
                            <div>1위</div>
                            <div style={{textAlign: 'left'}}>콘텐츠/예술</div>
                            <div>70</div>
                        </div>


                        <div>중요 투자 분야</div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            textAlign: 'center',
                            padding: '15px 0px'
                        }}>
                            <div>seed</div>
                            <div style={{height: 10, background: 'linear-gradient(90deg, #4181A0 0%, #FBE947 100%)'}}/>
                            <div>50</div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            textAlign: 'center',
                            padding: '15px 0px'
                        }}>
                            <div>seed</div>
                            <div style={{height: 10, background: 'linear-gradient(90deg, #4181A0 0%, #FBE947 100%)'}}/>
                            <div>50</div>
                        </div>


                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 3fr 1fr',
                            textAlign: 'center',
                            padding: '15px 0px'
                        }}>
                            <div>seed</div>
                            <div style={{height: 10, background: 'linear-gradient(90deg, #4181A0 0%, #FBE947 100%)'}}/>
                            <div>50</div>
                        </div>


                    </div>


                    <div style={{paddingTop: 110}}>


                        <div style={{border: '1px solid lightGray', padding: '30px 10px'}}>

                            <div style={{textAlign: 'center'}}>CONTACT VC</div>
                            <div>
                                <img src={'/img/startupVC-banner.png'} width={'100%'} height={160} alt=""/>
                                <div>테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니</div>
                                <div style={{textAlign: 'right'}}>공유</div>
                            </div>

                            <div style={{paddingTop: 40}}>
                                <img src={'/img/startupVC-banner.png'} width={'100%'} height={160} alt=""/>
                                <div>테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니</div>
                                <div style={{textAlign: 'right'}}>공유</div>
                            </div>

                            <div style={{paddingTop: 40}}>
                                <img src={'/img/startupVC-banner.png'} width={'100%'} height={160} alt=""/>
                                <div>테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니</div>
                                <div style={{textAlign: 'right'}}>공유</div>
                            </div>


                            <div style={{paddingTop: 40}}>
                                <img src={'/img/startupVC-banner.png'} width={'100%'} height={160} alt=""/>
                                <div>테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니다테스트기사입니</div>
                                <div style={{textAlign: 'right'}}>공유</div>
                            </div>
                        </div>


                        <div style={{border: '1px solid lightGray', padding: '30px 20px', marginTop: 30}}>


                            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 10}}>

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
                                        }}>1억원
                                        </div>
                                        <div style={{fontSize: 11, paddingTop: 20}}>투자유치 횟수 <span
                                            style={{color: '#4181A0', fontWeight: 700}}>100+</span></div>
                                    </div>
                                </div>

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
                                        }}>1억원
                                        </div>
                                        <div style={{fontSize: 11, paddingTop: 20}}>투자유치 횟수 <span
                                            style={{color: '#4181A0', fontWeight: 700}}>100+</span></div>
                                    </div>
                                </div>

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
                                        }}>1억원
                                        </div>
                                        <div style={{fontSize: 11, paddingTop: 20}}>투자유치 횟수 <span
                                            style={{color: '#4181A0', fontWeight: 700}}>100+</span></div>
                                    </div>
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



