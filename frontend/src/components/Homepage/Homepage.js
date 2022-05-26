import React from "react";
import "./homepage.css";
export default function Homepage({ history }) {
  const enterSite = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <div className="container maint-cnt">
      <div className="header-nav">
        <span className="mytext1"> TU BUS </span>
      </div>

      <div className="container">
        <div className="slogan">
          <h1>
            {/* <span>ปลอดภัยทุกการเดินทาง</span>
            <div className="message">
              <div className="word1">ยินดีต้อนรับ</div>
              <div className="word2">เข้าสู่</div>
              <div className="word3">TU BUS</div>
            </div> */}
          </h1>
        </div>

        <a href="/#" onClick={(e) => enterSite(e)} className="mainBtn">
          <svg width="277" height="62">
            <defs>
              <linearGradient id="grad1">
                <stop offset="0%" stopColor=" #e10925" />
                <stop offset="100%" stopColor="#fff204" />
              </linearGradient>
            </defs>
            <rect
              x="5"
              y="5"
              rx="25"
              fill="none"
              stroke="url(#grad1)"
              width="266"
              height="50"
            ></rect>
          </svg>
          <span>เข้าสู่ระบบ</span>
        </a>
      </div>
    </div>
  );
}
