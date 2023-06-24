
import './card.css'
import Inputs from './Inputs'
import Age from './Age'
export default function Card() {
  return (
    <div className="card h-fit  bg-white rounded-l-2xl rounded-tr-2xl flex flex-col p-12 gap-y-8">
        <Inputs/>


     

        <Age/>

    </div>
  )
}
