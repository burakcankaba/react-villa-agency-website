
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import "./footer.scss"
import NewsLetter from './NewsLetter'
import { IoLocation } from 'react-icons/io5'
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
const Footer = () => {
  const { t } = useTranslation()
  return (
    <>
      <NewsLetter />
      <div className='footer'>
        <div className="footerMiddle">
          <ul>
            <li>
              <img className="footerLogo" src="/Logos/1.png" alt="" />
              <div className='footerContact'>
                <a>
                  <AiOutlinePhone />
                  <span>+90 531 082 2745</span>
                </a>
              </div>
              <div className='footerContact'>
                <a>
                  <AiOutlinePhone />
                  <span>+90 252 612 31 32</span>
                </a>
              </div>
              <div className='footerContact'>
                <a>
                  <AiOutlineMail />
                  <span>info@talaturizm.com</span>
                </a>
              </div>
              <div className='footerContact'>
                <a>
                  <IoLocation />
                  <span>Fethiye / Muğla</span>
                </a>
              </div>
              <img className='footerTursab' src="https://www.talavillarental.com/tursab-dds-10470.png" alt="" />

            </li>
            <li>
              <h4>{t('tala_tourism')}</h4>
              <ul>
                <li>{t('aboutus')}</li>
                <li>{t('contactus')}</li>
                <li>{t('wish_complaint')}</li>
                <li>{t('in_the_press')}</li>
                <li>{t('tala_team')}</li>
              </ul>
            </li>
            <li>
              <h4>Popüler Bölgeler</h4>
              <ul>
                <li>Çalış Villaları</li>
                <li>Hisarönü Villaları</li>
                <li>Ovacık Villaları</li>
                <li>Karagözler Villaları</li>
                <li>Göcek Villaları</li>
                <li>Kaş Villaları</li>
                <li>Kalkan Villaları</li>
              </ul>
            </li>
            <li>
              <h4>{t('recently_added_content')}</h4>
              <ul>
                <li>Fethiye'de Balıkçılık</li>
                <li>Rus Turistlerin Fethi</li>
                <li>Termal Tatil'in Keyfi</li>
                <li>Karagözler Villaları</li>
                <li>Göcek Villaları</li>
                <li>Kaş Villaları</li>
                <li>Kalkan Villaları</li>
              </ul>
            </li>
            <li>
              <h4>{t('documents')}</h4>
              <ul>
                
                <li><Link to="/documents?id:0">{t('covid_info')}</Link></li>
                <li><Link to="/documents?id:1">{t('official_holidays')}</Link></li>
                <li><Link to="/documents?id:2">{t('villa_rental_agreement')}</Link></li>
                <li><Link to="/documents?id:3">{t('guest_protection_coverage')}</Link></li>
                <li><Link to="/documents?id:4">{t('security_privacy_policy')}</Link></li>
                <li><Link to="/documents?id:5">{t('cancellation_refund_policy')}</Link></li>
                <li><Link to="/documents?id:6">{t('cookie_policy')}</Link></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='footerBottom'>
          <label>
            {t('trade_mark')}
          </label>
          <div>
            <ul>
              <li><a href="/"><BsInstagram /></a></li>
              <li><a href="/"><BsTwitter /></a></li>
              <li><a href="/"><BsFacebook /></a></li>
              <li><a href="/"><BsLinkedin /></a></li>
              <li><a href="/"><BsYoutube /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer