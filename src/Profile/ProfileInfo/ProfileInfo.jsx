import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (

            <div className={style.profileWrapper}>
                <div className={style.photoProfile}>
                    <img
                        src="https://cdnn21.img.ria.ru/images/07e5/0c/17/1765103954_0:102:2000:1227_600x0_80_0_0_a067a613ba7608a75a1efec0bea86545.jpg"
                        alt=""/>
                </div>
                <div className={style.aboutProfile}>
                    <h2>Ivan Budko</h2>
                    <hr/>
                    <div className={style.otherInformations}>
                        <div className={style.otherInformation}>
                            <p>Friends</p>
                            24
                        </div>
                        <div className={style.otherInformation}>
                            <p>Musics</p>
                            32
                        </div>
                        <div className={style.otherInformation}>
                            <p>Photos</p>
                            56
                        </div>
                        <div className={style.otherInformation}>
                            <p>Likes</p>
                            {234}
                        </div>
                        <div className={style.otherInformation}>
star
                        </div>

                    </div>
                </div>

            </div>

    )
}

export default ProfileInfo;