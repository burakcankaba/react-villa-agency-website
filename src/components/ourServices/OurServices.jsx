import { Link } from "react-router-dom"
import "./ourservices.scss"
import { useTranslation } from 'react-i18next';

const OurServices = () => {
    const { t } = useTranslation()
    return (
        <div className="ourservices">
            
            <div className="os_list">
                <div className="os_item">
                    <Link to="/transfer">
                        <img src="http://www.talavillarental.com/DB_INT_Image/8/5/1.jpg" alt="" />
                        <div>
                            <h2>{t('transfer_airport')}</h2>
                             
                        </div>

                    </Link>
                </div>
                <div className="os_item">
                    <Link to="/rentacar">
                        <img src="http://www.talavillarental.com/DB_INT_Image/8/7/rent.jpg" alt="" />
                        <div>
                            <h2>{t('rent_a_car')}</h2>
                             
                        </div>

                    </Link>
                </div>
                <div className="os_item">
                    <Link to="/">
                        <img src="http://www.talavillarental.com/DB_INT_Image/8/8/villa.jpg" alt="" />
                        <div>
                            <h2>{t('rental_villa')}</h2>
                             
                        </div>
                    </Link>
                </div>
                <div className="os_item">
                    <Link to="/hotel">
                        <img src="http://www.talavillarental.com/DB_INT_Image/8/9/Otel 4.jpg" alt="" />
                        <div>
                            <h2>{t('hotel_res')}</h2>
                             
                        </div>

                    </Link>
                </div>
                <div className="os_item">
                    <Link to="/tour">
                        <img src="http://www.talavillarental.com/DB_INT_Image/8/10/daily.jpg" alt="" />
                        <div>
                            <h2>{t('daily_tours')}</h2>
                             
                        </div>

                    </Link>
                </div>
                <div className="os_item">
                    <Link to="/flight">
                        <img src="http://www.talavillarental.com/DB_INT_Image/8/10/daily.jpg" alt="" />
                        <div>
                            <h2>Flight Ticket</h2>
                             
                        </div>

                    </Link>
                </div>
            </div>

        </div>
    )
}

export default OurServices