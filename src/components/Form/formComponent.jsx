import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ResultComponent } from '../Result/resultComponent';
import './FormComponent.css';

export const FormComponent = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);

    return (
        <div className="body" >
            <form>
                <div>
                    <label htmlFor="bill">
                        <span>{t('home.label1')}</span>
                        <input type="text" name="bill" id="amount" placeholder='0.00' />
                    </label>

                </div>
                <div className='buttons'>
                    <label htmlFor="tip">
                        <span>{t('home.label2')}</span>
                        <button type="button" value="5">5%</button>
                        <button type="button" value="10">10%</button>
                        <button type="button" value="15">15%</button>
                        <button type="button" value="25">25%</button>
                        <button type="button" value="50">50%</button>
                        <button type="button" value="custom">{t('home.button')}</button>
                    </label>
                </div>
                <div>
                    <label htmlFor="pplQty">
                        <span>{t('home.label3')}</span>
                        <input type="text" name="pplQty" id="pplQty" placeholder='0.00' />
                    </label>
                </div>
            </form>

            <ResultComponent />
        </div>
    );
}