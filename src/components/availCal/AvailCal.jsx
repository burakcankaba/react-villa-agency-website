import Calendar from "./Calendar";
import Drawer from "./Drawer";
const AvailCal = ({pending}) => {
  return (
    <div>
        

    <Calendar pending={pending}></Calendar>
    <Drawer></Drawer>
    </div>
  )
}

export default AvailCal