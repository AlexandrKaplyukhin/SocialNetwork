import React from "react";
import style from "./Dialog.module.css"
import Icon from "@mdi/react";
import { mdiEmailFast, mdiPaperclip } from "@mdi/js";
import styled from "styled-components";
import { Navigate } from "react-router-dom";
import { Field, ReduxFormContext, reduxForm } from "redux-form";
import { Textarea } from "../../assets/FormControl/FormsControl";
import { maxLegthCreator, requiredField } from "../../utils/validators/validators";



const DialogWrapper = styled.div`
    background-color: #ababab;
    height: 83vh;
    padding: 1%;
    display: grid;
    grid-template-rows: 11fr minmax(40px,auto);
    grid-row-gap: 1em;
    @media (max-width:450px){
        height: h;
        padding: 0;
        grid-row-gap: 0em;
        height: 76vh;
        position:absolute;
bottom:7vh;
    }
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
@media (max-width:450px){
        height: h;
        padding: 3%;
        border-radius: 0;

    }
`
const DataSendMessage = styled.i`
font-size:80%;
`
const NewMessage = styled.div`
bottom: 0;
display: grid;
grid-template-columns: 11fr 1fr;
align-items: center;
grid-column-gap: 3vh;
padding: 0 0.5em;
height: auto;
@media (max-width:450px){
    padding: 0;
    height: 7vh;

    }
`

const MessageValue = styled.p`
word-wrap: break-word;
hyphens: auto;
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
@media (max-width:450px){
    width: 100%;

    }
`

const Button = styled.div`
display: grid;
justify-content: center; 
align-items: center;
align-self: flex-start;
border-radius: 0.5em;
padding:10% 0;
width: auto;
cursor: pointer;
&:hover{
    transition:0.5s;
    background-color: #616161;
    align-self: center;

}
@media (max-width:450px){
    padding: 0;
    justify-self: center;
align-self:center;
    }
`
const Dialog = (props) => {

    let messagesData = props.messagesData.map(messages => (
        <Message id={style.from}>
            <MessageValue>{messages.message}</MessageValue>
            <DataSendMessage>02/23/23</DataSendMessage>
        </Message>
    ))

    let addNewMessage =(values) => {
        props.onSendMessage(values.NewMessagevalue)
    }
    return (
        <DialogWrapper>
            <Messages>
                {messagesData}
            </Messages>
            <AddMessageForm onSubmit={addNewMessage}/>
        </DialogWrapper>
    )
}

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} action="">
            <NewMessage>
                
                <Field component={Textarea} validate={[requiredField]} className={style.newMessagevalue} name="NewMessagevalue" id="" cols="30" rows="1" placeholder="message"
                    ></Field>
                    <Button>
                <button className={style.sendMessage}>
                    <Icon path={mdiEmailFast} size={1.3} />
                </button>
                </Button>
            </NewMessage>
            </form>
    )
}

const AddMessageForm = reduxForm({
    form: 'dialogAddMessageForm'
})(NewMessageForm)

export default Dialog;