import React from 'react'
import { Routes, Route } from 'react-router-dom'
import IosDevelopment from '../services/IosDevelopment'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import HomePage from './HomePage'
import Navbar from './Navbar'
import OurTeam from './OurTeam'
import Portfolio from './Portfolio'
import AndroidDevelopment from '../services/AndroidDevelopment'
import FlutterDevelopment from '../services/FlutterDevelopment'
import BlockChainDevelopment from '../services/BlockChainDevelopment'
import IotDevelopment from '../services/IotDevelopment'
import ArVrDevelopment from '../services/ArVrDevelopment'
import ReactNativeDevelopment from '../services/ReactNativeDevelopment'
import WebDevelopment from '../services/WebDevelopment'
import Career from './Career'
import Flutter from './Flutter'
import ReactNative from './ReactNative'

const index = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/about-us' element={<AboutUs />} />
        <Route exact path='/ourteam' element={<OurTeam />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/ios-application-development' element={<IosDevelopment />} />
        <Route exact path='/android-application-development' element={<AndroidDevelopment />} />
        <Route exact path='/flutter-application-development' element={<FlutterDevelopment />} />
        <Route exact path='/blockchain-application-development' element={<BlockChainDevelopment />} />
        <Route exact path='/iot-application-development' element={<IotDevelopment />} />
        <Route exact path='/augmented-reality-development' element={<ArVrDevelopment />} />
        <Route exact path='/react-native-application-development' element={<ReactNativeDevelopment />} />
        <Route exact path='/web-app-development' element={<WebDevelopment />} />
        <Route exact path='/career' element={<Career />} />
        <Route exact path='/flutter' element={<Flutter />} />
        <Route exact path='/react-native' element={<ReactNative />} />

      </Routes>
    </>
  )
}

export default index