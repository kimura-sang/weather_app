import { useState } from 'react'
import { connect } from "react-redux"
import Tabs from '../components/Tabs';
import Modal from '../components/Modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Home(props) {
  const { climateData, error } = props
  const [dateValue, onChangeDate] = useState(new Date());
  const city_array = ['New York', 'London', 'Berlin', 'Paris', 'Tokyo'];
  let climateStatus = ""
  if (climateData && climateData.forecast && climateData.forecast.forecastday && climateData.forecast.forecastday[0].day){
    console.log(climateData);
    climateStatus = (
      <>
        <p>
          <span className='text-green-900 font-bold text-2xl'>{climateData.location.name}</span> Climate Status:
        </p>
        <img src = {climateData.forecast.forecastday[0].day.condition.icon} /><span className='font-bold text-xl'>{climateData.forecast.forecastday[0].day.condition.text}</span>
        <p className='font-bold text-2xl mt-2'>Temperature</p>
        <ul className='list-disc ml-10'>
          <li><p>Maximum: {climateData.forecast.forecastday[0].day.maxtemp_c}'C</p></li>
          <li><p>Minimum: {climateData.forecast.forecastday[0].day.mintemp_c}'C</p></li>
          <li><p>Average: {climateData.forecast.forecastday[0].day.avgtemp_c}'C</p></li>
        </ul>
        <p className='font-bold text-2xl mt-2'>Wind</p>
        <ul className='list-disc ml-10'>
          <li><p>Maximum: {climateData.forecast.forecastday[0].day.maxwind_kph}km/h</p></li>
          <li><p>Average: {climateData.forecast.forecastday[0].day.avgvis_km}km/h</p></li>
        </ul>
        <p className='font-bold text-2xl mt-2'>Humidity</p>
        <ul className='list-disc ml-10'>
          <li><p>Average: {climateData.forecast.forecastday[0].day.avghumidity}%</p></li>
        </ul>
      </>
    )
  }
  return (
    <div className="container mx-auto mt-10">
      <div className='grid grid-cols-2 gap-1'>
        <div>
          <Tabs cityArray={city_array} weatherDate={dateValue}></Tabs>
          <div className='mt-10'>
            {climateStatus}
          </div>
        </div>
        <div>
          <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t ">
            <Calendar
                onChange={onChangeDate}
                value={dateValue}
            />
          </div>
          <Modal alertMessage={"Woops! It can show you the climate status for the last 7 days!"}></Modal>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
 return { 
   climateData: state.weatherReducer.climateData,
   error: state.weatherReducer.error
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)