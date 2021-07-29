import React, { useEffect, useState } from 'react';
import searchSVG from '../assets/images/icons/search.svg';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


function Login() {
 
    const SITE_KEY = "6Lc3P8YbAAAAAD36ljraXQAXBCBOPgBVKU7RAN-t";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(true);
    const [actionName, setActionName] = useState('submit1123');

    // const isChange = (event) => {
    //     const target = event.target;
    //     const name = target.name;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     this.setState({
    //         [name] : value
    //     })
    // }

    const handleOnClick = e => {
        e.preventDefault();
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(token => {
            submitData(token);
          });
        });
      }

      const submitData = token => {
        var bodyFormData = new FormData();
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);
        bodyFormData.append('isRemember', isRemember);
        bodyFormData.append('actionName', actionName);
        bodyFormData.append('g-recaptcha-token', token);

        axios({
            method: "post",
            url: "/auth/login",
            data: bodyFormData
            // headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
      }

    useEffect(() => {
        const loadScriptByURL = (id, url, callback) => {
          const isScriptExist = document.getElementById(id);
       
          if (!isScriptExist) {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            script.id = id;
            script.onload = function () {
              if (callback) callback();
            };
            document.body.appendChild(script);
          }
          if (isScriptExist && callback) callback();
        }
       
        // load the script by passing the URL
        loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`, function () {
          console.log("Script loaded!");
        });
      }, []);
    
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
                            <p>Don't have an account yet? &nbsp;

                                    <NavLink to="/signUp" activeStyle={{fontWeight: "bold",color: "white", backgroundColor: "#a55e5e"}}>
                                        Sign up here
                                    </NavLink>

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
                                    <input onChange={e => setEmail(e.target.value)} name="email" type="email" className="form-control" id="inputEmailAddress" placeholder="Email Address" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="inputChoosePassword" className="form-label">Enter Password</label>
                                    <div className="input-group" id="show_hide_password">
                                    <input onChange={e => setPassword(e.target.value)} name="password" type="password" className="form-control border-end-0" id="inputChoosePassword" defaultValue={12345678} placeholder="Enter Password" /> <a href="/#" className="input-group-text bg-transparent"><i className="bx bx-hide" /></a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-check form-switch">
                                    <input onChange={e => setIsRemember(e.target.value)} name="isRemember" className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" defaultChecked />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                    </div>
                                </div>
                                <div className="col-md-6 text-end">	<a href="authentication-forgot-password.html">Forgot Password ?</a>
                                </div>


                                <div className="col-12">
                                    <div className="d-grid">
                                    <button type="reset" className="btn btn-primary" onClick={handleOnClick}><i className="bx bxs-lock-open" />Sign in</button>
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
    )
}

export default Login;