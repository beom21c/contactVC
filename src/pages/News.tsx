import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";
import {useRouter} from "next/router";

export default function News(){
    const router = useRouter();



    const CardSample = () =>{
        return <div style={{height : 150, border : '1px solid black', borderRadius : 5, padding : 20}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                <img src={'/img/test.png'} alt="" width={30} height={30} style={{borderRadius : 20}}/>
                <span style={{fontSize : 19, fontWeight :700, paddingLeft : 15}}>캐시카우</span>
                <span style={{fontSize : 12, color : '#acacac', paddingLeft : 10}}>2023-07-29</span>
            </div>

            <div style={{paddingTop : 20, fontSize : 16, fontWeight : 500}}> 쿠쿠 일가, '캐시카우' 엔탑 장악력</div>
            <div style={{paddingTop : 20, fontSize : 12, color : '#acacac'}}>기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용기사내용</div>
        </div>
    }

    return <>
        <Header/>
        <div style={{paddingTop : 80}}>
            <div style={{backgroundImage: `url(/img/news-banner.jpg)`, height : 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <h2 style={{fontSize : 37, color : 'white', letterSpacing : 7}}>뉴스보도</h2>

            </div>
            {/*<img src={'/img/news-banner.jpg'} alt=""/>*/}

            <div style={{width : 1320,  height : '100%', margin : '0px auto'}}>
                <div style={{height : 30, paddingTop : 50}}>
                <input type="text" style={{float : 'right', height : 38, width : 228, border : '1px solid lightGray'}}/>
                </div>
                <div style={{width : 133, height : 40, backgroundColor :"#4181A0", color : 'white', fontSize : 16, fontWeight : 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius : 5,
                    cursor : 'pointer',
                    marginTop : 50
                }} onClick={()=> router.push('News_add')}>뉴스보도 등록</div>

                <div style={{ height : '100%', padding : '40px 20px'}}>

                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 13}}>
                        <img src={'/img/news-content-banner1.png'} alt="" style={{width : '100%'}}/>
                        <img src={'/img/news-content-banner2.png'} alt="" style={{width : '100%'}}/>
                        <img src={'/img/news-content-banner1.png'} alt="" style={{width : '100%'}}/>
                    </div>



                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap: 15, rowGap : 15,  paddingTop : 20}}>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                        <CardSample/>
                    </div>

                    <div style={{textAlign : 'center', paddingTop : 50}}>더보기 +</div>

                </div>
            </div>



        </div>

       {/* <div style={{height: '100%', padding: '80px 270px 0px 270px'}}>*/}
       {/*123*/}
       {/* </div>*/}
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