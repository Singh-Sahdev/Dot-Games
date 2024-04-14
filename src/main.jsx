import React from 'react'
import ReactDOM from 'react-dom/client'

import {Provider} from 'react-redux'
import { Store } from "./store/store"
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
