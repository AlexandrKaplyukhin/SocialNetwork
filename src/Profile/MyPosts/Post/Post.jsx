import styled from "styled-components";

const PostWrapper = styled.div`
    background-color: rgb(228, 228, 228);
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 10% 54% 20%;
    grid-column-gap: 3%;
    padding: 0.5em;
    border-radius: 0.5em;
    height: auto;
    min-height: 2em;
    max-width: 50vw;
    @media (max-width:450px) {
        max-width: 100vw;
        }
`

const Time = styled.p`
    text-align: right;
    font-style: italic;
    font-size: 90%;
`

const PhotoWrapper = styled.img`
    width: 80%;
    border-radius: 0.5em;
`

const PostValue = styled.p`
overflow: hidden;
word-wrap: break-word;
`
const Post = (props) => {
    return (
        <PostWrapper>
            <PhotoWrapper
                src="https://cdnn21.img.ria.ru/images/07e5/0c/17/1765103954_0:102:2000:1227_600x0_80_0_0_a067a613ba7608a75a1efec0bea86545.jpg"
                alt="" />
            <PostValue>{props.message}</PostValue>
            <Time>5 minutes ago</Time>
        </PostWrapper>
    )
}

export default Post;