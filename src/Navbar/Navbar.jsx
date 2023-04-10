import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import Icon from "@mdi/react";
import {
    mdiAccountCircleOutline,
    mdiCogOutline,
    mdiHeadphones,
    mdiMessageOutline,
    mdiNewspaperVariantOutline,
    mdiAccountGroupOutline
} from "@mdi/js";

const Navbar = () => {

    return (
        <div className={style.navbar}>
            <div className={style.linksElements}>
                <NavLink to="/profile"
                    className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                        path={mdiAccountCircleOutline} size={1} />Profile</NavLink>
                <NavLink to="/users"
                    className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                        path={mdiAccountGroupOutline} size={1} />Users</NavLink>
                <NavLink to="/messages" className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                    path={mdiMessageOutline} size={1} />Messages</NavLink>
                <NavLink to="/news"
                    className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                        path={mdiNewspaperVariantOutline} size={1} />News</NavLink>
                <NavLink to="/music"
                    className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                        path={mdiHeadphones} size={1} />Music</NavLink>
                <NavLink to="/setting"
                    className={navData => navData.isActive ? style.linkMenuActive : style.linkMenu}><Icon
                        path={mdiCogOutline} size={1} />Settings</NavLink>
            </div>
            <div className={style.sidebar}>
                <p>Friends</p>
                <div className={style.friendsList}>
                    <div className={style.friend}>
                        <img src="data:image/jpeg;base64,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" alt="" />
                        <p>ALexey</p>
                    </div>
                    <div className={style.friend}>24</div>
                    <div className={style.friend}>2</div>

                </div>
            </div>
        </div>
    )
}

export default Navbar;