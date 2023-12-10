import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ResultComponent } from '../Result/resultComponent';
import './FormComponent.css';

export const FormComponent = () => {
    const { t, i18n } = useTranslation();
    const [ tip, setTip ] = useState(0);
    const [ bill, setBill ] = useState(0);
    const [ qtyPpl, setQtyPpl ] = useState(0);
    const [ total, setTotal ] = useState(0);

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);

    useEffect(() => {
        ///console.log(tip + " " + bill + " " + qtyPpl)

        let newValue = eval(bill * tip / 100);
        console.log(typeof(newValue))
        setTotal(newValue + bill)
        console.log(typeof(total))
    }, [tip, bill, qtyPpl])

    const handleTip = (event) => {
        setTip(event.target.value)
    }

    const handleBill = (event) => {
        setBill(event.target.value)
    }

    const handleQtyPpl = (event) => {
        setQtyPpl(event.target.value)
    }

    return (
        <div className="body" >
            <form>
                <div>
                    <label htmlFor="bill">
                        <span>{t('home.label1')}</span>
                        <input type="text" name="bill" id="amount" placeholder='0.00' onChange={handleBill}/>
                    </label>

                </div>
                <div className='buttons'>
                    <label htmlFor="tip">
                        <span>{t('home.label2')}</span>
                        <button type="button" value="5" onClick={() => setTip(5)}>5%</button>
                        <button type="button" value="10" onClick={() => setTip(10)}>10%</button>
                        <button type="button" value="15" onClick={() => setTip(15)}>15%</button>
                        <button type="button" value="25" onClick={() => setTip(25)}>25%</button>
                        <button type="button" value="50" onClick={() => setTip(50)}>50%</button>
                        <input type="text" name="custom" id="custom" placeholder={t('home.custom')} onChange={handleTip} />
                    </label>
                </div>
                <div>
                    <label htmlFor="pplQty">
                        <span>{t('home.label3')}</span>
                        <input type="text" name="pplQty" id="pplQty" placeholder='0' onChange={handleQtyPpl}/>
                    </label>
                </div>
            </form>

            <ResultComponent />
        </div>
    );
}