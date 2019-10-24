import React from 'react'

class Map extends React.Component{

render(){
    return(
        <div className = "text-center" id = "map">
            <h2> 348 East Main St.  Lexington, KY</h2>
            <h3> <a href="tel:+1-859-555-5555">859-555-5555</a></h3>
            <a href="#map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211413042586!2d-84.49473234940936!3d38.04215997961205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1571932395334!5m2!1sen!2sus" width="320" height="320" frameBorder="0" s >
            </iframe></a>
        </div>
    )
}}

export default Map;