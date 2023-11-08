import { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, CogIcon, UserIcon, CheckCircleIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function StepperWithIcon() {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);

    const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
    const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);


    const navigate = useNavigate();
    const handleActiveStep = (value) => {
        setActiveStep(value)
        switch (value) {
            case 0:
                navigate('connect')
                break;
            case 1:
                navigate('select-test')
                break;
            case 2:
                navigate('show-result')
                break;

            default:
                navigate('connect')
                break;
        }
    }

    return (
        <div className="w-96 py-4 px-8">
            <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
            >
                <Step onClick={() => handleActiveStep(0)}>
                    <svg viewBox="0 0 48 48" className={`w-5 h-5 ${activeStep ? 'fill-white' : 'fill-current'}`}>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="invisible_box" data-name="invisible box">
                                <rect width="48" height="48" fill="none" />
                            </g>
                            <g id="horoscope">
                                <g>
                                    <path d="M25.6,25.6,22.2,29,19,25.8l3.4-3.4a2,2,0,0,0-2.8-2.8L16.2,23l-1.3-1.3a1.9,1.9,0,0,0-2.8,0l-3,3a9.8,9.8,0,0,0-3,7,9.1,9.1,0,0,0,1.8,5.6L4.6,40.6a1.9,1.9,0,0,0,0,2.8,1.9,1.9,0,0,0,2.8,0l3.2-3.2a10.1,10.1,0,0,0,5.9,1.9,10.2,10.2,0,0,0,7.1-2.9l3-3a2,2,0,0,0,.6-1.4,1.7,1.7,0,0,0-.6-1.4L25,31.8l3.4-3.4a2,2,0,0,0-2.8-2.8Z" />
                                    <path d="M43.4,4.6a1.9,1.9,0,0,0-2.8,0L37.2,8a10,10,0,0,0-13,.9l-3,3a2,2,0,0,0-.6,1.4,1.7,1.7,0,0,0,.6,1.4L32.9,26.4a1.9,1.9,0,0,0,2.8,0l3-2.9a9.9,9.9,0,0,0,2.9-7.1A10.4,10.4,0,0,0,40,10.9l3.4-3.5A1.9,1.9,0,0,0,43.4,4.6Z" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </Step>
                <Step onClick={() => handleActiveStep(1)}>
                    <CheckCircleIcon className="h-5 w-5" />
                </Step>
                <Step onClick={() => handleActiveStep(2)}>
                    <DocumentTextIcon className="h-5 w-5" />
                </Step>
            </Stepper>
            {/* <div className="mt-16 flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                    Prev
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                    Next
                </Button>
            </div> */}
        </div>
    );
}