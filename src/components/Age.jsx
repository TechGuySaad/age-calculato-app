import { useRecoilValue } from "recoil"
import { calculatedYearState, calculatedMonthState, calculatedDayState } from "../state/atoms/calculatedAgeAtom"
export default function Age() {
    const years = useRecoilValue(calculatedYearState)
    const months = useRecoilValue(calculatedMonthState)
    const days = useRecoilValue(calculatedDayState)
  return (
    <div className="age flex flex-col w-full h-fit font-bold text-9xl italic">

    <p><span className='text-violet-500'>{years }</span>years</p>
    <p><span className='text-violet-500'>{months}</span>months</p>
    <p><span className='text-violet-500'>{days}</span>days</p>

</div>
  )
}
