import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import CardTitle from "@/component/CardTitle";
import {useState} from "react";
import {useRouter} from "next/router";
import {wrapper} from "@/store/store";
import initialServerRouter from "@/util/initialServerRouter";

export default function StartShort() {
    const router = useRouter();


    const contentList = [
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
        {
            img: '/img/short-tumbnail.png',
            title: '폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까',
            contents: '분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...',
            date: '2022.05.11'
        },
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
                    <div style={{fontSize: 37, letterSpacing: 7}}>스타트업Short</div>
                    <div style={{fontSize: 14}}>Home / 스타트업Short</div>
                </div>
            </div>


            <div style={{padding: '60px 100px'}}>
                <CardTitle title={'스타트업 Short'}/>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: 160,
                    columnGap: 30,
                    paddingTop: 40,
                    padding: 22
                }}>

                    <div style={{backgroundImage: 'url(img/startup-content-banner1.png)'}}></div>
                    <div style={{backgroundImage: 'url(img/startup-content-banner2.png)'}}></div>
                    <div style={{backgroundImage: 'url(img/startup-content-banner3.png)'}}></div>
                </div>


                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridTemplateRows: 300,
                    columnGap: 30,
                    rowGap: 30,
                    paddingTop: 40,
                    padding: 22
                }}>

                    {contentList.map(v => {

                        return <div style={{border : '1px solid lightGray', borderRadius : 7}}>
                            <img src={v.img} width={'100%'} alt=""/>

                            <div>폐기물을 스마트하게 처리합니다🗑 정확하고, 간편한데, 재활용까</div>

                            <div>분리수거는 이제 모두에게 익숙한 일이 되었습니다. 가정이 아닌 큰 기업에서는 ...</div>

                            <div>2022.05.11</div>
                        </div>
                    })}

                </div>
                <div style={{textAlign : 'center'}}>더보기 +</div>

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

