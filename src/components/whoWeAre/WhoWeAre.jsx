import "./whoWeAre.scss"
import { useTranslation } from 'react-i18next';
const WhoWeAre = () => {
    const { t } = useTranslation()
    return (
        <div className="whoWeAre">
            <h3>{t('whoweare')}</h3>
            <div className="wwa_Container">
                <div className="wwa_c_left">
                    <p>{t('whoweareDesc')}</p>
                </div>
                <div className="wwa_c_right">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/bnbfOXIHWTk?autoplay=0&showinfo=0&controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre