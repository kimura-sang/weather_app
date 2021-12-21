import * as t from "../types";
import axios from "axios";
import Moment from 'moment';
import * as configuration from "../config";

export const getWeatherStatus = ( city, weatherDate ) => dispatch => {
    let dateOfView = Moment(weatherDate).format("YYYY-MM-DD")
    axios.post(configuration.weatherApiUrl+"key="+configuration.apiKey+"&q="+city+"&dt="+dateOfView)
        .then((res) => {
            dispatch({
                type: t.SET_CLIMATE_STATUS,
                payload: res.data
            }),
            dispatch({
                type: t.SET_ERROR,
                payload: ""
            })
        })
        .catch(err => {
            dispatch({
                type: t.SET_CLIMATE_STATUS,
                payload: ""
            }),
            dispatch({
                type: t.SET_ERROR,
                payload: "can not find it"
            })
        })
}