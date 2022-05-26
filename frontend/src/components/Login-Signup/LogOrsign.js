import React, { useState } from "react";
import * as logFunc from "./loginFunctions.js";
import "./logOrsign.css";
import { FaFacebookF, FaTwitterSquare } from "react-icons/fa";
export default function LogOrsign({ history }) {
  let [userData, setUserData] = useState({});

  const getToSignUp = (e) => {
    e.preventDefault();
    history.push("/register");
  };
  const handleChangeEvent = (e, title) => {
    let value = e.target.value;
    setUserData({ ...userData, [title]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    // console.log(userData)
    logFunc
      .logUserIn(userData)
      .then((response) => response.data)
      .then((data) => {
        let { token } = data;
        sessionStorage.setItem("authToken", token);
        history.push("/routes");
      });
  };

  return (
    <div className="container">
      <section className="myform-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="form-area login-form">
                <div className="form-content">
                  <h2>ล็อคอิน</h2>
                  <p>กรุณาเลือกการล็อคอินหรือสมัครสมาชิกใหม่</p>
                  <ul>
                    <li>
                      {/* <a href="/#" className="facebook">
                        <FaFacebookF />
                      </a> */}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      {/* <a href="/#" className="twitter">
                        <FaTwitterSquare />
                      </a> */}
                    </li>
                  </ul>
                </div>
                <div className="form-input">
                  <h2>กรุณาใส่ข้อมูล</h2>
                  <form
                    onSubmit={(e) => {
                      submitData(e);
                    }}
                  >
                    <div class="form-group">
                      <input
                        className="loginInfo"
                        type="email"
                        name="name"
                        required
                        onChange={(e) => handleChangeEvent(e, "email")}
                      />
                      <label>อีเมล</label>
                    </div>
                    <div class="form-group">
                      <input
                        className="loginInfo"
                        type="password"
                        name="password"
                        required
                        onChange={(e) => handleChangeEvent(e, "password")}
                      />
                      <label>รหัสผ่าน</label>
                    </div>
                    <div class="myform-button">
                      <button type="submit" className="myform-btn">
                        เข้าสู่ระบบ
                      </button>
                    </div>
                    <div>
                      <small className="form-text text-muted signup-text">
                        คุณมีบัญชีหรือไม่ ?
                      </small>
                      <span className="signUPtext">
                        <a href="/#" onClick={(e) => getToSignUp(e)}>
                        &nbsp; สมัครสมาชิก
                        </a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
