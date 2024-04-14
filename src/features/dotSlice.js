import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    len:10,
    error:"",
    boxVals:[],
    turn:1,
    scoreCard:[0,0]
}

export const dotSlice=createSlice({
    name:'dot',
    initialState,
    reducers:{
        updateError: (state,action)=>{
            state.error = action.payload
        },
        updateBoxVals:(state,action)=>{
            state.boxVals=action.payload
        },
        updateLen: (state,action)=>{
            state.len = action.payload
        },
        updateTurn:(state,action) =>{
            state.turn = state.turn == 1? 2:1
        },
        updateScoreCard: (state,action)=>{
            state.scoreCard[action.payload-1]+=1
        },
        resetAll: (state,action) =>{
            state.boxVals = initialState.boxVals
            state.error = initialState.error
            state.len = state.len+0
            state.scoreCard = initialState.scoreCard
            state.turn = initialState.turn
        }
    }
})

export const {updateError,updateBoxVals,updateLen,updateTurn,updateScoreCard,resetAll} = dotSlice.actions

export const dotReducer = dotSlice.reducer