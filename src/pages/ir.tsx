import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CardTitle from "@/component/CardTitle";
import {useState} from "react";
import {useRouter} from "next/router";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";

export default function IrInvest() {
    const router = useRouter();

    const filterList = [
        {title: '전체', key: 0},
        {title: '행사/네트워크', key: 1},
        {title: '투자', key: 2},
        {title: '시설공간', key: 3},
        {title: '멘토링/컨설팅', key: 4}
    ]


    const startupList = [
        {img: '/img/IR-invest-logo1.png', company: '밀리의 서재', introduce: '서적 구독 플랫폼'},
        {img: '/img/IR-invest-logo2.png', company: '젠테', introduce: '명품 이커머스 플랫폼'},
        {img: '/img/IR-invest-logo3.png', company: '레뷰', introduce: '인플루언서 마케팅 중개 플랫폼'},
    ]

    const infoList = [
        {title: 'IR자료 발송요청', link: '/'},
        {title: 'IR자료 등록', link: '/'},
        {title: 'INVEST 투자처 찾기 메일발송문의', link: '/'},
        {title: '투자사를 찾아주세요 상담신청', link: '/'},
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
                    <div style={{fontSize: 37, letterSpacing: 7}}>IR INVEST</div>
                    <div style={{fontSize: 14}}>Home / IR INVEST</div>
                </div>
            </div>


            <div style={{padding: '60px 100px'}}>


                <CardTitle title={'스타트업 행사 프로그램'} subTitle={''}/>

                <div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 325px',
                        columnGap: 30,
                        paddingTop: 40
                    }}>

                        <div style={{padding: '50px 30px', textAlign: 'center'}}>

                            <div>투자처 스타트업 찾기 문의</div>
                            <img src={'/img/IR-mail.png'} width={'100%'} style={{paddingTop: 50}}/>
                            {/*<div style={{marginTop: -60}}>회원가입 하기</div>*/}


                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                gridTemplateRows: 160,
                                columnGap: 30,
                                paddingTop: 40,
                                border: '1px solid lightGray',
                                padding: 22
                            }}>

                                {startupList.map(v => {
                                    return <div>
                                        <div style={{padding: 10, border: '1px solid lightGray', height: 60}}>
                                            <img src={v.img} height={'100%'} alt=""/>
                                        </div>

                                        <div style={{paddingTop: 20, fontWeight: 600}}>{v.company}</div>
                                        <div style={{paddingTop: 10, fontSize: 14}}>{v.introduce}</div>
                                    </div>
                                })}

                            </div>


                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                gridTemplateRows: 40,
                                columnGap: 10,
                                paddingTop: 40,
                                color: 'white'
                            }}>


                                {infoList.map(v => {
                                    return <div style={{
                                        backgroundColor: '#4181A0', borderRadius: 7, fontSize: 16, display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center', cursor: 'pointer'
                                    }}
                                                onClick={() => router.push(v.link)}
                                    >{v.title}
                                    </div>
                                })}

                            </div>
                        </div>


                        <div>
                            <div style={{border: '1px solid lightGray', padding: 20}}>
                                <div style={{border: '1px solid lightGray', padding: 30}}>
                                    <img src={'/img/IR-invest1.png'} style={{objectFit: "cover"}} width={'100%'}
                                         alt=""/>
                                    <div>IR 자료는 어떻게 작성해야 할까?</div>

                                    <div>많은 사람들은 투자유치를 위한 자료(사업계획서)를 만드는 것에 대해서 어려워한다. 특히나 ...</div>
                                </div>



                                <div style={{border: '1px solid lightGray', padding: 30, marginTop : 20}}>
                                    <img src={'/img/IR-invest1.png'} style={{objectFit: "cover"}} width={'100%'}
                                         alt=""/>
                                    <div>떠먹여주는 스타트업 투자 IR 상식 (왕초급편)</div>

                                    <div>언젠가 투자는 받고 싶지만, 투자에 대해 모릅니다 투자받을 계획을 가지고 있지만, 투자에 대해 전혀 모르는</div>
                                </div>
                            </div>

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