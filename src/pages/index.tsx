import {Inter} from 'next/font/google'
import Header from "@/layout/Header";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardTitle from "@/component/CardTitle";
import CardContents from "@/component/CardContent";
import Footer from "@/layout/Footer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
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

            <div style={{height: '100%', padding: '80px 270px 0px 270px'}}>
                <CardContents title={'투자유치 스타트업'} divide={3} type={'attractInvest'}/>
                <CardContents title={'스타트업 랭킹'} divide={5} type={'startupRank'}/>
                <CardContents title={'신문보도 스타트업'} divide={3} type={'newspaperReport'}/>
                <CardContents title={'스타트업 Short'} divide={3} type={'startupShort'}/>
                <CardContents title={'유망 스타트업'} divide={3} type={'promisingStartup'}/>
            </div>

            <Footer/>
        </>
    )
}
