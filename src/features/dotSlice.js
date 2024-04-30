import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    error:"", // save current error as a global variable
    boxVals:[], // save current lines positions and many more info
    turn:1, // save current players turn
    scoreCard:[0,0], // save current score of both players
    playerColor:['blue','red'], // save the colors for both players representation
    over:-1 /* save whether the game is over or not, here 
                -1: Game is ON
                 0: Game Draws
                 1: Won by player 1
                 2: Won by player 2
            */
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
        updateTurn:(state,action) =>{
            state.turn = state.turn == 1? 2:1
        },
        updateScoreCard: (state,action)=>{
            state.scoreCard[action.payload-1] +=1 
        },
        updatePlayerColor: (state,action)=>{
            state.playerColor = action.payload 
        },
        resetAll: (state,action) =>{
            state.boxVals = initialState.boxVals
            state.error = initialState.error
            state.playerColor = initialState.playerColor
            state.scoreCard = initialState.scoreCard
            state.turn = initialState.turn
            state.over = initialState.over
        },
        updateOver: (state,action) => {
            state.over = action.payload
        }
    }
})

export const {updateError,updateBoxVals,updateTurn,updateScoreCard,resetAll,updatePlayerColor,updateOver} = dotSlice.actions

export const dotReducer = dotSlice.reducer