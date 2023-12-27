export default function Footer() {


    return <div style={{padding: '40px 0px', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)', marginTop : 180}}>
        <div style={{width: 1320, margin: '0 auto'}}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <img src="/img/footer_logo.svg" alt="" style={{float: 'left'}}/>
                <div style={{color: 'lightGray'}}>
                    <span style={{marginLeft: 15}}>이용약관</span>
                    <span style={{marginLeft: 15}}>개인정보처리방침</span>
                    <span style={{marginLeft: 15}}>이메일무단수집거부</span>
                </div>
            </div>
            <div className={'footer_contents'}>
                <div style={{paddingTop: 47}}>
                    <span>고객센터 이메일 문의 | <span>customer-center@contactvc.kr</span></span>
                    <span>유선번호 | <span>02-477-0919</span></span>
                </div>

                <div style={{paddingTop: 18}}>
                    <span>상호명 | <span>(주)뮤직엠엑스</span>&ensp;대표자명<span>곽희석</span></span>
                    <span>사업자등록번호 | <span>502-88-02574</span></span>
                    <span>주소 | <span>서울시 강동구 천호대로 1082 (성내동) 경남빌딩</span></span>
                </div>
                <div>
                    <span>투자 협력 문의 | <span>collabo@contactvc.kr<a href="#">
                        <img src="/img/copy.svg" alt=""/>
                        </a></span></span>
                    <span>투자처 찾기 문의 | <span>investstartup@contactvc.kr<a href="#">
                        <img src="/img/copy.svg" alt=""/>
                        </a></span></span>
                    <span>공동투자 파트너 찾기 문의 | <span>withinvest@contactvc.kr<a href="#">
                        <img src="/img/copy.svg" alt=""/>
                        </a></span></span>
                    <span>투자사를 찾아주세요 상담 신청 | <span>findvc＠contactvc.kr<a href="#">
                        <img src="/img/copy.svg" alt=""/>
                    </a></span></span>
                </div>

                <div style={{paddingTop : 24}}>Contact VC All Copyright Reserved</div>
            </div>
        </div>
    </div>
}