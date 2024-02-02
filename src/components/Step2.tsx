import React, {useState} from 'react';
import Input from "./Input.tsx";
import Button from "./Button.tsx";

type address = {
    address: string,
    pincode: string,
    city: string,
    state: string,
    addressType:string
};
interface Interface {
    onNext: (payload:address) => void
}
const Step2: React.FC<Interface> = ({onNext}) => {

    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [addressType, setAddressType] = useState("");

    const indianStates = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttarakhand",
        "Uttar Pradesh",
        "West Bengal",
        "Andaman and Nicobar Islands",
        "Chandigarh",
        "Dadra and Nagar Haveli",
        "Daman and Diu",
        "Delhi",
        "Lakshadweep",
        "Puducherry"
    ];

    return (
        <div className="p-4 w-2/3 bg-white flex flex-col">
            <div className="flex flex-col gap-1">
                <span className="text-3xl text-marineBlue font-bold">Address Details</span>
                <span className="font-semibold text-coolGray">
                        Please provide your address details.
                    </span>
            </div>
            <div className="my-5">
                <label htmlFor="address"
                       className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                <textarea id="address"
                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Address"
                          value={address}
                          onChange={(e) => {
                              setAddress(e.target.value);
                          }}
                ></textarea>
            </div>
            <div className="grid gap-6 mb-4 md:grid-cols-2">
                <div>
                    <Input type={"text"} placeholder={""} value={pincode} label={"Pincode"} setter={setPincode}/>
                </div>
                <div>
                    <Input type={"text"} setter={setCity} label={"City/District/Town"} value={city} placeholder={"City/District/Town"}/>
                </div>
                <div>
                    <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900">Select a State</label>
                    <select
                        id="state"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => setState(e.target.value)} // Add onChange event handler
                    >
                        <option selected disabled>Choose a State</option>
                        {indianStates.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <div className="flex mt-8 items-center mb-4">
                        <input
                            id="home-radio"
                            type="radio"
                            value="Home"
                            name="address-type"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                            onClick={() => setAddressType("Home")}
                        />
                        <label htmlFor="home-radio" className="ms-2 text-sm font-medium text-gray-900 mr-4">Home</label>
                        <input
                            id="work-radio"
                            type="radio"
                            value="Work"
                            name="address-type"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                            onClick={() => setAddressType("Work")}
                        />
                        <label htmlFor="work-radio" className="ms-2 text-sm font-medium text-gray-900">Work</label>
                    </div>
                </div>
            </div>
            <Button onClick={() => {
                onNext({
                    address,
                    city,state,pincode,addressType,
                });
            }}/>
        </div>
    );
};

export default Step2;