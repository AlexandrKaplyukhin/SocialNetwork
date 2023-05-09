import DialogContainer from "./Dialog/DialogContainer";
import DialogsItemContainer from "./DialogsItem/DialogsItemContainer";
import styled from "styled-components";

const MessageWrapper = styled.div`
background-color: rgb(223, 223, 223);
display: grid;
grid-area: c;
grid-template-columns: 1fr minmax(600px,3.5fr);
grid-template-rows: 100%;
grid-gap: 1em;

@media (max-width:450px) {
    display: grid;
    grid-template-rows: 1fr 10fr;
    grid-template-columns: 1fr;
}
`
const Dialogs = (props) => {
    return (
        <MessageWrapper>
            <DialogsItemContainer store={props.store} />
            <DialogContainer store={props.store} />
        </MessageWrapper>
    )
}

export default Dialogs;