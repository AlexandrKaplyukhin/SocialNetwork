import React from "react";
import Dialog from "./Dialog";
import { sendMessageActionCreator, updateNewTextMessageActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
return {
    messagesData: state.dialogPage.messagesData,
    newMessageText: state.dialogPage.newMessageText
}
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        onUpdateNewTextMessage: (text) => {
            let action = updateNewTextMessageActionCreator(text)
            dispatch(action)
        }
        
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog) 


export default DialogContainer;