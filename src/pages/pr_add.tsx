import Header from "@/layout/Header";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardContents from "@/component/CardContent";
import Footer from "@/layout/Footer";
import CardTitle from "@/component/CardTitle";
import PrBanner from "@/component/PrBanner";

export default function AddPr(){


    return <>
        <Header/>

        <div style={{paddingTop : 80}}>
            <Swiper navigation={true} pagination={{clickable: true}} modules={[Navigation, Pagination]}
                    className="mySwiper">
                <SwiperSlide><img style={{height: 400}} src="/img/main/slide1.png"/></SwiperSlide>
                <SwiperSlide><img style={{height: 400}} src="/img/main/slide2.png"/></SwiperSlide>
                <SwiperSlide><img style={{height: 400}} src="/img/main/slide3.png"/></SwiperSlide>
                <SwiperSlide><img style={{height: 400}} src="/img/main/slide4.png"/></SwiperSlide>
                <SwiperSlide><img style={{height: 400}} src="/img/main/slide5.png"/></SwiperSlide>
            </Swiper>
        </div>

        <div style={{height: '100%', padding: '80px 120px 0px 120px'}}>
            <CardTitle title={'PR 배너 광고'} subTitle={null}/>
            <div style={{height : 50, paddingTop : 40}}>컨텍브이씨 플랫폼 PR 베너 광고 투자사 심사역으로부터 연락을 받아보세요</div>

            <div style={{border : '1px solid lightGray', padding : 20}}>
                <div style={{fontSize : 20, fontWeight : 700}}>광고문의 내용을 발송해주세요</div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap: 13, paddingTop : 30, textAlign : 'center'}}>
                   <div style={{ backgroundColor : '#ebf8fc', height : 195, paddingTop : 25, lineHeight : 1.5, fontWeight : 700}}>
                       <div style={{fontSize : 24, fontWeight : 900}}>1</div>
                       <div style={{paddingTop : 35}}>광고상품을</div>
                       <div>구매하여 주세요</div>
                   </div>
                    <div style={{ backgroundColor : '#d4eff5', height : 195, paddingTop : 25, lineHeight : 1.5, fontWeight : 700}}>
                        <div style={{fontSize : 24, fontWeight : 900}}>2</div>
                        <div style={{paddingTop : 35}}>랜딩 URL, 동영상,</div>
                        <div>홍보에 사용할 이미지,</div>
                        <div>홍보문구 Self</div>
                        <div>셀프등록 하여 주세요.</div>
                    </div>
                    <div style={{ backgroundColor : '#c5e7ef', height : 195, paddingTop : 25, lineHeight : 1.5, fontWeight : 700}}>
                        <div style={{fontSize : 24, fontWeight : 900}}>3</div>
                        <div style={{paddingTop : 35}}>광고상품 구매 후 7일 동안</div>
                        <div>광고가 노출됩니다.</div>
                    </div>
                    <div style={{ backgroundColor : '#9ed5e2', height : 195, paddingTop : 25, lineHeight : 1.5, fontWeight : 700}}>
                        <div style={{fontSize : 24, fontWeight : 900}}>4</div>
                        <div style={{paddingTop : 35}}>홈페이지 배너광고 노출 후</div>
                        <div>자동 알림을 발송드립니다.</div>
                    </div>

                </div>

            </div>
            <PrBanner title={'상단 헤더 ZONE'} img={'/img/PR_ex1.png'} price={1000000} type={'header'}/>
            <PrBanner title={'투자유치 스타트업 ZONE'} img={'/img/PR_ex2.png'} price={1000000} type={'attractInvest'}/>

            <CardContents title={'스타트업 랭킹'} divide={5} type={'startupRank'}/>
            <PrBanner title={'신문보도 스타트업 ZONE'} img={'/img/PR_ex3.png'} price={1000000} type={'news'}/>
            <PrBanner title={'스타트업 Short ZONE'} img={'/img/PR_ex4.png'} price={1000000} type={'short'}/>
            <PrBanner title={'유망 스타트업 ZONE'} img={'/img/PR_ex5.png'} price={500000} type={'vision'}/>
        </div>

        <Footer/>
    </>
}