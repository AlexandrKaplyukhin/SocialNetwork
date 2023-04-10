import style from "../MyPosts.module.css";

const Post = (props) => {
    return (
        <div className={style.post}>
            <img
                src="https://cdnn21.img.ria.ru/images/07e5/0c/17/1765103954_0:102:2000:1227_600x0_80_0_0_a067a613ba7608a75a1efec0bea86545.jpg"
                alt="" />
            <p>{props.message}</p>
            <p className={style.postTime}>5 minutes ago</p>
        </div>
    )
}

export default Post;