import { BsClock } from "react-icons/bs"
import "./villarules.scss"

const VillaRules = ({rules}) => {
  return (
    <div className="villaRules">
        <ul>
            <li>
                <h3>Villa Check-in  &  Check-out Hours</h3>
                <p><span> <span> Check-in : {rules && rules.checkinTime}</span>   <span>Check-out : {rules && rules.checkoutTime}</span></span></p>
            </li>
            <li>
                <h3>Included in Price</h3>
                <p> Electricity, water, cylinder gas, cleaning, pool and garden maintenance expenses are included in the price. No payment will be required for these. </p>
            </li>
            <li>
                <h3>Deposit</h3>
                <p> The deposit fee for this villa is <strong>{rules && rules.deposit} TL</strong>, it is collected when entering the villa. In the controls made while leaving the villa, damage, loss, broken, spilled, etc. If not seen, the money will be refunded.</p>
            </li>
            <li>
                <h3>Cleaning</h3>
                <p> Our villas are thoroughly cleaned after each guest change. For long-term rentals, you can benefit from free cleaning service. A cleaning fee of <strong>{rules && rules.cleaningFee} TL</strong> is charged for reservations below the minimum rental period.</p>
            </li>
        </ul>
    </div>
  )
}

export default VillaRules