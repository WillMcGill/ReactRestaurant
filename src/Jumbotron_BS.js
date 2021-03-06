import React from 'react';
import { tsPropertySignature } from '@babel/types';

class Jumbotron_BS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.title,
            description: this.description,
            name: this.name

        }
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid" id = "headImage">
                <div className="container">
                    <h1>{this.props.name}'s</h1>
                    <h1 className="display-3">{this.props.title}</h1>
                    <p className="lead">{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron_BS;