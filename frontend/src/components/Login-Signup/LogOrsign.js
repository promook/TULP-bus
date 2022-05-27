import React, { useState } from "react";
import * as logFunc from "./loginFunctions.js";
import "./logOrsign.css";

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

  const nextPage = () => {
    try {
      console.log("TU API start");
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Application-Key",
        "MTdkNWVlZjZiMjYyNGE5YTE1YjRlMjk3YWFmYjJhMmQzM2U3MDhjMDFmYjdiZWQ1ZTE1YjJkN2NlMGIxZGU0MA=="
      );
      myHeaders.append("Cookie", "ci_session=kgs046h06q63h2g4hfvav4gfkjp7dfgr");

      var raw = JSON.stringify({
        //UserName: "6209700084",
        //PassWord: "1809901024286"
        UserName:userData.username,
        PassWord:userData.password
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

       fetch("https://restapi.tu.ac.th/api/v1/auth/Ad/verify", requestOptions)
        .then((response) => response.json())
        .then((result) =>
        {
          console.log(userData);
          if (result.status)
            history.push("/routes");
          else
            alert("ไม่มีข้อมูล")
        })
      
    } catch (error) { }
  };

  const submitData = async (e) => {
    e.preventDefault();
    // console.log(userData)

   await nextPage();

   await logFunc
      .logUserIn(userData)
      .then((response) => response.data)
      .then((data) => {
        let { token } = data;
        console.log(token);
        sessionStorage.setItem("authToken", token);
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
                        type="text"
                        name="name"
                        required
                        onChange={(e) => handleChangeEvent(e, "username")}
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
