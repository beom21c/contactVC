import Header from "@/layout/Header";
import Payment from "@/component/Payment";
import Footer from "@/layout/Footer";
import {useEffect} from "react";
import {setPrice} from "@/store/commonSlice";
import {useAppDispatch} from "@/templates/hooks/reduxHooks";
import CardTitle from "@/component/CardTitle";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";
import {buyBannerType} from "@/util/initial";

export default function BannerPricing(props : any){
    const dispatch = useAppDispatch();

    useEffect(() => {

        const {title, price} = buyBannerType[props.type];
        const sendParam = {
            name: title,
            price: price,
            discountPrice: 0
        }
        dispatch(setPrice(sendParam));
    }, [props]);


    return <>
        <Header/>
        <div style={{height: '100%', width : 1320, margin : '0px auto', paddingTop : 180}}>
            <CardTitle title={'결제하기'} subTitle={''}/>
            <Payment type={'banner'}/>
        </div>
        <Footer/>
    </>
}


export const getServerSideProps  = wrapper.getStaticProps((store: any) => async (ctx: any) => {

    await initialServerRouter(ctx, store);
    const { query } = ctx;
    const { type } = query; // 쿼리에서 '

    return {
        props: type ?{ type } : '' // 페이지 컴포넌트로 props를 통해 전달
    };
});


