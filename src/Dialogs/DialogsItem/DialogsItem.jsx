import styled from "styled-components";
import style from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";


const DialogsWrapper = styled.div`
    height: auto;
    padding: 0.5em;
    display: grid;
    grid-row-gap: 0.3em;
    overflow: auto;
    max-height: 84vh;
    @media (max-width:450px){
        height: 100%;
        width: auto;
        max-height: 10vh;
        grid-column-gap: 3vw;
        background-color: #424242;
        grid-template-columns: repeat(auto-fit, minmax(50px, 3vw));
        grid-template-rows: 1fr;
        overflow: hidden;
        align-items: center;
    justify-content: center;

    }
`
const TextOfLastMesage = styled.p`
    margin: 0;
    color: black;
    @media (max-width:450px){
     display:none;
    }
`
const NameOfPerson = styled.p`
    margin: 0;
    font-weight: bold;
    color: black;
    @media (max-width:450px){
        display:none;
       }
`
const PhotoPerson = styled.img`
    grid-row: 1/3;
    width: 90%;
    border-radius: 50%;
    height: auto;
    min-width: 40px;
    @media (max-width:450px){
        min-width: 10px;
        border-radius: 1em;
        height: 100%;
        width: 100%;
        justify-self:center;
        margin:0.3em
    }
`
const Cursive = styled.i`
    color: #01135e;
    font-weight: bold;
`
const DialogsItem = (props) => {
    let dialogsDataElement = props.dialogsData.map(dialog => (
        <NavLink to="/messages/1" className={navData => navData.isActive ? style.dialogActive : style.dialog}>
            <PhotoPerson src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZqm2wlBrnMpNt1QF32f0O8oU31uVH5E5MfrQLo1oBXv3nXhWzFePgqeMGeSpYsaQ03o&usqp=CAU" alt="" />
            <NameOfPerson>{dialog.name}</NameOfPerson>
            <TextOfLastMesage><Cursive>Name</Cursive>:Last Message</TextOfLastMesage>
        </NavLink>
    ))
    return (
        <div>
            <DialogsWrapper>
                {dialogsDataElement}
            </DialogsWrapper>
        </div>
    )
}

export default DialogsItem;