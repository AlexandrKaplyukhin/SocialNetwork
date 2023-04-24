import React from "react";
import style from "./Dialog.module.css"
import Icon from "@mdi/react";
import { mdiEmailFast, mdiPaperclip } from "@mdi/js";
import styled from "styled-components";

const DialogWrapper = styled.div`
    background-color: #ababab;
    height: 83vh;
    padding: 1%;
    display: grid;
    grid-template-rows: 11fr minmax(40px,1fr);
    grid-row-gap: 1em;
`

const Messages = styled.div`
background-color: grey;
border-radius: 1em;
display: flex;
flex-wrap: wrap;
align-items: flex-end;
overflow: scroll;
padding: 0.8em 1em;
flex-direction: row;
align-content: end;
`
const DataSendMessage = styled.i`
font-size:80%;
`
const NewMessage = styled.div`
bottom: 0;
display: grid;
grid-template-columns: 1fr 11fr 1fr;
align-items: center;
grid-column-gap: 1em;
padding: 0 0.5em;
`

const MessageValue = styled.p`
word-wrap: break-word;
hyphens: auto;
`
const NewMessageValue = styled.textarea`
border-radius: 0.5em;
outline: none;
padding: 1%;
font-size: large;
min-height: 20px;
resize: none;
`
const Message = styled.div`
background-color: #ffffff;
border-radius: 0.5em;
padding: 1%;
display: grid;
align-items: center;
width: 50%;
margin: 0.2em 0;
height:auto;
overflow: hidden;
word-wrap: break-word;
hyphens: auto;
`

const Button = styled.div`
display: grid;
justify-content: center;
align-items: center;
border-radius: 0.5em;
padding:10% 0;
width: auto;
cursor: pointer;
&:hover{
    transition:0.5s;
    background-color: grey;
}
`
const Dialog = (props) => {

    let messagesData = props.messagesData.map(messages => (
        <Message id={style.from}>
            <MessageValue>{messages.message}</MessageValue>
            <DataSendMessage>02/23/23</DataSendMessage>
        </Message>
    ))

    const messageValue = React.createRef()

    let sendMessage = () => {
        props.onSendMessage()
    }

    let updateNewTextMessage = () => {
        let text = (messageValue.current.value);
        props.onUpdateNewTextMessage(text)
    }
    return (
        <DialogWrapper>
            <Messages>
                {messagesData}
            </Messages>
            <NewMessage>
                <Button className={style.clip}>
                    <Icon path={mdiPaperclip} size={1.1} />
                </Button>
                <NewMessageValue name="" id="" cols="30" rows="1"
                    ref={messageValue} value={props.newMessageText} onChange={updateNewTextMessage}></NewMessageValue>
                <Button className={style.sendMessage} onClick={sendMessage}>
                    <Icon path={mdiEmailFast} size={1.3} />
                </Button>
            </NewMessage>
        </DialogWrapper>
    )
}

export default Dialog;