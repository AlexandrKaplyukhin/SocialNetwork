import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import Icon from "@mdi/react";
import { mdiExitToApp } from '@mdi/js';


const Header = () => {
    return (
        <header className={style.header}>
            <div>
                {/*plug*/}
            </div>
            <NavLink to='/profile' className={style.mainName}>Social Network</NavLink>
            <NavLink to=''>
                <div className={style.exitButton}>
                    <div className={style.card}>
                        <div className={style.front}>Exit</div>
                        <div className={style.back}>
                            <Icon path={mdiExitToApp} size={1.5} />
                        </div>
                    </div>
                </div>
            </NavLink>

        </header>
    )
}

export default Header;