import React, { Component } from 'react'
import Jumbotron_BS from './Jumbotron_BS';


class ListPopulate extends Component {
    render() {
        return (
            this.props.ListItems.map((item, idx) => {
                return (
                    <a key={idx} target={item.target} className="nav-item nav-link" href={item.URL}>{item.name} </a>
                )
            })
        )
    }
}

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id = "NavBar">
                <button className="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <ul className="navbar-nav mx-auto">
                            <ListPopulate ListItems={this.props.NavbarItems} />
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;

