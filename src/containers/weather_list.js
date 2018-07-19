import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);

        return(
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" unit="K"/>
                </td>
                <td>
                    <Chart data={pressure} color="green" unit="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="black" unit="%"/>
                </td>
            </tr>
        );
    }

    // Render the weather list component
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// Map redux state to property
function mapStateToProps({weather}){
    return {weather};
}

// Connect weather to weather list
export default connect(mapStateToProps)(WeatherList);