import React from "react";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import { Input } from "../assets/FormControl/FormsControl";
import { requiredField } from "../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "./Login.module.css";

const LoginWrapper = styled.div`
  background-color: white;
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginFormWrapper = styled.form`
  background-color: #c4c4c4;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 0.3em;
  justify-content: center;
  width: 25vw;
  min-width: 400px;
  height: auto;
  min-height: 200px;
  border-radius: 1em;
  padding: 2em;
   @media (max-width:450px) {
    width: 90%;
    min-width: 150px;
    border-radius: 25% 10%;
    margin:5%;
    }

    @media(orientation: landscape){
      width: 50%;
    min-width: 150px;
    border-radius: 25% 10%;
    margin:5%;
    }
`
const Title = styled.h1`
  text-align: center;
`
const SendForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 40px;
`
const CheckBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-gap: 1em;
  align-items: center;
`

const SendButton = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`
const ErrorField = styled.div`
  color: red;
`
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberme);
  };

  if (props.isAuth) {
    return <Navigate to="/profile" />;
  }
  return (
    <LoginWrapper>
      <LoginReduxForm onSubmit={onSubmit} />
    </LoginWrapper>
  );
};

const LoginForm = (props) => {
  return (
    <LoginFormWrapper onSubmit={props.handleSubmit} action="">
      <Title>Login</Title>
      <div>
        <Field
          validate={[requiredField]}
          type="text"
          name="email"
          placeholder="email..."
          component={Input}
        />
      </div>
      <div>
        <Field
          validate={[requiredField]}
          type="password"
          name="password"
          placeholder="password..."
          component={Input}
        />
      </div>
      <ErrorField>
        {props.error && (
          <ErrorField className={style.formSummaryError}>
            {props.error}
          </ErrorField>
        )}
      </ErrorField>
      <SendForm>
        <CheckBox>
          <Field type={"checkbox"} name="rememberme" className={style.checkBox} component={Input} />{" "}
          remember me
        </CheckBox>
        <SendButton>
          <button className={style.logButton}>Login</button>
        </SendButton>
      </SendForm>
    </LoginFormWrapper>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
