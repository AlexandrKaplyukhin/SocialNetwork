import React from "react";
import style from "./Dialog.module.css"
import Icon from "@mdi/react";
import {mdiEmailFast, mdiPaperclip} from "@mdi/js";

const Dialog = (props) =>{

    let messagesData = props.messagesData.map(messages => (
        <div className={style.message} id={style.from}>
            <p>{messages.message}</p>
            <p>02/23/23</p>
        </div>
    ))

    const messageValue = React.createRef()

    let sendMessage = () => {
        props.onSendMessage()
    }

    let updateNewTextMessage = () => {
        let text = (messageValue.current.value);
        props.onUpdateNewTextMessage(text)
    }
    return (
        <div className={style.dialog}>
            <div className={style.messages}>
                {messagesData}
            </div>
            <div className={style.newMessage}>
                <div className={style.clip}>
                    <Icon path={mdiPaperclip} size={1}/>
                </div>
                <textarea name="" id="" cols="30" rows="1" 
               ref={messageValue} value={props.newMessageText} onChange={updateNewTextMessage}></textarea>
                <div className={style.sendMessage} onClick={sendMessage}>
                    <Icon path={mdiEmailFast} size={1}/>
                </div>
            </div>
        </div>
    )
}

export default Dialog;