import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App1.jsx'

import {configureStore} from "@reduxjs/toolkit"
import { Provider } from 'react-redux'
import userReducer from './userReducer.jsx'



const store = configureStore({
  reducer:{
    users:userReducer

  }

})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>,
)
