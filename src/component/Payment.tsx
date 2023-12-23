import {formatPriceDot} from "@/util/temp";
import {useAppSelector} from "@/templates/hooks/reduxHooks";
import {useMemo} from "react";
import {manageObject} from "@/util/manageObject";

export default function Payment({type}:any){

    const pricing = useAppSelector((state) => state.common.pricing)

    const [list, totalPrice] = useMemo(() => {
        const buyList = manageObject.sumObjectList(pricing);

        let priceList = {totalPrice: 0, totalDiscountPrice: 0}
        buyList.forEach(v => {
            priceList['totalPrice'] += v.total_price
            priceList['totalDiscountPrice'] += v.total_discount_price;
        });

        return [buyList, priceList]
    }, [pricing])


    function payments() {
        const data: any = {price: totalPrice.totalPrice, title: '이용권 구매'}
        const queryString = new URLSearchParams(data).toString();
        window.open(`/CheckOut?${queryString}`, 'newWindow', 'width=600,height=600,status=no,toolbar=no,scrollbars=no',);

    }

        return <>
        <div style={{
            marginTop: 40,
            borderTop: '1px solid lightGray',
            borderBottom: '1px solid lightGray',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding : 30
        }}>
            <div style={{width: '50%', padding : '0px 30px'}}>
                <div style={{borderBottom: '1px solid lightGray', height : 90}}>
                    <div style={{fontSize : 24, paddingBottom : 22, fontWeight : 600}}>주문 정보</div>
                    {list.map(v => {
                        return <div style={{color : '#4181A0', fontSize : 20}}>{v.name} x ({v.count}건)</div>
                    })}
                </div>
                <div>
                    <div style={{padding : '22px 0px 33px', fontSize : 24}}>결제방법 선택</div>
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: 12,}}>
                        <div style={{
                            height: 85, border: '1px solid #4181A0', borderRadius: 10, display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            cursor : 'pointer'
                        }}>무통장입금
                        </div>
                        <div style={{
                            height: 85,
                            border: '1px solid #4181A0',
                            borderRadius: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#4181A0',
                            color: 'white',
                            cursor : 'pointer'
                        }}>신용카드
                        </div>
                        <div style={{
                            height: 85, border: '1px solid #4181A0', borderRadius: 10, display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            cursor : 'pointer'
                        }}>핸드폰 결제
                        </div>
                    </div>
                </div>
            </div>

            <div style={{width : '50%'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: 'space-between',
                    height: 190,
                    padding: 30,
                }}>
                    <div><span style={{fontSize : 24, fontWeight : 500}}>총 주문 금액</span> <span style={{float: 'right', fontSize : 16}}>{formatPriceDot(totalPrice.totalDiscountPrice + totalPrice.totalPrice)}원</span></div>
                    <div><span style={{fontSize : 24, fontWeight : 500}}>할인 금액 </span><span style={{float: 'right', fontSize : 16}}>-{formatPriceDot(totalPrice.totalDiscountPrice)}원</span></div>
                    <div><span style={{fontSize : 24, fontWeight : 500}}>결제 금액 </span><span
                        style={{float: 'right', color : '#4181A0', fontSize : 20, fontWeight : 700}}> {formatPriceDot(totalPrice.totalPrice)}원</span>
                    </div>
                </div>
            </div>
        </div>

        <div style={{paddingTop : 40}}>
            <div>
                {type === 'pass' && <span style={{
                    fontSize: 14,
                    float: 'left'
                }}>이용권 구매하시면 투자사 심사역 으로 IR 자료 발송 , 투자요청 메시지 발송하기를 사용할수 있습니다.</span>}
                <span style={{fontSize : 14, float : 'right'}}><input type="checkbox"/> 안내사항을 확인하였으며, 모두 동의합니다.</span>
            </div>
            <div style={{marginTop : 30, height : 68, backgroundColor : '#4181A0', display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', color : 'white', fontSize : 20, marginBottom : 180,
                cursor : 'pointer'}} onClick={payments}>이용권 결제하기</div>
        </div>
    </>
}