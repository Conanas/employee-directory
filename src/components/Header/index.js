import React from "react";
import "./style.css"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Employee Directory</h1>
                    </div>
                    <div className="col-md-6 d-flex justify-content-sm-end align-items-sm-center">
                        <label>A product by Tom Haigh</label>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header