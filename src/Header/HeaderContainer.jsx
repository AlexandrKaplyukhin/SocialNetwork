import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuth, logout } from "../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuth()

    }
    render() {
        return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default connect(mapStateToProps, { getAuth, logout })(HeaderContainer);