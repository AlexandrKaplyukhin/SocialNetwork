import styled from "styled-components";
import Post from "./Post/Post";
import React from "react";
import Icon from "@mdi/react";
import { mdiPaperclip } from "@mdi/js";
import { Field,reduxForm } from "redux-form";
import style from './MyPost.module.css'
import { maxLegthCreator, requiredField } from "../../utils/validators/validators";
import { Textarea } from "../../assets/FormControl/FormsControl";

const PostsWrapper = styled.div`
  padding: 2%;
  background-color: #8f8f8f;
  display: grid;
  justify-content: center;
  grid-row-gap: 0.2em;
  min-width: 500px;
  border-radius: 1em;
  overflow: hidden;
  margin-bottom: 1em;
  @media (max-width: 450px) {
    min-width: 200px;
    padding: 0;
    border-radius: 0;
    margin: 0;
  }
`;
const NewPost = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;
  grid-column-gap: 1%;
  background-color: grey;
  border-radius: 1em;
  width: 98%;
  padding: 0.5em;
  height: 3em;
  @media (max-width: 450px) {
    border-radius: 0;
    width: 100vw;
    grid-column-gap: 1%;
    padding: 0.5em 0;
    height: auto;
    overflow: hidden;
align-items: center;
  }
`;

const ButtonAddFile = styled.button`
  background-color: grey;
  border: none;
  cursor: pointer;
  border-radius: 1em;
  transition: 0.5s;
  font-weight: bold;
  width: 70%;
  justify-self: end;
  &:hover {
    background-color: white;
  }
  @media (max-width: 450px) {
    height: 70%;
    justify-self: center;

  }
`;



const AllPosts = styled.div`
  padding: 1%;
  display: grid;
  grid-row-gap: 0.4em;
  align-items: start;
`;

const MyPosts = (props) => {
  debugger;
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} key={post.id} like={post.like} />
  ));
  let onAddPost = (values) => {
    props.addPost(values.NewPostValue);
  };
  //let postValue = React.createRef();
  return (
    <PostsWrapper>
        <AddPostFrom onSubmit={onAddPost}/>
      <AllPosts>{postsElements}</AllPosts>
    </PostsWrapper>
  );
};

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
    <NewPost>
      <Field component={Textarea} placeholder="Post message" name="NewPostValue" className={style.postTextArea}
        cols="30"
        rows="2"

      ></Field>
      <ButtonAddFile>
        <Icon path={mdiPaperclip} size={1} />
      </ButtonAddFile>
      <button className={style.buttonAddPost}>Add</button>
    </NewPost>
    </form>
  );
};

const AddPostFrom = reduxForm({
    form: 'AddPostForm'
})(PostForm)

export default MyPosts;
