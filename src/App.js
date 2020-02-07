import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "7d76bd50a205d510a2795aba3501e259";

class App extends React.Component {

	state = {
		temp: '',
		city: '',
		country: '',
		sunrise: '',
		sunset: '',
		error: ""
	}

	gettingWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		
		
		if(city){
			const api_url = await 
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
			const data = await api_url.json();
			console.log(data)
			// let sunset = data.sys.sunset;
			// let date = new Date();
			// date.setTime(sunset);
			// let sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

			// let sunrise = data.sys.sunrise;
			// date.setTime(sunrise);
			// let sunriseDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

			this.setState({
				temp: data.main.temp,
				city: data.name,
				country: data.sys.country,
				// sunrise: sunriseDate,
				// sunset: sunsetDate,
				error: ""
			});
		} else {
			this.setState({
				temp: '',
				city: '',
				country: '',
				// sunrise: sunriseDate,
				// sunset: sunsetDate,
				error: "Введите название города!"
			});
		}
		
	}

	render() {
		return (
			<div>
				<Info />
				<Form weatherFunc = {this.gettingWeather} />
				<Weather 
					temp={this.state.temp}
					city={this.state.city}
					country={this.state.country}
					// sunrise={this.state.sunrise}
					// sunset={this.state.sunset}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default App;