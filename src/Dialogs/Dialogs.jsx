import style from "./Dialogs.module.css"
import DialogContainer from "./Dialog/DialogContainer";
import DialogsItemContainer from "./DialogsItem/DialogsItemContainer";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <DialogsItemContainer store={props.store}/>
            <DialogContainer store={props.store} />
        </div>
    )
}

export default Dialogs;