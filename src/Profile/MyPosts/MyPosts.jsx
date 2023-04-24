import styled from "styled-components";
import Post from "./Post/Post";
import React from "react";
import Icon from '@mdi/react';
import { mdiPaperclip } from '@mdi/js';


const PostsWrapper = styled.div`
    padding: 2%;
    background-color: #8f8f8f;
    display: grid;
    justify-content: center;
    grid-row-gap: 0.2em;
    min-width: 500px;
    border-radius: 1em;
    overflow:hidden;
    margin-bottom:1em;
`
const NewPost = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    grid-column-gap: 1%;
    background-color: grey;
    border-radius: 1em;
    width: 98%;
    padding: 0.5em;
    height: 3em;
`

const PostTextArea = styled.textarea`
    border-radius: 1em;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5em;
    font-size: large;
    resize: none;
`
const ButtonAddPost = styled.button`
    border: none;
    cursor: pointer;
    border-radius: 1em;
    transition: 0.5s;
    font-weight: bold;
    width: 100%;
    &:hover{
        background-color: rgb(173, 173, 173);
    }
`
const ButtonAddFile = styled.button`
    background-color: grey;
    border: none;
    cursor: pointer;
    border-radius: 1em;
    transition: 0.5s;
    font-weight: bold;
    width: 70%;
    justify-self:end;
    &:hover{
        background-color: white;
    }
`

const AllPosts = styled.div`
    padding: 1%;
    display: grid;
    grid-row-gap: 0.4em;
    align-items: start;
`
const MyPosts = (props) => {
    let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} like={post.like} />)
    let postValue = React.createRef();
    let onAddPost = () => {
        props.addPost()
    }

    let onChangePostText = () => {
        let text = postValue.current.value;
        props.changeTextPost(text)
    }
    return (
        <PostsWrapper>
            <NewPost>
                <PostTextArea ref={postValue} name="" id="" cols="30" rows="2" onChange={onChangePostText} value={props.newPostText}></PostTextArea>
                <ButtonAddFile><Icon path={mdiPaperclip} size={1} /></ButtonAddFile>
                <ButtonAddPost onClick={onAddPost}>Add</ButtonAddPost>
            </NewPost>
            <AllPosts>
                {postsElements}
            </AllPosts>
        </PostsWrapper>
    )
}

export default MyPosts;