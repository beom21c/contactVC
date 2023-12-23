import CardTitle from "@/component/CardTitle";
import Card, {PriceCard, PromisingStartupCard, RankCard, StartupShortCard} from "@/component/Card";
import {useMemo} from "react";
import {
    initAttractInvest,
    initNewspaperReport,
    initPromisingStartup,
    initStartupRank,
    initStartupShort, PricingList
} from "@/util/initial";
import AttractInvestCard from "@/component/Card";

export default function CardContents({title, divide, type}:any){


    const [frame, gap, contetns, prefix] = useMemo(()=>{
        const unitWord = '1fr ';
        const frame = unitWord.repeat(divide);


        let gap:any = 20
        let contents:any = []
        let prefix:any = 'button'
        switch (type) {
            case 'attractInvest' :
                contents = initAttractInvest.map(v=>{
                     return <AttractInvestCard source={v}/>
                 })
                break;
            case 'startupRank' :
                gap = 8
                contents = initStartupRank.map(v=>{
                    return <RankCard source={v}/>
                })
                break;
            case 'newspaperReport' :
                contents = initNewspaperReport.map(v=>{
                    return <AttractInvestCard source={v}/>
                })
                break;
            case 'startupShort' :
                contents = initStartupShort.map(v=>{
                    return <AttractInvestCard source={v}/>
                })
                break;
            case 'promisingStartup' :
                contents = initPromisingStartup.map(v=>{
                    return <PromisingStartupCard source={v}/>
                })
                break;
            case 'pricing' :
                prefix = ''
                contents = PricingList.map(v=>{
                    return <PriceCard source={v}/>
                })
                break;
            default :
        }


        return [frame,gap, contents, prefix]
    },[divide])

    return <>
        <CardTitle title={title} subTitle={prefix}/>
        <div style={{display : 'grid', gridTemplateColumns : frame, columnGap : gap,  rowGap : gap,paddingTop : 40}}>
            {contetns}
        </div>
    </>
}