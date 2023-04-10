import React from "react";
import Header from "./Header";
import axios from 'axios';
import { connect } from "react-redux";
import { setUserDataActionCreator } from "../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            debugger;
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                this.props.setUserDataActionCreator(id, email, login)
            }
        })
    }
    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps, { setUserDataActionCreator })(HeaderContainer);