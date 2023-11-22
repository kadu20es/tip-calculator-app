import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './resultComponent.css';

export const ResultComponent = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);


    return (
        <div className='box'>
            <div className="result">
                <div className="data">
                    <p>{t('home.tipAmount')}
                        <br />
                        <span>{t('home.person')}</span>
                    </p>
                </div>
                <div className="dataResult">
                    <p className="value">$4.27</p>
                </div>
                <div className="data">
                    <p>{t('home.total')}
                        <br />
                        <span>{t('home.person')}</span>
                    </p>
                </div>
                <div className="dataResult">
                    <p className="value">$32.79</p>
                </div>
             </div>
             <button className='result-button'>{t('home.reset')}</button>
        </div>

    );
}