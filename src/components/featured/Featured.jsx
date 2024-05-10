import "./featured.scss";
import { useTranslation } from 'react-i18next';
import useFetch from '../../hooks/useFetch';
const Featured = () => {
    const { t } = useTranslation()
    return (

        <div className="featured">



            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/xphoto/540x405/179387104.webp?k=3c39d24e157347fdd5f7784bca95a09c8c27627b97ac58f70e5965dabc70f2d2&o==" alt="" />
                <div className="featuredTitles">
                    <h2>Calis</h2>
                    <h3> {t('villa')}</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/xphoto/540x405/179387104.webp?k=3c39d24e157347fdd5f7784bca95a09c8c27627b97ac58f70e5965dabc70f2d2&o==" alt="" />
                <div className="featuredTitles">
                    <h2>Calis</h2>
                    <h3> {t('villa')}</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/xphoto/540x405/179387104.webp?k=3c39d24e157347fdd5f7784bca95a09c8c27627b97ac58f70e5965dabc70f2d2&o==" alt="" />
                <div className="featuredTitles">
                    <h2>Calis</h2>
                    <h3> {t('villa')}</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/xphoto/540x405/179387104.webp?k=3c39d24e157347fdd5f7784bca95a09c8c27627b97ac58f70e5965dabc70f2d2&o==" alt="" />
                <div className="featuredTitles">
                    <h2>Calis</h2>
                    <h3> {t('villa')}</h3>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://cf.bstatic.com/xdata/images/xphoto/540x405/179387104.webp?k=3c39d24e157347fdd5f7784bca95a09c8c27627b97ac58f70e5965dabc70f2d2&o==" alt="" />
                <div className="featuredTitles">
                    <h2>Calis</h2>
                    <h3> {t('villa')}</h3>
                </div>
            </div>



        </div>
    )
}

export default Featured