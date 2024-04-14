import { useSelector } from 'react-redux'

function ScoreCard() {

    const scoreCard = useSelector(state => state.scoreCard)

  return (
    <div className={`absolute flex justify-between items-center top-1/2 -translate-y-1/2 w-screen z-0 `}>
        <div className='flex flex-col justify-around items-center p-8 ml-10 rounded-3xl bg-gray-300'>
            <h1 className=' text-xl'>Player 1 Score</h1>
            <h1 className='  text-3xl font-bold pt-6'>{scoreCard[0]}</h1>
        </div>
        <div className='flex flex-col justify-around items-center p-8 mr-10 rounded-3xl bg-gray-300'>
            <h1 className=' text-xl'>Player 2 Score</h1>
            <h1 className=' text-3xl font-bold pt-6'>{scoreCard[1]}</h1>
        </div>
    </div>
  )
}

export default ScoreCard