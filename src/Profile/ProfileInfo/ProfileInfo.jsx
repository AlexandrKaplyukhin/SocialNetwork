import Preloader from '../../assets/Preloader/Preloader';
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
    return (

        <div className={style.profileWrapper}>
            <div className={style.photoProfile}>
                <img
                    src={props.profile.photos.large}
                    alt="" />
            </div>
            <div className={style.aboutProfile}>
                <h2>Ivan Budko</h2>
                <hr />
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