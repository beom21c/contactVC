import {useAppDispatch} from "@/templates/hooks/reduxHooks";
import {setPrice} from "@/store/commonSlice";
import {formatPriceDot} from "@/util/temp";

export default function AttractInvestCard({source}: any) {

    const {img, company, title, writer, date} = source

    return <div>
        <img src={img} alt="" style={{width: '100%', height: 'auto'}}/>
        <div>{company}</div>
        <div style={{padding: '0px 12px'}}>
            <div>{title}</div>
            <div>{writer} {date}</div>
        </div>
    </div>
}


export function RankCard({source}: any) {
    const {
        img,
        company,
        category,
        views,
        requestData,
        scrap,
        news,
        accumulatedAmount,
        currentInvestAmount,
        totalSaleAmount,
        upRank
    } = source
    return <div
        style={{padding: '22px 12px', backgroundColor: '#f8fbfc', border: '1px solid #E8EAED', borderRadius: 5}}>

        <div style={{
            float: 'left',
            width: 50,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <div>03</div>
            <div>NEW</div>
            <img src={img} alt=""/>
        </div>
        <div style={{float: 'left', width: 'calc(100% - 50px)'}}>
            <div style={{fontSize: 14}}>{company}</div>
            <div style={{fontSize: 12}}>{category}</div>
            <span
                style={{fontSize: 10}}>조회수 {views} | IR 자료요청수 {requestData} | 스크랩수 {scrap} | 뉴스기사수 {news} | 누적투자금액{accumulatedAmount} | 최근투자유치금액 {currentInvestAmount} | 매출최대 총액 2억{totalSaleAmount}</span>
        </div>
    </div>
}

export function StartupShortCard({source}: any) {

    const {img, company, title, writer, date} = source

    return <div>
        <div style={{backgroundColor: 'black', textAlign: 'center'}}>
            <img src={img} alt="" style={{height: 200}}/>
        </div>
        <div>{company}</div>
        <div style={{padding: '0px 12px'}}>
            <div>{title}</div>
            <div>{writer} {date}</div>
        </div>
    </div>
}

export function PromisingStartupCard({source}: any) {

    const {
        img,
        title,
        subTitle,
        views,
        requestData,
        scrap,
        news
    } = source

    return <div>

        <img src={img} alt="" style={{width: '100%', height: 'auto'}}/>

        <div>{title}</div>
        <div style={{padding: '0px 12px'}}>
            <div>{subTitle}</div>
            <div>{views} {requestData}</div>
        </div>
    </div>
}

export function PriceCard({source}: any) {
    const dispatch = useAppDispatch();
    const {
        name,
        price,
        discount,
        discountPrice
    } = source


    function buying() {
        const sendParam = {
            name: name,
            price: price,
            discountPrice: discountPrice
        }
        dispatch(setPrice(sendParam));
    }

    return <div style={{border: '1px solid lightGray', height: 350, padding: '25px 22px', borderRadius : 10}}>
        <div style={{fontSize: 48, textDecoration: 'underline', color: '#4181A0', fontWeight : 700}}>{name}</div>
        <div style={{fontSize: 32, padding : '30px 0px 20px', fontWeight : 700}}>{formatPriceDot(price)}원</div>
        <div style={{height: 39}}>
        {discount && <div
            style={{backgroundColor: '#FF5F5F', width: 75, height : '100%', fontSize: 21, color: 'white',display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', borderRadius : 5, boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)', fontWeight : 800}}>{discount}</div>}
        </div>

        <div style={{backgroundColor: '#4181A0', color: 'white', borderRadius: 5, height: 70, fontSize: 20, marginTop : 100,   display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', cursor : 'pointer', fontWeight : 700}}
             onClick={buying}>구매하기
        </div>
    </div>
}