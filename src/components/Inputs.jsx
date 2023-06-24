import { useRecoilState, useSetRecoilState } from "recoil";
import DownArrow from '../assets/assets/images/icon-arrow.svg'

import { dayState , monthState  , yearState  } from "../state/atoms/inputStateAtom";
import { calculatedDayState, calculatedMonthState,calculatedYearState } from "../state/atoms/calculatedAgeAtom";

export default function Inputs() {

    const[day,setDay] = useRecoilState(dayState)
    const [month,setMonth] = useRecoilState(monthState)
    const [year, setYear] = useRecoilState(yearState);
    const setCalculatedDay = useSetRecoilState(calculatedDayState);
    const setCalculatedMonth = useSetRecoilState(calculatedMonthState);
    const setCalculatedYear = useSetRecoilState(calculatedYearState)

    const getMaxDaysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
      };

    function submitValues(){

        console.log('day: ', day, ' month: ', month, ' year: ',year);

        if(year > (new Date().getFullYear())){
            console.log('Invalid Year')
            return;

        }
        if(month > 12 || month < 1 ){
            console.log('invalid month')
            return;
        }
        if(day > getMaxDaysInMonth(year, month) || day < 1){
            console.log('invalid day');
            return;
        }

        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();

        let years = new Date().getFullYear() - year ;
        let months = currentMonth - month;
        let days = currentDay - day;
        

        if (months < 0 || (months === 0 && days < 0)) {
            years = years - 1;
            months += 12;
          }

          const today = new Date();
          if (days < 0) {
            const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            months--;
            days += prevMonthLastDay;
          }

        setCalculatedYear(years)
        setCalculatedMonth( months)
        setCalculatedDay(days)

        

        




        // const currentMonth = month;
        // const maxDays = getMaxDaysInMonth(currentYear, currentMonth);
        
    }
    const currentYear = new Date().getFullYear();

  
    // console.log(maxDays);

  return (
    <>
    <div className="inputs flex w-full gap-x-8">
    <label htmlFor="">
    DAY
    <input type="number" placeholder='DD' max={31} min={1} onChange={(e)=>{
        setDay(parseInt(e.target.value))

    }} />

    </label>
    <label htmlFor="">
    MONTH

    <input type="number" placeholder='MM' max={12} min={1} onChange={(e)=>{
        setMonth(parseInt(e.target.value))
    }}/>
    </label>

    <label htmlFor="">
        YEAR

    <input type="number" placeholder='YYYY' min={1} max={currentYear} onChange={(e) => {
        setYear(parseInt(e.target.value))
    }}/>
    </label>

</div>
    <div className="line flex items-center">
            <div className='w-full border-t-0 border-l-0 border-r-0 border-b-2 border-b-gray-400 opacity-30'>

            </div>
            <img src={DownArrow} alt="down" className='bg-violet-500 p-7 rounded-full cursor-pointer hover:bg-black  ease-linear  duration-700' onClick={submitValues}/>

        </div>
</>
  )
}
