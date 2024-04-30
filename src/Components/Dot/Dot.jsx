/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import {useDispatch,useSelector} from 'react-redux'
import {updateError,updateBoxVals,updateTurn, updateScoreCard} from '../../features/dotSlice'


function Dot({
    pointerEvents,
    row,
    col,
    first,
    setFirst
}) {

  

  const dispatch = useDispatch(); // using dispatch function for setting the value of error in the redux store

  const playerColor = useSelector(state => state.playerColor)
  const boxVals = useSelector(state => state.boxVals)
  const turn = useSelector(state => state.turn)

  let style = {
    margin:17.3,
    borderColor:pointerEvents=='auto'?playerColor[Number(turn-1)]:'transparent',
    pointerEvents
  }


  const handleClick = (e)=>{
    dispatch(updateError('')) // initially no error



    if(!first){ // on first dot click
      setFirst([row,col,e.target])
      
      // first click animation
      e.target.style.backgroundColor = 'rgb(203 213 225)'
      e.target.style.scale='1.25'
      
    }
    else{
      
      let currRow = first[0]
      let currCol = first[1]
      let currDiv = first[2]
      currDiv.style.backgroundColor = 'rgb(156 163 175)'
      currDiv.style.scale='1'

      //edge cases of dot game
      if(currCol == col && currRow == row){  
        dispatch(updateError('dont click on same dot'))
        setFirst(null)
        return
      }
      else if(Math.abs(col-currCol)>1 || Math.abs(row-currRow)>1 || (col!=currCol && row != currRow)){ // second check is for diagonal dots(Invalid Move)
        dispatch(updateError('Clicked dot is far away or Invalid'))
        setFirst(null)
        return
      }

      let selectedBox = []
      if(row==currRow){
        selectedBox.push([row-1,Math.min(currCol,col),'b'])
        selectedBox.push([row,Math.min(currCol,col),'t'])
      }
      else{
        selectedBox.push([Math.min(currRow,row),col-1,'r'])
        selectedBox.push([Math.min(currRow,row),col,'l'])
      }

      if(boxVals[
        selectedBox[0][0]
      ][
        selectedBox[0][1]
      ].sides[
        selectedBox[0][2]
      ]){                                 // Edge case for already done line,
        dispatch(updateError('Line is already Present...'))
        setFirst(null)
        return
      }

      // Updating the BoxVal variable, which will inturn update the particular box

      let boxVal = JSON.parse(JSON.stringify(boxVals));
      boxVal[
        selectedBox[0][0]
      ][
        selectedBox[0][1]
      ].sides[
        selectedBox[0][2]
      ] = true;

      boxVal[
        selectedBox[1][0]
      ][
        selectedBox[1][1]
      ].sides[
        selectedBox[1][2]
      ] = true;

      boxVal[
        selectedBox[1][0]
      ][
        selectedBox[1][1]
      ].totalSides+=1;  

      boxVal[
        selectedBox[0][0]
      ][
        selectedBox[0][1]
      ].totalSides+=1;

      let flag = 0

      if(
        boxVal[
          selectedBox[0][0]
        ][
          selectedBox[0][1]
        ].totalSides == 4
      ){
        boxVal[
          selectedBox[0][0]
        ][
          selectedBox[0][1]
        ].player=turn;
        dispatch(updateScoreCard(turn))
        flag=1
      }

      if(
        boxVal[
          selectedBox[1][0]
        ][
          selectedBox[1][1]
        ].totalSides == 4
      ){
        boxVal[
          selectedBox[1][0]
        ][
          selectedBox[1][1]
        ].player=turn;
        dispatch(updateScoreCard(turn))
        flag=1
      }
      
      if(!flag ){
        dispatch(updateTurn())
      }

      dispatch(updateBoxVals(boxVal))
      
      setFirst(null)
    }
  }

    
  return (
    //Dot div
    <div onClick={handleClick}  style={style} className={`p-[0.45rem] border-[1.5px] hover:scale-125 transition-all bg-gray-400 rounded-full`}>
    </div>
  )
}

export default Dot