import React from "react";
import "./style.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          {/* </div>
        <div className="row"> */}
          <div className="col-sm-6 d-flex flex-column">
            <label>Phone: 0406 253 030</label>
            <label>Email: tmhaigh@gmail.com</label>
            <label>Location: Melbourne, Victoria, Australia</label>
          </div>
          <div className="col-sm-6 d-flex justify-content-sm-end align-items-sm-center">
            <a className="links-div-anchor" href="https://www.linkedin.com/in/thomas-haigh-5960b81aa/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin font-awesome social-icon"></i>
            </a>
            <a className="links-div-anchor" href="https://github.com/Conanas" target="_blank" rel="noreferrer">
              <i className="fab fa-github font-awesome social-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer >
  )

}

export default Footer