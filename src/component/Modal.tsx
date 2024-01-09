import ReactDOM from "react-dom";
import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/templates/hooks/reduxHooks";
import {AddMemberModal, InvestReqModal, IrModal} from "@/component/ModalForm";
import {modalInit} from "@/util/initial";
import {setModal} from "@/store/commonSlice";


export default function Modal() {
    const dispatch = useAppDispatch();
    const modal = useAppSelector((state) => state.common.modal);

    const {type, props} = modal;

    const [contents, setContents] = useState<any>(null);

    useEffect(() => {

        console.log(props, 'type:')
        switch (type) {
            case  'send_invest' :
                setContents(<InvestReqModal type={'send_invest'}/>)
                break;
            case  'send_ir' :
                setContents(<IrModal type={'send_ir'}/>)
                break;
            case  'add_member' :
                setContents(<AddMemberModal type={'add_member'} props={props}/>)
                break;
            default :
                setContents(null)
                break;
        }
    }, [modal]);

    function modalAreaClick(e) {
        if (e.target.className.includes('modal-background')) {
            setContents(null);
            dispatch(setModal(modalInit))
        }
    }

    return ReactDOM.createPortal(
        <>{contents && <div className={'modal-background'} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 60,
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
        } onClick={modalAreaClick}>
            <span className={'modal-canvas'}>
            {contents}
            </span>
        </div>}</>,
        document.body
    );
}

