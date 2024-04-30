import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { Store } from "./store/store"
import App from './App.jsx'
import './index.css'
import { Game, Size, BasicStruct } from './Components/index.js'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <BasicStruct/>,
      children: [
        {
          path:'',
          element:<App/>,
        },
        {
          path:'set',
          element:<Size/>,
        },
        {
          path:'game',
          element:<Game/>
        }
      ] 
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
