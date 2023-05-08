import React from "react";
import styled from "styled-components";


const InputStatus = styled.input`
background-color: #c9c9c9;
outline: none;
border:none;
border-radius: 0.5em;
padding:1%;
`
const SpanStatus = styled.span`
word-wrap: break-word;
`
const SpanWrapper = styled.div`
width:70%;
`
class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
this.setState({
    editMode: true
})
    }
deactivateEditMode = () =>{
    this.setState({
        editMode: false
    })
    this.props.updateStatusThunk(this.state.status)
//this.forceUpdate();

    }

    onStatusChange = (e) => {
       this.setState({
        status: e.currentTarget.value
   
       }) 
    } 

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <SpanWrapper>
                        <SpanStatus onDoubleClick={this.activateEditMode}><b>Status: </b>{this.props.status || 'Without status'}</SpanStatus>
                    </SpanWrapper>
                }
                {this.state.editMode &&
                    <div>
                        <InputStatus onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}  value={this.state.status}></InputStatus>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;