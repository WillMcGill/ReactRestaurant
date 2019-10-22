import React from 'react';
import { tsPropertySignature } from '@babel/types';

class Card_w_Image_BS extends React.Component {
    constructor(props) {
        super(props);
        this.title = {
            title: this.title,
            description: this.description,
            img: this.img,
            foot: this.foot
        }

    }

    // class ListPopulate extends React.Component{
    //     render(){
    //         return(

    //         )
    //     }
    // }
    render() {
        return (
            <div className="card w-50">
                <img src={this.props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{this.props.foot}</small>
                    </div>
            </div>
                )
            }
}
            
export default Card_w_Image_BS;