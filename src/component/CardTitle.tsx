import Payment from "@/component/Payment";

export default function CardTitle({title, subTitle}:any) {

    console.log(title,'title:')

    return <div style={{height: 55, borderBottom: '1px solid #e5e5e5'}}>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <h1 style={{marginTop : 8}}>{title} {(title === '이용권 구매' || title === '결제하기' )&& <span style={{fontSize: 16, paddingLeft: 22, fontWeight: 400}}>결제를 선택해주세요.</span>}</h1>
            <div>{subTitle === 'button' ? 'button' : ''}</div>
        </div>

        {/*<Payment type={'banner'}/>*/}
        <div style={{backgroundColor : '#CC2300', height : 2, width : 50, marginTop : -13}}/>
    </div>
}