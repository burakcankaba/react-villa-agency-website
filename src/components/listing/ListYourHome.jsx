import React from "react"
import "./listyourhome.scss"
import { AiFillCloseSquare, AiOutlineSend, AiOutlineStar } from "react-icons/ai"
import { useState } from "react"
import axios from "axios"
const ListYourHome = ({ setOpenListing, openListing }) => {
  const [info,setInfo] = useState({})
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSave = async (e) => {
    e.preventDefault();
    const validate =
      (info.name !== "" &&
        info.phone !== "" &&
        info.villaLocation !== "" &&
        info.note !== "") ? true : false

    if (validate) {
      try {
        const newListhome = {
         ...info
        };
        await axios.post("/listhomes", newListhome)
      } catch (err) { console.log(err) }
    }
    else {
      alert("Lütfen boş alanları doldurunuz!")
    }
  }
  return (
    <>
      {openListing &&
        <div className="listYourHome">

          <div className="l_modal">
            <div className="close_ly_modal" onClick={() => setOpenListing(false)}>
              <AiFillCloseSquare />
            </div>
            <div className="ly_form">
              <ul>
                <li>
                  <AiOutlineStar />
                  <p>Please enter your information correctly!</p>
                </li>
                <li>
                  <AiOutlineStar />
                  <p>We are working just with villa owners.</p>
                </li>
                <li>
                  <AiOutlineStar />
                  <p>We will get back to you as soon as possible.</p>
                </li>
              </ul>
              <div className="from_ly_wrap">
                <div>
                  <label>Name & Surname:</label>
                  <input type="text" id="name" onChange={handleChange}/>
                </div>
                <div>
                  <label>Phone:</label>
                  <input type="text" id="phone" onChange={handleChange}/>
                </div>
                <div>
                  <label>Villa Location:</label>
                  <input type="text" id="villaLocation" onChange={handleChange}/>
                </div>
                <div className="ly_note">
                  <textarea id="note" onChange={handleChange}/>
                </div>
              </div>
              <div className="button_ly" onClick={handleSave}>
                <AiOutlineSend />
                <button>Send Your Information</button>
              </div>

            </div>

          </div>
        </div>
      }
    </>
  )
}

export default ListYourHome