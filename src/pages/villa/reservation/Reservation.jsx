import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { BsCalendarPlus, BsPersonSquare, BsPencilSquare } from "react-icons/bs"
import { FaPassport } from "react-icons/fa"
import { MdMyLocation, MdOutlineMailOutline } from "react-icons/md"
import { FiPhoneCall } from "react-icons/fi"
import { SiContactlesspayment } from "react-icons/si"
import { BiMoney } from "react-icons/bi"
import axios from "axios"
import "./reservation.scss"
const Reservation = () => {
  const { state } = useLocation();
  const res = state ? state.reservation : "";
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dateFormat;
  const reservationDate = new Date()
  const dateFormatted = (value) => {
    dateFormat = value.split("-");
    return `${dateFormat[2]} ${months[dateFormat[1] - 1]} ${dateFormat[0]}`
  }
  const [doneRes, setDoneRes] = useState(false)
  const [info, setInfo] = useState({
    name: "",
    passport: "",
    phone: "",
    address: "",
    email: ""
  });
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Name & Surname",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "passport",
      type: "text",
      label: "Passport",
      required: true
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      label: "Phone",
      required: true
    },
    {
      id: 5,
      name: "address",
      type: "text",
      label: "Address",
      required: true
    },
    {
      id: 6,
      name: "note",
      type: "text",
      label: "Note",
      required: false
    }
  ];
  console.log(info)
  const [radioCheck, setRadioCheck] = useState({});
  const handleRadioCheck = (e) => {
    setRadioCheck((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };

  const handleSubmitRes = async (e) => {
    e.preventDefault();
    const validate =
      (info.name !== "" &&
        info.passport !== "" &&
        info.phone !== "" &&
        info.address !== "" &&
        info.email !== "") ? true : false

    if (validate) {
      try {
        const newReservation = {
          name: info.name,
          email: info.email,
          phone: info.phone,
          address: info.address,
          passport: info.passport,
          note: info.note,
          villaId: res.vId,
          checkinDate: res.getInfo.startDR,
          checkoutDate: res.getInfo.endDR,
          payment: radioCheck.payment,
          paymentType: radioCheck.paymentType,
          totalPayment: res.getInfo.totalPrice,
          reservationDate: reservationDate
        };
        await axios.post("/reservations", newReservation)
        setDoneRes(true)
      } catch (err) { console.log(err) }
    }
    else {
      alert("Lütfen boş alanları doldurunuz!")
    }
  }


  return (
    <>
      {res !== "" ?
        !doneRes ?
          <div className='reservationContainer'>
            <div className="rcLeft">
              <div className="rcL_personalInfo">
                <h2>Personal Informations</h2>
                <div>
                  {inputs.map((item) => (
                    <div key={item.id}>
                      <label>{item.label}</label>
                      <input
                        type={item.type}
                        id={item.name}
                        focused={focused.toString()}
                        onBlur={(e) => handleFocus(e)}
                        onChange={handleChange}
                        placeholder={item.label}
                        autoComplete="off"
                        required={item.required}
                        onFocus={() => setFocused(true)}
                      />
                      {
                        <span>You cannot leave this field blank</span>
                      }
                    </div>
                  ))

                  }
                </div>
              </div>
              <div className="rcL_villaInfo">
                <h2>Things to Pay Attention</h2>
                <div>
                  <div>
                    <span>Damage Deposit</span>
                    <span>{res.rules.deposit} ₺</span>
                  </div>
                  <p>
                    The damage deposit is taken as an extra at the entrance to the villa and is returned if there is no damage when leaving the villa.
                  </p>
                </div>
                <div>
                  <div>
                    <span>Extra Cleaning Fee</span>
                    <span>{res.rules.cleaningFee} ₺</span>
                  </div>
                  <p>
                    The cleaning fee at the entrance to the villa is included in the prices. The fee stated here is the extra fee that will be charged if you request extra cleaning or when you extend your stay.
                  </p>
                </div>
                <div>
                  <div>
                    <span>Include in Price</span>
                  </div>
                  <p>
                    Electricity Usage, Water Usage, Internet, Pool and Garden Maintenance, Cylinder Gas, Entrance Cleaning
                  </p>
                </div>
                <div>
                  <div>
                    <span>Checkin Time</span>
                    <span>{res.rules.checkinTime}</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>Checkout Time</span>
                    <span>{res.rules.checkoutTime}</span>
                  </div>
                </div>
              </div>
              <div className="rcL_paymentType">
                <h2>Post-Confirmation Payment Method</h2>
                <div>
                  <div>
                    <h3>Payment by Credit Card</h3>
                    <p>I want to pay for this reservation by Credit Card.</p>
                    <input type="radio" name='paymentType' id='creditcard' value="Payment by Credit Card" onChange={handleRadioCheck} required />
                  </div>
                  <div>
                    <h3>Payment by money order or EFT</h3>
                    <p>I want to pay for this reservation by Wire Transfer or EFT</p>
                    <input type="radio" name='paymentType' id='eft' value="Payment by money order or EFT" onChange={handleRadioCheck} required />
                  </div>
                </div>
              </div>
              <div className="rcL_payment">
                <h2>Total Payment</h2>
                <div>
                  <div>
                    <h3>%30 Deposit ({res.getInfo.totalPrice / 100 * 30} ₺)</h3>
                    <p>I just want to pay deposit.</p>
                    <input type="radio" name='payment' id='deposito' value="%30 Deposit" onChange={handleRadioCheck} />
                  </div>
                  <div>
                    <h3>All ({res.getInfo.totalPrice} ₺)</h3>
                    <p>I want to pay the full fee.</p>
                    <input type="radio" name='payment' id='totalPrice' value="All" onChange={handleRadioCheck} />
                  </div>
                </div>
              </div>

              <button onClick={handleSubmitRes} className="rcL_button">Send Reservation Request</button>

            </div>
            <div className="rcRight">
              <div className='rcr_resInfo'>
                <h2>
                  Check Your Reservation Ticket
                </h2>
                <div className='rcR_img'>
                  <img src={res.vImg[0]} alt="" />
                  <h3>{res.vName}</h3>
                </div>
                <div className='rcR_dates'>
                  <div>
                    <label><BsCalendarPlus />  Checkin Date:</label>
                    <div>{dateFormatted(res.getInfo.startDR)} {res.rules.checkinTime}</div>
                  </div>
                  <div>
                    <label><BsCalendarPlus /> Checkout Date:</label>
                    <div>{dateFormatted(res.getInfo.endDR)} {res.rules.checkoutTime}</div>
                  </div>
                  {
                    info.name &&
                    <div>
                      <label><BsPersonSquare /> Name</label>
                      <div>{info.name}</div>
                    </div>
                  }
                  {
                    info.passport &&
                    <div>
                      <label><FaPassport />Passport</label>
                      <div>{info.passport}</div>
                    </div>
                  }
                  {
                    info.email &&
                    <div>
                      <label><MdOutlineMailOutline />Email</label>
                      <div>{info.email}</div>
                    </div>
                  }
                  {
                    info.phone &&
                    <div>
                      <label><FiPhoneCall />Phone</label>
                      <div>{info.phone}</div>
                    </div>
                  }
                  {
                    info.address &&
                    <div>
                      <label><MdMyLocation />Address</label>
                      <div>{info.address}</div>
                    </div>
                  }

                  {
                    radioCheck.paymentType &&
                    <div>
                      <label><SiContactlesspayment />Payment Type</label>
                      <div>{radioCheck.paymentType}</div>
                    </div>
                  }
                  {
                    radioCheck.payment &&
                    <div>
                      <label><BiMoney />Payment</label>
                      <div>{radioCheck.payment}</div>
                    </div>
                  }
                  {
                    info.note &&
                    <div className='rcR_Note'>
                      <label><BsPencilSquare />Note</label>
                      <div>{info.note}</div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div> :
          <div className='noReservation'>
            Reservation completed! We will back to you as soon as. 
            <div>
              <Link to="/">Home Page</Link>
            </div>
          </div> :
          <div className='noReservation'>
          Please continue by choosing a date. The reservation page cannot be viewed without specifying the check-in and check-out days. Please return to the Homepage.
          <div>
            <Link to="/">Home Page</Link>
          </div>
        </div>
      }
    </>
  )
}

export default Reservation