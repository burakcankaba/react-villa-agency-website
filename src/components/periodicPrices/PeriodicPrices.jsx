import "./periodicprices.scss";
const PeriodicPrices = ({ periodicPrices }) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateFormat;
    const dateFormatted = (value) => {
        dateFormat = value.split("-");
        return `${dateFormat[0]} ${months[dateFormat[1] - 1]} ${dateFormat[2]}`
    }
    
    return (
        <div className="periodicPrices">
            {
                periodicPrices && periodicPrices.map((item) => {
                    

                    return (<div key={item._id} className="pPrice">
                        <div className="pPrice_text">
                            <label>{dateFormatted(item.startDate)} - {dateFormatted(item.endDate)}</label>
                            <span>Minimum Kiralama: {item.minStay} Gece</span>
                        </div>
                        <div className="pPrice_value">
                            <label>Haftalık</label>
                            <span>{item.price * 7}₺</span>
                        </div>
                        <div className="pPrice_value">
                            <label>Gecelik</label>
                            <span>{item.price}₺</span>
                        </div>
                    </div>)
                })

            }



        </div>
    )
}

export default PeriodicPrices