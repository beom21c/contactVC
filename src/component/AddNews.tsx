import {useRouter} from "next/router";
import {useAppSelector} from "@/templates/hooks/reduxHooks";
import {useState} from "react";
import {getData} from "@/pages/api/api";


const textStyle = {
    width: 360,
    height: 40,
    marginTop: 15,
    border: '1px solid lightGray',
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16
}
const titleStyle = {fontWeight: 500, marginTop: 40}
export default function AddNews() {
    const router = useRouter();

    const userInfo = useAppSelector((state) => state.user.userInfo);

    const [newsInfo, setNewsInfo] = useState({company: userInfo.company, title: '', link: '', contents: ''})


    async function addNews() {
        const list = Object.values(newsInfo)
        let check = true
        list.forEach(v => {
            if (!v) {
                check = false;
            }
        });
        if (check) {
            await getData.post('company/registerNews', {...newsInfo, cid: userInfo.cid}).then(v => {
                alert(v.data.message);
            })

        } else {
            alert('비어있는거 있다')
        }


        // alert('등록이 완료되었습니다.');
        // router.push('/')
        // ()=>router.push(`/BannerPricing?type=${'newsPaper'}`)
    }


    function changeValue(value) {
        setNewsInfo((v: any) => {
            return {...v, ...value}
        })
    }

    return <div>
        <div style={{fontWeight: 600}}>뉴스 보도 {'>'} 뉴스보도 등록</div>
        <div style={{width: '100%', height: '100%', backgroundColor: 'white', marginTop: 40}}>
            <div style={{padding: 20}}>
                <div style={{fontWeight: 500}}>기업명</div>
                <input type="text" style={textStyle}
                       value={newsInfo.company} onChange={(e) => changeValue({'company': e.target.value})}
                       placeholder={'기업명을 입력해주세요'}/>
                <div style={titleStyle}>기사 제목</div>
                <input type="text" style={textStyle} onChange={(e) => changeValue({'title': e.target.value})}
                       placeholder={'기업명을 입력해주세요'}/>
                <div style={titleStyle}>기사 링크</div>
                <input type="text" style={textStyle} onChange={(e) => changeValue({'link': e.target.value})}
                       placeholder={'기업명을 입력해주세요'}/>
                <div style={titleStyle}>기사 내용</div>
                <textarea style={textStyle} onChange={(e) => changeValue({'contents': e.target.value})}
                          placeholder={'기업명을 입력해주세요'}/>
                <div style={{paddingTop: 300}}>
                    <div style={{
                        float: 'right',
                        width: 127,
                        height: 46,
                        backgroundColor: '#4181a0',
                        color: 'white',
                        borderRadius: 7,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }} onClick={addNews}>등록하기
                    </div>
                    <div style={{
                        float: 'right',
                        width: 127,
                        height: 46,
                        color: 'white',
                        backgroundColor: 'gray',
                        borderRadius: 7,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        marginRight: 5
                    }} onClick={() => router.back()}>취소
                    </div>
                </div>
            </div>

        </div>
    </div>
}