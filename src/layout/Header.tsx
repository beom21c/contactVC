export default function Header(){


    function tester(){

    }

    return <div style={{height : 80, display : 'flex', alignItems: 'center', position : 'fixed', zIndex : 10, backgroundColor : 'white', width : '100%'}}>
        <div style={{padding : '0px 32px 0px 32px', width : '100%'}}>
            <img src={'/img/logo.svg'} style={{float : 'left', width : 200}}/>
            <div style={{float : 'right', paddingTop : 11, fontSize : 14, color : '#11414B'}}>
                {/*<span style={{padding : '0px 18px 0px 18px', display : 'inline-block'}}>회원가입</span>*/}
                {/*<span style={{padding : '0px 18px 0px 18px', display : 'inline-block'}}>로그인</span>*/}
                <span style={{padding : '0px 18px 0px 18px', display : 'inline-block'}}>마이페이지</span>
                <span style={{padding : '0px 18px 0px 18px', display : 'inline-block'}}>로그아웃</span>
                <span style={{padding : '0px 18px 0px 18px', display : 'inline-block'}}><img src="/img/search.svg" width={13} alt="" style={{paddingRight : 4}}/>검색</span>
            </div>
            <div style={{float : 'right', paddingTop : 10, fontSize : 16, fontWeight : 600}}>
                <span onClick={tester} style={{padding :'0px 35px 0px 35px', display : 'inline-block' }}>STARTPVC</span>
                <span style={{padding :'0px 22px 0px 22px', display : 'inline-block' }}>EVENTFORUM</span>
                <span style={{padding :'0px 22px 0px 22px', display : 'inline-block' }}>IR INVEST</span>
                <span style={{padding :'0px 22px 0px 22px', display : 'inline-block' }}>스타트업랭킹</span>
                <span style={{padding :'0px 22px 0px 22px', display : 'inline-block' }}>스타트업Short</span>
                <span style={{padding :'0px 22px 0px 22px', display : 'inline-block' }}>채용공고</span>
                <span style={{padding :'0px 22px 0px 22px', display : 'inline-block' }}>뉴스보도</span>
            </div>
        </div>
    </div>
}