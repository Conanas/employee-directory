import React, { Component } from "react";
import "./style.css"

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Employee Directory</h1>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header