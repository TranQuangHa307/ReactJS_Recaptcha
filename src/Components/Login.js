import React, { Component } from 'react';
import searchSVG from '../assets/images/icons/search.svg';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const recaptchaRef = React.createRef() 

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            isRemember : true,
        }
    }

    hanleClick = () => {
        const recaptchaValue = recaptchaRef.current.getValue();
        console.log(recaptchaValue);

        var bodyFormData = new FormData();
        bodyFormData.append('email', this.state.email);
        bodyFormData.append('password', this.state.password);
        bodyFormData.append('isRemember', this.state.isRemember);
        bodyFormData.append('g-recaptcha-response', recaptchaValue);

        axios({
            method: "post",
            url: "/auth/login",
            data: bodyFormData
            // headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
    }

    isChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name] : value
        })
    }

    render() {
        return (
            <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-4">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    <div className="col mx-auto">
                        <div className="card mt-5 mt-lg-0">
                        <div className="card-body">
                            <div className="border p-4 rounded">
                            <div className="text-center">
                                <h3>Sign in</h3>
                                <p>Don't have an account yet? <a href="authentication-signup-with-header-footer.html">Sign up here</a>
                                </p>
                            </div>
                            <div className="d-grid">
                                <a className="btn my-4 shadow-sm btn-white" href="/"> <span className="d-flex justify-content-center align-items-center">
                                    <img className="me-2" src={searchSVG} width={16} alt="" />
                                    <span>Sign in with Google</span>
                                </span>
                                </a> <a href="/#" className="btn btn-facebook"><i className="bx bxl-facebook" />Sign in with Facebook</a>
                            </div>
                            <div className="login-separater text-center mb-4"> <span>OR SIGN IN WITH EMAIL</span>
                                <hr />
                            </div>
                            <div className="form-body">
                                <form className="row g-3">

                                    <div className="col-12">
                                        <label htmlFor="inputEmailAddress" className="form-label">Email Address</label>
                                        <input onChange={(event) => this.isChange(event)} name="email" type="email" className="form-control" id="inputEmailAddress" placeholder="Email Address" />
                                    </div>

                                    <div className="col-12">
                                        <label htmlFor="inputChoosePassword" className="form-label">Enter Password</label>
                                        <div className="input-group" id="show_hide_password">
                                        <input onChange={(event) => this.isChange(event)} name="password" type="password" className="form-control border-end-0" id="inputChoosePassword" defaultValue={12345678} placeholder="Enter Password" /> <a href="/#" className="input-group-text bg-transparent"><i className="bx bx-hide" /></a>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-check form-switch">
                                        <input onChange={(event) => this.isChange(event)} name="isRemember" className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
                                    </div>

                                    {/* ReCaptcha */}
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        className="g-recaptcha"
                                        sitekey="6Lfuu8IbAAAAADjAxI584_YoOYDk8q6Ll6oFq6r9"
                                    />

                                    <div className="col-12">
                                        <div className="d-grid">
                                        <button type="reset" className="btn btn-primary" onClick= {() => this.hanleClick()}><i className="bx bxs-lock-open" />Sign in</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/*end row*/}
                </div>

                
            </div>

        );
    }
}

export default Login;