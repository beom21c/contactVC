import Header from "@/layout/Header";
import CardContents from "@/component/CardContent";
import Footer from "@/layout/Footer";
import Payment from "@/component/Payment";

export default function Pricing() {




    return <>
        <Header/>
        <div style={{height: '100%', width : 1320, margin : '0px auto', paddingTop : 180}}>
            <CardContents title={'이용권 구매'} divide={5} type={'pricing'}/>
            <Payment type={'pass'}/>
        </div>
        <Footer/>
    </>
}