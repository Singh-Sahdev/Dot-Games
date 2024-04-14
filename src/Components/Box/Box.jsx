/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { useSelector } from "react-redux"

function Box({
    row,
    col,
    style={},
    value
}) {

  // const selectedBox = useSelector(state => state.selectedBox)

  // let class_name = ''
  // if(selectedBox.length){
  //   if(row==selectedBox[0][0] ){
  //     class_name+=`border-${selectedBox[0][2]}-2`
  //   }
  //   if(row==selectedBox[1][0] ){
  //     class_name+=`border-${selectedBox[1][2]}-2`
  //   }
  //   if(col==selectedBox[0][1] ){
  //     class_name+=`border-${selectedBox[0][2]}-2`
  //   }
  //   if(col==selectedBox[1][1] ){
  //     class_name+=` border-${selectedBox[1][2]}-2`
  //   }
  // }

  
  return (
    <div style={style} className={` border-pink-500 flex justify-center items-center w-[3.16rem] h-[3.16rem] text-xl`}> {value} </div>
  )
}

export default Box
// style={{borderTopWidth:'2px'}} 