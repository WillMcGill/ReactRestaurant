import React from 'react';



class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Will McGill</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <ul className="navbar-nav mr-auto">
                            <ListPopulate ListItems={this.props.NavbarItems} />
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
}

class ListPopulate extends React.Component {
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
export default Navbar;

