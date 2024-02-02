import React from 'react';
import Input from "./Input.tsx";

interface propTypes {
    setName:React.Dispatch<React.SetStateAction<string>>,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPhoneNo: React.Dispatch<React.SetStateAction<string>>,
    name:string,
    email:string,
    phoneNo:string,
    onClick: () => void
}
const Step1:React.FC<propTypes> = ({ onClick, name, email, setEmail, setName, setPhoneNo, phoneNo }) => {
    return (
        <div className="p-4 w-2/3 bg-white flex flex-col">
            <div className="flex flex-col gap-1">
                <span className="text-3xl text-marineBlue font-bold">Personal Info</span>
                <span className="font-semibold text-coolGray">
                        Please provide your name, email address, and phone number.
                    </span>
            </div>
            <div className="flex flex-col gap-4">
                <Input type={"text"} setter={setName} value={name} label={"Name"} placeholder={"John Doe"}/>
                <Input type={"email"} setter={setEmail} value={email} label={"Email"} placeholder={"xyz@mail.com"}/>
                <Input type={"tel"} setter={setPhoneNo} value={phoneNo} label={"Phone"} placeholder={"+91XXXXXXXXXX"}/>
            </div>
            <div className="mt-auto flex flex-row-reverse">
                <button
                    onClick={onClick}
                    className="px-4 py-2 rounded-md border right-0 mt-4 bg-purpleishBlue text-white hover:bg-lightGray hover:text-black transition">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Step1;