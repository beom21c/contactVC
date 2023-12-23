import Header from "@/layout/Header";
import Payment from "@/component/Payment";
import Footer from "@/layout/Footer";
import {useEffect} from "react";
import {setPrice} from "@/store/commonSlice";
import {useAppDispatch} from "@/templates/hooks/reduxHooks";
import CardTitle from "@/component/CardTitle";

export default function BannerPricing(){
    const dispatch = useAppDispatch();

    useEffect(() => {

        const sendParam = {
            name: '유망 스타트업 ZONE',
            price: 500000,
            discountPrice: 0
        }
        dispatch(setPrice(sendParam));
    }, []);


    return <>
        <Header/>
        <div style={{height: '100%', width : 1320, margin : '0px auto', paddingTop : 180}}>
            <CardTitle title={'결제하기'} subTitle={''}/>
            <Payment type={'banner'}/>
        </div>
        <Footer/>
    </>
}

