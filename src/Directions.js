import React from 'react'

class Map extends React.Component{

render(){
    return(
        <div className = "text-center" id = "map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.211413042586!2d-84.49473234940936!3d38.04215997961205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884244e844532c33%3A0xb6919957af36b713!2s348%20E%20Main%20St%2C%20Lexington%2C%20KY%2040507!5e0!3m2!1sen!2sus!4v1571932395334!5m2!1sen!2sus" width="600" height="450" frameBorder="0" s >
            </iframe>
        </div>
    )
    
}

}

export default Map;