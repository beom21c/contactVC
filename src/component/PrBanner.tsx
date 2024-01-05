import {formatPriceDot} from "@/util/temp";
import {useAppDispatch} from "@/templates/hooks/reduxHooks";
import {setBuyType} from "@/store/commonSlice";
import {useRouter} from "next/router";
import {useMemo} from "react";
import {manageObject} from "@/util/manageObject";
import {buyBannerType} from "@/util/initial";

// @ts-ignore
export default function PrBanner({type}: any) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    // setBuyType


    const [title, img, price] = useMemo(() => {
// @ts-ignore
        const {title, img, price} = buyBannerType[type]
        return [title, img, price]
    }, [type])


    function buyItem() {
        router.push(`/buy_banner?type=${type}`);
    }

    return <div style={{padding: '30px', border: '1px solid lightGray', marginTop: 30}}>
        <div style={{
            width: 180, height: 50, backgroundColor: '#4181A0', borderRadius: 30, color: 'white', display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
            // @ts-ignored
        }}>{title}</div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 240px', columnGap: 30, paddingTop: 20}}>

            <img src={img} alt=""
                 style={{width: '100%', height: 'auto', objectFit: 'cover', border: '5px solid black', padding: 5}}/>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'}}>
                <div style={{border: '1px solid lightGray', borderRadius: 5, padding: 30}}>
                    <div style={{fontSize: 24, fontWeight: 700}}>{formatPriceDot(price)}원</div>
                    <div style={{paddingTop: 10}}>광고기간 7일</div>

                    <div style={{
                        marginTop: 60,
                        textAlign: "center",
                        borderRadius: 5,
                        backgroundColor: '#4181a0',
                        fontSize: 14,
                        color: "white",
                        padding: '10px 20px',
                        cursor: 'pointer'
                    }}
                         onClick={buyItem}>
                        광고상품 <br/> 구매하기
                    </div>
                </div>
            </div>
        </div>
    </div>
}