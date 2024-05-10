import "./_navbar.scss";
import { faDollarSign, faEuroSign, faSterlingSign, faTurkishLiraSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import ListYourHome from "../../listing/ListYourHome";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import QuickSearch from "../../quickSearch/QuickSearch";
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'en',
  },
  {
    code: 'tr',
    name: 'Türkçe',
    country_code: 'tr',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'ar',
  }
];
const Navbar = () => {
  const [openListing, setOpenListing] = useState(false);
  const [openPL, setOpenPL] = useState(false);

  
  const handleLSelection = (language) => {
    i18next.changeLanguage(language);
    setOpenPL(false);

  }
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)

  const { t } = useTranslation()
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.documentElement.lang = currentLanguageCode || 'en'
    document.title = t('app_title')
  }, [currentLanguage, t])
  return (
    <div className="navbar" dir={currentLanguage.dir}>
      <div className="navContainer">
        <Link to="/"><img className="navLogo" src="/Logos/1.png" alt="" /></Link>

        <div className="navItems">
          <div className="navSearchBarWrap">
            <QuickSearch/>
          </div>
          <button className="navButton" onClick={() => setOpenListing(!openListing)}>{t('add_your_home')}</button>
          <div className="navPLContainer">
            <button className="navPL" onClick={() => setOpenPL(!openPL)}>
              <img src={`/flag/${currentLanguageCode}.png`} alt=""/>
              <label className="currLang">{currentLanguageCode}</label>
            </button>
            {openPL &&


              <div className="navPLSelect">
                <label>{t('select_your_language')}</label>
                <ul>
                  {
                    languages.map(({ code, name, country_code }) => (
                      <li key={country_code}>
                        <button onClick={() => handleLSelection(code)}>
                          <img src={`/flag/${country_code}.png`} alt="" />
                          <label>{name}</label>
                        </button>
                      </li>
                    ))
                  }


                </ul>
                <label>{t('select_currency')}</label>
                <ul>
                  <li>
                    <button>
                      <FontAwesomeIcon icon={faTurkishLiraSign}></FontAwesomeIcon>
                      <label>Turkish Lira (TL)</label>
                    </button>
                  </li>
                  <li>
                    <button>
                      <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
                      <label>Dollar (USD)</label>
                    </button>
                  </li>
                  <li>
                    <button>
                      <FontAwesomeIcon icon={faEuroSign}></FontAwesomeIcon>
                      <label>Euro (EUR)</label>
                    </button>
                  </li>
                  <li>
                    <button>
                      <FontAwesomeIcon icon={faSterlingSign}></FontAwesomeIcon>
                      <label>Sterlin (STG)</label>
                    </button>
                  </li>
                </ul>
              </div>


            }
          </div>

        </div>
      </div>
      <ListYourHome openListing={openListing} setOpenListing={setOpenListing}></ListYourHome>
    </div>
  )
}


export default Navbar;