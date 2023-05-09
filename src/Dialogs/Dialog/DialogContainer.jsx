import Dialog from "./Dialog";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { Navigate    } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogPage.messagesData,
        newMessageText: state.dialogPage.newMessageText,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (NewMessagevalue) => {
            dispatch(sendMessageActionCreator(NewMessagevalue))
        },
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(Dialog);