import Header from "@/layout/Header";
import CardTitle from "@/component/CardTitle";
import PrBanner from "@/component/PrBanner";
import CardContents from "@/component/CardContent";
import Footer from "@/layout/Footer";
import {useAppSelector} from "@/templates/hooks/reduxHooks";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";
import {useEffect, useMemo} from "react";
import {buyBannerType} from "@/util/initial";
import {useRouter} from "next/router";

export default function BuyBanner(props) {
    const router = useRouter();
    const [title, img, price, type] = useMemo(() => {
        const {title, img, price} = buyBannerType[props?.type]
        return [title, img, price, props?.type]
    }, [props])
    return <>
        <Header/>


        <div style={{height: '100%', padding: '180px 120px 0px 120px'}}>
            <CardTitle title={'PR 배너 광고 구매'} subTitle={null}/>

            <div style={{paddingTop: 80}}>
                <div style={{height: 130}}>
                    <div style={{display: 'flex', float: 'left', padding: '0px 50px'}}>
                        <div style={{
                            width: 180,
                            height: 50,
                            backgroundColor: '#4181A0',
                            borderRadius: 30,
                            color: 'white',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>{title}</div>
                        <span style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 30
                        }}>상품 결제 </span>

                    </div>
                    <div style={{float: 'right', textAlign: 'right'}}>
                        <div style={{fontSize: 16, fontWeight: 700}}>가격 정보</div>
                        <div style={{fontSize: 24, fontWeight: 700, paddingTop: 30}}>{price}원</div>
                        <div style={{paddingTop: 10}}>광고기간 7일</div>
                    </div>
                </div>

                <div style={{fontWeight: 700}}>예시 배너 이미지</div>
                <div style={{paddingTop: 15}}>상기 이미지와 같이 삽입될 예정입니다.</div>
                <div style={{textAlign: 'center', paddingTop: 50}}>
                    <img src={img} alt=""/>
                </div>


                <div style={{paddingTop : 100}}>
                    <div style={{fontWeight: 700}}>배너 이미지</div>
                    <div style={{paddingTop: 15}}>클릭하여 이미지를 삽입해 주세요.</div>
                    <div style={{
                        backgroundColor: "lightgray", width: 430, height: 260, display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor : 'pointer',
                        marginTop : 30
                    }}>

                        <img src={'/img/pic-modify.svg'} alt=""/>
                    </div>
                </div>


                <div style={{paddingTop : 130, }}>
                    <div style={{fontWeight : 700}}>제목</div>
                    <div style={{paddingTop : 15}}>상기 배너에 들어갈 제목을 기입해주세요.</div>
                    <input type="text" style={{border : '1px solid lightGray', width : '100%', height : 43, marginTop : 20, borderRadius : 5, fontSize : 16, paddingLeft : 10}}
                    placeholder={'제목을 입력해주세요'}
                    />
                </div>

                <div>
                    <div style={{fontWeight : 700, paddingTop : 30}}>사용자명</div>
                    <div style={{paddingTop : 15}}>배너에 들어갈 사용자 정보를 적어주세요.</div>
                    <input type="text" style={{border : '1px solid lightGray', width : '100%', height : 43, marginTop : 20, borderRadius : 5, fontSize : 16, paddingLeft : 10}}
                           placeholder={'사용자 정보를 적어주세요'}
                    />
                </div>

                <div>
                    <div style={{fontWeight : 700, paddingTop : 30}}>링크</div>
                    <div style={{paddingTop : 15}}>본 이미지를 클릭하였을 시, 이동할 링크를 기입해주세요</div>
                    <input type="text" style={{border : '1px solid lightGray', width : '100%', height : 43, marginTop : 20, borderRadius : 5, fontSize : 16, paddingLeft : 10}}
                           placeholder={'관련 URL을 적어주세요'}
                    />
                </div>

                <div onClick={() => router.push(`/BannerPricing?type=${type}`)} style={{backgroundColor : '#4181a0', color : 'white', fontSize :20, height : 68,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius : 5,
                    marginTop : 100,
                    cursor : 'pointer'
                }}>PR 배너 광고 홍보 등록</div>
            </div>
        </div>


        <Footer/>
    </>
}


export const getServerSideProps = wrapper.getStaticProps((store: any) => async (ctx: any) => {

    await initialServerRouter(ctx, store);
    const {query} = ctx;
    const {type} = query; // 쿼리에서 '

    console.log(query, 'myParam:')
    return {
        props: type ? {type} : '' // 페이지 컴포넌트로 props를 통해 전달
    };
});


