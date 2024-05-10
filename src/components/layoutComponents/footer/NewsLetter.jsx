
import "./newsletter.scss"
import { useTranslation } from 'react-i18next';

const NewsLetter = () => {
    const { t } = useTranslation()
  return (
    <div className="newsLetter">
        <div>
            <label>{t('news_letter_text')}</label>
        </div>
        <input type="text" placeholder={t('enter_your_email')} />
        <button>{t('register')}</button>
    </div>  
)
}

export default NewsLetter