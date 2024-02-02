import React from 'react';

interface propTypes {
    type:string
    label: string,
    placeholder: string
    value: string
    setter: React.Dispatch<React.SetStateAction<string>>
}
const Input: React.FC<propTypes> = ({ type, label, placeholder, value, setter}) => {
    return (
        <div className="mt-4">
            <label
                className="block mb-2 text-sm font-medium text-gray-900">{label}
            </label>
            <input type={type}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   placeholder={placeholder}
                   required
                   value={value}
                   onChange={(e) => {
                       setter(e.target.value);
                   }}
            />
        </div>
    );
};

export default Input;