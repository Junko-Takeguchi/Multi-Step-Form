import React from 'react';

interface InputProps {
    type: string;
    label: string;
    placeholder: string;
    value: string;
    setter: React.Dispatch<React.SetStateAction<string>>;
    error?: string; // Optional error prop
}

const Input: React.FC<InputProps> = ({ type, label, placeholder, value, setter, error }) => {
    return (
        <div className="mt-4">
            <label
                className="block mb-2 text-sm font-medium text-gray-900">{label}
            </label>
            <input type={type}
                   className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${error ? 'border-red-500' : ''}`}
                   placeholder={placeholder}
                   required
                   value={value}
                   onChange={(e) => {
                       setter(e.target.value);
                   }}
            />
            {/* Display error message if error is present */}
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default Input;
