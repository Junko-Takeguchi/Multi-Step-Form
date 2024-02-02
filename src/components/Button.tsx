import React from 'react';

interface Interface {
    onClick: () => void
}
const Button:React.FC<Interface> = ({onClick}) => {
    return (
        <div className="mt-auto flex flex-row-reverse">
            <button
                onClick={onClick}
                className="px-4 py-2 rounded-md border right-0 mt-4 bg-purpleishBlue text-white hover:bg-lightGray hover:text-black transition">
                Next
            </button>
        </div>
    );
};

export default Button;