import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CardTitle from "@/component/CardTitle";
import {useState} from "react";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";

export default function EventForum() {

    const [filter, setFilter] = useState([1, 2, 3, 4])

    const filterList = [
        {title: '전체', key: 0},
        {title: '행사/네트워크', key: 1},
        {title: '투자', key: 2},
        {title: '시설공간', key: 3},
        {title: '멘토링/컨설팅', key: 4}
    ]


    const cardList =
        {
            '1': [
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                }
            ]
            , '2': [
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                }
            ]
            , '3': [
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                }
            ]
            , '4': [
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                },
                {
                    img: '/img/test.png',
                    region: '강남구',
                    title: 'Tips 창업기업 통합공고',
                    state: '오늘 마감',
                    date: '2023.10.21',
                    subState: '마감 | 투자'
                }
            ]
        }


    const solutionList = [
        {img: '/img/saas-content1.png', company: '시프트', introduce: '경영 및 근태관리 솔루션'},
        {img: '/img/saas-content2.png', company: '볼타', introduce: '전자세금계산서 발행 관리 솔루션'},
        {img: '/img/saas-content3.png', company: '핀플', introduce: '비대면 인사관리'},
        {img: '/img/saas-content4.png', company: '스팬딧', introduce: '법인카드부터 비용 관리 플랫폼'},
        {img: '/img/saas-content5.png', company: 'ZOOM', introduce: '화상회의 플랫폼'},
    ]

    return <>
        <Header/>
        <div style={{paddingTop: 80}}>
            <div style={{
                backgroundImage: `url(/img/saas-banner.jpg)`, height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{textAlign: 'center', color: 'white'}}>
                    <div style={{fontSize: 37, letterSpacing: 7}}>EVENTFORUM</div>
                    <div style={{fontSize: 14}}>Home / EVENTFORUM</div>
                </div>
            </div>

            <div style={{padding: '60px 75px'}}>

                <CardTitle title={'Startup Solutions'} subTitle={''}/>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    rowGap: 3,
                    columnGap: 10,
                }}>

                    {solutionList.map(v => {
                        return <div>
                            <div style={{
                                height: 200, border: '1px solid lightGray', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', padding: 20
                            }}>
                                <img src={v.img} width={'100%'} alt=""/>
                            </div>
                            <div>{v.company}</div>
                            <div>{v.introduce}</div>
                        </div>
                    })}
                </div>
            </div>


            <div style={{
                backgroundImage: `url(/img/saas-content-banner.png)`, height: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{textAlign: 'center', color: 'white'}}>
                    <div style={{fontSize: 40, fontWeight :800, marginLeft : 180}}>스타트업 행사공고셀프등록 <span style={{fontSize : 25, paddingLeft : 80}}>등록하러가기 +</span> </div>
                </div>
            </div>

            <div style={{padding: '60px 75px'}}>


                <CardTitle title={'스타트업 행사 프로그램'} subTitle={''}/>

                <div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '290px 1fr',
                        columnGap: 30,
                        paddingTop: 40
                    }}>

                        <div>

                            <div>
                                <span>필터</span>
                                <span>전체 초기화</span>
                            </div>


                            <div style={{backgroundColor: 'lightgray', padding: '20px 12px'}}>
                                <span>카테고리</span>
                                <span>초기</span>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    rowGap: 3,
                                    columnGap: 10,
                                }}>
                                    {filterList.map(v => {
                                        return <div style={{fontSize: 12}}>
                                            <input type="checkbox" key={v.key} style={{marginRight: 5}}/>
                                            {v.title}
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>


                        <div>

                            <input type="text"
                                   style={{width: '100%', height: 30, border: '1px solid blue', borderRadius: 15}}
                                   placeholder={'검색어를 입력해 주세요'}
                            />


                            {filter.map(v => {
                                return <div>
                                    <div>{filterList[v].title}</div>

                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr 1fr',
                                        rowGap: 3,
                                        columnGap: 10,
                                    }}>

                                        {
                                            cardList[v].map(src => {
                                                return <div>
                                                    <img src={src.img} width={'100%'} alt=""/>
                                                    <div>{src.region}</div>
                                                    <div>{src.title}</div>
                                                    <div><span>{src.state}</span> <span>{src.date} {src.subState}</span>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>

                                    <div style={{textAlign: 'center'}}>더보기 +</div>
                                </div>
                            })}

                        </div>
                    </div>
                </div>

            </div>

            <div>

            </div>

        </div>
        <Footer/>
    </>
}

export const getServerSideProps  = wrapper.getStaticProps((store: any) => async (ctx: any) => {

    const {userState} = await initialServerRouter(ctx, store);

    const redirectProperty = {
        redirect: {
            permanent: false,
            destination: "/Login"
        }
    };
    return userState ?   {
        props: {title: "tester", page: "tester"}
    } : redirectProperty
});