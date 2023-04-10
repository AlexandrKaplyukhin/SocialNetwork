import style from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    //debugger;
    let dialogsDataElement = props.dialogsData.map(dialog => (
        <NavLink to="/messages/1" className={navData => navData.isActive ? style.dialogActive : style.dialog}>
            <img className={style.photoPerson} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZqm2wlBrnMpNt1QF32f0O8oU31uVH5E5MfrQLo1oBXv3nXhWzFePgqeMGeSpYsaQ03o&usqp=CAU" alt="" />
            <p className={style.namePerson}>{dialog.name}</p>
            <p className={style.textOfLastMessage}><i>Name</i>:Last Message</p>
        </NavLink>
    ))
    return (
        <div className={style.dialogsItem}>
            <div className={style.allDialogs}>
                {dialogsDataElement}
            </div>
        </div>
    )
}

export default DialogsItem;