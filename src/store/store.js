import {configureStore} from '@reduxjs/toolkit'
import {dotReducer} from '../features/dotSlice'

export const Store =  configureStore({
    reducer:dotReducer
})