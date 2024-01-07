import {useState} from "react";
import {formatPriceDot} from "@/util/temp";
import {useRouter} from "next/router";

export default function StartUpInvest(){
    const router = useRouter();

    const selectText = { color: '#4181A0', fontWeight: 700, paddingLeft: 50 , cursor : 'pointer'}
    const disSelectText = { color: 'black', fontWeight: 400, paddingLeft: 50 , cursor : 'pointer'}


    const categoryList = [
        {title: '광고/마케팅', key: 0},
        {title: '교육', key: 1},
        {title: '금융/보험/핀테크', key: 2},
        {title: '게임', key: 3},
        {title: '모빌리티/교통', key: 4},
        {title: '물류', key: 5},
        {title: '부동산/건설', key: 6},
        {title: '뷰티/화장품', key: 7},
        {title: '블록체인/딥테크/AI', key: 8},
        {title: '소셜미디어/커뮤니티', key: 9},
        {title: '여행/레저', key: 10},
        {title: '유아/출산', key: 11},
        {title: '인사/비지니스/법률', key: 12},
        {title: '제조/하드웨어', key: 13},
        {title: '커머스', key: 14},
        {title: '콘텐츠/예술', key: 15},
        {title: '통신/보안/데이터', key: 16},
        {title: '패션', key: 17},
        {title: '푸드/농업', key: 18},
        {title: '환경/에너지', key: 19},
        {title: '홈리빙/펫', key: 20},
        {title: '헬스케어/바이오', key: 21},
        {title: '피트니스/스포츠', key: 22},
        {title: 'WEB 개발/APP개발', key: 23}
    ]




    const investTypeList = [
        {title: '엔젤', key: 0},
        {title: '엔젤클럽', key: 1},
        {title: '창업투자회사', key: 2},
        {title: '벤처설립 CVC', key: 3},
        {title: '중소기업설립 CVC', key: 4},
        {title: '대기업설립 CVC', key: 5},
        {title: '사모펀드', key: 6},
        {title: '유한책임회사 LLC', key: 7},
        {title: '컴퍼니빌더', key: 8},
        {title: 'AC 엑셀러레이터', key: 9},
        {title: '신기술사업금융회사', key: 10},
        {title: '외국계 vc', key: 11},
        {title: '금융기관', key: 12},
        {title: 'TIPS 운영사', key: 13},
        {title: '개인전문투자사', key: 24},
        {title: '기타 유형(직접 입력)', key: 25},
    ]


    const investList = [
        {title: 'Angel', key: 0},
        {title: 'seed', key: 1},
        {title: 'pre-A', key: 2},
        {title: 'series A', key: 3},
        {title: 'pre-B', key: 4},
        {title: 'series B', key: 5},
        {title: 'series C', key: 6},
        {title: 'series D', key: 7},
        {title: 'series E', key: 8},
        {title: 'series F', key: 9},
        {title: 'series G', key: 10},
        {title: 'pre-IPO', key: 11},
        {title: 'IPO', key: 12},
        {title: 'M&A', key: 13},
        {title: '비공개', key: 14}
    ]



    const investCountList = [
        {title: '전체', key: 0},
        {title: '0 ~ 10회', key: 1},
        {title: '11 ~ 50회', key: 2},
        {title: '51 ~ 100회', key: 3},
        {title: '100회 이상', key: 4}
    ]

    const currentInvestDateList = [
        {title: '전체', key: 0},
        {title: '최근 3개월', key: 1},
        {title: '최근 6개월', key: 2},
        {title: '최근 1년', key: 3},
        {title: '직접입력', key: 4}
    ]


    const contentsList = [
        {
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 0,
        },{
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 1,
        },
        {
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 2,
        },
        {
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 3,
        },
        {
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 4,
        },
        {
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 5,
        },{
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 6,
        },
        {
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 7,
        },
        {
            img: '/img/test.png',
            company: '필라이즈',
            subCompany: '증권',
            type: '벤처캐피탈',
            investPart: '스타트업 앱 제작 및 ERP관련 시스템',
            investCount: 39,
            accCount: 150000000,
            currentInvestDate: '2024-01',
            key : 8,
        },

    ]




    const [sortType, setSortType] = useState(0)


    function openDetailContents(key){
        router.push(`/invest_detail?type=${key}`)
    }

    return <>
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '290px 1fr',
                columnGap: 30,
                paddingTop: 40
            }}>

                <div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridTemplateRows: '20px',
                        rowGap: 12,
                        columnGap: 10,
                    }}>
                                <span style={{
                                    fontSize: 17, fontWeight: 700, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>필터</span>
                        <span style={{
                            fontSize: 11, color: '#888', display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right'
                        }}>전체 초기화</span>
                    </div>


                    <div style={{border: '1px solid lightgray', padding: '20px 12px', marginTop: 10}}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridTemplateRows: '20px',
                            rowGap: 12,
                            columnGap: 10,
                        }}>
                                <span style={{
                                    fontSize: 14, fontWeight: 700, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>카테고리</span>
                            <span style={{
                                fontSize: 11, color: '#888', display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'right'
                            }}>초기화</span>
                        </div>


                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            rowGap: 12,
                            columnGap: 10,
                            paddingTop: 20
                        }}>
                            {categoryList.map(v => {
                                return <div style={{
                                    fontSize: 12, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>
                                    <input type="checkbox" key={v.key} style={{marginRight: 5,}}/>

                                    {v.title}
                                </div>
                            })}
                        </div>
                    </div>


                    <div style={{border: '1px solid lightGray', borderTop: 'none', padding: '20px 12px'}}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridTemplateRows: '20px',
                            rowGap: 12,
                            columnGap: 10,
                        }}>
                                <span style={{
                                    fontSize: 14, fontWeight: 700, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>투자자 유형</span>
                            <span style={{
                                fontSize: 11, color: '#888', display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'right'
                            }}>초기화</span>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            rowGap: 12,
                            columnGap: 10,
                            paddingTop: 20
                        }}>
                            {investTypeList.map(v => {
                                return <div style={{
                                    fontSize: 12, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>
                                    <input type="checkbox" key={v.key} style={{marginRight: 5}}/>
                                    {v.title}
                                </div>
                            })}
                        </div>
                    </div>

                    <div style={{border: '1px solid lightGray', borderTop: 'none', padding: '20px 12px'}}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridTemplateRows: '20px',
                            rowGap: 12,
                            columnGap: 10,
                        }}>
                                <span style={{
                                    fontSize: 14, fontWeight: 700, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>선호투자단계</span>
                            <span style={{
                                fontSize: 11, color: '#888', display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'right'
                            }}>초기화</span>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            rowGap: 12,
                            columnGap: 10,
                            paddingTop: 20
                        }}>
                            {investList.map(v => {
                                return <div style={{
                                    fontSize: 12, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>
                                    <input type="checkbox" key={v.key} style={{marginRight: 5}}/>
                                    {v.title}
                                </div>
                            })}
                        </div>
                    </div>


                    <div style={{border: '1px solid lightgray', borderTop: 'none', padding: '20px 12px'}}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridTemplateRows: '20px',
                            rowGap: 12,
                            columnGap: 10,
                        }}>
                                <span style={{
                                    fontSize: 14, fontWeight: 700, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>투자횟수</span>
                            <span style={{
                                fontSize: 11, color: '#888', display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'right'
                            }}>초기화</span>
                        </div>


                        <div style={{paddingTop: 20}}>
                            {investCountList.map(v => {
                                return <div style={{fontSize: 14}}>
                                    <input type="radio"/>
                                    <span> {v.title}</span>
                                </div>
                            })}

                        </div>

                    </div>

                    <div style={{border: '1px solid lightgray', borderTop: 'none', padding: '20px 12px'}}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridTemplateRows: '20px',
                            rowGap: 12,
                            columnGap: 10,
                        }}>
                                <span style={{
                                    fontSize: 14, fontWeight: 700, display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'left'
                                }}>최근 투자일</span>
                            <span style={{
                                fontSize: 11, color: '#888', display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'right'
                            }}>초기화</span>
                        </div>


                        <div style={{paddingTop: 20}}>
                            {currentInvestDateList.map(v => {
                                return <div style={{fontSize: 14}}>
                                    <input type="radio"/>
                                    <span> {v.title}</span>
                                </div>
                            })}

                            {/*<div style={{width: 200, paddingTop: 10}}>*/}
                            {/*    <div style={{*/}
                            {/*        display: 'grid',*/}
                            {/*        gridTemplateColumns: '1fr 5px 1fr',*/}
                            {/*        rowGap: 12,*/}
                            {/*        columnGap: 10,*/}
                            {/*    }}>*/}
                            {/*        <input type="text"*/}
                            {/*               style={{width: '100%', height: 25, border: '1px solid lightGray'}}*/}
                            {/*               placeholder={'최소인원'}/>*/}
                            {/*        <div>~</div>*/}
                            {/*        <input type="text"*/}
                            {/*               style={{width: '100%', height: 25, border: '1px solid lightGray'}}*/}
                            {/*               placeholder={'최대인원'}/>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*<div style={{*/}
                            {/*    display: 'flex',*/}
                            {/*    justifyContent: 'right', paddingTop: 20*/}
                            {/*}}>*/}
                            {/*    <div style={{*/}
                            {/*        backgroundColor: '#f2f2f2', width: 80, height: 36, display: 'flex',*/}
                            {/*        alignItems: 'center',*/}
                            {/*        justifyContent: 'center', borderRadius: 8*/}
                            {/*    }}>적용*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                    </div>
                </div>


                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'right'
                    }}>
                        <div style={{fontSize: 13, color: '#4181A0', fontWeight: 700}}>
                            <span style={sortType === 0 ? selectText : disSelectText} onClick={()=>setSortType(0)}>기업조회수(최근 7일)</span>
                            <span style={sortType === 1 ? selectText : disSelectText} onClick={()=>setSortType(1)}>누적투자금액</span>
                            <span style={sortType === 2 ? selectText : disSelectText} onClick={()=>setSortType(2)}>매출</span>
                        </div>
                    </div>


                    <div style={{marginTop : 20}}>


                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1.5fr 0.5fr 35% 1fr 1fr 1fr',
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
                            <span>투자사명</span>
                            <span>유형분류</span>
                            <span>주요투자분야</span>
                            <span>투자횟수</span>
                            <span>누적투자금액</span>
                            <span>최근투자</span>
                        </div>


                        {contentsList.map(v => {
                            return <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1.5fr 0.5fr 35% 1fr 1fr 1fr',
                                gridTemplateRows: 100,
                                textAlign: 'center',
                                columnGap: 25,
                                fontSize: 13,
                                fontWeight: 700,
                                borderBottom: '1px solid lightGray',
                                cursor : 'pointer'
                            }}
                            onClick={()=>openDetailContents(v.key)}
                            >
                                <div style={{
                                    display: 'grid', gridTemplateColumns: '1fr 3fr',
                                    padding: '22px 0px 22px 20px'
                                }}>

                                    <img src={v.img} width={50} height={50} alt="" style={{borderRadius: 30}}/>
                                    <div style={{paddingTop: 10}}>
                                        <div>{v.company}</div>
                                        <div>{v.subCompany}</div>
                                    </div>
                                </div>

                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center', fontSize: 15,
                                }}>{v.type}</span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center', fontSize: 15,
                                }}>{v.investPart}</span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center', fontSize: 15,
                                }}>{v.investCount}회</span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center', fontSize: 15,
                                }}>{formatPriceDot(v.accCount)}원</span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center', fontSize: 15,
                                }}>{v.currentInvestDate}</span>
                            </div>
                        })}
                    </div>

                    <div style={{textAlign: 'center'}}>더보기 +</div>
                </div>


            </div>
        </div>
    </>
}