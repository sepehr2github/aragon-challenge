import React from 'react'
import cogoToast from "cogo-toast";

function ToastManager(type,message,time = 6){

    let child = <div className="mx-2">
                    <span>
                        {
                            message
                        }
                    </span>
                </div>
    switch(type){
        case 'error':
            cogoToast.error(
                child
                , {position: 'top-left', hideAfter: time});
                break;
        case 'success':
            cogoToast.success(
                child
                , {position: 'top-left', hideAfter: time});
                break;
        case 'warn':
            cogoToast.warn(
                child
                , {position: 'top-left', hideAfter: time});
                break;
        default:
            break;
    }   

}

export default ToastManager;