import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    let postsElements = props.posts.map(post => <Post message={post.message} like={post.like}/>)
    let postValue = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }

    let onChangePostText = () => {
let text = postValue.current.value;
props.changeTextPost(text)
    }
    return (
        <div className={style.posts}>
            <div className={style.newPost}>
                <textarea ref={postValue} name="" id="" cols="30" rows="2" onChange={onChangePostText} value={props.newPostText}></textarea>
                <button onClick={onAddPost}>Add</button>
            </div>
            <div className={style.allPosts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;