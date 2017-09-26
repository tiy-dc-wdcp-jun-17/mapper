import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import MapContainer from '../components/MapContainer'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
