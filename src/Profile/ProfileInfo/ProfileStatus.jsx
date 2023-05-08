import React from "react";

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
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Hello'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}  value={this.state.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;