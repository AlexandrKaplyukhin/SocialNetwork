import { connect } from "react-redux";
import DialogsItem from "./DialogsItem"

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData
    }
}
const DialogsItemContainer = connect(mapStateToProps)(DialogsItem)

export default DialogsItemContainer;