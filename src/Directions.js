import React from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

const mapStyles = {
    width: "100vw",
    height: "40vh"
};

class GoogleMap extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace:{}
        }
    }

    onMarkerClick = (props, marker, e) => this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
    });

    onClose = props => {
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

render(){
    return(
        <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={{
                lat: 38.042346,
                lng: -84.492603            
                }}
        >
            <Marker position={{lat: 38.042346,  lng: -84.492603 }}
                onClick={this.onMarkerClick}
                name={"Will's Sub-Standard"} />

            <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}>

                <div>
                    <h2> {this.state.selectedPlace.name}

                    </h2>
                </div>
            </InfoWindow>
        </Map>
    )
}}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCzoDBNFx-EuHZlfibFPP8-uMePFe1AKWU'
  })(GoogleMap);