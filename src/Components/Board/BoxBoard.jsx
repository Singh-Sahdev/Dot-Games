import { useSelector } from 'react-redux'
import {Box} from '..'

function BoxBoard({
  len
}) {
  const boxVals = useSelector(state => state.boxVals)

  let cols = ''
  for (let i = 0; i < len-(-2+1); i++) {
    cols+='auto '
  }

  return (
    <div 
    style={{gridTemplateColumns:`${cols}`}} 
    className={` bg-black rounded-xl absolute z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid`}>

      {
        boxVals
        .map((boxes,i)=>
            {
            return boxes.map((box,j)=>{
                let style = {
                    borderTopWidth: '0px',
                    borderBottomWidth: '0px',
                    borderLeftWidth: '0px',
                    borderRightWidth: '0px',
                  }
                const sides = box.sides 
                
                for (const key in sides) {
                    
                    if (sides.hasOwnProperty.call(sides, key)) {
                        let k=''
                        if(key=='l'){
                            k='borderLeftWidth'
                        }
                        else if(key=='r'){
                            k='borderRightWidth'
                        }
                        else if(key=='b'){
                            k='borderBottomWidth'
                        }
                        else{
                            k='borderTopWidth'
                        }
                        if(!sides[key]){
                            style[k] = '0px'
                        }
                        else{
                            style[k] = '4px'
                        }
                    }
                }
                let val = ''
                if(box.player !=-1){
                  val=`${box.player}`
                }
                return <Box style={style} key={`${i} ${j}`} row={Math.floor(i/(len-(-2+1)))} col = {i%(len-(-2+1))} value={val} />
            })
            }
        )
      }

    </div>
  )
}

export default BoxBoard