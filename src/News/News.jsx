import styled from "styled-components";

const PostWrapper = styled.div`
    background-color: rgb(167, 167, 167);
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 10% 54% 20%;
    grid-column-gap: 3%;
    padding: 0.5em;
    border-radius: 0.5em;
    height: 5vh;
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
const NewsWrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-gap: 2vh;
    padding:2vh;

  background-color: rgb(223, 223, 223);
  
`
const NewsTitle = styled.h1`
    text-align: center;
    @media (max-width:450px){
        text-align: left;

    }
`
const News = (props) => {
    return (
        <NewsWrapper>
            <NewsTitle>News</NewsTitle>
        <PostWrapper>
            <PhotoWrapper
                src="https://cdnn21.img.ria.ru/images/07e5/0c/17/1765103954_0:102:2000:1227_600x0_80_0_0_a067a613ba7608a75a1efec0bea86545.jpg"
                alt="" />
            <PostValue>Hello</PostValue>
            <Time>5 minutes ago</Time>
        </PostWrapper>
        <PostWrapper>
            <PhotoWrapper
                src="https://cdnn21.img.ria.ru/images/07e5/0c/17/1765103954_0:102:2000:1227_600x0_80_0_0_a067a613ba7608a75a1efec0bea86545.jpg"
                alt="" />
            <PostValue>Weather: 21F</PostValue>
            <Time>5 minutes ago</Time>
        </PostWrapper>
        <PostWrapper>
            <PhotoWrapper
                src="https://cdnn21.img.ria.ru/images/07e5/0c/17/1765103954_0:102:2000:1227_600x0_80_0_0_a067a613ba7608a75a1efec0bea86545.jpg"
                alt="" />
            <PostValue>React Readux</PostValue>
            <Time>5 minutes ago</Time>
        </PostWrapper>
        </NewsWrapper>
    )
}

export default News;