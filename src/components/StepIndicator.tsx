import React from "react";

interface propType {
    count:number;
    text:string;
    hasBg:boolean
}
const StepIndicator: React.FC<propType> = ({ count, text , hasBg}) => {
    return (
        <div className="flex gap-4">
            <div className={hasBg ? `rounded-full px-5 py-2 flex justify-center items-center bg-lightBlue` : `rounded-full px-5 py-2 flex justify-center items-center text-white border`}>
                <span>{count}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-lightGray">STEP {count}</span>
                <span className="text-white font-semibold">{text}</span>
            </div>
        </div>
    );
};

export default StepIndicator;