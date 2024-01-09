import {useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/templates/hooks/reduxHooks";
import {getData} from "@/pages/api/api";
import {info} from "next/dist/build/output/log";
import {businessTypeInfo, investAccountInfo, investStepInfo, privateInfo} from "@/util/initial";
import {formatPriceDot} from "@/util/temp";
import {setModal} from "@/store/commonSlice";
import Modal from "@/component/Modal";
import {useRouter} from "next/router";

export default function UpdateProfile() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const userInfo = useAppSelector((state) => state.user.userInfo);


    const [companyInfo, setCompanyInfo] = useState<any>({})
    const [memberList, setMemberList] = useState<any>([])


    const officeInfo = [{title: '대표자명', key: 'ceo'}, {title: '회사주소', key: 'address'}, {
        title: '직원수',
        key: 'member_count'
    }, {title: '홈페이지', key: 'homepage'}, {title: '설립일', key: 'since'}, {title: '매출', key: 'sales'}, {
        title: '회사소개 동영상',
        key: 'video_address'
    }, {title: '비지니스 분야', key: 'businessType'}, {title: 'sns', key: 'sns'}]

    const [investStepPrivate, investStep, investAmount, investAmountPrivate,acc_invest_amount, invest_count,introduce, subIntroduce, businessType, sales] = useMemo(() => {
        const {
            introduce,
            subIntroduce,
            investStepPrivate,
            investStep,
            investAmount,
            investAmountPrivate,
            acc_invest_amount,
            invest_count,
            businessType,
            sales
        } = companyInfo;
        return [investStepPrivate, investStep, investAmount, investAmountPrivate, acc_invest_amount, invest_count,introduce, subIntroduce, businessType, sales]
    }, [companyInfo])

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


    function changeForm(e) {
        let temp = {};
        temp[e.target.name] = e.target.value;
        setCompanyInfo(v => {
            return {...v, ...temp}
        })
    }

    async function deleteMember(e) {
        await getData.post(`company/delete_team_member`, {tid: e.tid}).then(v=>{
            router.push('/News_add?type=update_company_profile')
        })
    }

    async function updateCompanyInfo() {
        await getData.post(`company/update_company_info`, {...companyInfo, cid: userInfo.cid}).then(v => {
            alert('수정을 완료하였습니다');
            router.push('/News_add?type=company_profile')
        })
    }


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
                <div>기업명 <span>&nbsp;&nbsp;{companyInfo.company}</span></div>
                <div style={{display: 'grid', gridTemplateColumns: '80px 1fr', rowGap: 20}}>
                    <div>기업 한줄소개</div>
                    <textarea value={introduce} name={'introduce'} id="" cols="30" rows="3" onChange={changeForm}
                              style={{resize: 'none', marginLeft: 10, padding: '5px 5px 20px 5px'}}/>
                    <div>기업 상세소개</div>
                    <textarea value={subIntroduce} name={'subIntroduce'} id="" cols="30" rows="3" onChange={changeForm}
                              style={{resize: 'none', marginLeft: 10, padding: '5px 5px 20px 5px'}}/>

                </div>
            </div>
        </div>

        <div style={{padding: 45, border: '1px solid ligthGray'}}>
            <div className={'introduceText'}>
                <div>희망 투자유치단계

                    <span style={{paddingLeft: 10}}><input type="radio" name={'investStepPrivate'} value={1}
                                                           checked={parseInt(investStepPrivate) === 1}
                                                           onChange={changeForm}/> 공개</span>
                    <span style={{paddingLeft: 10}}><input type="radio" name={'investStepPrivate'} value={0}
                                                           checked={parseInt(investStepPrivate) === 0}
                                                           onChange={changeForm}/>투자사에게만 공개</span>
                </div>
                <div style={{paddingTop: 30}}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(v => {
                        return <span style={{paddingRight: 8}}><input type="radio" name={'investStep'} value={v}
                                                                      checked={parseInt(investStep) === v}
                                                                      onChange={changeForm}/>{investStepInfo[v]}</span>
                    })}
                </div>


                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>
                <div style={{paddingTop: 40}}>희망 투자유치금액

                    <span style={{paddingLeft: 10}}><input type="radio" name={'investAmountPrivate'} value={1}
                                                           checked={parseInt(investAmountPrivate) === 1}
                                                           onChange={changeForm}/> 공개</span>
                    <span style={{paddingLeft: 10}}><input type="radio" name={'investAmountPrivate'} value={0}
                                                           checked={parseInt(investAmountPrivate) === 0}
                                                           onChange={changeForm}/>투자사에게만 공개</span>
                </div>
                <div style={{paddingTop: 30}}>
                    {[0, 1, 2, 3, 4, 5, 6].map(v => {
                        return <span style={{paddingRight: 8}}><input type="radio" name={'investAmount'} value={v}
                                                                      checked={parseInt(investAmount) === v}
                                                                      onChange={changeForm}/>{investAccountInfo[v]}</span>
                    })}
                </div>




                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>
                <div style={{paddingTop: 40}}>매출

                    {/*officeInfo*/}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '120px 1fr 120px 1fr',
                        paddingTop: 40,
                        rowGap: 30,
                        columnGap: 60,
                        width: 800
                    }}>

                        <>
                            <div style={{display: 'flex', alignItems: 'center', color: 'gray'}}>매출</div>
                            <input style={{height: 35, border: '1px solid lightGray'}} type="text"
                                   name={'sales'} value={formatPriceDot(parseFloat(sales))} onChange={changeForm}/>

                        </>

                    </div>
                </div>


                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>
                <div style={{paddingTop: 40}}>투자정보

                    {/*officeInfo*/}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '120px 1fr 120px 1fr',
                        paddingTop: 40,
                        rowGap: 30,
                        columnGap: 60,
                        width: 800
                    }}>

                        <>
                            <div style={{display: 'flex', alignItems: 'center', color: 'gray'}}>누적투자금액</div>
                            <input style={{height: 35, border: '1px solid lightGray'}} type="text"
                                   name={'acc_invest_amount'} value={parseFloat(acc_invest_amount)} onChange={changeForm}/>
                            <div style={{display: 'flex', alignItems: 'center', color: 'gray'}}>투자유치횟수</div>
                            <input style={{height: 35, border: '1px solid lightGray'}} type="text" name={'invest_count'}
                                   value={parseFloat(invest_count)} onChange={changeForm}/>

                        </>

                    </div>
                </div>




                {/*+++++++++++++++++++++++++++++++=*/}
                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>
                <div style={{paddingTop: 40}}>비지니스 타입

                    {/*officeInfo*/}
                    <div style={{

                        paddingTop: 20,
                        color : 'gray'
                    }}>

                        <div style={{paddingTop: 20}}>
                            {Object.keys(businessTypeInfo).map(v => {
                                return <span style={{paddingRight: 8}}><input type="radio" name={'businessType'} value={v}
                                                                              checked={parseInt(businessType) === parseInt(v)}
                                                                              onChange={changeForm}/>{businessTypeInfo[v]}</span>
                            })}
                        </div>

                    </div>
                </div>



                <div style={{height: 25, borderBottom: '1px solid black', width: 80}}/>

                <div style={{paddingTop: 40}}>회사정보

                    {/*officeInfo*/}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '120px 1fr 120px 1fr',
                        paddingTop: 40,
                        rowGap: 30,
                        columnGap: 60,
                        width: 800
                    }}>
                        {officeInfo.map(v => {
                            return <>
                                <div style={{display: 'flex', alignItems: 'center', color: 'gray'}}>{v.title}</div>
                                <input value={companyInfo[v.key]} name={v.key} onChange={changeForm} style={{height: 35, border: '1px solid lightGray'}}
                                       type="text"/></>
                        })}
                    </div>
                </div>

            </div>


            <div className={'introduceText'} style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', paddingTop: 50
            }}>

                <div>구성원 정보</div>
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
                    cursor: 'pointer'

                }} onClick={() => dispatch(setModal({type: 'add_member', props: {mode: 'create'}}))}>팀원 추가
                </span>
            </div>


            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gridTemplateRows: '50px',
                borderBottom: '1px solid lightGray',
                paddingTop: 50,
                fontSize: 14
            }}>
                <div style={{display: 'flex', alignItems: 'center'}}>성함</div>
                <div style={{display: 'flex', alignItems: 'center'}}>부서</div>
                <div style={{display: 'flex', alignItems: 'center'}}>직책</div>
                <div style={{display: 'flex', alignItems: 'center'}}>관리</div>

            </div>

            {memberList.map(v => {
                return <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gridTemplateRows: '50px',
                    borderBottom: '1px solid lightGray',
                    fontSize: 14
                }}>
                    <div style={{display: 'flex', alignItems: 'center'}}>{v.name}</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>{v.part}</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>{v.position}</div>
                    <div style={{display: 'flex', alignItems: 'center'}}><span style={{
                        padding: '7px 14px',
                        fontSize: 14,
                        backgroundColor: '#ECF5FF',
                        marginRight: 5,
                        borderRadius: 5,
                        color: '#409EFF',
                        cursor: 'pointer'
                    }} onClick={() => dispatch(setModal({
                        type: 'add_member',
                        props: {mode: 'update', tid: v.tid}
                    }))}>수정</span> <span style={{
                        backgroundColor: '#f56c6c',
                        padding: '7px 14px',
                        color: 'white',
                        fontSize: 14,
                        borderRadius: 5,
                        cursor: 'pointer'
                    }} onClick={()=>deleteMember(v)}>팀원 삭제</span></div>
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
                cursor: 'pointer',
                marginLeft : 10
            }} onClick={updateCompanyInfo}>수정 완료
            </span>

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
            }} onClick={() => router.back()}>이전으로
            </span>
        </div>
    </div>
}