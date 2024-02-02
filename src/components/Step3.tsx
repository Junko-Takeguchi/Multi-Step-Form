import React, { useState } from 'react';
import Input from './Input.tsx';
import Button from './Button.tsx';

type paymentType =  {
    nameOnCard: string,
    cardNo: string,
    expiry: string,
    cvv: string,
}
interface propType {
    onNext : (payload: paymentType) => void
}
const Step3: React.FC<propType> = ({onNext}) => {
    const [nameOnCard, setNameOnCard] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({
        nameOnCard: '',
        cardNo: '',
        expiry: '',
        cvv: '',
    });

    const validateInput = () => {
        let isValid = true;
        const newErrors = {
            nameOnCard: '',
            cardNo: '',
            expiry: '',
            cvv: '',
        };

        // Perform validation checks and update error messages
        if (!nameOnCard.trim()) {
            newErrors.nameOnCard = 'Name of Card Holder is required';
            isValid = false;
        }

        if (!cardNo.trim() || !/^\d{16}$/.test(cardNo)) {
            newErrors.cardNo = 'Enter a valid 16-digit card number';
            isValid = false;
        }

        if (!expiry.trim() || !/^\d{2}\/\d{2}$/.test(expiry)) {
            newErrors.expiry = 'Enter a valid expiry date (MM/YY)';
            isValid = false;
        }

        if (!cvv.trim() || !/^\d{3}$/.test(cvv)) {
            newErrors.cvv = 'Enter a valid 3-digit CVV';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleNextButtonClick = () => {
        if (validateInput()) {
            // If validation passes, proceed with the next step
            console.log({
                nameOnCard,
                cardNo,
                expiry,
                cvv,
            })
        } else {
            console.log('Payment details are not valid');
        }
    };

    return (
        <div className="p-4 w-2/3 bg-white flex flex-col">
            <div className="flex flex-col gap-1">
                <span className="text-3xl text-marineBlue font-bold">Payment Details</span>
                <span className="font-semibold text-coolGray">
          Please provide your payment details.
        </span>
            </div>
            <div className="flex flex-col gap-4">
                <div className="grid gap-6 mt-4 md:grid-cols-2">
                    <Input
                        type={'text'}
                        setter={setNameOnCard}
                        value={nameOnCard}
                        label={'Name of Card Holder'}
                        placeholder={'Name of Card Holder'}
                        error={errors.nameOnCard}
                    />
                    <Input
                        type={'text'}
                        setter={setCardNo}
                        value={cardNo}
                        label={'Card Number'}
                        placeholder={'Card Number'}
                        error={errors.cardNo}
                    />
                    <Input
                        type={'text'}
                        setter={setExpiry}
                        value={expiry}
                        label={'Expiry Date (MM/YY)'}
                        placeholder={'MM/YY'}
                        error={errors.expiry}
                    />
                    <Input
                        type={'password'}
                        setter={setCvv}
                        value={cvv}
                        label={'CVV'}
                        placeholder={'CVV'}
                        error={errors.cvv}
                    />
                </div>
            </div>
            <Button onClick={handleNextButtonClick} />
        </div>
    );
};

export default Step3;
