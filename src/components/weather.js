import React from "react"

class Weather extends React.Component {
    render() {
        return (
            <div>
            { this.props.city &&
                <div>
                    <div>Местоположение: {this.props.city}, {this.props.country}</div>
                    <div>Температура: {this.props.temp}</div>
                    <div>Восход солнца: {this.props.sunrise}</div>
                    <div>Заход солнца: {this.props.sunset}</div>
                    
                </div>
            } 
            <p> {this.props.error} </p>
            </div>
        );
    }
}

export default Weather;