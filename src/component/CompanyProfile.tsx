import {useEffect, useState} from "react";
import {useAppSelector} from "@/templates/hooks/reduxHooks";
import {getData} from "@/pages/api/api";
import {info} from "next/dist/build/output/log";
import {businessTypeInfo, investAccountInfo, investStepInfo, privateInfo} from "@/util/initial";
import {formatPriceDot} from "@/util/temp";
import {useRouter} from "next/router";


const officeInfo = [{title: '대표자명', key: 'ceo'}, {title: '회사주소', key: 'address'}, {
    title: '직원수',
    key: 'member_count'
}, {title: '홈페이지', key: 'homepage'}, {title: '설립일', key: 'since'}, {title: '매출', key: 'sales'}, {
    title: '회사소개 동영상',
    key: 'video_address'
}, {title: '비지니스 분야', key: 'businessType'}, {title: 'sns', key: 'sns'}]

export default function CompanyProfile() {
    const router = useRouter();
    const userInfo = useAppSelector((state) => state.user.userInfo);



    const [companyInfo, setCompanyInfo] = useState<any>([])
    const [memberList, setMemberList] = useState<any>([])

    useEffect(() => {
        const {cid} = userInfo;
        getCompanyInfo(cid).then(v => {
            const {companyInfo, memberList} = v.data;
            setCompanyInfo(companyInfo);
            setMemberList(memberList);
        })

    }, [userInfo])

    async function getCompanyInfo(cid) {
        return await getData.post(`company/companyInfo`, {cid: cid})
    }

    console.log(companyInfo?.businessType,'companyInfo?.businessType:::')



    return <div>
        <div style={{fontSize: 16, fontWeight: 600}}>기업프로필</div>


        <div style={{
            display: 'grid',
            gridTemplateColumns: '330px 1fr',
            padding: 20,
            border: '1px solid lightGray',
            columnGap: 20
        }}>

            <img src={'img/test.png'} width={'100%'} alt=""/>
            <div className={'introduceText'}>
                <div>기업명 <span>&nbsp;&nbsp;{companyInfo?.company}</span></div>
                <div>기업 한줄소개 <span>&nbsp;&nbsp;{companyInfo?.introduce}</span></div>
                <div>기업 상세소개</div>
                <div><span>{companyInfo?.subIntroduce}</span></div>
            </div>
        </div>

        <div style={{padding: 45, border: '1px solid ligthGray'}}>
            <div className={'introduceText'}>
                <div>희망 투자유치단계 <span>{investStepInfo[companyInfo?.investStep]}({privateInfo[companyInfo?.investStepPrivate]})</span></div>
                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>
                <div style={{paddingTop: 50}}>희망 투자유치금액 <span>&nbsp;&nbsp;{investAccountInfo[companyInfo?.investAmount]}({privateInfo[companyInfo?.investAmountPrivate]})</span></div>
                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>
                <div style={{paddingTop: 50}}>매출 <span>&nbsp;&nbsp;{formatPriceDot(parseFloat(companyInfo?.sales))}원</span></div>
                <div style={{paddingTop: 20}}>누적투자금액 <span>&nbsp;&nbsp;{formatPriceDot(parseFloat(companyInfo?.sales))}원</span></div>
                <div style={{paddingTop: 20}}>투자유치횟수 <span>&nbsp;&nbsp;{formatPriceDot(parseFloat(companyInfo?.sales))}원</span></div>
                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>

                <div style={{paddingTop: 50}}>비즈니스 분야<span>&nbsp;&nbsp;{businessTypeInfo[companyInfo?.businessType]}</span></div>
                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>
            </div>


            <div className={'introduceText'} style={{paddingTop : 20}}>
                <div>회사정보
                    <div style={{display : 'grid', gridTemplateColumns : '120px 0.5fr 120px 0.5fr', paddingTop : 30, rowGap : 20, columnGap : 10}}>
                        {officeInfo.map(v => {
                            return <>
                                <div style={{display: 'flex', alignItems: 'center', color: 'gray'}}>{v.title}</div>
                                <div>{companyInfo[v.key]}</div>
                                {/*<input value={companyInfo[v.key]} name={v.key} onChange={changeForm} style={{height: 35, border: '1px solid lightGray'}}*/}
                                {/*       type="text"/></>*/}
                                </>
                        })}

                    </div>
                </div>
            </div>
            <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>

            <div className={'introduceText'} style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', paddingTop: 50
            }}>

                <div>구성원 정보</div>

            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: '50px',
                borderBottom: '1px solid lightGray',
                paddingTop: 50,
                fontSize: 14
            }}>
                <div style={{display: 'flex', alignItems: 'center'}}>성함</div>
                <div style={{display: 'flex', alignItems: 'center'}}>부서</div>
                <div style={{display: 'flex', alignItems: 'center'}}>직책</div>

            </div>

            {memberList.map(v => {
                return <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gridTemplateRows: '50px',
                    borderBottom: '1px solid lightGray',
                    fontSize: 14
                }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>{v.name}</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>{v.part}</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>{v.position}</div>
                </div>
            })}


            <span style={{
                width: 127,
                height: 46,
                backgroundColor: '#4181A0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                borderRadius: 7,
                float: 'right',
                marginTop: 80,
                cursor: 'pointer'
            }} onClick={()=> router.push('/News_add?type=update_company_profile')}>수정 하기
            </span>
        </div>


    </div>
}