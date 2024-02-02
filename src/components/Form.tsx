import { useMemo, useState} from "react";
import StepIndicator from "./StepIndicator.tsx";
import Step1 from "./Step1.tsx";
import Step2 from "./Step2.tsx";
import Step3 from "./Step3.tsx";
import Step4 from "./Step4.tsx";

// type User = {
//     FullName: string;
//     email: string;
//     phoneNo: string;
//     address?: string;
//     pincode?: string;
//     city?: string;
//     state?: string;
//     addressType?: string;
//     nameOnCard?: string;
//     cardNo?: string;
//     expiry?: string;
//     cvv?: string;
// };

const Form = () => {
    const [step, setStep] = useState([true, false, false, false]);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    // const [user, setUser] = useState<User>({
    //     FullName: "",
    //     email: "",
    //     phoneNo: "",
    // });

    // useEffect(() => {
    //     console.log(user);
    // }, [user])
    const validateEmail = (email: string) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string) => {
        // Regular expression for phone validation
        const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        return phoneRegex.test(phone);
    };

    const handleNextButtonClick = () => {
        // Validate email and phone number
        if (!validateEmail(email)) {
            console.log("Invalid email format");
            return;
        }
        if (!validatePhone(phoneNo)) {
            console.log("Invalid phone number format");
            return;
        }

        // Find the next index
        const nextIndex = step.indexOf(true) + 1;

        // Update the step state
        setStep(prevStep => prevStep.map((_, index) => index === nextIndex));

        // Update user state
        // setUser((prevUser) => ({
        //     ...prevUser,
        //     FullName: fullName,
        //     phoneNo: phoneNo,
        //     email: email,
        // }));
    };

    const MainContent = useMemo(() => {
        if (step[0]) {
            return (
                <Step1
                    onClick={handleNextButtonClick}
                    name={fullName}
                    setName={setFullName}
                    phoneNo={phoneNo}
                    setPhoneNo={setPhoneNo}
                    email={email}
                    setEmail={setEmail}
                />
            );
        } else if (step[1]) {
            return (
                <Step2
                    onNext={(payload) => {
                        const nextIndex = step.indexOf(true) + 1;
                        // Update the step state
                        setStep(prevStep => prevStep.map((_, index) => index === nextIndex));
                        console.log(payload)
                        // Update user state with address details
                        // setUser((prevUser) => ({
                        //     ...prevUser,
                        //     address: payload.address,
                        //     pincode: payload.pincode,
                        //     city: payload.city,
                        //     state: payload.state,
                        //     addressType: payload.addressType,
                        // }));
                    }}
                />
            );
        } else if (step[2]) {
            return <Step3 onNext={(payload) => {
                // setUser((prevUser) => ({
                //     ...prevUser,
                //     nameOnCard: payload.nameOnCard,
                //     cardNo: payload.cardNo,
                //     expiry: payload.expiry,
                //     cvv: payload.cvv,
                // }));
                console.log(payload);
                const nextIndex = step.indexOf(true) + 1;

                // Update the step state
                setStep(prevStep => prevStep.map((_, index) => index === nextIndex));
            }}/>;
        } else {
            return <Step4 />;
        }
    }, [email, fullName, handleNextButtonClick, phoneNo, step]);

    return (
        <form className="p-2 flex h-full">
            <div className="w-1/3 py-6 px-10 flex flex-col gap-6 bg-sidebar-pattern rounded-l-lg">
                <StepIndicator count={1} text={"Your Info"} hasBg={step[0]} />
                <StepIndicator count={2} text={"Address"} hasBg={step[1]} />
                <StepIndicator count={3} text={"Payment"} hasBg={step[2]} />
                <StepIndicator count={4} text={"Summary"} hasBg={step[3]} />
            </div>
            {MainContent}
        </form>
    );
};

export default Form;
