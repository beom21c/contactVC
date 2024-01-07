import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CardTitle from "@/component/CardTitle";
import StartUpCompany from "@/component/StartUpCompany";
import StartUpInvest from "@/component/StartUpInvest";
import {useState} from "react";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";

export default function StartUpVc() {


    const [type, setType] = useState('startup');

    return <>
        <Header/>
        <div style={{paddingTop: 80}}>
            <div style={{
                backgroundImage: `url(/img/startupVC-banner.png)`, height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{textAlign: 'center', color: 'white'}}>
                    <div style={{fontSize: 37, letterSpacing: 7}}>STARTUPVC</div>
                    <div style={{fontSize: 14}}>Home / STARTUPVC</div>
                </div>
            </div>

            <div style={{padding: '60px 75px'}}>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 20}}>
                    <img src={'/img/startupVC-content-banner8.png'} width={'100%'} style={{objectFit: 'cover'}}/>
                    <img src={'/img/startupVC-content-banner9.png'} width={'100%'} style={{objectFit: 'cover'}}/>
                    <img src={'/img/startupVC-content-banner10.png'} width={'100%'} style={{objectFit: 'cover'}}/>
                </div>
                <div style={{paddingTop: 30}}>
                    <CardTitle title={'신규투자유치'} subTitle={''}/>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        columnGap: 30,
                        paddingTop: 40
                    }}>
                        <img src={'/img/startupVC-content-banner4.png'} width={'100%'} alt=""/>
                        <img src={'/img/startupVC-content-banner5.png'} width={'100%'} alt=""/>
                        <img src={'/img/startupVC-content-banner6.png'} width={'100%'} alt=""/>
                        <img src={'/img/startupVC-content-banner7.png'} width={'100%'} alt=""/>
                    </div>
                </div>


                <div style={{
                    fontSize: 18,
                    letterSpacing: -1,
                    fontWeight: 700,
                    padding: '50px 0px',
                    borderBottom: '1px solid lightGray'
                }}>
                    <span style={{
                        color: type === 'startup' ?  '#4181A0' : 'lightgray',
                        marginRight: 30,
                        borderBottom: type === 'startup' ?  '5px solid #4181A0' : 'none',
                        paddingBottom: 5,
                        cursor: 'pointer'
                    }} onClick={()=>setType('startup')}>스타트업</span>
                    <span style={{
                        color: type === 'invest' ?  '#4181A0' : 'lightgray',
                        marginRight: 30,
                        borderBottom: type === 'invest' ?  '5px solid #4181A0' : 'none',
                        paddingBottom: 5,
                        cursor: 'pointer'
                    }} onClick={()=>setType('invest')} >투자사</span>
                </div>
                {type === 'startup'
                    ?
                    <StartUpCompany/>
                    :
                    <StartUpInvest/>
                }
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